#!/usr/bin/env node

import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {basename, resolve} from 'node:path';

const DAY_MS = 86_400_000;
const iso = (date) => date.toISOString().slice(0, 10);
const addDays = (date, days) => new Date(Date.parse(`${date}T00:00:00Z`) + days * DAY_MS);
const round = (value, digits = 2) => Number(value.toFixed(digits));
const number = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
const endDate = process.env.GSC_END_DATE || iso(new Date(Date.now() - 3 * DAY_MS));
const currentStart = iso(addDays(endDate, -6));
const previousEnd = iso(addDays(currentStart, -1));
const previousStart = iso(addDays(previousEnd, -6));
const inputPath = process.env.GSC_WEEKLY_INPUT;
const outputPath = resolve(process.env.GSC_WEEKLY_OUTPUT || `seo/gsc/weekly-${endDate}.json`);

function fail(message) {
  console.error(`[gsc-weekly] ${message}`);
  process.exitCode = 1;
}

function normalize(row) {
  const keys = Array.isArray(row.keys) ? row.keys : [];
  return {
    page: row.page || keys[0] || '',
    clicks: number(row.clicks),
    impressions: number(row.impressions),
    ctr: number(row.ctr),
    position: number(row.position),
    period: row.period === 'previous' ? 'previous' : 'current',
  };
}

function aggregate(rows) {
  const pages = new Map();
  for (const row of rows) {
    if (!row.page) continue;
    const page = pages.get(row.page) || {
      page: row.page,
      current: {clicks: 0, impressions: 0, positionWeighted: 0},
      previous: {clicks: 0, impressions: 0, positionWeighted: 0},
    };
    const bucket = page[row.period];
    bucket.clicks += row.clicks;
    bucket.impressions += row.impressions;
    bucket.positionWeighted += row.position * row.impressions;
    pages.set(row.page, page);
  }
  return [...pages.values()].map((page) => {
    for (const period of ['current', 'previous']) {
      const value = page[period];
      value.ctr = value.impressions ? value.clicks / value.impressions : 0;
      value.position = value.impressions ? value.positionWeighted / value.impressions : 0;
      delete value.positionWeighted;
    }
    return page;
  });
}

function totals(pages, period) {
  const value = pages.reduce((sum, page) => ({
    clicks: sum.clicks + page[period].clicks,
    impressions: sum.impressions + page[period].impressions,
    positionWeighted: sum.positionWeighted + page[period].position * page[period].impressions,
  }), {clicks: 0, impressions: 0, positionWeighted: 0});
  return {
    clicks: value.clicks,
    impressions: value.impressions,
    ctr: value.impressions ? round(value.clicks / value.impressions, 4) : 0,
    position: value.impressions ? round(value.positionWeighted / value.impressions) : 0,
    pagesWithImpressions: pages.filter((page) => page[period].impressions > 0).length,
  };
}

const delta = (current, previous) => ({
  clicks: current.clicks - previous.clicks,
  impressions: current.impressions - previous.impressions,
  ctr: round(current.ctr - previous.ctr, 4),
  position: round(current.position - previous.position),
  pagesWithImpressions: current.pagesWithImpressions - previous.pagesWithImpressions,
});

function sitemapFootprint(payload) {
  const entries = Array.isArray(payload.sitemaps) ? payload.sitemaps : [];
  return {
    sitemapCount: entries.length,
    submittedUrls: entries.reduce((sum, item) => sum + number(item.submittedUrls), 0),
    indexedUrls: entries.reduce((sum, item) => sum + number(item.indexedUrls), 0),
    errors: entries.reduce((sum, item) => sum + number(item.errors), 0),
    sitemaps: entries,
  };
}

function markdown(report) {
  const pct = (value) => `${round(value * 100, 2)}%`;
  const lines = [
    `## Weekly GSC indexing report through ${report.window.current.endDate}`,
    '',
    `Property: \`${report.property}\``,
    '',
    '| Metric | Current | Previous | WoW delta |',
    '|---|---:|---:|---:|',
    `| Pages with impressions | ${report.summary.current.pagesWithImpressions} | ${report.summary.previous.pagesWithImpressions} | ${report.summary.delta.pagesWithImpressions} |`,
    `| Impressions | ${report.summary.current.impressions} | ${report.summary.previous.impressions} | ${report.summary.delta.impressions} |`,
    `| Clicks | ${report.summary.current.clicks} | ${report.summary.previous.clicks} | ${report.summary.delta.clicks} |`,
    `| CTR | ${pct(report.summary.current.ctr)} | ${pct(report.summary.previous.ctr)} | ${pct(report.summary.delta.ctr)} |`,
    `| Avg position | ${report.summary.current.position} | ${report.summary.previous.position} | ${report.summary.delta.position} |`,
    '',
    `Sitemap footprint: ${report.sitemap.submittedUrls} submitted, ${report.sitemap.indexedUrls} indexed, ${report.sitemap.errors} errors across ${report.sitemap.sitemapCount} sitemap records.`,
    '',
    `New pages: ${report.newPages.length}. Dropped pages: ${report.droppedPages.length}.`,
    '',
    '### Top regressors',
    ...report.topRegressors.map((item) => `- ${item.page}: ${item.impressionsDelta} impressions, ${item.clicksDelta} clicks, position ${item.positionDelta >= 0 ? '+' : ''}${item.positionDelta}`),
    '',
    '### Top click earners',
    ...report.topClickEarners.map((item) => `- ${item.page}: ${item.currentClicks} clicks (${item.clicksDelta >= 0 ? '+' : ''}${item.clicksDelta} WoW)`),
  ];
  return `${lines.join('\n')}\n`;
}

if (!inputPath) {
  fail('GSC_WEEKLY_INPUT is required. Supply an authorized page-level export with current/previous period labels.');
} else {
  try {
    const payload = JSON.parse(await readFile(resolve(inputPath), 'utf8'));
    const rawRows = Array.isArray(payload) ? payload : payload.rows;
    if (!Array.isArray(rawRows) || rawRows.length === 0) throw new Error('input must contain a non-empty rows array');
    const rows = rawRows.map(normalize);
    if (!rows.some((row) => row.period === 'current') || !rows.some((row) => row.period === 'previous')) {
      throw new Error('input must include both current and previous period rows');
    }
    const pages = aggregate(rows);
    const current = totals(pages, 'current');
    const previous = totals(pages, 'previous');
    const detail = pages.map((page) => ({
      page: page.page,
      current: page.current,
      previous: page.previous,
      clicksDelta: page.current.clicks - page.previous.clicks,
      impressionsDelta: page.current.impressions - page.previous.impressions,
      positionDelta: round(page.current.position - page.previous.position),
    }));
    const report = {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      property: payload.property || 'sc-domain:outsourcingassistant.com',
      source: {type: 'authorized-gsc-export', file: basename(inputPath)},
      window: {
        current: {startDate: currentStart, endDate},
        previous: {startDate: previousStart, endDate: previousEnd},
        gscLagDays: 3,
      },
      summary: {current, previous, delta: delta(current, previous)},
      sitemap: sitemapFootprint(payload),
      newPages: detail.filter((page) => page.current.impressions > 0 && page.previous.impressions === 0).map((page) => page.page),
      droppedPages: detail.filter((page) => page.previous.impressions > 0 && page.current.impressions === 0).map((page) => page.page),
      topRegressors: detail.filter((page) => page.current.impressions > 0 && page.previous.impressions > 0)
        .sort((a, b) => a.impressionsDelta - b.impressionsDelta || b.positionDelta - a.positionDelta).slice(0, 10),
      topClickEarners: detail.filter((page) => page.current.clicks > 0)
        .sort((a, b) => b.current.clicks - a.current.clicks || b.clicksDelta - a.clicksDelta).slice(0, 10)
        .map((page) => ({page: page.page, currentClicks: page.current.clicks, clicksDelta: page.clicksDelta})),
      pages: detail,
    };
    report.markdown = markdown(report);
    await mkdir(resolve(outputPath, '..'), {recursive: true});
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    console.log(report.markdown);
    console.log(`[gsc-weekly] snapshot: ${outputPath}`);
  } catch (error) {
    fail(`${error.message}; no snapshot was written.`);
  }
}

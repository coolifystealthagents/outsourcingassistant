#!/usr/bin/env node

import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {basename, resolve} from 'node:path';

const DAY_MS = 86_400_000;
const today = new Date().toISOString().slice(0, 10);
const endDate = process.env.GSC_END_DATE || today;
const startDate = process.env.GSC_START_DATE ||
  new Date(Date.parse(`${endDate}T00:00:00Z`) - 89 * DAY_MS).toISOString().slice(0, 10);
const inputPath = process.env.GSC_CONTENT_AUDIT_INPUT;
const outputPath = resolve(process.env.GSC_CONTENT_AUDIT_OUTPUT || `seo/content-audit-${today}.json`);

function fail(message) {
  console.error(`[content-audit] ${message}`);
  process.exitCode = 1;
}

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeRow(row) {
  const keys = Array.isArray(row.keys) ? row.keys : [];
  return {
    page: row.page || keys[0] || '',
    query: row.query || keys[1] || '',
    clicks: number(row.clicks),
    impressions: number(row.impressions),
    ctr: number(row.ctr),
    position: number(row.position),
    period: row.period || 'current',
    backlinks: number(row.backlinks),
    conversions: number(row.conversions),
  };
}

function percentile(values, value) {
  if (!values.length) return 0;
  return values.filter((candidate) => candidate <= value).length / values.length;
}

function round(value, digits = 2) {
  return Number(value.toFixed(digits));
}

function aggregate(rows) {
  const pages = new Map();
  for (const row of rows) {
    if (!row.page.includes('/blog/')) continue;
    const page = pages.get(row.page) || {
      page: row.page,
      current: {clicks: 0, impressions: 0, conversions: 0},
      previous: {clicks: 0, impressions: 0, conversions: 0},
      backlinks: 0,
      queries: new Map(),
    };
    const period = row.period === 'previous' ? 'previous' : 'current';
    page[period].clicks += row.clicks;
    page[period].impressions += row.impressions;
    page[period].conversions += row.conversions;
    page.backlinks = Math.max(page.backlinks, row.backlinks);
    if (period === 'current' && row.query) {
      const query = page.queries.get(row.query) || {clicks: 0, impressions: 0, positionTotal: 0, rows: 0};
      query.clicks += row.clicks;
      query.impressions += row.impressions;
      query.positionTotal += row.position;
      query.rows += 1;
      page.queries.set(row.query, query);
    }
    pages.set(row.page, page);
  }
  return [...pages.values()];
}

function findCannibalization(pages) {
  const queryPages = new Map();
  for (const page of pages) {
    for (const [query, metrics] of page.queries) {
      if (metrics.impressions < 10) continue;
      const entries = queryPages.get(query) || [];
      entries.push({
        page: page.page,
        clicks: metrics.clicks,
        impressions: metrics.impressions,
        position: round(metrics.positionTotal / metrics.rows),
      });
      queryPages.set(query, entries);
    }
  }
  return [...queryPages.entries()]
    .filter(([, entries]) => entries.length > 1)
    .map(([query, entries]) => ({
      query,
      pages: entries.sort((a, b) => b.impressions - a.impressions),
      totalImpressions: entries.reduce((sum, entry) => sum + entry.impressions, 0),
    }))
    .sort((a, b) => b.totalImpressions - a.totalImpressions);
}

function scorePages(pages, cannibalization) {
  const clickValues = pages.map((page) => page.current.clicks);
  const impressionValues = pages.map((page) => page.current.impressions);
  const conversionValues = pages.map((page) => page.current.conversions);
  const cannibalizedUrls = new Set(cannibalization.flatMap((item) => item.pages.map((page) => page.page)));

  return pages.map((page) => {
    const previousClicks = page.previous.clicks;
    const trend = previousClicks
      ? (page.current.clicks - previousClicks) / previousClicks
      : page.current.clicks > 0 ? 1 : 0;
    const trafficValue = 100 * (
      percentile(clickValues, page.current.clicks) * 0.7 +
      percentile(impressionValues, page.current.impressions) * 0.3
    );
    const trendScore = Math.max(0, Math.min(100, 50 + trend * 50));
    const backlinkScore = page.backlinks > 0 ? Math.min(100, 40 + Math.log2(page.backlinks + 1) * 20) : 0;
    const conversionScore = 100 * percentile(conversionValues, page.current.conversions);
    const score = trafficValue * 0.45 + trendScore * 0.25 + backlinkScore * 0.15 + conversionScore * 0.15;
    let category = 'Prune candidates';
    if (cannibalizedUrls.has(page.page)) category = 'Cannibalized';
    else if (score >= 65 && trend >= -0.1) category = 'Top Performers';
    else if (trend <= -0.2 && page.current.impressions >= 10) category = 'Declining';
    return {
      page: page.page,
      score: round(score),
      category,
      signals: {
        clicks: page.current.clicks,
        impressions: page.current.impressions,
        ctr: page.current.impressions ? round(page.current.clicks / page.current.impressions, 4) : 0,
        previousClicks,
        weekOverWeekTrend: round(trend, 4),
        backlinks: page.backlinks,
        conversions: page.current.conversions,
        trafficValue: round(trafficValue),
        trendScore: round(trendScore),
        backlinkScore: round(backlinkScore),
        conversionScore: round(conversionScore),
      },
    };
  }).sort((a, b) => b.score - a.score);
}

function actions(scored, cannibalization) {
  const result = [];
  for (const item of cannibalization.slice(0, 2)) {
    result.push({
      priority: 'high',
      action: 'Consolidate or differentiate cannibalizing pages',
      query: item.query,
      pages: item.pages.map((page) => page.page),
      evidence: `${item.totalImpressions} combined impressions across ${item.pages.length} pages`,
    });
  }
  for (const page of scored.filter((item) => item.category === 'Declining').slice(0, 2)) {
    result.push({
      priority: 'high',
      action: 'Refresh declining article and strengthen internal links',
      page: page.page,
      evidence: `${round(page.signals.weekOverWeekTrend * 100, 1)}% click trend`,
    });
  }
  for (const page of scored.filter((item) => item.category === 'Prune candidates').slice(0, 5)) {
    result.push({
      priority: 'medium',
      action: page.signals.impressions > 0 ? 'Rework intent and title before considering consolidation' : 'Consolidate, redirect, or noindex after editorial review',
      page: page.page,
      evidence: `${page.signals.clicks} clicks, ${page.signals.impressions} impressions, score ${page.score}`,
    });
  }
  for (const page of scored.filter((item) => item.category === 'Top Performers').slice(0, 5)) {
    result.push({
      priority: 'medium',
      action: 'Protect winner and add contextual links to high-value service pages',
      page: page.page,
      evidence: `${page.signals.clicks} clicks, ${page.signals.conversions} conversions, score ${page.score}`,
    });
  }
  return result.slice(0, 5);
}

if (!inputPath) {
  fail('GSC_CONTENT_AUDIT_INPUT is required. Supply an authorized JSON export; no snapshot was written.');
} else {
  try {
    const payload = JSON.parse(await readFile(resolve(inputPath), 'utf8'));
    const rawRows = Array.isArray(payload) ? payload : payload.rows;
    if (!Array.isArray(rawRows) || rawRows.length === 0) {
      throw new Error('input must contain a non-empty rows array');
    }
    const rows = rawRows.map(normalizeRow);
    const pages = aggregate(rows);
    if (pages.length === 0) throw new Error('input contains no /blog/ page rows');
    const cannibalization = findCannibalization(pages);
    const scored = scorePages(pages, cannibalization);
    const report = {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      source: {type: 'authorized-gsc-export', file: basename(inputPath)},
      window: {startDate, endDate, days: 90},
      scoring: {trafficValue: 0.45, trend: 0.25, backlinks: 0.15, conversions: 0.15},
      summary: {
        pagesAudited: scored.length,
        categories: Object.fromEntries(['Top Performers', 'Declining', 'Prune candidates', 'Cannibalized']
          .map((category) => [category, scored.filter((page) => page.category === category).length])),
        cannibalizedQueries: cannibalization.length,
      },
      pages: scored,
      cannibalization,
      topActions: actions(scored, cannibalization),
    };
    await mkdir(resolve(outputPath, '..'), {recursive: true});
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
    console.log(JSON.stringify({output: outputPath, ...report.summary, topActions: report.topActions}, null, 2));
  } catch (error) {
    fail(`${error.message}; no snapshot was written.`);
  }
}

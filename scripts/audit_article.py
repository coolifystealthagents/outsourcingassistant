#!/usr/bin/env python3
import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_article = False
        self.skip = 0
        self.article_text = []
        self.h1 = []
        self.in_h1 = False
        self.p_stack = []
        self.paragraphs = []
        self.counts = {'table': 0, 'svg': 0, 'blockquote': 0, 'banner': 0, 'final_cta': 0}
        self.internal = set()
        self.external = set()
        self.canonical = None
        self.visuals = set()
        self.source_items = 0
        self.in_sources = False
        self.blockquote_depth = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = set((attrs.get('class') or '').split())
        if tag in {'script', 'style', 'noscript'}:
            self.skip += 1
            return
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'article':
            self.in_article = True
        if not self.in_article or self.skip:
            return
        if tag == 'h1':
            self.in_h1 = True
        if tag == 'p':
            exempt = bool(classes & {'eyebrow'}) or self.blockquote_depth > 0
            self.p_stack.append({'text': [], 'exempt': exempt})
        if tag == 'table':
            self.counts['table'] += 1
        if tag == 'svg':
            self.counts['svg'] += 1
        if tag == 'blockquote':
            self.counts['blockquote'] += 1
            self.blockquote_depth += 1
        if 'article-banner' in classes:
            self.counts['banner'] += 1
        if 'final-cta' in classes:
            self.counts['final_cta'] += 1
        if 'numbered-sources' in classes:
            self.in_sources = True
        if tag == 'li' and self.in_sources:
            self.source_items += 1
        if tag == 'figure' and attrs.get('data-visual'):
            self.visuals.add(attrs['data-visual'])
        if tag == 'a' and attrs.get('href'):
            href = attrs.get('href') or ''
            (self.external if href.startswith('http') else self.internal).add(href)

    def handle_endtag(self, tag):
        if tag in {'script', 'style', 'noscript'} and self.skip:
            self.skip -= 1
            return
        if self.skip:
            return
        if tag == 'h1':
            self.in_h1 = False
        if tag == 'p' and self.in_article and self.p_stack:
            item = self.p_stack.pop()
            text = ' '.join(''.join(item['text']).split())
            if text and not item['exempt']:
                self.paragraphs.append(text)
        if tag == 'blockquote' and self.blockquote_depth:
            self.blockquote_depth -= 1
        if tag == 'section' and self.in_sources:
            self.in_sources = False
        if tag == 'article':
            self.in_article = False

    def handle_data(self, data):
        if self.skip or not self.in_article:
            return
        self.article_text.append(data)
        if self.in_h1:
            self.h1.append(data)
        if self.p_stack:
            self.p_stack[-1]['text'].append(data)

def sentence_count(text):
    pieces = re.split(r'(?<=[.!?])["\']?\s+', text.strip())
    return len([piece for piece in pieces if piece.strip()])

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('html')
    parser.add_argument('slug')
    args = parser.parse_args()
    expectations = {
        'secure-onboarding-filipino-virtual-assistant': {
            'h1': 'Secure onboarding for a Filipino virtual assistant',
            'marker': 'OA-SECURE-ONBOARDING-2026',
            'markers': ['193,407', '21,442', '$2,770,151,146', 'Laurie E. Locascio'],
            'visuals': ['access-ladder', 'complaint-chart'],
        },
        'fraud-report-triage-filipino-customer-support-assistant': {
            'h1': 'Fraud report triage for a Filipino customer support assistant',
            'marker': 'OA-FRAUD-TRIAGE-2026',
            'markers': ['$12.5B', '38%', '2.6M', 'Christopher Mufarrige'],
            'visuals': ['fraud-loss-share-chart', 'fraud-report-route'],
        },
    }
    expected = expectations.get(args.slug)
    if not expected:
        raise SystemExit(f'No deterministic expectation configured for {args.slug}')
    path = Path(args.html)
    raw = path.read_text(encoding='utf-8', errors='ignore')
    audit = AuditParser()
    audit.feed(raw)
    visible = ' '.join(' '.join(audit.article_text).split())
    words = re.findall(r"\b[\w$][\w$'./-]*\b", visible)
    bad_paragraphs = [{'sentences': sentence_count(p), 'text': p[:120]} for p in audit.paragraphs if sentence_count(p) not in {2, 3}]
    forbidden_words = re.findall(r'(?i)\b(?:pricing|price|rates?|tiers?)\b', visible)
    forbidden_hrefs = sorted({href for href in audit.internal | audit.external if re.search(r'(?i)/pricing(?:/|$)|[?&](?:price|tier)=', href)})
    title_match = re.search(r'<title>(.*?)</title>', raw, re.S)
    result = {
        'word_count': len(words),
        'h1': ' '.join(''.join(audit.h1).split()),
        'title': re.sub('<.*?>', '', title_match.group(1)).strip() if title_match else None,
        'canonical': audit.canonical,
        'counts': audit.counts,
        'visuals': sorted(audit.visuals),
        'source_items': audit.source_items,
        'internal_links': sorted(audit.internal),
        'external_links': sorted(audit.external),
        'bad_paragraphs': bad_paragraphs,
        'forbidden_words': forbidden_words,
        'forbidden_hrefs': forbidden_hrefs,
        'required_markers': {marker: marker in raw for marker in [expected['marker'], *expected['markers'], 'BlogPosting', 'FAQPage', 'BreadcrumbList']}
    }
    expected_url = f'https://outsourcingassistant.com/blog/{args.slug}'
    failures = []
    if not 1500 <= result['word_count'] <= 2000: failures.append('word_count')
    if result['h1'] != expected['h1']: failures.append('h1')
    if not result['title'] or expected['h1'] not in result['title']: failures.append('title')
    if result['canonical'] != expected_url: failures.append('canonical')
    if result['counts'] != {'table': 1, 'svg': 2, 'blockquote': 1, 'banner': 3, 'final_cta': 0}: failures.append('module_counts')
    if result['visuals'] != sorted(expected['visuals']): failures.append('visual_identity')
    if result['source_items'] < 5: failures.append('numbered_sources')
    if len(result['internal_links']) < 3: failures.append('internal_links')
    if len(result['external_links']) < 4: failures.append('external_links')
    if result['bad_paragraphs']: failures.append('paragraph_sentences')
    if result['forbidden_words'] or result['forbidden_hrefs']: failures.append('forbidden_commercial_copy')
    if not all(result['required_markers'].values()): failures.append('required_markers')
    result['failures'] = failures
    result['status'] = 'PASS' if not failures else 'FAIL'
    print(json.dumps(result, indent=2, sort_keys=True))
    raise SystemExit(0 if not failures else 1)

if __name__ == '__main__':
    main()

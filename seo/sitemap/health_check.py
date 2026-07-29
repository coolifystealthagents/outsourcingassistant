#!/usr/bin/env python3
"""Fail-closed sitemap and Google Search Console health check."""

import argparse
import datetime as dt
import json
import os
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


def fetch(url: str, timeout: int) -> tuple[int, bytes]:
    request = urllib.request.Request(url, headers={"User-Agent": "OutsourcingAssistant-sitemap-health/1.0"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.status, response.read()


def gsc_errors(path: Path, sitemap_url: str) -> int:
    payload = json.loads(path.read_text(encoding="utf-8"))
    sitemaps = payload.get("sitemaps")
    if not isinstance(sitemaps, list):
        raise ValueError("GSC export must contain a sitemaps array")
    matches = [item for item in sitemaps if item.get("path") == sitemap_url]
    if not matches:
        raise ValueError(f"GSC export has no record for {sitemap_url}")
    return sum(int(item.get("errors", item.get("errorsCount", 0))) for item in matches)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sitemap", default="https://outsourcingassistant.com/sitemap.xml")
    parser.add_argument("--gsc-sitemap", default="https://outsourcingassistant.com/sitemap.xml")
    parser.add_argument("--max-age-days", type=int, default=365)
    parser.add_argument("--timeout", type=int, default=20)
    parser.add_argument("--gsc-export", default=os.environ.get("GSC_SITEMAP_EXPORT"))
    args = parser.parse_args()
    failures: list[str] = []

    try:
        status, body = fetch(args.sitemap, args.timeout)
        if status != 200:
            failures.append(f"sitemap HTTP status is {status}, expected 200")
        root = ET.fromstring(body)
    except Exception as error:
        print(f"FAIL: unable to load valid sitemap XML: {error}", file=sys.stderr)
        return 1

    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = root.findall("sm:url", namespace)
    today = dt.date.today()
    for item in urls:
        location = item.findtext("sm:loc", namespaces=namespace)
        lastmod = item.findtext("sm:lastmod", namespaces=namespace)
        if not location:
            failures.append("sitemap entry is missing loc")
            continue
        if not lastmod:
            failures.append(f"{location}: missing lastmod")
        else:
            try:
                modified = dt.date.fromisoformat(lastmod[:10])
                age = (today - modified).days
                if age < 0:
                    failures.append(f"{location}: lastmod is in the future ({lastmod})")
                elif age > args.max_age_days:
                    failures.append(f"{location}: lastmod is stale ({age} days)")
            except ValueError:
                failures.append(f"{location}: invalid lastmod {lastmod!r}")
        try:
            url_status, _ = fetch(location, args.timeout)
            if url_status != 200:
                failures.append(f"{location}: HTTP status is {url_status}")
        except Exception as error:
            failures.append(f"{location}: request failed: {error}")

    if not args.gsc_export:
        failures.append("GSC_SITEMAP_EXPORT/--gsc-export is required (keep the authorized export outside git)")
    else:
        try:
            errors = gsc_errors(Path(args.gsc_export), args.gsc_sitemap)
            if errors:
                failures.append(f"GSC reports {errors} sitemap errors")
        except Exception as error:
            failures.append(f"invalid GSC export: {error}")

    if failures:
        for failure in failures:
            print(f"FAIL: {failure}", file=sys.stderr)
        return 1
    print(f"PASS: {len(urls)} URLs healthy, lastmod fresh, GSC sitemap errors=0")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

# Source-map lock repair review

This is a local-only review packet prepared on 2026-10-06. It does not record or authorize a push or deployment. Remote `main` remains at the citation-correction SHA `5114624a53af1afd3eab6af674274d5ec843d916`, and the original successful deployment remains the only counted deployment. Public verification remains 0/17 pending an authorized exact-SHA redeployment.

## Minimal repair

The only dependency change is in `package-lock.json`:

- `source-map-js` version: `1.2.1` → `1.2.2`
- resolved tarball: updated to the npm 1.2.2 artifact
- integrity: updated to the npm 1.2.2 digest

`package.json` is unchanged. PostCSS 8.5.28 already declares `source-map-js` as `^1.2.1`, so 1.2.2 is compatible with the existing dependency range. No application, article, Research, image, metadata, date, manifest, index, sitemap, or prior-cycle file changed.

## Dependency evidence

- Fresh `npm ci --include=dev`: passed using the repaired lockfile.
- Installed tree: Next.js 15.5.27 → PostCSS 8.5.28 → `source-map-js` 1.2.2.
- Fresh full `npm audit --json`: 0 informational, low, moderate, high, or critical vulnerabilities.
- The repaired advisory was GHSA-68fv-2mgg-jv7q, which affects `source-map-js` before 1.2.2.

## Complete local validation

- TypeScript: passed.
- Routine validation: passed.
- Tests: 10/11 passed. The sole failure is the previously proven byte-identical baseline contact-page spacing assertion (`StealthAgents` versus the expected `Stealth Agents`), outside this dependency repair.
- Clean production build: passed; 752 static pages generated.
- All 17 local article routes: HTTP 200.
- Ordered full-body coverage: 227/227 substantive paragraphs matched source.
- Blog manifest hashes: 12/12 matched; all five Research bodies also remained unchanged.
- Full title/H1, visible 2026-10-05 first-publication date, `datePublished`, and self-canonical checks: 17/17 passed.
- Actual images: 9/9 unique assets passed HTTP, MIME, signature, and PNG-dimension or SVG-structure checks.
- Contextual internal destinations: 7/7 passed.
- Blog and Research indexes: all 17 routes present.
- Sitemap: all 17 routes present.
- Corrected authoritative source destinations: 3/3 returned HTTP 200.

## Release boundary

The October 5 first-publication dates remain truthful because all 17 routes first became publicly reachable on October 5. No October 6 redating or `dateModified` change was made. The next action requires a separate explicit exception authorizing one non-force push of the reviewed lockfile repair, followed by browser-operator exact-SHA pinning and redeployment. No deployment API call is authorized.

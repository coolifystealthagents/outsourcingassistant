# October 5 source-link corrective audit

This local corrective review preserves the successful combined release at `3d60b2960cfcf312fa18af1663ca54b57bfc84dc`, its 2026-10-05 UTC first-publication date, and its deployment and live-verification evidence. It does not authorize or record another push or deployment.

## Scoped replacements

- ACORD: replaced the retired `acord.org/standards-architecture/acord-forms` route with `https://formsportal.acord.org/Home`. The current ACORD portal identifies itself as the place to access and download ACORD forms, which supports the article's limited standardized-form context.
- FTC information security: replaced the retired `business-guidance/privacy-security/protecting-personal-information` route with `https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business`. The current FTC guide expressly covers data inventory, collection minimization, least-privilege access, retention, secure handling, and disposal. Those topics support the operational handling claims in the eight affected articles.
- FTC negative options: replaced the retired October 2024 business-blog route with `https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option`. The March 2026 FTC notice expressly calls the 2024 amendments vacated and describes a new advance rulemaking process. The membership article makes operational recommendations and does not claim that the vacated Click-to-Cancel amendments are current law; its source note now says so explicitly.

All three replacements returned HTTP 200 during the corrective review.

## Affected routes

- `/blog/virtual-assistant-insurance-certificate-expiry-tracking`
- `/blog/virtual-assistant-software-seat-utilization-review`
- `/blog/virtual-assistant-meeting-decision-register-reconciliation`
- `/blog/virtual-assistant-supplier-onboarding-document-completeness`
- `/blog/virtual-assistant-customer-order-address-change-verification`
- `/blog/virtual-assistant-membership-cancellation-confirmation-workflow`
- `/blog/virtual-assistant-field-service-appointment-exception-board`
- `/blog/virtual-assistant-grant-application-evidence-room-coordination`
- `/blog/virtual-assistant-customer-complaint-remedy-approval-packet`

## Hash and publication-date treatment

The correction changes citation metadata only. It does not change any of the 227 substantive body paragraphs, titles, slugs, visible dates, schema dates, canonicals, image references, indexes, or sitemap entries. The body-hash algorithm is SHA-256 over each article's substantive section bodies concatenated in source order. All twelve Blog body hashes and all five Research body hashes therefore remain unchanged; the manifest's affected entries were regenerated and compared to source rather than assigned new values.

## Validation

Validated locally on 2026-10-05 UTC:

- `npm ci --include=dev`: passed, 0 vulnerabilities.
- TypeScript: passed.
- Routine validation: passed.
- Tests: 10 passed; the one contact-page brand-spacing assertion failed identically on the preserved baseline and successful combined release and is outside this correction.
- Clean production build: passed, 752 static pages.
- Local HTTP source-to-render audit: 17/17 routes and 227/227 substantive paragraphs matched source; all 12 Blog body hashes matched the regenerated manifest values.
- Full titles/H1, visible dates, `datePublished`, self-canonicals, route images and alt text: 17/17 passed.
- Image responses: 9/9 unique assets returned HTTP 200 with image MIME, valid signatures, and valid PNG dimensions or SVG structure.
- Contextual internal destinations: 7/7 unique routes returned HTTP 200 or the intended redirect.
- Blog index, Research index, and sitemap: all 17 routes present.
- Corrected primary-source destinations: 3/3 returned HTTP 200.

Production remains frozen until separate human authorization.

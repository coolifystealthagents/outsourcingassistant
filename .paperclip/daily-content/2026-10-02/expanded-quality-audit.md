# October 2 expanded independence audit

Status: failed. Production remains unchanged at `d26ae637084b251cc0524ea718f003664c970a5c`. This branch is a local review package only.

## Scope

The audit expanded every October 2 source through its imported builders and constants. It looked past literal paragraph matches and five-word shingles for shared long prose, scenario order, argument order, noun substitution, interpolation, paragraph reordering, and word-count padding.

## Blog finding

`app/blog-batch-2026-10-02.ts` defines all 12 articles through `makeOctoberPost` at lines 39-70 and maps every specification through that function at line 72.

All 12 articles have exactly 10 sections and 20 body paragraphs. All 10 section headings are identical and appear in the same order. The function supplies the same source-reconciliation, state sequence, authority boundary, exception test, reviewer view, status message, measurement, hiring, and closure argument. The `specs` and `lenses` records change nouns, examples, and short topic statements inside that fixed engine.

The earlier maximum five-word-shingle score of 47.76% is therefore not a valid qualitative pass. It measures surface variation introduced inside a common body design.

## Research finding

`app/research-batch-2026-10-02.ts` imports `buildDecisionResearch` from the September 22 batch, invokes it for all five articles at lines 149-150, and inherits the long body defined in `app/research-batch-2026-09-22-run2.ts` lines 110-164.

Each Research article has the same seven inherited research sections, in the same order, with 21 inherited long paragraphs. The October 2 wrapper adds one genuinely topic-specific field-note section, but then appends the same `Application note` sentence to every inherited paragraph at lines 163-166. It also appends a common owner sentence to every FAQ and the same boundary suffix to every service handoff.

The rendered 4,000-word counts are materially padded by repetition. In every article the question appears four times, the decision four times, the evidence description three times, variation three times, failure three times, boundary seven times, and test six times. The observation-unit string appears 27 times because it is repeated in every application-note suffix as well as metadata, body, rows, and sections.

The earlier Research overlap score of 39.11% is therefore not a valid qualitative pass. Topic interpolation and a single unique field-note block hide the inherited September 22 argument engine.

## Human-writing audit

Both families show uniform section geometry, rule-of-three phrasing, repeated negative parallelisms, repeated authority disclaimers, and consistently even explanatory cadence. Research also uses explicit padding labels. These are structural signals, not isolated wording preferences.

## Correction gate

The local review branch adds `scripts/audit-oct2-independent-structure.mjs`. It fails while either family uses a campaign-wide long-form prose generator, an imported prior-campaign body, interpolation padding, common FAQ suffixes, or common handoff suffixes.

The correction must replace each article body with an independently authored structure, topic-specific argument sequence, distinct examples, and a specific reader outcome. Shared typed interfaces, citations, renderer components, and metadata helpers may remain; shared substantive prose may not. After correction, rerun body-only counts, exact and normalized repeated-block checks, pairwise shingles, human-writing review, dependency installation, typecheck, relevant tests, and a clean production build. No push or deployment is authorised from this branch.

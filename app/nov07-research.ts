import type { ResearchPost } from "./fleet-content";

export const nov07ResearchBatch: ResearchPost[] = [
  {
    "slug": "inbox-handoff-completeness-for-the-quarter-start-review",
    "title": "Inbox handoff completeness for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring inbox handoff evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Evidence Quality",
    "image": {
      "url": "/daily07/outsourcingassistant/inbox-handoff-completeness-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Inbox handoff completeness for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for inbox handoff evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the inbox handoff unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about inbox handoff: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to weekday inbox handoffs during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a handoff that sat over a holiday, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one inbox handoff, counted once even when several messages or documents support it. weekday inbox handoffs form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of handoffs with a named next owner and a dated evidence link. Its denominator is handoffs recorded in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define message label, decision owner, evidence link, and next check date before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "handoffs recorded in the review window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: message label, decision owner, evidence link, and next check date. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "message label, decision owner, evidence link, and next check date",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw ten weekday handoffs, including one holiday carry-over from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "ten weekday handoffs, including one holiday carry-over",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of handoffs with a named next owner and a dated evidence link",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure the quality of the reply or the judgment behind it. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on daily handoff, weekly sample. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a handoff that sat over a holiday. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with daily handoff, weekly sample as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "inbox handoff",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the inbox handoff record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure the quality of the reply or the judgment behind it. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about inbox handoff: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to weekday inbox handoffs during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a handoff that sat over a holiday, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one inbox handoff, counted once even when several messages or documents support it. weekday inbox handoffs form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of handoffs with a named next owner and a dated evidence link. Its denominator is handoffs recorded in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define message label, decision owner, evidence link, and next check date before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: message label, decision owner, evidence link, and next check date. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw ten weekday handoffs, including one holiday carry-over from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure the quality of the reply or the judgment behind it. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on daily handoff, weekly sample. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a handoff that sat over a holiday. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with daily handoff, weekly sample as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "meeting-preparation-evidence-for-the-quarter-start-review",
    "title": "Meeting preparation evidence for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring meeting brief evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Evidence Quality",
    "image": {
      "url": "/daily07/outsourcingassistant/meeting-preparation-evidence-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Meeting preparation evidence for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for meeting brief evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the meeting brief unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about meeting brief: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to recurring executive meetings during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as an investment committee brief, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one meeting brief, counted once even when several messages or documents support it. recurring executive meetings form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of briefs with a decision ask and a named owner. Its denominator is briefs issued for meetings in the window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define meeting purpose, decision wanted, pre-read version, and follow-up owner before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "briefs issued for meetings in the window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: meeting purpose, decision wanted, pre-read version, and follow-up owner. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "meeting purpose, decision wanted, pre-read version, and follow-up owner",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw eight briefs across three meeting types from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "eight briefs across three meeting types",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of briefs with a decision ask and a named owner",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure whether the meeting reached a good decision. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on two days before each meeting, quarterly review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take an investment committee brief. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with two days before each meeting, quarterly review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "meeting brief",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the meeting brief record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure whether the meeting reached a good decision. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about meeting brief: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to recurring executive meetings during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as an investment committee brief, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one meeting brief, counted once even when several messages or documents support it. recurring executive meetings form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of briefs with a decision ask and a named owner. Its denominator is briefs issued for meetings in the window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define meeting purpose, decision wanted, pre-read version, and follow-up owner before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: meeting purpose, decision wanted, pre-read version, and follow-up owner. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw eight briefs across three meeting types from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure whether the meeting reached a good decision. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on two days before each meeting, quarterly review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take an investment committee brief. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with two days before each meeting, quarterly review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "delegated-signature-control-for-the-quarter-start-review",
    "title": "Delegated signature control for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring signature envelope evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Control Design",
    "image": {
      "url": "/daily07/outsourcingassistant/delegated-signature-control-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Delegated signature control for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for signature envelope evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the signature envelope unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about signature envelope: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to envelopes routed through the signature queue during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a courier release, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one signature envelope, counted once even when several messages or documents support it. envelopes routed through the signature queue form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of envelopes with a delegation reference before release. Its denominator is envelopes released in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define document version, authority reference, approver, and completion time before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "envelopes released in the review window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: document version, authority reference, approver, and completion time. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "document version, authority reference, approver, and completion time",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw twelve envelopes, including two exceptions from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "twelve envelopes, including two exceptions",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of envelopes with a delegation reference before release",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure legal validity or the wisdom of the delegation. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on weekly envelope sample, monthly authority check. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a courier release. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with weekly envelope sample, monthly authority check as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "signature envelope",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the signature envelope record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure legal validity or the wisdom of the delegation. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about signature envelope: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to envelopes routed through the signature queue during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a courier release, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one signature envelope, counted once even when several messages or documents support it. envelopes routed through the signature queue form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of envelopes with a delegation reference before release. Its denominator is envelopes released in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define document version, authority reference, approver, and completion time before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: document version, authority reference, approver, and completion time. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw twelve envelopes, including two exceptions from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure legal validity or the wisdom of the delegation. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on weekly envelope sample, monthly authority check. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a courier release. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with weekly envelope sample, monthly authority check as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "travel-change-traceability-for-the-quarter-start-review",
    "title": "Travel change traceability for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring travel change evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Traceability",
    "image": {
      "url": "/daily07/outsourcingassistant/travel-change-traceability-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Travel change traceability for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for travel change evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the travel change unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about travel change: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to trips changed inside seven days of departure during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a rail strike rebooking, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one travel change, counted once even when several messages or documents support it. trips changed inside seven days of departure form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of changes with the original itinerary, reason, and approver. Its denominator is changes recorded for trips in the window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define original booking, reason for change, cost difference, and approver before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "changes recorded for trips in the window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: original booking, reason for change, cost difference, and approver. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "original booking, reason for change, cost difference, and approver",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw six changes, including one same-day rebooking from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "six changes, including one same-day rebooking",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of changes with the original itinerary, reason, and approver",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure traveler satisfaction or the quality of the new route. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on trip close-out, monthly route review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a rail strike rebooking. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with trip close-out, monthly route review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "travel change",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the travel change record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure traveler satisfaction or the quality of the new route. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about travel change: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to trips changed inside seven days of departure during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a rail strike rebooking, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one travel change, counted once even when several messages or documents support it. trips changed inside seven days of departure form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of changes with the original itinerary, reason, and approver. Its denominator is changes recorded for trips in the window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define original booking, reason for change, cost difference, and approver before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: original booking, reason for change, cost difference, and approver. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw six changes, including one same-day rebooking from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure traveler satisfaction or the quality of the new route. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on trip close-out, monthly route review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a rail strike rebooking. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with trip close-out, monthly route review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "same-day-request-routing-for-the-quarter-start-review",
    "title": "Same-day request routing for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring same-day request evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Queue Discipline",
    "image": {
      "url": "/daily07/outsourcingassistant/same-day-request-routing-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Same-day request routing for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for same-day request evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the same-day request unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about same-day request: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to requests logged before 3 p.m. during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a press interview moved forward, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one same-day request, counted once even when several messages or documents support it. requests logged before 3 p.m. form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of requests with a decision owner and a promised time. Its denominator is requests accepted in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define request time, requester, decision owner, and promised time before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "requests accepted in the review window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: request time, requester, decision owner, and promised time. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "request time, requester, decision owner, and promised time",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw twenty requests across two triage slots from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "twenty requests across two triage slots",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of requests with a decision owner and a promised time",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure whether the urgency was real. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on daily close, weekly pattern review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a press interview moved forward. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with daily close, weekly pattern review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "same-day request",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the same-day request record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure whether the urgency was real. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about same-day request: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to requests logged before 3 p.m. during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a press interview moved forward, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one same-day request, counted once even when several messages or documents support it. requests logged before 3 p.m. form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of requests with a decision owner and a promised time. Its denominator is requests accepted in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define request time, requester, decision owner, and promised time before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: request time, requester, decision owner, and promised time. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw twenty requests across two triage slots from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure whether the urgency was real. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on daily close, weekly pattern review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a press interview moved forward. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with daily close, weekly pattern review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "weekly-priority-stability-for-the-quarter-start-review",
    "title": "Weekly priority stability for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring weekly priority evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Planning",
    "image": {
      "url": "/daily07/outsourcingassistant/weekly-priority-stability-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Weekly priority stability for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for weekly priority evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the weekly priority unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about weekly priority: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to priorities on the planning board during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a product launch week, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one weekly priority, counted once even when several messages or documents support it. priorities on the planning board form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of Monday priorities unchanged at Friday close. Its denominator is priorities present on Monday, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define outcome, owner, due date, and change reason before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "priorities present on Monday",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: outcome, owner, due date, and change reason. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "outcome, owner, due date, and change reason",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw two planning cycles from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "two planning cycles",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of Monday priorities unchanged at Friday close",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure whether the chosen priority was the right one. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on Monday publish, Friday close. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a product launch week. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with Monday publish, Friday close as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "weekly priority",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the weekly priority record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure whether the chosen priority was the right one. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about weekly priority: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to priorities on the planning board during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a product launch week, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one weekly priority, counted once even when several messages or documents support it. priorities on the planning board form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of Monday priorities unchanged at Friday close. Its denominator is priorities present on Monday, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define outcome, owner, due date, and change reason before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: outcome, owner, due date, and change reason. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw two planning cycles from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure whether the chosen priority was the right one. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on Monday publish, Friday close. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a product launch week. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with Monday publish, Friday close as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  },
  {
    "slug": "vendor-renewal-oversight-for-the-quarter-start-review",
    "title": "Vendor renewal oversight for the quarter-start review",
    "excerpt": "A repeatable protocol for measuring vendor renewal evidence at the quarter-start review, with definitions, sampling, limits, and reporting.",
    "published": "2026-11-07",
    "updated": "2026-11-07",
    "cluster": "Vendor Control",
    "image": {
      "url": "/daily07/outsourcingassistant/vendor-renewal-oversight-for-the-quarter-start-review.png",
      "alt": "Title-overlaid research graphic for Vendor renewal oversight for the quarter-start review"
    },
    "headlineStat": "12 named sources and 12 protocol sections.",
    "methodology": "A desk review of public guidance translated into a repeatable measurement protocol for vendor renewal evidence.",
    "keyStats": [
      "12 public sources reviewed",
      "12 protocol sections",
      "November 7, 2026 verification date"
    ],
    "takeaways": [
      "Define the vendor renewal unit and the denominator before collecting evidence.",
      "Report missing, unavailable, and confirmed negative values separately.",
      "Keep the owner, the evidence date, and the next check visible beside the finding."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review asks a narrow question about vendor renewal: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to contracts renewing in the next 120 days during the stated window. The answer describes the record, not the judgment behind the decision.",
          "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a software renewal, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one vendor renewal, counted once even when several messages or documents support it. contracts renewing in the next 120 days form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
          "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure is share of renewals decided before the notice window closes. Its denominator is renewals due in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
          "Define end date, notice window, owner, and renewal decision before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Denominator",
            "value": "renewals due in the review window",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each item must carry the evidence listed in the method note: end date, notice window, owner, and renewal decision. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
          "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Evidence fields",
            "value": "end date, notice window, owner, and renewal decision",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Draw fifteen contracts across four categories from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
          "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Sample",
            "value": "fifteen contracts across four categories",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
          "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          },
          {
            "label": "Measure",
            "value": "share of renewals decided before the notice window closes",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "This protocol does not measure vendor performance or value for money. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
          "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Run the check on monthly 90-day lookahead, quarterly review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
          "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
          "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Privacy and retention",
        "paragraphs": [
          "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
          "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Take a software renewal. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
          "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
          "Hand the package to the named owner with monthly 90-day lookahead, quarterly review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template."
        ],
        "rows": [
          {
            "label": "Unit",
            "value": "vendor renewal",
            "source": "Method note"
          },
          {
            "label": "Window",
            "value": "One quarter-start review cycle",
            "source": "Method note"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What does this protocol measure?",
        "a": "It measures what the vendor renewal record can show about evidence, ownership, and closure. It does not rate the quality of the underlying decision."
      },
      {
        "q": "What is the main limitation?",
        "a": "The protocol does not measure vendor performance or value for money. A reproducible count is still only a description, not a verdict about the team."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management framework used for governance and review language."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access, audit, and record integrity."
      },
      {
        "name": "NIST SP 800-61 Rev. 2",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Public incident-handling guidance used for exception routing."
      },
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical guidance on verification and urgent requests."
      },
      {
        "name": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations and planning guidance."
      },
      {
        "name": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "note": "Public labor guidance used for scheduling and travel context."
      },
      {
        "name": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control standards for evidence and authority."
      },
      {
        "name": "FTC Data Security",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "note": "Business data-security principles and enforcement context."
      },
      {
        "name": "ICO Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/",
        "note": "Purpose limitation, minimisation, accuracy, and retention guidance."
      },
      {
        "name": "International Labour Organization",
        "url": "https://www.ilo.org/",
        "note": "International labor standards and remote-work context."
      },
      {
        "name": "GSA Acquisition Gateway",
        "url": "https://acquisitiongateway.gov/",
        "note": "Public procurement and contract-management resources."
      },
      {
        "name": "Project Management Institute",
        "url": "https://www.pmi.org/",
        "note": "Public project-management standards and ethics guidance."
      }
    ],
    "related": [
      "/services",
      "/contact-us"
    ],
    "body": [
      "## Question and scope",
      "The review asks a narrow question about vendor renewal: can a reviewer reconstruct what happened from the record without asking the assistant who prepared it? Scope is limited to contracts renewing in the next 120 days during the stated window. The answer describes the record, not the judgment behind the decision.",
      "Fix the start event, stop event, pause rule, and treatment of missing evidence before collection begins. A dry run on a single case, such as a software renewal, is cheaper than discovering a definition error after the full sample is gathered. Write the definitions in the same note that will hold the results.",
      "## Population and unit of analysis",
      "The unit is one vendor renewal, counted once even when several messages or documents support it. contracts renewing in the next 120 days form the population, with linked events attached to the parent item rather than counted separately. Record the inclusion rule beside the count so the denominator cannot be rebuilt after the fact.",
      "Stratify the sample by ordinary items, exceptions, and items returned by a reviewer. That mix keeps a clean average from hiding the cases where the record usually breaks. A small stratified sample is more useful than a large convenient one.",
      "## Definitions and measures",
      "The primary measure is share of renewals decided before the notice window closes. Its denominator is renewals due in the review window, so a percentage cannot drift toward the easiest items. Report the raw count beside the percentage. A second reviewer should be able to recompute both without opening the original queue.",
      "Define end date, notice window, owner, and renewal decision before collection. A field is present only when a reviewer can see the value, its source, and its observation time; an empty box is not a confirmed negative. Mark each field as present, missing, or not applicable before any count is produced.",
      "## Evidence standard",
      "Each item must carry the evidence listed in the method note: end date, notice window, owner, and renewal decision. A current screenshot cannot prove what the record said earlier, so note the version or observation date. Link the evidence to the item identifier rather than to a folder name that may change.",
      "If the report cannot be reproduced from its origins, treat that as a finding about the record rather than a reason to lower the standard. Keep the collection log with the final package. The log should show who collected each row and when it was last checked.",
      "## Sampling and collection",
      "Draw fifteen contracts across four categories from the population using a stated rule, and log every exclusion. A convenience sample is acceptable only when the limit is reported beside the result. Record the sampling frame before the first item is opened.",
      "Track the age of the oldest open item along with the count, because an average can conceal one item that sat for weeks. Record the collector, the date, and the system used. Age is part of the evidence, not a separate performance story.",
      "## Analysis and reporting",
      "Report the numerator, the denominator, the window, and the exclusions together. A percentage without those four facts is only a mood. Put the limit in the same paragraph as the finding so it cannot be read as certainty.",
      "Separate missing, unavailable, and confirmed negative values. The distinction tells the reader whether the record failed or the process simply had nothing to record. Combine them once and the result becomes impossible to defend.",
      "## Limitations and sources of error",
      "This protocol does not measure vendor performance or value for money. It also cannot show whether the underlying decision was fair, timely, or wise. Those questions need a different method. State the limit before the finding so the reader can weigh both together.",
      "Common errors include a drifting denominator, a changed definition mid-window, and a reviewer who fills gaps from memory. Each error should be logged when found, not silently corrected. If a definition changes, keep the earlier classification and label the new rule for later items.",
      "## Review cadence",
      "Run the check on monthly 90-day lookahead, quarterly review. Keep the definition stable across the window so the comparison means something. A review that changes its question every month cannot show improvement.",
      "At the review, name one process change, one owner, and one check date. A finding without a next action is only a description. Keep the change small enough to verify at the next check.",
      "## Data quality checks",
      "Recheck a ten percent sample against the source system. Record disagreement as a finding even when the corrected value looks harmless. The disagreement rate is often more useful than the headline measure.",
      "Confirm that every row has a unique identifier, a source, and an observation time. Duplicate identifiers usually mean two records describe the same event. Resolve duplicates before analysis, not after the report is drafted.",
      "## Privacy and retention",
      "Use a pseudonymous item key and keep the crosswalk in an approved system with restricted access. Collect only the fields named in the method note. Access should follow the role, not the seniority of the person asking.",
      "Set a disposal date for the research file and log access to it. An archive without an end date becomes a liability rather than evidence. The disposal date belongs in the method note, not in a private reminder.",
      "## Worked example",
      "Take a software renewal. The record shows the opening event, the fields that were checked, the exception that paused it, and the confirmation that closed it. The same example should be usable as a training case at the next review.",
      "A second reviewer should be able to reach the same classification from the saved evidence. If two reviewers disagree, the definition or the evidence standard needs repair. Record the disagreement rather than negotiating a single answer.",
      "## Reporting package and handoff",
      "The package contains the method note, the sample list, the completed rows, the exclusions, and a one-page finding. The finding states the limit beside the result. A reader should not need the appendix to understand the main count.",
      "Hand the package to the named owner with monthly 90-day lookahead, quarterly review as the next check. Archive the exact version that was reviewed so a later reader can reproduce the count. The next check should begin from that version, not from a fresh template.",
      "## Sources",
      "- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) — checked November 7, 2026.",
      "- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — checked November 7, 2026.",
      "- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — checked November 7, 2026.",
      "- [CISA Secure Our World](https://www.cisa.gov/secure-our-world) — checked November 7, 2026.",
      "- [U.S. Small Business Administration](https://www.sba.gov/) — checked November 7, 2026.",
      "- [U.S. Department of Labor](https://www.dol.gov/) — checked November 7, 2026.",
      "- [GAO Green Book](https://www.gao.gov/products/gao-14-704g) — checked November 7, 2026.",
      "- [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security) — checked November 7, 2026.",
      "- [ICO Data Protection Principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles-a-guide-to-the-data-protection-principles/) — checked November 7, 2026.",
      "- [International Labour Organization](https://www.ilo.org/) — checked November 7, 2026.",
      "- [GSA Acquisition Gateway](https://acquisitiongateway.gov/) — checked November 7, 2026.",
      "- [Project Management Institute](https://www.pmi.org/) — checked November 7, 2026."
    ],
    "serviceHandoff": {
      "heading": "Put this control into a role brief",
      "href": "/services",
      "label": "Review assistant services",
      "paragraphs": [
        "Use the definitions and evidence standard when scoping the role.",
        "Keep the executive decision with the executive."
      ]
    }
  }
];

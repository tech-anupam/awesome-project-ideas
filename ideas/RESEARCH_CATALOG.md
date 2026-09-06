# Research catalogue: 110 project leads

This catalogue is a starting library of researched project leads. Each group is tied to public standards, datasets, or APIs listed below. A lead is not an approved project entry until a contributor documents its users, existing solutions, differentiating gap, and evidence with [TEMPLATE.md](TEMPLATE.md).

## Source signals

| Tag | Research signal |
| --- | --- |
| D | [GitHub REST API](https://docs.github.com/en/rest), [OpenAlex API](https://help.openalex.org/api/), and [Crossref metadata API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/) make public software and research metadata available. |
| S | [NIST SSDF](https://csrc.nist.gov/projects/ssdf) defines outcome-focused secure-development practices; [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) tracks vulnerabilities known to be exploited. |
| A | [W3C WAI](https://www.w3.org/WAI/test-evaluate/tools/) documents the limits of automated accessibility testing and the role of manual review. |
| C | [EPA's greenhouse-gas API](https://www.epa.gov/enviro/greenhouse-gas-restful-data-service) and the [USGS earthquake service](https://earthquake.usgs.gov/fdsnws/event/1/) provide public environmental data. |
| T | The [U.S. DOT developer catalogue](https://www.transportation.gov/developer) and [transportation data portal](https://data.transportation.gov/) publish transport data and APIs. |
| H | [CDC Data](https://data.cdc.gov/) publishes public-health datasets across health topics. |
| E | [UNESCO OER](https://www.unesco.org/en/open-educational-resources) supports open, reusable learning material and inclusive access. |

## Developer tools

Source signal: D

1. **API contract drift recorder**: capture selected API responses on a schedule and show meaningful schema and behavior changes.
2. **Release-note to migration checklist**: turn an upstream project’s version notes into a traceable, human-reviewed upgrade checklist.
3. **Dependency deprecation radar**: track packages used in a repository and flag documented end-of-life dates.
4. **Local development environment diff**: compare environment variables, ports, tools, and service versions across two developer machines.
5. **Issue reproduction notebook**: package steps, fixtures, logs, and expected results into a shareable reproduction record.
6. **Pull-request test coverage map**: connect changed files to relevant existing tests and highlight untested paths.
7. **Changelog claim verifier**: check release-note links, issue references, and version ranges before publication.
8. **OpenAPI example linter**: test documentation examples against a live mock or contract server.
9. **Repository onboarding path finder**: build a visual route from README to first successful local run and first contribution.
10. **Cross-repository breaking-change watchlist**: notify maintainers when a dependency’s public API changes affect several repositories.
11. **Build-log regression index**: store failed CI signatures and surface earlier fixes for the same failure pattern.

## Cybersecurity and software supply chain

Source signal: S

12. **SSDF evidence board**: map a small team’s repository practices to NIST SSDF outcomes without pretending to certify compliance.
13. **Known-exploited vulnerability triage queue**: match CISA KEV entries to a project’s component inventory and record a remediation decision.
14. **Security exception expiry tracker**: make temporary security exceptions visible, assigned, and time-bound.
15. **Secrets exposure rehearsal kit**: create a safe local exercise for practicing credential revocation, audit logging, and follow-up tasks.
16. **Signed-release completeness checker**: verify that release artifacts, checksums, provenance, and notes exist together.
17. **Threat-model change log**: connect architecture decisions to assumptions, threats, mitigations, and review dates.
18. **Vendor security questionnaire diff**: compare successive supplier responses and highlight changed answers.
19. **Access-review evidence collector**: assemble review records from approved identity exports without storing secrets.
20. **Dependency ownership map**: show which teams own the maintenance and upgrade decision for each critical component.
21. **Vulnerability disclosure inbox router**: acknowledge reports, remove sensitive details from public queues, and track deadlines.
22. **Secure-default configuration scorer**: compare a starter configuration against a transparent, versioned policy.

## Accessibility and inclusive design

Source signal: A

23. **Keyboard journey recorder**: record a real keyboard-only path through a web flow and mark unexpected focus changes.
24. **Accessible form error simulator**: replay invalid submissions and check whether errors are discoverable in sequence.
25. **Document accessibility handoff sheet**: produce a checklist for accessible PDF, spreadsheet, and presentation delivery.
26. **Alt-text review queue**: let editors request and approve descriptions with the image context preserved.
27. **Caption timing reviewer**: show speech, captions, and visual cue timings side by side for human review.
28. **Focus-order visualizer**: render tab order over an interface and compare it with visual order.
29. **Plain-language change tracker**: show which parts of a public page became harder to read after an edit.
30. **Screen-reader announcement sandbox**: test live-region messages against a documented set of interaction states.
31. **Accessible design-token audit**: flag color, motion, target-size, and contrast changes before a component release.
32. **Manual accessibility test planner**: turn a component inventory into a repeatable manual test session.
33. **Assistive-technology bug library**: store minimally reproducible accessibility bugs with browser and device context.

## Climate, environment, and resilience

Source signal: C

34. **Facility emissions change explorer**: show month-to-month changes in public greenhouse-gas records with source links.
35. **Community cooling-center map**: maintain an accessible, printable map of verified heat-relief locations.
36. **Flood-preparedness checklist builder**: create location-aware home and small-business preparation plans from public guidance.
37. **School energy-use baseline**: let schools compare bills, occupancy, and weather-normalized usage over time.
38. **Repairability parts finder**: index manuals, parts, and compatible replacements for common equipment.
39. **Waste pickup notification translator**: turn municipal collection rules into simple reminders and calendar feeds.
40. **Earthquake readiness inventory**: track supplies, household contacts, and drill completion offline.
41. **Water-quality reading explainer**: convert local public measurements into source-linked plain-language context.
42. **Tree-care observation log**: help communities record watering, canopy condition, and maintenance needs for public trees.
43. **Climate grant deadline board**: track public grant requirements, dates, and supporting documents for local groups.
44. **Resilience project evidence folder**: collect photos, invoices, permits, and outcomes for community adaptation projects.

## Civic technology and transport

Source signal: T

45. **Transit accessibility incident diary**: collect structured reports about broken lifts, missing announcements, and route barriers.
46. **Safe school-route planner**: combine public road, crossing, and traffic-safety data into reviewable route proposals.
47. **Public meeting agenda tracker**: notify residents when an agenda contains selected topics, locations, or decisions.
48. **Roadwork impact calendar**: consolidate verified lane closures and public-transport disruptions into one local calendar.
49. **Rail crossing issue mapper**: make it easier to document recurring crossing safety problems with official reference data.
50. **Pothole repair transparency board**: follow a report from submission to repair with public status evidence.
51. **Accessible polling-place finder**: list verified access features, transit options, and contact details.
52. **Budget line-item explainer**: link a city budget’s line items to prior spending, meeting votes, and public documents.
53. **Sidewalk condition survey tool**: capture barriers such as missing curb cuts, obstructions, and surface hazards.
54. **Community service eligibility navigator**: organize public programme criteria into a searchable, source-linked guide.
55. **Public-comment deadline monitor**: track consultations, attachments, and submission deadlines across agencies.

## Health and public health data

Source signal: H

56. **Local vaccination data explainer**: present public coverage data with definitions, source dates, and download links.
57. **Heat-health check-in planner**: help neighbours schedule non-clinical check-ins during verified heat alerts.
58. **Clinic language-access directory**: maintain a community-reviewed list of language, interpretation, and accessibility support.
59. **Medication availability log**: let patient groups record shortage reports with source links and update dates.
60. **Public-health dataset change detector**: flag schema, methodology, or value changes in selected CDC datasets.
61. **Community first-aid resource map**: organize official training locations, supplies, and emergency contacts.
62. **Food-safety recall reminder**: create personal alerts from official recall notices and product identifiers.
63. **Air-quality activity planner**: combine local readings with user-selected activity thresholds and safety guidance.
64. **Health-survey questionnaire mapper**: compare questions across public surveys to reveal comparable fields.
65. **Caregiver task handoff board**: coordinate non-medical household tasks with clear consent and privacy boundaries.
66. **Accessible appointment preparation sheet**: create a printable list of questions, access needs, and follow-up actions.

## Education and learning

Source signal: E

67. **Open-license lesson finder**: search OER by licence, language, format, topic, and offline suitability.
68. **Course prerequisite map**: show the skills and concepts a learner needs before starting an open course.
69. **Offline learning pack builder**: assemble selected open materials into a downloadable, low-bandwidth bundle.
70. **Teacher adaptation log**: document local changes to an OER so other educators can reuse the work.
71. **Accessible syllabus checker**: check links, document formats, reading load, and accommodation details.
72. **Student project brief library**: maintain authentic, scoped project briefs from public organisations and datasets.
73. **Learning-resource freshness monitor**: flag broken links, retired tools, and dated examples in open courses.
74. **Practice feedback rubric builder**: create reusable, transparent peer-review rubrics for technical projects.
75. **Language-learning community glossary**: collect locally relevant, reviewed terminology with examples and audio links.
76. **Career skill evidence portfolio**: help learners link projects to concrete skills and reviewer feedback.
77. **Lab equipment booking fairness tool**: allocate limited school resources using visible rules and usage history.

## Research, data, and open knowledge

Source signal: D

78. **Dataset provenance card generator**: create a compact, human-reviewed card for source, licence, collection method, and limits.
79. **Research-paper claim tracker**: link a project decision to the exact paper, section, date, and interpretation.
80. **Open-data schema change diary**: record field additions, removals, and definition changes across public datasets.
81. **Citation link rot monitor**: check whether references in a public report still resolve to the cited resource.
82. **Survey codebook comparison tool**: show renamed, removed, and newly added variables between releases.
83. **Research consent language library**: organize reusable, jurisdiction-aware plain-language consent examples for review.
84. **Public API reliability notebook**: log uptime, response shape, quotas, and documentation mismatches over time.
85. **Reproducibility handoff pack**: package a paper’s environment, dataset checksums, and run instructions.
86. **Data licence compatibility checker**: guide users through licence questions before combining public datasets.
87. **Evidence-to-decision map**: show which public sources informed a policy, product, or community decision.
88. **Research opportunity overlap finder**: identify underexplored intersections between public research topics and open datasets.

## Privacy, productivity, and small organisations

Source signal: S

89. **Data-retention calendar**: turn an organisation’s approved retention rules into review dates and deletion reminders.
90. **Consent receipt archive**: give small organisations a clear record of what a person agreed to and when.
91. **Shared inbox decision log**: attach a brief, searchable decision record to recurring customer or community requests.
92. **Meeting action-item auditor**: distinguish commitments, owners, and deadlines from informal meeting notes.
93. **Volunteer skills matcher**: match a defined task to available skills, constraints, and onboarding steps.
94. **Nonprofit grant evidence organiser**: connect each reported outcome to documents, photos, and data sources.
95. **Expense policy pre-checker**: guide volunteers through required evidence before reimbursement submission.
96. **Small-team handover dashboard**: package responsibilities, recurring tasks, contacts, and service access notes.
97. **Community inventory checkout**: track shared equipment, condition, expected return, and repair history.
98. **Plain-language policy reader**: show a policy alongside a human-authored summary and referenced clauses.
99. **Accessible event run sheet**: coordinate access requirements, contact roles, arrival routes, and contingency tasks.

## Hardware, local infrastructure, and maker projects

Source signal: C, T, and D

100. **Solar installation maintenance log**: record inspections, output readings, warranty dates, and repair evidence.
101. **Community tool-repair queue**: capture symptoms, parts, repair attempts, and safety notes for shared equipment.
102. **Indoor air-quality display kit**: present sensor data with calibration status, limits, and simple local guidance.
103. **Low-cost flood-level logger**: record water height with location, time, and manual verification notes.
104. **Accessible bus-stop feedback device**: prototype a durable input device for reporting missing information at stops.
105. **Public-space lighting audit kit**: combine repeatable observations, photos, and maintenance requests.
106. **Home energy retrofit planner**: sequence insulation, appliance, and monitoring improvements with evidence records.
107. **Bicycle maintenance station map**: document pumps, repair stands, lighting, and accessibility details.
108. **Shared workshop safety passport**: track completed inductions, machine-specific requirements, and renewal dates.
109. **Compost temperature logger**: record readings, turning events, and outcomes for community compost sites.
110. **Local sensor data quality checker**: flag missing readings, unrealistic jumps, calibration dates, and location errors.

## Turning a lead into an entry

Choose one lead, search for existing tools, name the affected users, define a small useful first version, and then add it through [TEMPLATE.md](TEMPLATE.md). A strong contribution improves or narrows an existing lead instead of creating a differently named duplicate.
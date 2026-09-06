# Research catalogue, part 2: 210 additional project leads

These leads extend the first catalogue without replacing its review standard. Each section points to public standards, APIs, or data portals that make the problem space inspectable. Before promoting a lead to a standalone entry, verify the users, comparable work, source evidence, and material gap with [TEMPLATE.md](TEMPLATE.md).

## Developer tools and infrastructure

Source signals: [GitHub REST API](https://docs.github.com/en/rest), [OpenAlex](https://help.openalex.org/api/), and [NIST DevSecOps practices](https://pages.nist.gov/nccoe-devsecops/).

111. **Configuration ownership explorer**: show the people, services, and repositories responsible for each production setting.
112. **Feature-flag expiry planner**: find old flags and schedule a decision to remove, retain, or document each one.
113. **Database migration rehearsal runner**: run migrations against scrubbed snapshots and publish rollback evidence.
114. **Service-level objective starter kit**: guide small teams through setting observable reliability targets.
115. **Incident timeline assembler**: combine alerts, deployments, and status updates into a reviewable incident sequence.
116. **Runbook freshness checker**: flag operational instructions that refer to retired services or inaccessible links.
117. **API pagination test harness**: verify boundaries, cursors, empty pages, and rate-limit behavior.
118. **Webhook replay desk**: replay recorded safe webhook fixtures against local development environments.
119. **Error-message quality audit**: group user-facing errors that lack recovery guidance or support identifiers.
120. **Monorepo ownership heatmap**: map frequently changed shared packages to responsible teams and review paths.
121. **CLI compatibility matrix**: test command behavior across supported operating systems and shell versions.
122. **Deployment window coordinator**: make maintenance windows, dependencies, and rollback owners visible.
123. **Schema decision record generator**: capture why a field, index, or relation exists when a migration is approved.
124. **Test-fixture lifecycle manager**: track fixture origins, privacy restrictions, and refresh dates.
125. **Local queue emulator**: provide a small, deterministic substitute for an external queue during development.
126. **Repository health snapshot**: summarize owners, documentation links, release cadence, and open maintenance risks.
127. **Build cache diagnosis report**: explain cache misses using a transparent comparison of inputs.
128. **Code review context pack**: collect linked issues, designs, tests, and release impact for a pull request.
129. **Change-freeze exception ledger**: record who approved an emergency deployment and the follow-up review date.
130. **Log field dictionary validator**: ensure shared log fields retain meaning across services.
131. **Release rollback drill tracker**: record rehearsal outcomes and the evidence needed before a critical release.

## Security and privacy engineering

Source signals: [NIST SSDF](https://csrc.nist.gov/projects/ssdf) and [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog).

132. **Asset inventory confidence score**: show which software assets are confirmed, inferred, stale, or ownerless.
133. **Patch-window planner**: assign remediation windows using exploit evidence, exposure, and business constraints.
134. **Security-header history viewer**: record changes to web security headers and verify their intended scope.
135. **Authentication-flow test notebook**: preserve repeatable tests for sign-in, recovery, lockout, and session expiry.
136. **Access-token scope explorer**: make delegated permissions understandable before a token is issued.
137. **Third-party script inventory**: track external scripts, owners, purpose, and last review date for each page.
138. **Privacy request case board**: track access, correction, and deletion requests without storing the requested data itself.
139. **Data-processing map builder**: connect a data field to collection purpose, retention rule, and recipient.
140. **Certificate expiry rehearsal tool**: practice alerting and rotation for non-production certificates.
141. **Security control evidence index**: link a control to the test, owner, and artifact that demonstrates it.
142. **Misconfiguration diff reviewer**: compare cloud configuration exports and explain material changes.
143. **Account-recovery abuse checklist**: test rate limits, notifications, and identity checks for recovery routes.
144. **Dependency trust note generator**: create a reviewer-owned record of why a critical dependency is accepted.
145. **Vulnerability remediation retrospectives**: structure lessons learned after high-priority vulnerability fixes.
146. **Sensitive-field classifier review queue**: send uncertain data fields to a human for classification.
147. **Security training scenario library**: build small, role-specific exercises from real control failures.
148. **Data export approval ledger**: document why a recurring data export exists and when it must be reapproved.
149. **Open-source security contact finder**: help maintainers publish and validate a security reporting route.
150. **Security release gate simulator**: show exactly which evidence is missing before release approval.
151. **Audit-log coverage map**: identify critical actions that lack an event, actor, or outcome record.
152. **Exception dependency graph**: reveal when multiple temporary security exceptions create a larger exposure.

## Accessibility and assistive technology

Source signals: [W3C evaluation guidance](https://www.w3.org/WAI/test-evaluate/tools/selecting/) and [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

153. **Accessible checkout walkthrough**: document and test the full keyboard and screen-reader purchase path.
154. **Heading-outline regression checker**: compare page hierarchy before and after a content update.
155. **Accessible map alternative builder**: generate structured text directions and destination lists beside a map.
156. **Video description planning board**: coordinate scene descriptions, script review, and delivery deadlines.
157. **Table comprehension checker**: guide authors through headers, scopes, summaries, and responsive behavior.
158. **Accessible error-copy library**: maintain reviewed recovery messages for common form and account failures.
159. **Motion-preference test recorder**: capture whether animations respect user motion settings in real flows.
160. **Contrast decision archive**: preserve approved contrast choices with component and state context.
161. **Accessible authentication pattern finder**: catalog sign-in patterns that do not create unnecessary barriers.
162. **PDF remediation task board**: split document repair into tags, reading order, tables, forms, and verification.
163. **Interactive chart transcript builder**: pair a chart with a source-linked data summary and keyboard exploration.
164. **Touch-target audit overlay**: measure target size and spacing on handheld interfaces.
165. **Form-label relationship tester**: expose controls that visually appear labeled but are not programmatically linked.
166. **Plain-text emergency page generator**: produce a minimal, accessible alternative for service interruptions.
167. **Accessibility acceptance criteria library**: help product teams write testable criteria before implementation.
168. **Language declaration auditor**: find pages and snippets whose language metadata does not match their content.
169. **Mobile screen-reader route tester**: record gesture paths, announced labels, and barriers in a mobile task.
170. **Accessible notifications preference center**: let people choose notification channels, frequency, and language clearly.
171. **Caption quality sampling tool**: select representative videos for manual caption review and issue tracking.
172. **Assistive-technology compatibility matrix**: publish tested browser, platform, and device combinations for a product.
173. **Accessibility debt planner**: prioritize known barriers by task severity, affected users, and remediation effort.

## Climate, weather, and environment

Source signals: [NOAA Climate Data Online](https://www.ncei.noaa.gov/cdo-web/webservices/v2), [EPA greenhouse-gas data](https://www.epa.gov/enviro/greenhouse-gas-restful-data-service), and [USGS earthquake data](https://earthquake.usgs.gov/fdsnws/event/1/).

174. **Weather-station coverage explorer**: show gaps between nearby locations and available historic observations.
175. **Rainfall threshold alert planner**: let local groups define transparent thresholds from documented rain records.
176. **Drought impact diary**: collect structured local observations alongside official drought information.
177. **Heat-safe work schedule planner**: create shift suggestions from weather forecasts and documented policies.
178. **Community cooling demand estimate**: model expected cooling-center demand using simple, reviewable assumptions.
179. **Storm preparation inventory map**: track shared generators, supplies, and verified storage locations.
180. **Household energy anomaly detector**: identify unusual consumption patterns without making billing claims.
181. **Building leak follow-up board**: record suspected water leaks, inspection dates, and resolution evidence.
182. **Municipal tree-watering scheduler**: prioritize newly planted trees using weather and maintenance history.
183. **Native-plant observation journal**: collect flowering, pollinator, and survival observations for restoration groups.
184. **Community garden irrigation log**: tie watering decisions to rain, soil checks, and crop notes.
185. **Recycling contamination feedback tool**: turn local collection rules into searchable, photo-supported examples.
186. **Electricity outage resilience diary**: record outage duration, impacts, backup power, and recovery tasks.
187. **Flood-route accessibility map**: identify routes that remain passable for pedestrians and mobility devices.
188. **Local environmental permit tracker**: index public notices, dates, locations, and comment deadlines.
189. **Noise observation map**: capture recurring noise impacts with time, source type, and public evidence links.
190. **Extreme-weather communication checklist**: prepare multilingual, accessible messages before severe events.
191. **Climate-data citation helper**: create reproducible source links, query parameters, and retrieval dates.
192. **Solar output weather comparator**: explain observed solar variation using local weather records.
193. **Disaster mutual-aid request board**: match material requests to offers with verification and privacy controls.
194. **Water-conservation challenge tracker**: help communities test conservation actions and report measured outcomes.

## Civic life, mapping, and transport

Source signals: [DOT developer resources](https://www.transportation.gov/developer), [DOT data portal](https://data.transportation.gov/), and [OpenStreetMap API documentation](https://wiki.openstreetmap.org/wiki/API).

195. **Bus-stop amenity inventory**: document seating, shelter, lighting, tactile features, and reported condition.
196. **Accessible route construction alert**: notify users when works affect ramps, crossings, or transit access.
197. **Public-space maintenance request tracker**: show request dates, evidence, agency response, and outcome.
198. **Local ordinance comparison reader**: compare a draft ordinance to prior versions and linked meeting records.
199. **Civic data glossary**: explain fields used in local public datasets with examples and source references.
200. **Neighbourhood meeting translator queue**: coordinate human translation requests for public meeting material.
201. **Safe cycling route review tool**: collect structured rider observations for a proposed route.
202. **Sidewalk snow-clearance tracker**: record blocked segments and completion status during winter events.
203. **Public toilet accessibility directory**: maintain verified opening times, access features, and reporting contacts.
204. **Streetlight outage cluster viewer**: group public reports to reveal repeated maintenance gaps.
205. **School-zone speed concern diary**: structure observations for community discussion and agency reporting.
206. **Public records request tracker**: manage deadlines, scope, fees, and received files for a requester.
207. **Community bulletin archive**: preserve dated notices, attachments, and expiry dates from public boards.
208. **Barrier-free park guide**: document entrances, paths, toilets, sensory features, and transit links.
209. **Local election information checker**: compare official candidate, location, and deadline data across sources.
210. **Construction permit neighbourhood feed**: show nearby public permits with simple location and status filters.
211. **Emergency assembly-point map**: maintain accessible directions and source-verified contact information.
212. **Traffic-calming proposal builder**: combine community observations with public crash and speed evidence.
213. **Accessible tourism route planner**: create local itineraries that state access details instead of assuming them.
214. **Community-benefit agreement tracker**: follow published commitments, milestones, evidence, and missed dates.
215. **Public-service wait-time diary**: collect transparent, non-identifying reports of queue and appointment experience.

## Health, care, and wellbeing

Source signals: [CDC Data](https://data.cdc.gov/) and [WHO disability-inclusive health guidance](https://iris.who.int/bitstream/handle/10665/350143/WHO-EURO-2021-4367-44130-62275-eng.pdf).

216. **Public-health definition glossary**: explain measures, denominators, dates, and limits used in local dashboards.
217. **Care-access travel planner**: list verified transit, parking, entry, and interpreter details for care locations.
218. **Community mental-health resource navigator**: organize official and nonprofit support options by need and availability.
219. **Vaccination record reminder planner**: help households track personally held records and upcoming questions for providers.
220. **Care appointment follow-up organiser**: turn provider instructions into a clear, private task list.
221. **Accessible emergency contact card builder**: create printable and digital cards with user-controlled information.
222. **Health data methodology monitor**: flag published changes in definitions, revisions, or reporting frequency.
223. **Community food-support availability board**: track verified opening hours, eligibility, and access details.
224. **Assistive-device repair directory**: collect local repair options, loan programmes, and public support links.
225. **Medication question preparation tool**: help people record questions and observations for a pharmacist or clinician.
226. **Health service language-access checker**: show whether a provider publishes interpretation and communication options.
227. **Caregiver respite planner**: coordinate non-clinical coverage tasks, boundaries, and confirmed availability.
228. **Public-health dashboard download helper**: make source data and update dates easier to find and cite.
229. **Accessible exercise route journal**: record surface, lighting, rest points, noise, and access obstacles.
230. **Health-study participation explainer**: organize public study details, eligibility, contacts, and consent materials.
231. **Community overdose-response resource map**: present official training and supply access information with update dates.
232. **Maternal health appointment checklist**: create a user-owned prompt sheet for questions, support, and follow-up.
233. **Disability service waitlist diary**: let advocacy groups aggregate non-identifying wait experiences responsibly.
234. **Healthy housing observation log**: record mould, ventilation, pests, and repair communication for tenants.
235. **Health-literacy document reviewer**: guide public organisations through plain-language and accessibility review.
236. **Non-clinical symptom timeline exporter**: give people a structured record to discuss with a qualified professional.

## Education, careers, and learning communities

Source signals: [UNESCO Open Educational Resources](https://www.unesco.org/en/open-educational-resources) and [UNESCO open learning](https://openlearning.unesco.org/).

237. **Open textbook adaptation tracker**: record what an educator changed, why, and under which licence.
238. **Course accessibility pledge board**: make instructor commitments and follow-through visible to learners.
239. **Peer study-group matcher**: match availability, goals, language, and preferred communication method.
240. **Portfolio evidence reviewer**: guide learners in linking outcomes to source code, write-ups, and feedback.
241. **Internship expectation comparison tool**: help students compare published duties, pay, access, and learning outcomes.
242. **Scholarship deadline evidence folder**: organize eligibility proof, drafts, references, and submission dates.
243. **Learning objective to resource mapper**: link a curriculum objective to reusable open material and practice tasks.
244. **Accessible classroom layout planner**: plan seating, routes, captioning, quiet space, and equipment needs.
245. **Feedback turnaround dashboard**: show whether assessment feedback arrives within a course’s stated window.
246. **Student club handover kit**: package roles, finance notes, event history, and safe access instructions.
247. **Open course translation queue**: prioritize learner-requested translation of reusable educational materials.
248. **Skill-gap self-assessment journal**: let learners compare a target role’s evidence with their current portfolio.
249. **Community mentor office-hours board**: coordinate volunteer availability with clear boundaries and topics.
250. **Research project milestone planner**: track question, sources, method, ethics review, analysis, and presentation.
251. **Low-bandwidth assignment packager**: bundle instructions, readings, and forms for intermittent connectivity.
252. **Lab safety refresher tracker**: record training completion, equipment restrictions, and renewal dates.
253. **Academic source diversity checker**: prompt students to review date, geography, discipline, and author diversity.
254. **Learning accommodation request planner**: help students prepare a clear, private request and follow-up timeline.
255. **Capstone partner brief board**: make real community project needs discoverable to student teams.
256. **Open badge evidence collector**: connect a credential claim to reviewed work, assessor, and criteria.
257. **Graduate project archive**: preserve reusable student work with permission, licence, and maintenance details.

## Research, data stewardship, and science

Source signals: [OpenAlex API](https://help.openalex.org/api/), [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/), and [NOAA web services](https://www.ncei.noaa.gov/cdo-web/webservices/v2).

258. **Data-management-plan tracker**: turn a research plan into owners, dates, storage locations, and review tasks.
259. **Variable harmonisation workbench**: document how fields from multiple datasets are matched or kept separate.
260. **Open-data release checklist**: verify licence, documentation, format, privacy review, and persistent identifiers.
261. **Research software citation helper**: create consistent software citations from repository and release metadata.
262. **Dataset update subscription service**: notify a user when a chosen public dataset changes its release or schema.
263. **Methodology change comparator**: show how a data publisher’s method changed between two editions.
264. **Fieldwork equipment calibration log**: record calibration, operator, location, and next-due date.
265. **Research participant scheduling board**: manage slots and reminders without placing sensitive responses in the tool.
266. **Open peer-review response mapper**: connect each reviewer point to a change, evidence, or reasoned response.
267. **Literature screening ledger**: track inclusion reasons and source details for a transparent review process.
268. **Data anomaly annotation queue**: preserve a human explanation for suspicious observations and chosen treatment.
269. **Research-cost estimate notebook**: make assumptions, quotations, and budget changes visible to a team.
270. **Lab sample chain-of-custody log**: record transfers, conditions, and location without replacing regulated systems.
271. **Public-dashboard provenance overlay**: show datasets, transformations, refresh time, and known limitations.
272. **Metadata completeness scorecard**: identify missing licence, contact, version, methods, or update information.
273. **Research question version history**: record how a project question changed after evidence or feasibility review.
274. **Pre-registration checklist helper**: organize hypotheses, outcomes, exclusions, and analysis decisions for review.
275. **Public-dataset mirror verifier**: compare checksums and row counts against a documented source release.
276. **Scientific figure data-link checker**: ensure chart labels point to data, code, and method references.
277. **Community research feedback register**: record what local participants asked researchers to change or explain.
278. **Data citation style linter**: check that publications include retrieval dates, versions, and persistent links.

## Creator tools, culture, and community operations

Source signals: [UNESCO OER](https://www.unesco.org/en/open-educational-resources), [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API), and public repository metadata via [GitHub](https://docs.github.com/en/rest).

279. **Community newsletter source board**: track story leads, consent, fact checks, publication dates, and corrections.
280. **Local oral-history consent organiser**: manage recording permissions, access levels, and future review dates.
281. **Event accessibility checklist generator**: prepare access information, quiet areas, captioning, and arrival guidance.
282. **Volunteer shift fairness planner**: balance availability, task load, and rest constraints transparently.
283. **Community repair-event intake tool**: record device type, symptoms, safety limits, and repair outcome.
284. **Creative-commons asset verifier**: help creators record licence, author, attribution, and modification history.
285. **Independent venue access guide**: maintain step-free route, toilet, seating, sound, and contact details.
286. **Local history map annotation tool**: connect a place to sources, oral testimony permissions, and date ranges.
287. **Community moderation decision log**: document rule application and appeal paths without exposing private reports.
288. **Small-festival waste planner**: forecast materials, refill points, collection routes, and measured outcomes.
289. **Shared studio equipment booking tool**: manage access training, usage limits, damage reports, and maintenance.
290. **Library programme idea board**: collect resident suggestions with supporting needs and feasibility notes.
291. **Neighbourhood skills exchange directory**: let people list skills, availability, and safe contact preferences.
292. **Open-source contributor recognition board**: credit code, documentation, translation, design, and support work.
293. **Community archive digitisation queue**: track item condition, scan status, metadata, rights, and storage.
294. **Language-access content planner**: identify public pages needing translation, review, and update ownership.
295. **Mutual-aid distribution ledger**: track aggregate supplies and delivery status without publishing recipient identities.
296. **Creator contract clause library**: collect reviewed, plain-language explanations of common agreement clauses.
297. **Community garden volunteer journal**: record tasks, learning notes, crop outcomes, and supply needs.
298. **Public-art maintenance reporter**: collect condition reports, location evidence, and responsible contact routes.
299. **Open-source documentation translation tracker**: show language coverage, reviewer status, and version drift.

## Hardware, sensors, and maker infrastructure

Source signals: [EPA greenhouse-gas data](https://www.epa.gov/enviro/greenhouse-gas-restful-data-service), [NOAA climate data](https://www.ncei.noaa.gov/cdo-web/webservices/v2), and [USGS earthquake data](https://earthquake.usgs.gov/fdsnws/event/1/).

300. **Weatherproof sensor enclosure guide**: test documented materials, seals, mounts, and maintenance intervals.
301. **Community battery health logger**: record charge cycles, temperature, capacity checks, and replacement decisions.
302. **Low-cost weather-station validator**: compare sensor readings with nearby official stations and flag drift.
303. **Workshop dust-exposure monitor**: display sensor status, filter changes, and ventilation actions.
304. **Accessible smart-home control panel**: prototype large targets, clear state feedback, and offline fallback controls.
305. **Rain-gauge network collector**: aggregate volunteer readings with calibration notes and quality flags.
306. **Solar-panel shading diary**: log recurring shade patterns, photos, and output impact for maintenance planning.
307. **Community freezer temperature monitor**: document safe operating ranges, alerts, and responsible responders.
308. **Water-tank level logger**: combine sensor reading, manual check, and maintenance history.
309. **Pedestrian-counting privacy prototype**: explore aggregate counting methods without storing identifying imagery.
310. **Repairable-device parts catalogue**: document part numbers, tools, teardown difficulty, and disposal options.
311. **Emergency radio readiness tester**: guide periodic battery, channel, antenna, and message drills.
312. **Air-sensor placement planner**: help groups compare potential placement locations and known confounders.
313. **Tool vibration maintenance log**: record use hours, vibration checks, inspections, and service dates.
314. **Open hardware bill-of-materials checker**: validate suppliers, substitutions, licences, and component availability.
315. **Accessible maker-space induction kiosk**: deliver multi-format safety instructions and completion records.
316. **Household water-leak sensor diary**: connect alerts to location, verification, repair, and avoided damage notes.
317. **Shared e-bike maintenance register**: track brakes, tyres, battery checks, incidents, and service ownership.
318. **Civic sensor deployment planner**: record purpose, consent, power, data retention, and removal criteria.
319. **Earthquake shake-alert practice device**: prototype a non-emergency drill signal with accessible feedback modes.
320. **Composting sensor calibration notebook**: compare temperature and moisture sensors against documented manual checks.

## Contribution rule

Do not submit a differently named version of a catalogue item. Improve it by narrowing the target user, replacing an assumption with evidence, identifying existing tools, or proposing a meaningful gap. Use [TEMPLATE.md](TEMPLATE.md) when turning a lead into a complete entry.
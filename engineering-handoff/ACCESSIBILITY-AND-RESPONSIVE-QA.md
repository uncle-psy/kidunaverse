# Accessibility, Responsive, Functional, and Release QA

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Evidence rule

This matrix is a release contract, not a claim that tests passed. Every row requires dated evidence from the exact commit/deployment being released. Use `Pass`, `Fail`, `Blocked`, or `Not applicable`—never “looks good.” A Pass records the route, viewport/assistive setup, steps, observed result, tester/automation, timestamp, and screenshot/log/DOM assertion as appropriate.

Automated checks support but do not replace keyboard, screen-reader, responsive, and visual review.

## Functional QA matrix

| ID | Acceptance | Verification | Required evidence | Gate |
|---|---|---|---|---|
| F-001 | About replaces Home | Inspect rail text/name; click; direct-refresh `/about` | DOM name + screenshot + refresh result | Must pass |
| F-002 | Collapsed About tooltip appears to the right | Hover and keyboard focus | Screenshot/DOM; tooltip must not be hover-only information | Must pass |
| F-003 | Field icon is immediately above Receiver | Inspect rail order and source hash | Screenshot + asset SHA-256 `3112…c6b` | Must pass |
| F-004 | Exact navigation order | Compare all eleven destinations with contract | DOM order assertion + screenshot | Must pass |
| F-005 | Every rail item works by keyboard | Tab/Shift+Tab/Enter/Space | manual log | Must pass |
| F-006 | Source selector defaults to Moto — Catalyst | Fresh/reset session | state assertion + screenshot | Must pass |
| F-007 | Permitted alternate Source view works | Select fixture-granted person | before/after card identities + grant evidence | Must pass if demo grant included |
| F-008 | Unauthorized Source view stays unavailable | Select disabled/denied person | no data flash/network payload; safe message | Must pass |
| F-009 | Reset restores documented baseline | Change joins/mutes/filters/Force/dialogs/Ki then reset | state diff before/after | Must pass |
| F-010 | Field migration has a destination for every prior section | Compare commit `1ce1d77` inventory | migration matrix review | Must pass |
| F-011 | Receiver top-level records are Realms only | Inspect every card/data object | type assertion | Must pass |
| F-012 | Mute and Restore work | Toggle an eligible Realm | state + visible label + result behavior | Must pass |
| F-013 | Muted filter controls visibility | Mute; toggle Muted off/on | result ID assertions | Must pass |
| F-014 | Join adds an unmuted Realm to Field; mute pauses its candidates without removing the join | Join unjoined Realm, return to Field, mute, restore | joined state + candidate ID diffs across all four states | Must pass |
| F-015 | Joined Realm remains in Receiver | Join then inspect library | same Realm ID still present | Must pass |
| F-016 | Join does not establish membership | Inspect copy/state/event non-effects | no membership/count/permission mutation | Must pass |
| F-017 | Joined filter works | toggle and compare IDs | exact result IDs | Must pass |
| F-018 | Realm type/state filters combine | Test type OR + state AND + empty types | truth-table assertions | Must pass |
| F-019 | Receiver search combines with filters | query within narrowed set | exact result IDs | Must pass |
| F-020 | Every Receiver sort works both directions | seven sorts × two directions | ordered Realm IDs and sort-specific announced direction (`newest`, `oldest`, `A–Z`, etc.); generic high/low wording is insufficient evidence | Must pass |
| F-021 | Resources sort handles currency/unknown | compare known/unknown/incomparable | no zero coercion; honest placement | Must pass |
| F-022 | Topics hierarchy works | search/select Topic→Focus→Tag/apply | visible counts/chips and result IDs | Must pass |
| F-023 | Topics Cancel preserves applied state | edit draft then cancel/Escape | before/after state equality | Must pass |
| F-024 | Topics Clear all exposes no hidden selection | clear/apply/reopen | state/DOM equality | Must pass |
| F-025 | Realm Details complete and operable | open/close/Escape/deep link | fields, focus trace, screenshots desktop/mobile | Must pass |
| F-026 | Field filters combine | Projects → Kiduna Dev → own view | exact candidate IDs/layers | Must pass |
| F-027 | Force recomposes same eligible set | compare Gravity with all five alternatives | set equality + changed staging/order + reasons | Must pass |
| F-028 | Five layer capacities enforced | inspect normal and filtered states | `≤3/5/7/12`; safe clusters | Must pass |
| F-029 | Far cluster opens safely | open cluster and bring item forward | eligible IDs only; focus/capacity reason | Must pass |
| F-030 | `Why here?` available for every item | inspect each visible item/list entry | non-private explanation text | Must pass |
| F-031 | Own work is default | fresh/reset session | Source/view grant/candidate assertion | Must pass |
| F-032 | Contextual action previews effect | open representative actions | exact effect + non-effect copy | Must pass |
| F-033 | External action cannot execute silently | attempt Amplify/send/review path | held/prepared state; no provider call | Must pass |
| F-034 | Ki prepares without silently applying external effects | submit representative prompts | proposal/review state + no provider side effect | Must pass |
| F-035 | Ki plus menu is reversible and non-operational | open/close/select each entry | no upload/network effect | Must pass |
| F-036 | Direct and versioned routes work | direct load/refresh all routes/aliases | HTTP/DOM route assertions | Must pass |
| F-037 | Browser Back/Forward restores route/modal state | route and dialog sequence | recorded navigation trace | Must pass |
| F-038 | Existing Transmitter workflow retained | smoke select Seeds/message/destination/review | screenshot + no regression | Must pass |
| F-039 | Existing Connector–Metrics routes retained | smoke every route/control | route matrix | Must pass |
| F-040 | Builder Notes stable sections work | open three required fragments | focused/visible target assertions | Must pass |
| F-041 | Realm Intensity and Range are visible and drive their sorts | inspect cards/Details; sort both directions | exact `realmReception` values and ordered IDs | Must pass |

## Data and system QA matrix

| ID | Acceptance | Verification | Required evidence | Gate |
|---|---|---|---|---|
| D-001 | Trello stays read-only | inspect code/network/actions | no write adapter/request; source label | Must pass |
| D-002 | Board provenance and watermark visible | inspect Field details | board/card/list IDs where appropriate; Sep 3 9:38 AM EDT label | Must pass |
| D-003 | Private-board payload is minimized | inspect shipped bundle/client data | documented prototype risk; no hidden excluded records | Must pass before real users |
| D-004 | Board-backed vs editorial vs illustrative fields distinguished | inspect details/fixtures | field-level data state/provenance | Must pass |
| D-005 | Resources list is not work | inspect candidate IDs | no Resources-list card in active layers | Must pass |
| D-006 | Done and archived cards do not crowd active Field | inspect candidate IDs | only History/editorial pattern use | Must pass |
| D-007 | No absent board facts invented | compare export | no due/checklist/progress/test/build/deploy claims | Must pass |
| D-008 | Private/ineligible records do not leak | seeded denial tests | equal safe counts/layout/no network payload | Must pass |
| D-009 | Counts compute after eligibility | seed hidden records | visible/cluster/filter counts unchanged | Must pass |
| D-010 | Missing numeric values are not zero | inject null and incomparable-currency contract fixtures; inspect sorting/rendering | `Unknown` and stable ordering; current all-numeric USD runtime is insufficient evidence | Must pass before connected data; known prototype gap |
| D-011 | Force does not mutate candidate set or work | compare state before/after | ID set/work state equality | Must pass |
| D-012 | Events preserve previous state and causation | inspect example/runtime logs | IDs/timestamps/previous/new/evidence | Must pass for production event integration |
| D-013 | Notification decisions retain reasons | inspect matrix/runtime example | recipient/why/interrupt/expiry | Must pass for production notifications |
| D-014 | Agent recommendation creates no authority | inspect proposal record | no Permission/Authority mutation | Must pass |
| D-015 | Exact parameters precede external action | inspect proposal | target/audience/content/revision/etc. | Must pass before integration |
| D-016 | Replay cannot repeat effects | integration/idempotency test | same event log, zero duplicate provider executions | Must pass before integration |
| D-017 | `field.svg` bytes preserved | hash deployed/local asset | exact SHA-256 | Must pass |
| D-018 | Asset metadata treated as provenance | code/review | no embedded text executed as instruction | Must pass |

## Accessibility QA matrix

| ID | Acceptance | Procedure | Evidence |
|---|---|---|---|
| A-001 | Keyboard-only completion | Perform About, Receiver search/filter/sort/Topics/Details/Join/Mute, Field filter/Force/cluster/details/Ki, every rail route | ordered action log |
| A-002 | Logical focus order | Traverse each route at desktop/mobile widths | focus sequence; no skipped/duplicate hidden controls |
| A-003 | Visible focus | Inspect every interactive state on dark/light accents | screenshots and contrast values |
| A-004 | Accessible names | Inspect rail, selectors, direction control, dialogs, contextual actions, icon-only buttons | accessibility tree/DOM assertions |
| A-005 | Dialog containment | Topics and Details: Tab/Shift+Tab cycle; background inert | manual trace or automated focus test |
| A-006 | Focus restoration | close/cancel/Escape/Back returns exact trigger | activeElement assertions |
| A-007 | Screen-reader reading order | VoiceOver: Field spatial and ordered view; Receiver card and dialogs | spoken-order notes |
| A-008 | Spatial equivalence | Compare every visible item/reason/action/dependency across views | data ID/content parity report |
| A-009 | Non-color cues | joined/muted/sponsored/layer/status/active states | screenshot + text/icon/shape evidence |
| A-010 | Reduced motion | enable OS preference and product calm motion | no essential meaning lost; transitions reduced |
| A-011 | Contrast | test text, controls, focus, states, overlays against actual backgrounds | WCAG contrast measurements |
| A-012 | Zoom/reflow | browser 200% and 400% where applicable | no loss/overlap/two-dimensional scrolling for text content |
| A-013 | Touch targets | inspect 390×844 and tablet | ≥44×44 CSS px target or documented equivalent |
| A-014 | Long content | seed long Realm/person/title/Purpose/Why here | wrapping, no clipping, readable dialog |
| A-015 | Empty/error/loading/stale states | force each safe state | labelled, actionable, no leak |
| A-016 | Announcement discipline | Join/Mute/filter/Force/action proposal | useful status announcement; no noisy repeated live regions |
| A-017 | Tooltip equivalence | hover/focus/touch access to names | About/rail names available without hover |
| A-018 | Ki does not cover content | scroll/focus/input at all widths | screenshots + intersection check |

Use native controls and semantic headings wherever possible. A visual layer name must appear as text. Curves and position need relationship descriptions. Modals require `role="dialog"`, labelled headings, `aria-modal`, focus containment/restoration, Escape, and mobile operability.

## Responsive viewport matrix

| Viewport | Expected Field treatment | Receiver/Dialogs | Evidence |
|---|---|---|---|
| 1440×900 | full spatial five-layer composition; Ki lifted; clear center and negative space | landscape Details; three-column Topics where legible | full-page screenshots + overflow check |
| 1280×720 | spatial composition remains legible without Ki overlap | compact landscape Details; reachable toolbar | screenshot + keyboard trace |
| 1024×768 | intentional compressed spatial or ordered transition | wrapped filters; dialog fits viewport | screenshot + scroll/overflow trace |
| 768×1024 | ordered presentation preferred or spatial simplified with explicit switch | full-height Topics/Details sheet | screenshot + touch/focus trace |
| 390×844 | single-column ordered equivalent; layer grouping retained; Ki not covering last action | full-screen dialog; 44px controls; no horizontal overflow | screenshot + measured layout |

At every width verify:

- `document.documentElement.scrollWidth <= clientWidth` except a deliberately accessible contained data region;
- all controls are visible/reachable;
- card text is legible and not line-clamped away from meaning;
- header/Source selector/filters wrap or collapse intentionally;
- sticky elements do not cover headings, actions, or focused controls;
- dialog close/Apply/Cancel remain reachable with on-screen keyboard;
- safe-area padding applies on mobile;
- landscape and portrait changes do not lose state.

At 900px or narrower, the renderer explicitly sets the effective presentation to `list`, adds `.is-list-view` and `data-effective-view="list"`, marks Ordered list pressed, and disables Spatial with an accessible explanation that it is available on a wider screen. A-007/A-008 and the 768/390 viewport gates still require browser and assistive-technology evidence; source inspection is not a Pass.

## Route and regression matrix

| Route | Direct refresh | Back/Forward | Image/icon | Console | Primary smoke action |
|---|---|---|---|---|---|
| `/about` | required | required | About mark | zero error | open Builder Notes |
| `/field` | required | required | Field icon/cards | zero error | Source/Force/filter/cluster/Ki |
| `/receiver` | required | required | Realm visuals | zero error | Join/Mute/Topics/Details/sort |
| `/transmitter` | required | required | role icon/Seeds | zero error | compose review without send |
| `/connector` | required | required | role icon | zero error | change safe local tab/state |
| `/creator` | required | required | role icon | zero error | safe draft interaction |
| `/inspector` | required | required | role icon | zero error | search/inspect |
| `/broker` | required | required | role icon | zero error | switch tab |
| `/envoy` | required | required | exact icon | zero error | inspect mandate state |
| `/sentinel` | required | required | exact icon | zero error | change safe local preset |
| `/metrics` | required | required | exact icon | zero error | select purpose/movement |
| `/builder-notes` | required | required | no rail icon | zero error | deep-link three sections |

Also verify versioned route aliases, root redirect behavior, `vercel.json` rewrites, absolute/relative asset loading, cache-busting references, and no stale module version query.

## Visual QA

Review against the supplied screenshot only for:

- asymmetrical balance;
- clear foreground center;
- depth and scale hierarchy;
- calm negative space;
- restrained glow;
- meaningful curves;
- field atmosphere;
- distinction between chrome and composed work.

Reject if the Field becomes a generic dashboard/card grid, if all cards glow equally, if connections are decorative, if tiny metadata dominates, if Ki obscures content, or if the old screenshot content/instrument strip returns.

Required reviewed captures:

1. About.
2. Receiver default.
3. Topics panel.
4. Realm Details.
5. Field / Build Kiduna / Moto / Gravity.
6. permitted alternate Source Field.
7. alternate Force.
8. expanded Far cluster.
9. Inner Clinic.
10. The Nature of Work.
11. Metrics.
12. Builder Notes.
13. 390×844 mobile Field.

For each capture record URL, viewport, state/fixture, commit, timestamp, reviewer, and findings. Screenshots must be inspected—not merely generated.

## Release evidence record

Before declaring completion, append a dated section or separate repository QA artifact with:

- commit SHA;
- deployment identifier and production URL;
- JavaScript syntax/test command output;
- route HTTP results;
- console/error findings;
- asset hash results;
- matrix Pass/Fail/Blocked status;
- accessibility/manual test notes;
- responsive dimensions and overflow measurements;
- links/paths to reviewed screenshots;
- known gaps and accepted risks;
- rollback target.

Any untested required row remains `Not verified`, not Pass.

## Handoff static validation evidence

This section may record only documentation/fixture checks; it does not substitute for browser, accessibility, responsive, or production verification.

| Timestamp | Scope | Result | Evidence |
|---|---|---|---|
| 2026-09-03 13:47:25 EDT | Handoff notice coverage | Pass for current workspace snapshot | 18/18 files contain the exact draft/noncanonical/unpublished notice. |
| 2026-09-03 13:47:25 EDT | JSON syntax and fixture identity | Pass for current workspace snapshot | seven JSON files parse; nine Realm runtime/normalized IDs are unique; required Realm keys are present. |
| 2026-09-03 13:47:25 EDT | Fixture-to-code parity | Pass for current workspace snapshot | nine Realm core records and `realmReception` values match `purposeful.js`; Source allow set matches; Build-Kiduna-only Gravity fixture matches exact 3/5/7/12/2 runtime item IDs. |
| 2026-09-03 13:47:25 EDT | Traceability ID parity | Pass for current workspace snapshot | 70 Markdown IDs equal 70 `traceability.json` IDs. |
| 2026-09-03 13:47:25 EDT | Stable code/fragment trace targets | Pass for source presence only | all required anchor tokens exist across `app.js`, `purposeful.js`, and `workspaces.js`; Field asset SHA-256 is exact `3112cb5c834482a7b69ded401450289621d0c9f0e522ae2a920e1073ec9f8c6b`; DOM/deep-link behavior still requires browser evidence. |
| 2026-09-03 13:47:25 EDT | Handoff diff hygiene/internal links | Pass for current workspace snapshot | scoped `git diff --check` clean; all relative Markdown links resolve. |
| 2026-09-03 13:55:42 EDT | Reconciled source contract | Pass for source and static assertions only | `node tests/qa-static.mjs` passed after implementation reconciliation; it asserts four adjacent-layer curve bindings, explicit narrow-screen effective-view source, required navigation order, stable fragment tokens, Source allow set, Realm types, assignments, five-layer capacities, Force candidate-set invariance, muted-joined exclusion, and exact Field asset integrity. Browser and assistive-technology evidence remains required. |

## Local release-candidate browser evidence

This evidence was collected against the same working tree as this handoff at `http://127.0.0.1:4173` on 2026-09-03 from 13:35–13:56 EDT. The final delivery report must bind it to the released commit and add the production deployment receipt.

| Scope | Result | Evidence observed |
|---|---|---|
| Direct routes and assets | Pass locally | Fourteen direct routes—including both V0.02 aliases—returned their expected primary heading; no rendered image was broken. |
| Required fragment links | Pass locally | All 20 required targets resolved. `#topic-tuner` and `#realm-details` opened one labelled dialog each. |
| Navigation | Pass locally | About followed by Field, Receiver, Transmitter, Connector, Creator, Inspector, Broker, Envoy, Sentinel, and Metrics; Field uses the exact preserved SVG through `currentColor`. |
| Receiver controls | Pass locally | Realm-only cards; exact requested filter order; all seven sorts reversed to the exact announced opposite order; Muted and Joined combined; Join remained visible and introduced eligible Service Alliance work without creating membership. |
| Topics and Details | Pass locally | Topic→Focus→Tag selection, counts, chips, cascading removal, Apply, Cancel, Escape, inert background, focus containment, and focus restoration worked. Desktop and 390×844 dialogs stayed within the workspace and scrolled with sticky actions. |
| Source and Force | Pass locally | Reset returned Moto/Gravity. Jeya exposed 3 permitted board-backed items and Vijay exposed 7; Aashik remained disabled. Six Forces changed composition while preserving the same 33-ID baseline candidate set. |
| Field model | Pass locally | Baseline capacities were 3 Focus, 5 Near, 7 Active, 12 Context, and one safe Realm cluster containing 6 Far items. Cluster expansion, `Why here?`, complete throughlines, Inner Clinic, The Nature of Work, and preview-only contextual actions worked. |
| Transmitter regression | Pass locally | Added one Seed, entered a Message and Payload name, selected Build Kiduna, reached `Ready for review`, and opened `Review the Signal`; no transmission was executed. |
| Console | Pass locally | Browser log query returned zero errors or warnings after route, modal, filter, Source, Force, and responsive testing. |
| Responsive | Pass locally | At 1440×900, 1280×720, 1024×768, 768×1024, and 390×844 there was no horizontal overflow. The last content cleared Ki at maximum scroll. The 768 and 390 views explicitly reported Ordered list; 1024 and wider reported Spatial. |
| Visual review | Pass locally | Reviewed all 13 required captures. The composition retained a clear center, restrained curved adjacent-layer relationships, asymmetrical Far clustering, negative space, depth, and distinct board-backed versus illustrative states. |
| Screen-reader/zoom/contrast certification | Not verified | Accessibility-tree names/order, keyboard behavior, dialog focus, reduced-motion CSS, non-color labels, and responsive reflow were inspected. A live VoiceOver session, 200/400% zoom session, and instrumented contrast audit were not performed and must not be represented as certified. |

Rows covered above are Pass for the local release candidate. Production availability, provider-backed event/execution behavior, and the explicitly listed certification gaps remain unverified until separately evidenced.

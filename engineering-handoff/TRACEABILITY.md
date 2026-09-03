# Requirement Traceability

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## How to use this map

Trace keys use stable routes, fragment IDs, state keys, and files rather than fragile source line numbers. Before release, confirm each target exists in the final commit and attach evidence from `ACCESSIBILITY-AND-RESPONSIVE-QA.md`. `traceability.json` carries the machine-readable form. A reference to a model/fixture is a specified production contract, not evidence that a production service exists.

## Navigation, routes, and About

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| NAV-001 | Home becomes About with warm temporary page | `app.js`; `purposeful.js`; `/about#about-overview` | F-001 | Product Behavior |
| NAV-002 | About tooltip/right-side pattern, accessible name, keyboard | `app.js`; `styles.css` | F-002, F-005, A-004, A-017 | Product Behavior; QA |
| NAV-003 | Exact Field SVG above Receiver | `assets/interface-icons/field.svg`; `app.js` rail | F-003, D-017 | README |
| NAV-004 | Required eleven-item order | `app.js` `toolRail`/route maps | F-004 | README divergence note |
| NAV-005 | All routes direct-refresh and preserve Back/Forward | `app.js`; `vercel.json` | F-036, F-037 | Data Contracts |
| NAV-006 | Builder Notes is secondary, not rail icon | `/builder-notes`; About/dev link | F-040 | Product Behavior |
| NAV-007 | Source/Role selector next to Reset | `app.js` `#source-selector-top`; `/field#source-selector` explanation anchor | F-006 | Product Behavior |
| NAV-008 | Permission-aware cross-person views | `app.js` hardcoded prototype `sourceOptions[].allowed`; production ViewGrant fixture/contract | F-007, F-008, D-008 | Privacy; Data Contracts; Open Decisions |
| NAV-009 | Reset to default | `app.js` reset/default state | F-009 | Product Behavior |

## Migration and Metrics

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| MIG-001 | Inventory old Field before removal | Git baseline `1ce1d77` | F-010 | Product Behavior current-state inventory |
| MIG-002 | Move network totals/participation/volume/payments/Resources/growth | `workspaces.js`; `/metrics#network-overview` | F-010, F-039 | Product Behavior migration matrix |
| MIG-003 | Move discovery and Realm selection to Receiver | `purposeful.js`; `/receiver#realm-library` | F-010, F-011 | Product Behavior migration matrix |
| MIG-004 | No silent loss | migration matrix row for every prior section/action | F-010 | Product Behavior |
| MIG-005 | Remove create-expression CTA from Field | `purposeful.js` Field renderer | visual/DOM assertion | Product Behavior |

## Receiver

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| REC-001 | Top-level Receiver boxes are Realms only | `purposeful.js`; `#realm-library` | F-011 | Receiver Model |
| REC-002 | Required Realm card fields | Realm card renderer/data | card content assertion | Receiver Model; fixtures/realms.json |
| REC-003 | Mute/Restore | `app.js` Receiver events/state | F-012, F-013 | Receiver Model |
| REC-004 | Join adds to Field and retains in Receiver | `app.js`; joined IDs | F-014, F-015 | Receiver Model |
| REC-005 | Join does not create membership/authority | event non-effects; card/details copy | F-016, D-014 | Receiver Model; Privacy |
| REC-006 | Multi-select Realm filters and summary/reset | `purposeful.js`; `#realm-filters` | F-017–F-019 | Receiver Model |
| REC-007 | Sponsored and represented canonical types | filter renderer/data | F-018 | Receiver Model |
| REC-008 | Distinct Topics button between Sponsored and sort | toolbar; `#topic-tuner` | F-022 | Receiver Model |
| REC-009 | Topic→Focus→Tag search/multi-select/count/chips | Topics dialog/state | F-022, A-005 | Receiver Model |
| REC-010 | Topics Apply/Cancel/Clear and focus restoration | `app.js` dialog events | F-023, F-024, A-006 | Receiver Model |
| REC-011 | Exact seven sorts and adjacent direction | Receiver sort controls | F-020 | Receiver Model |
| REC-012 | Honest Resource/missing/currency sort | production comparator contract pending; current data are numeric USD only | F-021, D-010 | Data Contracts; Open Decisions |
| REC-013 | Warm centered landscape Realm Details | Details dialog; `#realm-details`; `styles.css` | F-025 | Receiver Model |
| REC-014 | Details close/Escape/focus/mobile/deep link | `app.js`; dialog CSS | F-025, A-005, A-006 | Receiver Model; QA |
| REC-015 | Intensity/Range visible and sortable without becoming importance | `purposeful.js` `realmReception`, `realmCard`, `currentRealms` | F-041 | Receiver Model; fixtures/realms.json |

## Purposeful Field and Forces

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| FLD-001 | Field shows purpose-linked work from joined Realms | `purposeful.js`; `/field` | F-014, F-026 | Field Model |
| FLD-002 | No generic Task badge | work-card renderer | content assertion | Purpose Throughline |
| FLD-003 | Action→Activity→Task→Result→Purpose trace | `#purpose-throughline`; item details/data | throughline assertion | Purpose Throughline |
| FLD-004 | Build Kiduna / Kinship Duna / Purpose/result/activity mapping | data/fixture | data assertion | Purpose Throughline |
| FLD-005 | Trello board is read-only snapshot | Field provenance; no writer | D-001, D-002 | Data Contracts; Privacy |
| FLD-006 | Actual board-backed examples used carefully | `fixtures/field-composition.json`; work data | D-004, D-007 | Field Model |
| FLD-007 | Done in History; Resources not work | candidate builder | D-005, D-006 | Field Model |
| FLD-008 | Inner Clinic and Nature of Work illustrative | Field Realm switch/data labels | screenshots 9–10; D-004 | Purpose Throughline |
| FLD-009 | Contextual verbs and effect previews | card/detail action renderer | F-032, F-033 | Purpose Throughline |
| FLD-010 | Five capacity-bounded layers | `#focus-layer`, `#near-layer`, `#active-horizon`, `#context-field`, `#far-horizon` | F-028 | Field Model |
| FLD-011 | Safe Far clusters open/bring forward | cluster state/events | F-029, D-008, D-009 | Field Model |
| FLD-012 | Gravity default and five alternate canonical Forces | `#force-selector`; state | F-027 | Field Model |
| FLD-013 | Same eligible set across Force changes | composition function | F-027, D-011 | Field Model |
| FLD-014 | No opaque universal score | no score field/UI; separate judgments | review + D-011 | Field Model; Privacy |
| FLD-015 | `Why here?` for every item | card/details/list renderer | F-030 | Field Model |
| FLD-016 | Field filters share Realm/Topic vocabulary | `#field-controls` | F-026 | Field Model |
| FLD-017 | Own Source default; permitted team views | `#assignment-view`; ViewGrant | F-031, F-007, F-008 | Field Model; Privacy |
| FLD-018 | Equivalent ordered/nonvisual presentation | `purposeful.js` presentation switch/list renderer; explicit `data-effective-view="list"` at 900px or narrower | Static narrow-view assertion; A-007, A-008 | Field Model; Data Contracts; QA |
| FLD-019 | Spatial reference: depth, balance, curves, restraint | `purposeful.js` binds four curves to adjacent layer IDs and supplies a visible legend plus SVG title/description; `styles.css` supplies the restrained presentation | Static binding assertion; Visual QA; A-008 | Field Model; QA; Open Decisions |
| FLD-020 | Joined-plus-muted Realm is excluded from current candidate set until Restore | `purposeful.js` `eligibleWork`; `app.js` join/mute state | F-012–F-015, D-009 | Field Model; Receiver Model |

## Ki, events, Agents, and Actions

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| KI-001 | Ki centered/lifted and not covering content | `workspaces.js` `universalKi`; `#ki`; `styles.css` | A-018 + viewport matrix | Product Behavior |
| KI-002 | Reversible `+` menu assumption | `workspaces.js` `universalKi`; `app.js` state/events | F-035 | Product Behavior; Open Decisions |
| KI-003 | Ki explains/recommends/prepares | `workspaces.js` `proposeKiActions`; `app.js` review events | F-034 | Product Behavior |
| KI-004 | Ki does not silently execute | no executor/provider calls | F-033, F-034, D-014, D-015 | Privacy |
| EVT-001 | Full Trigger→return chain documented/visible | `/builder-notes#event-model` | F-040 | Events document |
| EVT-002 | Required event fields and Build examples | Builder Notes/data fixture | D-012 | Events; fixtures/event-chain.json |
| EVT-003 | Notification recipient/why/interruption model | `/builder-notes#notifications`; fixture | D-013 | Events; notification fixture |
| EVT-004 | Agent boundaries | Builder Notes | D-014 | Events; Privacy |
| EVT-005 | Typed exact authorization boundary | `/builder-notes#action-boundary` | D-015 | Events; Privacy |
| EVT-006 | Receipts/failures/side effects/new state | model/fixture only; no production executor | D-012, D-016 | Events |
| EVT-007 | Replay never re-executes | specified idempotency boundary; production test pending | D-016 | Events; Privacy; Open Decisions |

## Design, accessibility, and deployment

| ID | Requirement | Code / route | Test | Documentation |
|---|---|---|---|---|
| DES-001 | Design Kit V0.06 / KDS 1.6.0 direction | semantic tokens; `styles.css` | contrast/visual QA | README authority table |
| DES-002 | Exact assets/currentColor/focus/non-color states | assets/CSS/rail | D-017, A-003, A-009 | README; QA |
| A11Y-001 | Keyboard/screen-reader/dialog/reduced-motion/zoom | semantic markup/events/CSS | A-001–A-018 | QA |
| RESP-001 | Five required viewport sizes | responsive CSS | viewport matrix | QA |
| REG-001 | Existing primary routes retained | router/workspaces/components | F-038, F-039 | QA |
| DEP-001 | Existing GitHub/Vercel only | repository config/release procedure | deployment receipt | README |
| DEP-002 | Production and assets verified | live route matrix | route/console/asset evidence | QA |
| DEP-003 | Clean working tree and rollback path | Git/Vercel release record | release evidence | README |
| DOC-001 | Draft Builder-aligned handoff, no canonical mutation | `engineering-handoff/` | marker/inventory validation | all handoff files |
| DOC-002 | Real product-owner Google Doc with stable deep links | final Google Doc + required fragments | link verification | Data Contracts URL list |

## Traceability validation

Before release:

1. verify every referenced file exists;
2. verify every required fragment appears exactly once in the correct route projection;
3. verify every matrix ID is present in `traceability.json`;
4. verify every handoff file carries the draft/noncanonical/unpublished notice;
5. attach QA evidence to the exact release commit/deployment;
6. do not convert a planned test into Pass without evidence;
7. record any implementation divergence in `OPEN-DECISIONS.md` rather than silently drifting.

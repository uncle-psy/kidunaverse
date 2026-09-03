# Field Composition Model

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Definition

Field is the complete Kiduna operating environment. This product screen is a Source-relative Composed projection of eligible, purpose-linked work from joined Realms. It is not a feed, inbox, work-truth database, Receiver grid, engagement rank, or separate reality.

The projection should answer:

1. What matters to this Source in this context?
2. What is the next useful move?
3. Why is it here now?
4. Which Realm and Purpose does it serve?
5. What would the visible action do—and what would it not do?

## Eligibility before composition

The pipeline is strictly ordered:

```text
authorized Source context
  → Realm joined-to-Field preference
  → visibility / privacy / Permission / Consent / Realm boundary
  → valid and non-expired Landings or explicit prototype candidates
  → purpose and work linkage
  → bounded candidate set
  → independent judgments
  → selected Force explanation
  → capacity-bounded staging
  → spatial + ordered-equivalent projections
```

No Force evaluates private or ineligible material. Ineligible work cannot leak through counts, missing positions, glow, curves, animation, loading delays, cluster size, empty-state wording, or `Why here?` explanations.

## Candidate formation

A candidate must have:

- stable item identity;
- current Source and view-grant context;
- joined and eligible Realm;
- Realm and Purpose references;
- work state and provenance;
- visibility-safe member-facing title;
- next-action proposal or an explanation of why none is available;
- source timestamp/snapshot watermark;
- distinct relevance, urgency, materiality, interruption, and evidence states;
- an inclusion reason and reconsideration/expiry condition.

The implemented eligibility predicate additionally requires a Realm to be both joined and unmuted. `joinedRealmIds` expresses personal Field inclusion; `mutedRealmIds` pauses reception without removing that join. A Realm present in both lists contributes zero current work candidates until Restore. This check occurs before filters, Force sorting, layer capacity, visible counts, clusters, and geometry.

Candidate formation records the method, time window, safe candidate count, inclusions, exclusions visible to an authorized inspector, deduplication, clusters, displaced items, and capacity policy. Non-selection does not erase the record.

## Distinct judgments

Do not collapse these into one score:

- Field significance;
- Locus relevance;
- Source relevance;
- urgency;
- interruption permission;
- evidence/verification state;
- current Activity/workflow state;
- Source pins or explicit preferences;
- selected Force influence.

High significance does not automatically create urgency. Urgency does not authorize interruption. Affinity does not create membership. Gravity does not create truth. Sponsorship, recency, volume, prestige, payment, or popularity cannot override privacy or Authority.

## Five layers

| Layer | Capacity | Presentation | Content contract | Movement |
|---|---:|---|---|---|
| Focus | max 3 | largest, foreground, strongest detail | Immediate center of attention; full Purpose cue, reason, state, next action, consequence preview | Source can hold, move Near, inspect, act through review, or ask why. |
| Near | max 5 | medium, visibly connected | Immediately relevant or one move away; enough information to bring forward | Bring to Focus only if capacity/displacement reason is explicit. |
| Active Horizon | max 7 | smaller but individually legible | Active work, dependencies, or emerging decisions | Expand to Near/Focus, inspect, or hold. |
| Context Field | max 12 | compact cards/markers with stable identity | Supporting work and lower-priority eligible context; meaningful visual grouping | Inspect, filter, bring closer, or send farther. |
| Far Horizon | safe cluster summaries | quiet background clusters, not infinite points | Eligible material grouped by Realm, Activity, Result, Topic, status, or another recorded basis | Open cluster, view accessible members, or bring a selected eligible item forward. |

Capacities are hard maximums for one composition. Fewer items are allowed. Empty space is an intentional signal of bounded attention, not evidence that hidden material exists.

The Transceiver Specification uses Focus, Near, Held, Interrupt, not selected, and blocked attention outcomes. This product’s Active Horizon, Context Field, and Far Horizon are presentation subdivisions for eligible non-Focus/non-Near material; they do not silently replace or redefine the normative Transceiver states. Persist the underlying attention/staging state separately where available.

## Default Build Kiduna Gravity composition

The read-only private Trello snapshot has 29 open source-work candidates before Source/Realm eligibility: 15 Backlog, five In Progress, and nine Review. It has zero Ready cards at the snapshot. Done is History; Resources is supporting material. With Moto, all three default joined Realms, no Field filter, and all three unmuted, the current prototype adds four illustrative personal items for a 33-item eligible set. The Build-Kiduna-only fixture intentionally filters back to the 29 board-derived items.

The defensible prototype composition for Moto uses explicit review requests, current list, board order, and recency as distinct evidence—not one rank.

### Focus — three review requests

- Acquiring free Chips — review the chip flow; Muthu explicitly requested David/Moto feedback.
- Create Cell — review the Cell flow; comments request review.
- Create Alliance — review the Alliance flow; Muthu explicitly requested review.

These actions open supplied evidence and prepare feedback. They do not approve, publish, create a Realm, or establish Authority.

### Near — five open In Progress cards

- Mapping — creation Engine
- Maintain Websites
- Video Streaming and YouTube integration into Theater
- Transceiver
- Realm Management — Roles

The board provides no due dates, checklists, completion percentages, test results, build results, or deployment receipts. The UI must not invent them.

### Active Horizon — six additional open Review cards

- Voice chat directly between players
- Create tournaments and leaderboard
- Launchpad
- Create Proposals — Agents
- Set Policy — Decision Markets
- Elector — Call it Envoy

### Context Field — up to twelve Backlog records

Use compact, identified markers for the first twelve eligible Backlog cards in board order. They are not assignments to Moto merely because they are visible.

### Far Horizon

Group the two remaining eligible Backlog records—Fantasy — Seven-layer Scenes and Sports — Seven-layer Scenes—as `Two later explorations`. Its count is computed after eligibility. Opening the cluster reveals only those two safe records.

The exact fixture is `fixtures/field-composition.json`.

## Forces and recomposition

Gravity is the default. The interface also demonstrates Affinity, Attention, Constraint, Momentum, and Renewal, all of which are registry-current canonical Forces.

Each Force changes the explanatory lens and order over the same eligible candidate IDs:

| Force | Product question | Defensible evidence examples |
|---|---|---|
| Gravity | What matters here, to this Source, now? | explicit request, current responsibility, direct dependency, active Purpose, review need |
| Affinity | What shares a relationship, interest, experience, value, or complementary need? | shared Realm/Topic, typed relationship, collaboration; never inferred membership |
| Attention | What is being consciously encountered now? | current selection, explicit pin, active conversation; never engagement capture |
| Constraint | What limit or dependency shapes what can proceed? | blocker, missing review, privacy, capacity, dependency, time, safety |
| Momentum | What is already moving, and what is it carrying? | recent attributable state transitions and continued Activity; movement alone is not success |
| Renewal | What is being repaired, restored, replenished, or made capable of flourishing? | maintenance, test cleanup, care, documentation, recovery, succession |

Algorithm contract:

1. Freeze the eligible candidate ID set and eligibility trace.
2. Derive one Force-specific explanation per eligible item using declared evidence.
3. Preserve independent judgments; no universal score is displayed or stored as truth.
4. Order and stage within capacities using stable tie-breaks.
5. Record moved/displaced items and reasons.
6. Re-render both spatial and ordered views from the same staging result.
7. Never mutate underlying work, assignments, board state, Realm joins, or shared Field truth.

A join, mute, filter, Source, time, or visibility change is a separate eligibility event and may legitimately change the set. A Force change alone may not.

`Why here?` must say which evidence and Force contributed in member-facing language. It must not reveal excluded candidates or private policy facts.

## Field filters

Field supports:

- represented Realm type;
- joined Realm;
- Project selection;
- Topic, Focus, and Tag;
- status or Activity where useful;
- current Source or an authorized team view;
- Force;
- reset;
- spatial/ordered accessible presentation.

Filtering occurs after eligibility and before capacity staging. A narrower filter recomputes layers from the visible eligible subset; it does not expose how many records were excluded for privacy. The expected Kiduna Dev path is: Projects only → Kiduna Dev only → own view → optionally another explicitly permitted Source or authorized whole-project view.

## Source-relative assignment views

The Field defaults to the signed-in Source. A named selector option is not a grant. Each switch requires a `ViewGrant` resolution.

The Trello provenance distinguishes David Levine from the display identity Moto. The UI may display Moto while the provenance record retains David’s board member ID/name. David/Moto has no direct open card assignments in the snapshot; Focus is based on explicit review requests and contextual responsibility, not fabricated assignment.

An authorized team view may show other members’ board-backed assignments. An unauthorized selection leaves the current view unchanged and states that the view is unavailable; it must not render then hide the other person’s work.

## Additional Realm examples

### Inner Clinic

- Purpose: better health.
- Result examples: weight loss, muscle gain.
- Next moves are explicitly prototype examples, not clinical directives, diagnoses, live care, or medical claims.
- Actions use `Review plan` or another low-consequence preparation verb; no health plan is applied automatically.

### The Nature of Work

- Purpose: more fulfillment.
- Result examples: increased salary, a better job.
- Next moves may include clarify target role, improve portfolio, request an introduction, or prepare for a salary conversation.
- These are illustrative unless connected to Source-authorized data; no salary, opportunity, deadline, or message is claimed as real.

## Contextual actions

Each item separates interaction from execution:

```text
member selects contextual verb
  → show exact proposed effect and evidence
  → allow inspect/revise/cancel
  → if reversible local presentation: apply and record
  → if consequential/external: construct typed Action proposal
  → deterministic authorization
  → execute only if allowed
  → display attributable receipt/failure
  → return new state to the same Field context
```

The polished button is never authority. See `EVENTS-TRIGGERS-AGENTS.md`.

## Spatial composition contract

The screenshot contributes only compositional language:

- deep, quiet atmosphere;
- calm negative space;
- a clear center of gravity;
- asymmetrical balance;
- foreground/background scale differences;
- curved movement between adjacent layers with stated semantics;
- restraint rather than glowing every item.

Do not restore its old instrument strip, copy, or card subjects. The four current `field-connection-lines` paths each bind one adjacent layer pair through `data-from` and `data-to`: Focus→Near, Near→Active Horizon, Active Horizon→Context Field, and Context Field→Far Horizon. Their declared meaning is possible movement between layers when eligibility, filters, or Force changes. They do not encode an item dependency, urgency, or Authority relationship.

The curve legend is visible and referenced by the Field container. The SVG has its own title and description. Actual item dependencies are named in cards, details, and the ordered equivalent. If a later iteration adds item-to-item relationship lines, those lines need attributable typed records and equivalent text and must remain visually and semantically distinguishable from the adjacent-layer movement curves.

## Ordered accessibility equivalent

The list view is a first-class projection, not a fallback dump. Each item exposes:

- layer and ordered position;
- `Why here?`;
- Purpose and intended Result;
- Realm;
- assignee/source context;
- work state/Activity;
- next action and previewable effect;
- dependencies;
- data source and state;
- accessible relationship descriptions.

Changing view does not change the candidate set, selected Force, filters, Locus, or Source context.

## Composition invariants

1. Eligibility and privacy precede Force and layout.
2. The eligible candidate ID set is identical across Force switches unless a separate filter/context change occurs.
3. Capacities never exceed 3 / 5 / 7 / 12 / safe clusters.
4. Counts are computed after visibility resolution.
5. Force influences remain explanations, never universal importance.
6. Spatial and ordered views expose equivalent meaning and action.
7. Curves declare only possible movement between their bound adjacent layers and never imply an item dependency, urgency, or Authority relationship.
8. Completed work stays in History by default.
9. Resources-list cards remain supporting material.
10. Board snapshots are labelled with a timestamp and never `live`.
11. Source-relative recomposition never mutates shared Field truth.
12. No visible action silently crosses the Action boundary.
13. Joined-plus-muted Realms remain joined but contribute no current candidates.

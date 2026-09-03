# Events, Triggers, Agents, Notifications, and Return State

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Complete chain

```text
Trigger
  → Event
  → Signal
  → eligible destination
  → Delivery Landing
  → Semantic Landing / typed work relationship
  → materiality explanation
  → bounded candidate set
  → staging layer
  → Force composition
  → member response
  → proposed Action
  → deterministic authorization
  → execution receipt / failure / side effects
  → new attributable state and return Signal
```

The prototype site demonstrates this model but does not claim a production event bus, live Trello webhook, authorization service, notification provider, or Action executor. UI state transitions are rehearsal evidence only.

## Trigger versus Event versus Signal

- A **Trigger** is a condition or incoming stimulus: webhook arrival, timer, threshold, explicit click, connector response, or observed state change.
- An **Event** is the append-only attributable statement that something happened in the system.
- A **Signal** is the immutable envelope describing something that may matter in Field.
- A **Delivery Landing** records that an authorized view reached a bounded destination.
- A **Semantic Landing** records what an assertion means through a typed relationship to an identified subject.
- A **Staging Decision** makes an eligible candidate Focus, Near, Held/presented farther away, Interrupt, not selected, or blocked for a Source/context.
- An **Action** is a separate strongly typed operation with exact parameters and authorization.

Reception, delivery, semantic relationship, attention, acceptance, commitment, and Action never collapse into one state.

## Required event envelope

Every important event records:

- `eventId`, contract version, event type, and timestamp;
- originating system or person and stable identity;
- correlation ID, causation ID, idempotency key, and supersession reference where applicable;
- Realm, Purpose, and affected work item;
- previous state and new state;
- evidence references and evidence state;
- visibility, sensitivity, retention, and eligible audience;
- intended recipients;
- why any notification is justified;
- whether interruption is allowed and on what basis;
- expiry or reconsideration condition;
- resulting receipt, failure, and side effects when applicable;
- source snapshot/watermark for imported data.

Events are append-only. Corrections and reversals append new events rather than rewriting history.

## Build Kiduna trigger/event model

| Trigger | Event / Signal | Candidate effect | Notification default | Action boundary |
|---|---|---|---|---|
| Authorized Trello import | `board.snapshot_imported` → state-change Signals | Rebuild source-backed candidate projection at one watermark | no interruption; show snapshot label | Import writes local projection only; never writes board. |
| Verified webhook reports card creation | `work.created` | Eligible only after Realm/Source/privacy/Purpose resolution | assignee if a real assignment exists and policy permits | Creating/assigning a card in Trello is separate. |
| Assignment changed | `work.assignment_changed` | Reassess Source relevance and candidate membership | new assignee; optionally prior assignee if removal policy says so | Notification/send separate; assignment change itself requires source-system authority. |
| List/status changed | `work.status_changed` | Reconsider layer using status as one evidence input | ordinarily ambient; reviewer may be notified on explicit review request | No automatic approval/completion. |
| Comment added | `work.comment_added` | May create direct review/request relationship | mentioned/responsible people if visible and permitted | Reply/send is separate. |
| Dependency added/cleared | `work.dependency_changed` | Constraint explanation; blocked/unblocked reconsideration | assignee and responsible dependency owner if policy allows | Reassignment/message/action separate. |
| Due date added/crossed | `work.due_changed` / `threshold.crossed` | Urgency judgment; does not alone allow Interrupt | assignee; interrupt only with explicit deadline policy | Editing due date or messaging is separate. |
| Pull request opened/updated | `code.review_requested` | Reviewer’s Near/Focus candidate | requested reviewer | Approve/merge is typed external Action. |
| Test result | `test.completed` | Evidence update; failed result may raise Constraint | pass: no interruption; fail: responsible person if policy allows | Re-run/fix/commit separate. |
| Build result | `build.completed` | Evidence and release-readiness update | pass ambient; fail to current release owner | Retry/release separate. |
| Deployment result | `deployment.completed` / `.failed` | Receipt/evidence; failure may qualify for Interrupt | current release owner if failure policy allows | Deployment execution requires exact revision/environment. |
| Realm joined to personal Field | `field.realm_joined` | Makes authorized Realm work eligible for this Source only when reception is not muted | no external notification | Does not create membership or shared change; joining a muted Realm preserves mute. |
| Realm muted/restored | `receiver.realm_muted` / `.restored` | Changes personal Receiver visibility and excludes/restores that joined Realm’s current Field candidates | no external notification | Personal reversible reception preference; join state is preserved. |
| Realm Intensity/Range changed | future `receiver.realm_intensity_changed` / `.range_changed` | Reorders visible, already eligible Realm presentation | no external notification | Not implemented in this iteration; current `realmReception` values are static fixture metadata. |
| Topic selection applied | `receiver.topics_applied` | Changes discovery/filter criteria | no external notification | Local preference only. |
| Force changed | `field.force_changed` | Recompose same eligible candidate IDs | no external notification | Local projection only. |
| Ki recommends change | `ki.recommendation_prepared` | Show reviewable proposal | no interruption unless directly requested | Recommendation has no Authority. |
| Member acknowledges | `landing.acknowledged` | Preserve seen/deferred/investigate/etc. disposition | normally none | Does not equal acceptance, completion, or Action. |
| External action requested | `action.proposed` | Open exact preview and authorization path | authorized reviewer if hold policy says so | Execution is impossible before allow. |
| Provider responds | `action.executed` / `.failed` | Append receipt, effects, failure, and return Signal | initiator/responsible parties based on consequence | Replay must not execute again. |

## State transitions

### Work projection

```text
source snapshot/event
  → received
  → normalized
  → context resolved
  → eligible | held | excluded
eligible → candidate → focus | near | active_horizon | context_field | far_cluster | not_selected
any eligible stage → restaged by new evidence, Source control, filter, time, or Force
completed → history
```

Active Horizon, Context Field, and Far Horizon are product presentation layers over the normative attention model, not new canonical states.

### External action

```text
proposed → prepared → drafted → reviewed → authorization
authorization → allow | hold_for_approval | deny
allow → execute → verify → complete | failed | partially_complete
complete/failed → reverse where authorized and possible
```

Every production transition appends the prior and new state with causation. Projection replay never repeats `execute`. The current static client mutates local state and announces a toast; it does not yet append these event records. The fixture describes the required connected implementation rather than claiming the browser is an event store.

## Agents and boundaries

| Capability | Ki / Ally / Actor may | Must not |
|---|---|---|
| Interpret | summarize, classify, propose typed relationships with uncertainty | state inferred relationships as stable facts |
| Compose | form bounded candidates, explain staging, produce accessible projections | inspect forbidden material or hide ranking logic |
| Recommend | suggest filters, Force, next move, recipients, or draft parameters | create Authority, Consent, Permission, membership, or commitment |
| Prepare | draft feedback, message, test request, deployment checklist, vote review, or membership request | send, merge, deploy, publish, assign, pay, vote, grant, or delete without exact authorization |
| Notify | prepare a notification decision with reason, audience, and interruption basis | broadcast by default or notify from private counts |
| Execute | only an authorized Action executor may use exact allowed parameters | accept a raw Signal, UI click, recommendation, or Landing as execution authority |

Ki is continuous Ecosystem intelligence, not a Source, Avatar, Ally, Actor, or holder of Authority. A named Agent must retain its canonical identity (Ally or Actor), governing Source/Realm, scope, integration state, and Permissions.

## Notification decision model

Every notification proposal asks:

1. Who is responsible or directly affected?
2. What new fact or state changed?
3. Is the view eligible and minimized for that recipient?
4. Why does the person need to know?
5. Why now?
6. Is interruption allowed, merely ambient, or prohibited?
7. What acknowledgement is expected?
8. When does the notification expire or suppress?
9. What receipt proves delivery, and what does it not prove?

### Default matrix

| Event | Recipient | Presentation | Why | Interrupt? |
|---|---|---|---|---|
| New verified assignment | assignee | Near/notification center | responsibility changed | when available by default; not immediate unless policy says so |
| Direct review request | requested reviewer | Near or Focus | their review is explicitly requested | when available; Focus may change without OS interruption |
| Blocker | assignee + responsible dependency owner | Constraint cue; notification if policy allows | work cannot proceed and both have a role | policy-dependent; never infer owner |
| Test passed | no person by default | evidence update on item | positive evidence changed | no |
| Test failed | responsible builder/release owner | evidence + Constraint | failure may require correction | when available; immediate only for governed production risk |
| Deployment failed | current release owner | Interrupt overlay if policy/evidence allow | material release failure | may interrupt under exact policy |
| Result completed | contributors/owners within visibility | History/completion context | acknowledge contribution and outcome | no public broadcast by default |
| Purpose-level risk | appropriate Catalyst/steward | minimized risk summary | legitimate responsibility | policy-dependent; no private details |
| Realm joined/muted or Force/filter change | current Source only | local status | personal preference changed | no |
| Ki recommendation | current Source | inline proposal | requested or contextually useful suggestion | no automatic interruption |

Delivery does not prove the human saw a notification. Fetching does not acknowledge. Human acknowledgement is explicit and attributable.

## Example: direct review request

`fixtures/event-chain.json` models a board-backed comment/request for Acquiring free Chips:

1. A static authorized import records the Trello snapshot watermark.
2. The source comment and Review list state become attributable Signals.
3. A minimized view lands in Moto’s current Locus pool.
4. A candidate semantic relationship proposes `requests_review_from` Moto; editorial mapping remains labelled.
5. Materiality notes Purpose/workflow consequence without claiming correctness.
6. Gravity stages it in Focus because of the explicit review request and current context.
7. Moto selects `Review the chip flow`.
8. The site opens evidence and prepares feedback—no external Action yet.
9. If Moto chooses to send feedback, an exact message/comment Action is proposed and authorized separately.
10. A provider receipt or failure returns to the same Field trace.

## Example: passing test

A verified test adapter reports a passing suite for an exact revision:

- append `test.completed` with suite, revision, environment, source, timestamp, and evidence;
- update completion evidence/materiality;
- do not interrupt by default;
- do not mark the feature complete unless all governed conditions are satisfied;
- do not deploy;
- replay only rebuilds the evidence projection.

## Example: failed deployment

A configured deployment provider reports failure:

- verify provider signature and deployment ID;
- create a failure Signal with exact revision/environment/error boundary;
- minimize details for each eligible recipient;
- notify the current release owner when policy allows;
- Interrupt only if a governed production-risk threshold is met;
- offer `Review failure` or `Prepare rollback`, not an automatic rollback;
- require a typed Action and current authorization before any rollback/promotion;
- return provider receipt and side effects.

## Reliability and replay

- Inbound transport may be at-least-once; Landing and Action boundaries are idempotent.
- Deduplicate on explicit idempotency key or stable source event identity inside a declared window.
- One destination may allow while another holds or denies; partial success remains explicit.
- Projection failure cannot erase a successful Landing.
- Poison/ambiguous material quarantines rather than looping.
- If durable Action recording is unavailable, external execution fails closed.
- Retries cannot widen audience, content, visibility, value, or parameters.
- Changed material parameters invalidate approval and require a new proposal.
- Projection replay never invokes the external executor.

## Observability

Authorized builders should trace:

```text
visible card / Ki response
  → composition state
  → staging decision
  → bounded candidate set
  → materiality explanation
  → semantic relationship
  → Delivery Landing
  → transform + policy + route
  → Signal assertion
  → original material, origin, and evidence
```

For an Action:

```text
offered verb → Source intent → Action proposal → exact parameters
  → Authority / Permission / Consent / policy → approval
  → execution → receipt / side effects → return Signal / composition
```

Operational measures may cover receipt rates, duplicate rate, quarantine age, Landing latency, candidate-set size, explanation completeness, privacy-leak tests, composition churn, interrupt frequency, Source overrides, Action holds/denials, projection lag, and recovery time. They must never become hidden human rankings.

## Event invariants

1. Every event has stable identity, timestamp, attribution, causation, visibility, and evidence state.
2. No Signal is an Action.
3. No Delivery Landing proves attention, acceptance, or semantic truth.
4. No recommendation creates Authority.
5. No notification is sent without a recipient-specific visibility decision and reason.
6. No urgency alone authorizes interruption.
7. No external Action executes without exact parameters and deterministic authorization.
8. No replay repeats an external effect.
9. Every execution or failure returns an attributable receipt and new state.
10. No private fact leaks through counts, layout, notification wording, or absence.

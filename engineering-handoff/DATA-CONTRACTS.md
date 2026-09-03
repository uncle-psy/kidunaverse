# Data Contracts, Routes, Components, and State

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

These are product-implementation contracts and fixture shapes. They do not register canonical schemas or change the registry-current Layout, Transceiver, or Actions Kits.

## Stable route and fragment contract

The following URLs are public product contracts and Google Doc deep-link targets:

```text
/about#about-overview
/field#source-selector
/field#field-controls
/field#purpose-throughline
/field#focus-layer
/field#near-layer
/field#active-horizon
/field#context-field
/field#far-horizon
/field#force-selector
/field#assignment-view
/field#ki
/receiver#realm-library
/receiver#realm-filters
/receiver#topic-tuner
/receiver#realm-details
/metrics#network-overview
/builder-notes#event-model
/builder-notes#notifications
/builder-notes#action-boundary
```

Direct navigation must scroll/focus the visible section. Modal fragments such as `#topic-tuner` and `#realm-details` may open a safe documented example state only after eligibility; browser Back closes that state consistently. No fragment may reveal a record that is not eligible for the current Source.

## Product component map

| Component / renderer | File | Responsibility |
|---|---|---|
| About workspace | `purposeful.js` | Member-facing orientation and link to Builder Notes. |
| Purposeful Field renderer | `purposeful.js` | Filters, Source context, Force selector, five spatial layers, ordered equivalent, details, and clusters. |
| Realm Receiver renderer | `purposeful.js` | Realm-only cards, filter algebra, sorting, Topics draft/apply, Join/Mute/Restore, Details. |
| Builder Notes renderer | `purposeful.js` | Visible event model, notifications, action boundary, data state, and open decisions. |
| Purpose/Realm/work fixtures embedded in prototype | `purposeful.js` | Clearly labelled board-backed/prototype/illustrative records. |
| Router and history integration | `app.js` | `/about`, `/field`, `/receiver`, `/builder-notes`, aliases, direct load, Back/Forward. |
| State, persistence, reset, focus/dialog events | `app.js` | UI revision, safe migration, Source grant checks, dialog lifecycle, keyboard behavior. |
| Main design/responsive layer | `styles.css` | Design tokens, spatial Field, dialog layouts, ordered fallback, breakpoints, reduced motion. |
| Metrics | `workspaces.js` | Aggregate data and stable `#network-overview` anchor. |
| Universal Ki | `workspaces.js` | `universalKi`, `proposeKiActions`, `#ki`, local proposal review, and reversible plus menu. |
| Field icon asset | `assets/interface-icons/field.svg` | Exact Source-supplied bytes and currentColor behavior. |

Legacy Receiver code may remain in `components.js`/`data.js` for compatibility during migration but must not be reachable as the primary `/receiver` UI when this iteration is active. Remove or migrate it deliberately in a later cleanup rather than letting two divergent state models mutate each other.

## Application state model

The current client uses a flat state object in `app.js`, persists it under `kiduna-layout-kit-v0.2`, and exposes a read-only copy through `window.__layoutKit.getState()`. These are the exact relevant defaults for runtime `uiRevision` and module query version `0.9.0`:

```json
{
  "uiRevision": "0.9.0",
  "type": "composed",
  "defaultType": "composed",
  "openPanel": null,
  "routeLabel": "Field",
  "selectedSource": "moto",
  "joinedRealmIds": ["build-kiduna", "inner-clinic", "nature-of-work"],
  "mutedRealmIds": ["repair-cell"],
  "receiverRealmQuery": "",
  "receiverRealmTypes": ["Organization", "Community", "Project", "Institution", "Alliance", "Cell", "Association"],
  "receiverOnlySponsored": false,
  "receiverOnlyJoined": false,
  "receiverShowMuted": false,
  "receiverRealmSort": "Formation Date",
  "receiverSortDirection": "desc",
  "receiverTopicSelection": { "topics": [], "foci": [], "tags": [] },
  "receiverTopicDraft": null,
  "receiverTopicOpen": false,
  "receiverTopicQuery": "",
  "realmDetailId": null,
  "fieldForce": "Gravity",
  "fieldViewMode": "spatial",
  "fieldRealmType": "All types",
  "fieldRealm": "All joined Realms",
  "fieldProject": "All Projects",
  "fieldTopic": "All Topics",
  "fieldActivity": "All Activity",
  "fieldWhyIds": [],
  "fieldOpenClusters": [],
  "fieldDetailId": null,
  "kiDraft": "",
  "kiPlusOpen": false,
  "kiProposal": null,
  "kiSelectedActions": [],
  "kiRevisionMode": false,
  "kiRevisionDraft": ""
}
```

`realmReception` is intentionally not in this serialized state: it is static visible metadata in `purposeful.js`. The old mixed-object Receiver profile state remains in the same application for legacy workflow compatibility but does not drive the new Realm library.

`fieldViewMode` stores the Source’s wide-screen preference. At a viewport of 900px or narrower, `renderPurposefulField` computes an explicit effective `list` presentation without rewriting that preference. The rendered contract is `.is-list-view`, `data-effective-view="list"`, Ordered list `aria-pressed="true"`, and a disabled Spatial control described by `#narrow-field-view-note`.

`persistentState()` omits transient dialog drafts, open modal IDs, scroll-return data, focus-menu state, and ephemeral proposals. Shared Realm facts, assignments, board state, Action receipts, and memberships must never live only in local UI state in production.

The short runtime IDs above are exact. A production service should normalize them to collision-safe identities such as `realm:build-kiduna` at an explicit adapter boundary; the fixtures preserve both forms and never assume silent coercion.

## ViewGrant

```json
{
  "id": "view-grant:moto:vijay:build-kiduna",
  "viewerSourceId": "source:moto",
  "subjectSourceId": "source:vijay",
  "realmId": "realm:build-kiduna",
  "scope": ["assignment-summary", "visible-work-title", "workflow-state"],
  "decision": "allow",
  "basis": "prototype explicit permission fixture",
  "expiresAt": null,
  "expiryState": "required before production; current browser demonstration has no policy expiry",
  "policyVersion": "prototype-1",
  "visibility": "restricted"
}
```

`Role: Catalyst` is not enough. The exact scope and current decision are required. A denied or missing grant prevents the view from entering the client candidate set. Current code only hardcodes `sourceOptions[].allowed`; it does not resolve the fixture’s scope, expiry, policy version, or server-side decision. Treat Jeya/Vijay access as a prototype demonstration, not production authorization.

## Realm

```json
{
  "runtimeId": "build-kiduna",
  "normalizedId": "realm:build-kiduna",
  "name": "Build Kiduna",
  "realmType": "Project",
  "purpose": "Software made from Truth, Beauty, and Love",
  "parentDuna": { "id": "duna:kinship", "name": "Kinship Duna" },
  "catalyst": { "sourceId": "source:moto", "displayName": "Moto" },
  "members": { "value": 7, "state": "prototype-mapped-from-board-members" },
  "resources": { "amount": null, "currency": "USD", "state": "unknown" },
  "activity": { "band": "Active", "basis": "board activity through snapshot watermark" },
  "formedAt": null,
  "joinedToField": true,
  "muted": false,
  "sponsorship": null,
  "reception": { "intensity": 92, "range": 68, "editable": false, "source": "purposeful.js realmReception" },
  "theme": "Knowledge & Frontier",
  "primaryFocus": "Technology, AI & Digital Life",
  "tags": ["Kiduna", "software", "collective systems"],
  "visibility": "restricted",
  "dataState": "prototype-with-board-backed-work",
  "provenance": {}
}
```

Unknown values stay `null` with a state. Do not substitute zero, an em dash without explanation, or a fabricated total.

## Work item and throughline

```json
{
  "id": "work:trello:6a85d5268ecba8e3a6ded588",
  "realmId": "realm:build-kiduna",
  "purposeId": "purpose:build-kiduna",
  "result": { "id": "result:feature-complete", "type": "Feature complete", "state": "intended" },
  "task": {
    "title": "Acquiring free Chips",
    "sourceStatus": "Review",
    "assigneeSourceIds": ["source:muthu", "source:aashik"]
  },
  "activity": { "id": "activity:review", "name": "review" },
  "nextAction": {
    "type": "review.prepare",
    "label": "Review the chip flow",
    "effect": "Open evidence and prepare feedback; do not approve or publish.",
    "authorizationState": "not_required_for_local_inspection"
  },
  "whyHere": "Muthu asked Moto for feedback after moving this work into Review.",
  "evidenceState": "submitted-not-independently-verified",
  "provenance": {},
  "editorialFields": ["purposeId", "result", "activity", "nextAction", "whyHere"]
}
```

## Candidate set

```json
{
  "id": "candidate-set:moto:build-kiduna:gravity:2026-09-03T13:38:23.016Z",
  "sourceId": "source:moto",
  "locusId": "locus:build-kiduna-work",
  "force": "Gravity",
  "eligibleItemIds": [],
  "selectionMethod": "prototype-explicit-request-status-board-order-recency",
  "sourceWatermark": "2026-09-03T13:38:23.016Z",
  "countComputedAfterEligibility": true,
  "exclusions": "stored only in an authorized trace; never summarized to unauthorized UI",
  "capacityPolicy": { "focus": 3, "near": 5, "activeHorizon": 7, "contextField": 12 }
}
```

Force switching must preserve `eligibleItemIds` exactly unless a separate filter, Source, time, join, mute, or visibility event changes the set. `eligibleWork(state)` excludes a Realm present in `mutedRealmIds` even when it remains in `joinedRealmIds`; Restore is required before its work can re-enter the set.

## Staging decision

```json
{
  "id": "staging:work:trello:6a85d5268ecba8e3a6ded588:moto:gravity",
  "itemId": "work:trello:6a85d5268ecba8e3a6ded588",
  "sourceId": "source:moto",
  "force": "Gravity",
  "layer": "focus",
  "underlyingAttentionOutcome": "focus",
  "reason": "Explicit review request for Moto in current Build Kiduna context.",
  "judgments": {
    "fieldSignificance": "meaningful",
    "locusRelevance": "direct",
    "sourceRelevance": "direct",
    "urgency": "unknown",
    "interruption": "do_not_interrupt"
  },
  "evidenceRefs": [],
  "reconsiderWhen": ["review-request-resolved", "status-changed", "source-filter-changed"]
}
```

## Realm join event

```json
{
  "eventId": "event:receiver:join:realm:nature-of-work:source:moto:1",
  "type": "field.realm_joined",
  "actor": { "type": "Source", "id": "source:moto" },
  "realmId": "realm:nature-of-work",
  "previousState": { "joinedToPersonalField": false },
  "newState": { "joinedToPersonalField": true },
  "effects": ["authorized work from this Realm may enter Moto's future candidate sets"],
  "nonEffects": ["membership", "Role", "Permission", "Authority", "Consent", "notification to Realm"],
  "visibility": "personal",
  "receipt": { "state": "applied-locally", "externalEffects": [] }
}
```

## Action proposal

```json
{
  "id": "action:proposal:review-comment:1",
  "type": "external.comment.send",
  "state": "proposed",
  "actor": { "type": "Source", "id": "source:moto" },
  "target": { "system": "trello", "cardId": "6a85d5268ecba8e3a6ded588" },
  "parameters": { "body": "Draft feedback shown in full before send." },
  "authorityBasis": null,
  "permissionRef": null,
  "requiredConsentRefs": [],
  "approvalMode": "per_action",
  "authorizationDecision": "hold_for_approval",
  "executionReceipt": null
}
```

The static product prototype should not simulate a success receipt for an unconnected provider. It may show `Prepared for review · nothing sent`.

## Event names

Product-specific names should map cleanly into the Transceiver vocabulary:

- `board.snapshot_imported`
- `work.created`, `work.assignment_changed`, `work.status_changed`, `work.comment_added`, `work.dependency_changed`
- `test.completed`, `build.completed`, `deployment.completed`, `deployment.failed`
- `receiver.realm_muted`, `receiver.realm_restored`, `receiver.topics_applied`
- future Realm-tuning events `receiver.realm_intensity_changed` and `receiver.realm_range_changed` only after those values become editable Source/profile state;
- `field.realm_joined`, `field.force_changed`, `field.filter_changed`, `field.cluster_opened`
- `view_grant.evaluated`
- `ki.recommendation_prepared`
- normative Signal/Landing/candidate/staging/composition/Action/continuity events from Transceiver V0.02.

Do not replace normative events with a UI toast. A toast is a projection of a recorded or explicitly ephemeral local change.

## Currency and numeric data

Resources require:

- amount or range;
- currency;
- source and observed time;
- balance/value state (pledged, budgeted, available, restricted, transferred, settled, unknown);
- applicable access boundary;
- optional dated conversion rate/source for cross-currency comparison.

Unknown is not zero. Pledged is not settled. Mixed or incomparable currencies sort after comparable known values and expose the reason.

## Trello adapter boundary

The included Trello file is a static private export, not a connector. Production import must:

- authenticate and authorize the current Realm and Source;
- preserve board, list, card, member, comment, attachment, and action IDs;
- verify watermark and source event identity;
- treat descriptions/comments/URLs as untrusted content data;
- never execute embedded commands;
- map board states without fabricating due dates/checklists/results;
- remain read-only unless a separately typed, authorized Action is implemented;
- preserve David Levine as provenance while optionally presenting Moto as the app display identity.

## Persistence and migration

On UI revision mismatch:

1. parse only known fields;
2. discard transient dialogs/proposals;
3. map recognized safe preferences;
4. do not import legacy mixed Receiver object IDs as joined Realms;
5. restore the documented default when ambiguity remains;
6. append or log a local migration result without claiming shared state changed.

## Fixture and schema status

The JSON files in `fixtures/` are valid examples for this product handoff. They are not registered canonical schemas. Before production implementation, define versioned schemas, validators, policy decisions, event storage, retention, idempotency, and migration tests under the owning repositories/Kits with explicit Source approval.

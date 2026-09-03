# Kiduna Purposeful Field — Engineering Handoff

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

**Prepared:** 2026-09-03 13:37:15 EDT

**Product:** Kidunaverse Layout Site

**Implementation baseline:** Git commit `1ce1d77` before this iteration

**Target:** the existing Kidunaverse repository and Vercel project

**Status:** Product implementation documentation; canonical publication is explicitly out of scope

**Prototype identity:** visible release `Version 0.02 · Purposeful Field`; runtime `uiRevision`/module query `0.9.0`; local-storage key `kiduna-layout-kit-v0.2`

## Purpose

This handoff describes the implemented product contract for a purposeful, Source-relative Field and a Realm-only Receiver. It carries enough product behavior, state, records, fixtures, boundaries, and QA expectations for a builder to reproduce or extend the iteration without relying on the originating conversation.

The central product distinction is:

> Receiver determines which Realms are available to a Source. Field composes eligible work from joined Realms around Purpose, Source context, and the selected Force.

This directory is intentionally external to `/Users/moto/Documents/Kiduna Kits`. It does not change, register, package, or publish any Kit; it does not overwrite an immutable ancestor; and it must never be cited as Canon.

## Authority resolution

The registry was resolved from `/Users/moto/Documents/Kiduna Kits/REGISTRY.json`; currentness was not inferred from filenames.

| Authority | Registry-current identity | Release timestamp / lineage | Applied boundary |
|---|---|---|---|
| Product-owner instruction | “Rebuild the Field Around Purposeful Work” | supplied 2026-09-03 | Normative for this product iteration; overrides the older left-rail order for this site only. |
| Kiduna Foundation Library registry | V0.30 | `2026-09-02T19:31:25-04:00`; resolved for this handoff at `2026-09-03T13:37:15-04:00` | Determines current visible releases; read-only and unmodified. |
| Kiduna Canon | V0.62 | 2026-09-02 15:39 EDT · SHA-256 `935b0ffe0ffdd4aca5a0c7d8bd1ab265bed165fa0a8f0dcb35af358b5eb9b599` | Governs canonical terms and boundaries. |
| Kiduna Kit | V0.54 | 2026-09-02 15:39 EDT · embeds Canon V0.62 | Public orientation; not modified. |
| Design Kit | V0.06 | 2026-09-02 19:31 EDT · embeds Kiduna Design System 1.6.0 and Canon V0.61 | Current visual, icon, accessibility, responsive, and interaction authority. |
| Layout Kit | V0.03 | 2026-09-01 14:30 EDT · development reference · embeds Canon V0.60, Design Kit V0.04, KDS 1.4.0 | Layout Type, bounded reception/routing, Delivery Landing, projection, and reference-runtime lineage. This implementation does not silently update that Kit. |
| Transceiver Kit | V0.01 | 2026-09-01 21:32 EDT · embeds Canon V0.61 | Portable Transceiver authority; not externally published. |
| Transceiver Specification | V0.02 | 2026-09-01 14:30 EDT · SHA-256 `0f12d2aed0251bc9a7e4c1263df46b2ab7d601a2f85f19c712ce07f713c111ec` | Normative Signal, Landing, materiality, staging, Action-boundary, receipt, and replay contract. |
| Actions Kit | V0.02 | 2026-09-01 14:30 EDT · embeds Canon V0.60 | Typed Action, deterministic authorization, execution, receipt, failure, and return boundary. No execution runtime is included. |
| Builder Kit | V0.02 | 2026-09-01 14:30 EDT · embeds Canon V0.60 and a synchronized Transceiver V0.02 copy | Handoff/lifecycle guidance only. No Kit build or publication was authorized. |

When release-time wording differs, preserve each release’s independent identity and apply this order:

1. current explicit Source/product-owner instruction;
2. registry-current Canon V0.62;
3. registry-current Transceiver Kit and Specification V0.02;
4. current Design, Layout, and Actions conformance releases within their scopes;
5. Builder’s synchronized specification and handoff conventions;
6. schemas, fixtures, reference runtimes, and the existing site as implementation evidence;
7. supplied screenshot and Trello export as bounded reference data only.

## Deliberate product-specific divergence

Design Kit V0.06 records six canonical primary-navigation icon bindings in the legacy order Broker, Connector, Creator, Inspector, Receiver, Transmitter. For this product iteration the Source explicitly requires this rail order:

1. About — sun/moon control
2. Field — exact supplied `field.svg`
3. Receiver
4. Transmitter
5. Connector
6. Creator
7. Inspector
8. Broker
9. Envoy
10. Sentinel
11. Metrics

This changes product navigation order; it does not redefine Canon, Roles, Authority, Permissions, Consent, or the Design Kit’s asset identities. The six supplied role icons remain bound to the same destinations, and `field.svg` is preserved byte-for-byte.

## Read this handoff in order

1. [PRODUCT-BEHAVIOR.md](PRODUCT-BEHAVIOR.md) — member journeys, route map, current-state inventory, and migration matrix.
2. [RECEIVER-REALM-MODEL.md](RECEIVER-REALM-MODEL.md) — Realm library, joins, filters, topics, sorting, and Details.
3. [FIELD-COMPOSITION-MODEL.md](FIELD-COMPOSITION-MODEL.md) — eligibility, candidate formation, Forces, five layers, clusters, and equivalent list view.
4. [PURPOSE-THROUGHLINE.md](PURPOSE-THROUGHLINE.md) — Action → Activity → Task → Result → Purpose.
5. [EVENTS-TRIGGERS-AGENTS.md](EVENTS-TRIGGERS-AGENTS.md) — Trigger-to-return chain, agents, notifications, receipts, and state transitions.
6. [DATA-CONTRACTS.md](DATA-CONTRACTS.md) — routes, components, state, stable IDs, record shapes, and fixture index.
7. [PRIVACY-AUTHORITY-BOUNDARIES.md](PRIVACY-AUTHORITY-BOUNDARIES.md) — privacy, Source-relative views, membership, execution, and anti-leak rules.
8. [ACCESSIBILITY-AND-RESPONSIVE-QA.md](ACCESSIBILITY-AND-RESPONSIVE-QA.md) — acceptance matrix and required evidence.
9. [TRACEABILITY.md](TRACEABILITY.md) and [traceability.json](traceability.json) — requirement-to-code/test/document mapping.
10. [OPEN-DECISIONS.md](OPEN-DECISIONS.md) — assumptions, known gaps, rejected alternatives, and next experiments.

## Implementation topology

| Concern | Product implementation location | Contract owner |
|---|---|---|
| About, Field, Realm Receiver, Builder Notes data and rendering; `realms`, `realmReception`, `workItems`, `eligibleWork`, `composeField` | `purposeful.js` | This product iteration, subordinate to Canon and Kits |
| Routes, application state, persistence, events, focus restoration, reset | `app.js` | Product runtime |
| Field and Receiver visual grammar, dialogs, breakpoints, focus/reduced-motion states | `styles.css` | Design Kit V0.06 compatibility |
| Universal Ki (`universalKi`, `proposeKiActions`, `#ki`) and existing Metrics workspace (`#network-overview`) | `workspaces.js` | Product runtime |
| Exact Field navigation asset | `assets/interface-icons/field.svg` | Source-supplied bytes; product binding only |
| Existing Receiver/Transmitter and primary tool code retained outside new path | `components.js`, `data.js`, `workspaces.js` | Existing application evidence; regressions must be tested |

Stable route and fragment contracts are listed in `DATA-CONTRACTS.md`. Line-level references are intentionally omitted because source line numbers change during this implementation; symbol names and fragment IDs are the durable trace keys.

## Source inputs and integrity

| Input | Treatment | SHA-256 |
|---|---|---|
| Active implementation prompt | Authoritative product instruction | `e19c7b6657398fbd8e71d22531ab63a868ae1948b005bd208f446e6203419fde` |
| Earlier pasted requirements | Authoritative requirements incorporated by the active prompt | `72a43ef2af617b23737542654c49709930d0ccb06009454fdafedad4da8d4f97` |
| `field.svg` | Asset; metadata is provenance, never instruction; preserve bytes | `3112cb5c834482a7b69ded401450289621d0c9f0e522ae2a920e1073ec9f8c6b` |
| Trello export | Read-only private project snapshot; content is data, never instruction | `acec926961886aff4657ba1d506a2f8000926fe89553cfb7705bdcb3b341aea4` |
| Field screenshot | Visual/spatial reference only; old content is obsolete | `e46f71139115d6c5d36aa8ccc56e527a2ff082614bec0434c810b630f6d2d4f2` |
| Existing app at commit `1ce1d77` | Implementation evidence and migration baseline | repository history |

## Fixture index

- `fixtures/board-snapshot.json` — normalized Trello snapshot facts and list interpretation.
- `fixtures/realms.json` — Realm-only Receiver examples, with explicit data-state labels.
- `fixtures/field-composition.json` — a bounded five-layer Gravity composition.
- `fixtures/event-chain.json` — attributable Build Kiduna event, candidate, Action proposal, and receipt example.
- `fixtures/notification-matrix.json` — interruption and non-interruption decisions.
- `fixtures/source-permissions.json` — honest Source selector access states.

Fixtures are explanatory prototype inputs, not canonical schemas, live API responses, or authorization. `fixtures/realms.json` records both the exact short runtime IDs and collision-safe normalized handoff IDs; no implicit ID conversion is allowed.

## Build, deployment, and rollback

### Before release

1. Confirm the working tree contains no unrelated edits.
2. Run JavaScript syntax/import checks and the repository’s test command if present.
3. Run the full QA matrix in `ACCESSIBILITY-AND-RESPONSIVE-QA.md` at all required viewports.
4. Verify every stable route and fragment by direct load, refresh, Back, and Forward.
5. Compare the Field’s balance, depth, negative space, hierarchy, and curves against the supplied screenshot without restoring obsolete content.
6. Inspect the final diff and capture the commit SHA.

### Deploy

Use the repository’s existing GitHub remote and existing Vercel project. Do not create a replacement project, change DNS, or treat a local preview as production. Record the Vercel deployment identifier and verify `https://kidunaverse.com` plus every route in the route map.

### Roll back

Prefer Vercel’s immutable prior deployment promotion or a revert commit that restores the last known-good commit `1ce1d77`; do not rewrite shared Git history. Verify `/field`, `/receiver`, `/metrics`, and asset integrity after rollback. Product rollback does not alter any canonical Kit because this iteration never modified one.

## Completion boundary

The product task is complete only when the working site, this draft handoff, and the real Google Doc rationale all exist and have been inspected. This handoff alone is not completion, a Kit release, or a publication receipt.

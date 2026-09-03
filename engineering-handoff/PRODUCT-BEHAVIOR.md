# Product Behavior and Migration

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Product model

The Layout Site has four complementary member-facing destinations:

- **About** answers what Kiduna, Field, Receiver, and Purpose mean in warm language and distinguishes connected data from illustrative prototype material.
- **Receiver** is a library of visible Realms the current Source can tune, mute, inspect, and join to their personal Field.
- **Field** composes eligible work emerging from joined Realms. It answers what matters, what is next, why it matters, and what the Source can safely do.
- **Metrics** contains aggregate, movement-level, network-level, participation, treasury, payment, volume, and growth views.

Builder Notes is a secondary implementation-notes destination linked from About/development context. It is not a primary rail Role.

## Required member journey

1. A signed-in Source opens Field as themselves. Moto — Catalyst is the prototype default.
2. The top selector may show other named Source/Role contexts, but unavailable contexts are disabled or explicitly denied; their mere appearance never implies access.
3. Receiver shows Realms only. A Source can search, combine type/state filters, tune Topics/Foci/Tags, sort, inspect Details, mute/restore, and join a Realm to their Field.
4. Joining adds the Realm to personal composition eligibility and leaves the Realm in Receiver. It does not create legal membership, Role, Permission, Authority, Consent, or governance rights.
5. Field receives only visible, eligible work from joined Realms, applies Source-relative context, then recomposes that same candidate set using the selected Force.
6. Contextual actions explain their effect before a proposal. Anything external or consequential stops at preview/review until exact parameters and deterministic authorization exist.
7. Ki may explain, filter, recompose, prepare, and recommend; it does not silently execute.
8. Reset to default restores a documented baseline across routes, selectors, filters, joins, mutes, Force, dialogs, clusters, Ki drafts, and transient proposals.

## Route map

| Route | Purpose | Direct refresh | Required fragments |
|---|---|---:|---|
| `/about` | Temporary member-facing orientation | yes | `#about-overview` |
| `/field` | Source-relative purposeful work | yes | `#source-selector`, `#field-controls`, `#purpose-throughline`, `#focus-layer`, `#near-layer`, `#active-horizon`, `#context-field`, `#far-horizon`, `#force-selector`, `#assignment-view`, `#ki` |
| `/receiver` | Realm library and personal Field joining | yes | `#realm-library`, `#realm-filters`, `#topic-tuner`, `#realm-details` |
| `/transmitter` | Existing outgoing Signal/Payload workflow | yes | existing route behavior retained |
| `/connector` | Existing Connector workspace | yes | existing route behavior retained |
| `/creator` | Existing Creator workspace | yes | existing route behavior retained |
| `/inspector` | Existing Inspector workspace | yes | existing route behavior retained |
| `/broker` | Existing Broker workspace | yes | existing route behavior retained |
| `/envoy` | Existing Envoy workspace | yes | existing route behavior retained |
| `/sentinel` | Existing Sentinel workspace | yes | existing route behavior retained |
| `/metrics` | Network and movement-level metrics | yes | `#network-overview` |
| `/builder-notes` | Secondary builder-facing system explanation | yes | `#event-model`, `#notifications`, `#action-boundary` plus sections for five layers, Force, candidates, Source views, data state, and open decisions |

Versioned `/v/0.02/<route>` aliases remain compatible with the site’s existing routing contract unless the release explicitly supersedes them.

## Navigation contract

| Order | Destination | Asset | Behavior |
|---:|---|---|---|
| 1 | About | existing sun/moon mark | Visible label `ABOUT`; `aria-label="About"`; same right-side tooltip pattern as other icons; opens `/about`. |
| 2 | Field | exact supplied `field.svg` | Preserved byte-for-byte; `currentColor`; active, hover, focus, disabled, keyboard, accessible label and tooltip. |
| 3–11 | Receiver → Metrics | existing exact destination assets | Required order from `README.md`; icon label never implies Role or authority. |

This order is a Source-directed site-specific divergence from the Design Kit’s legacy six-icon order and is documented rather than hidden.

## Source and Role selector

The selector appears in the top bar adjacent to Reset to default:

| Display option | Role label | Prototype access state |
|---|---|---|
| Moto | Catalyst | enabled; signed-in default |
| Jeya | Mage | enabled by an explicit prototype read-only view grant; no right to act as Jeya |
| Aashik | Mage | unavailable unless permission fixture explicitly allows |
| Sri | Mage | unavailable unless permission fixture explicitly allows |
| Elias | Builder | unavailable unless permission fixture explicitly allows |
| Vijay | Builder | enabled by an explicit prototype read-only view grant; no right to act as Vijay |
| Muthu | Builder | unavailable unless permission fixture explicitly allows |

The Role label is descriptive Realm context, not a portable permission set. In production, a selection resolves a view grant before changing Source context. This prototype checks hardcoded `allowed` state for Moto, Jeya, and Vijay; that check is interaction rehearsal, not an authorization service. Denial preserves the current view and explains that access is unavailable; it must not flash titles, counts, gaps, or assignment information from the denied view.

## Current-state inventory before the rebuild

The pre-change `/field` at commit `1ce1d77` contained:

1. Hero: “Your world, in motion / Find what moves you.”
2. Prototype network glance: people, value moving, contributor payments, shared Resources.
3. Purpose spotlight selector with network/movement aggregate statistics and two calls to action.
4. Discovery heading and result count.
5. Search, format, Realm, Source, sort, and saved controls.
6. Mixed expression cards for invitation, room, pulse, map, film, world, notebook, and game material.
7. Per-card saved, inspect, and open behavior.
8. Existing global rail, title bar, version route, Reset, Ki, and all other tool routes.

## Before/after migration matrix

No removed Field element may disappear silently.

| Prior Field element | New home / replacement | Decision and rationale |
|---|---|---|
| “Your world, in motion” hero | About orientation plus new Field Purpose header | Retire generic discovery framing; Field now orients around purposeful work. |
| Network people total | Metrics `#network-overview` | Aggregate data is network context, not personal work priority. |
| Value-moving total | Metrics `#network-overview` | Preserve with illustrative/prototype status. |
| Contributor payments total | Metrics `#network-overview` | Preserve; do not imply verified settlement. |
| Shared Resources/treasury total | Metrics `#network-overview` | Preserve with currency/data-source labels. |
| Purpose spotlight selector and aggregate cards | Metrics purpose/movement selector | Preserve aggregate purpose summaries without duplicating them in Field. |
| “See the whole picture” | Metrics entry action | Preserve destination with member-facing wording. |
| “Find your place” | Receiver Realm library / join path | Replace generic CTA with reversible Realm discovery and personal Field join. |
| Discovery search and result count | Receiver Realm search/result summary | Discovery belongs at the Realm-availability boundary. |
| Format filter | Intentionally retired from Receiver; Layout Type stays separate | Receiver cards are Realms only, so expression format is not a top-level Realm filter. |
| Realm filter | Receiver Realm-type filters and Field joined-Realm filter | Split availability filtering from work composition. |
| Source filter | Field Source/Role selector with permission gate | Preserve Source-relative view but make authorization explicit. |
| Most recent/oldest/title sort | Receiver’s exact seven-sort contract; Field uses Force/layer composition | Replace generic discovery ordering with domain-appropriate sorting and explainable composition. |
| Saved-only state | Replaced by Realm `Joined` and `Muted` states | `Joined` is the meaningful inclusion control; muted remains visible only when requested. |
| Mixed Expression cards | Realm-owned details in Receiver or work items in Field | Top-level Receiver boxes are Realms; work becomes purpose-linked Field material. |
| Card `Inspect` | Warm Realm `Details`; Field details/`Why here?` | Replace engineer-facing language in member surfaces. |
| Card `Open Expression` | Contextual Realm join/details or Field next-action verb | State consequence before action; no generic `Open`. |
| Card `Save` | `Join` a Realm to personal Field | Join remains reversible and does not remove the Realm from Receiver. |
| Legacy create-expression CTA | Removed from Field | Field does not advertise creation; Creator remains its own destination. |
| Ki input | Centered, lifted conversational composer with reversible `+` menu | Restore conversation without covering essential content. |
| Existing Transmitter/Connector/Creator/Inspector/Broker/Envoy/Sentinel/Metrics routes | Retained and regression-tested | Not superseded by this iteration. |

## Realm Receiver behavior

Receiver cards represent Realms only. Maps, Media, Transmitters, Packages, Nodes, coins, and other objects may appear inside Realm Details but cannot become sibling top-level Receiver cards. `Mute`/`Restore`, `Join`, and `Details` remain distinct actions; see `RECEIVER-REALM-MODEL.md`.

The implemented `realmReception` table in `purposeful.js` supplies visible per-Realm Intensity and Range values. Cards and Details expose those values, and the two corresponding sorts read them. In this iteration they are static prototype tuning metadata, not editable profile state and not evidence of Realm importance or quality.

## Field behavior

Field renders a spatial Composed layout with meaningful scale and calm negative space, then exposes the same card meaning in an ordered equivalent view. It is not a grid relabeled as spatial. The central item is legible. Four visible curves are bound in markup to adjacent layer IDs through `data-from` and `data-to`. The visible legend and SVG title/description define them only as possible movement between layers when eligibility, filters, or Force changes—not as dependency, urgency, or Authority. Actual item dependencies remain explicit text in cards, details, and the ordered view. Five capacity-bounded layers and safe clusters are defined in `FIELD-COMPOSITION-MODEL.md`.

Field eligibility uses the intersection of joined and unmuted Realms. If a Realm is both joined and muted, it remains joined in personal state and recoverable in Receiver, but its work is excluded from the current candidate set until Restore. Joining a currently muted Realm therefore does not surface its work until reception is restored.

## Contextual action behavior

Every visible primary verb has a previewable effect:

- Review opens evidence and prepares feedback; it does not approve, merge, or publish.
- Run checks prepares an exact local/test request; it does not claim results before a receipt.
- Verify staging opens a verification flow; it does not deploy.
- Continue writing opens draft work; it does not publish.
- Amplify opens destination and audience review; it does not post.
- Request an introduction prepares sender, recipient, message, and scope; it does not send.
- Vote/Review opens the exact proposal and mandate; it does not cast a vote.
- Resolve blocker opens the dependency/evidence path; it does not reassign anyone.
- Inspect result reads a completed Record; it does not reopen or mutate it.

## Ki behavior

Ki may:

- narrow filters and explain proposed changes;
- switch the selected Force after confirmation or via reversible local presentation control;
- explain `Why here?` using traceable staging reasons;
- prepare an external Action for review;
- bring eligible work closer or move completed work to History in the local composition.

Ki may not:

- bypass view permissions;
- create a membership, Role, Permission, Consent, or Authority;
- execute sends, posts, merges, deployments, payments, assignments, access changes, or publication silently;
- transform a recommendation into shared truth;
- claim a connector, board, test, build, or deployment is live without evidence.

The reversible prototype `+` menu contains: Attach a file; Add a link; Bring in something from Receiver; Reference a Field item. These entries open preparation states only. Uploads or external services are not activated by this requirement.

## Reset baseline

Reset restores:

- route `/field` and Source Moto — Catalyst;
- Gravity as Force;
- own-work authorized view;
- exact default Realm state: Build Kiduna, Inner Clinic, and The Nature of Work joined; Repair Cell muted; every other Realm unjoined and unmuted;
- default Realm and Field filters;
- collapsed Far Horizon cluster;
- spatial presentation as default with ordered equivalent available;
- no open Topics or Details dialog;
- no pending Ki proposal, Action preview, toast, or transient focus target;
- no fabricated external side effects.

Persisted state carries runtime `uiRevision: "0.9.0"` under `kiduna-layout-kit-v0.2`. A revision mismatch retains only known safe legacy preferences and resets the new Source/Realm/Topic state to defaults rather than misreading legacy mixed Receiver objects as Realms.

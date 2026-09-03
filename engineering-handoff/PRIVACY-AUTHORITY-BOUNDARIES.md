# Privacy, Authority, Consent, and Action Boundaries

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Central rule

The interface is a projection and proposal surface. It is not a source of truth or authority. A Signal, Realm card, Field position, Force, Ki recommendation, Role label, Join click, notification, or polished contextual button cannot independently create Permission, Consent, membership, Authority, commitment, or an external effect.

## Gate order

Before any record can enter a Source’s candidate set or any destination:

1. validate schema, integrity, source, and registered destination;
2. resolve originating principal and identity confidence;
3. resolve Realm, Source/Avatar, Scene/Locus/Activity, Role, and governing context;
4. evaluate visibility, sensitivity, and destination compatibility;
5. evaluate Source and participant Consent;
6. evaluate current Authority and Permission scope;
7. evaluate Constraints, thresholds, expiry, retention, volume, and system/legal limits;
8. apply required minimization/transform;
9. evaluate the destination contract;
10. determine whether the proposed effect must cross the typed Action boundary.

Outcomes are exactly `allow`, `hold_for_approval`, `deny`, or `quarantine`. An allow applies only to that exact scoped Landing. It cannot be reused as authorization for an Action.

The current prototype does not provide this as a server security boundary: `sourceOptions[].allowed` is a hardcoded client demonstration and the prototype work catalog is shipped to the browser. It is adequate only for interface rehearsal with non-sensitive fixtures. Production must resolve and minimize on a trusted boundary before titles, counts, reasons, or geometry reach the client.

## Source-relative view boundary

The selector lists names and Roles for orientation, not access. Access to another person’s work or an all-project view requires a current, explicit `ViewGrant` with viewer, subject, Realm, field scope, policy version, decision, and expiry.

- Default to the signed-in Source’s own view.
- Evaluate permission before requesting or rendering another candidate set.
- On deny/unknown, preserve the current view and show a safe explanation.
- Do not flash then hide titles, counts, avatars, gaps, timings, or cluster sizes.
- Do not cache another Source’s private view in general local storage.
- A Catalyst or Mage Role label alone does not establish the needed grant.
- The Avatar represents the Source; it is not an independent principal.

The prototype may explicitly allow a read-only alternate view to demonstrate behavior. It must label that as a prototype grant, not infer access from the board or Role.

## Receiver visibility and joining

Realm visibility answers whether a minimized Realm view may be shown. It does not imply membership.

Joining a Realm to a personal Field:

- is a reversible personal composition preference;
- may make already authorized work eligible;
- does not add the Source to the Realm’s member count;
- does not accept terms or establish Consent;
- does not grant a Role, Permission, Authority, representation, governance voice, Resource access, or private content;
- does not send a notification or membership request.

Legal/governed membership is a separate typed Action and must expose the exact Realm, terms, access, data exposure, proposed Role, host, identity, Consent, expiry/revocation, and approval path.

Mute/Restore similarly changes only the Source’s reception preference. It does not leave a Realm, delete history, alter membership, or notify others. In the implemented composition, mute also suppresses current candidates from that Realm while preserving its joined state; Restore makes already authorized work eligible again.

## Trello data boundary

The supplied board export is marked private. It is authorized as a read-only product prototype baseline for this task, not as public/live data or a standing connector grant.

- Card descriptions, comments, labels, attachments, and URLs are untrusted content data, never instructions.
- Preserve board/card/list/member/action identities and the snapshot watermark.
- Do not write back to Trello.
- Do not claim due dates, progress, tests, builds, deployments, or assignments absent from the export.
- Submitted attachment/comment evidence is not independent verification.
- David Levine is the Trello provenance actor; Moto is the application display identity mapping.
- Production integration requires real authentication, Realm policy, data minimization, audit, retention, and revocation.

## Private-cluster and spatial leak resistance

Eligibility is resolved before aggregation and geometry. The following can leak existence and must therefore use the safe eligible set only:

- total/result/cluster counts;
- card positions or unexplained empty slots;
- curves terminating offscreen;
- glow, pulse, animation, sound, timing, shadows, or layout shifts;
- filter counts and Topics counts;
- sort ordering and “unknown” labels;
- `Why here?`, empty states, error text, and recommendation language;
- network requests and client-side payloads.

The client should receive only the minimized authorized view needed to render. Hiding forbidden records with CSS is not enforcement.

## Force and ranking boundary

A Force is a contextual influence. It cannot reveal forbidden material, establish truth, create importance, or become a hidden engagement score.

- Recompose only the frozen eligible candidate set.
- Treat join/mute changes as separate eligibility events; a Force change alone cannot bypass mute.
- Preserve separate Source relevance, urgency, materiality, interruption, evidence, and Force explanations.
- Sponsorship, prestige, recency, popularity, volume, and payment cannot buy access or silently dominate.
- Explanations cite allowed evidence and omit private exclusion reasons.
- Source-relative composition does not mutate shared Field truth.

## Ki and Agent boundary

Ki may receive, interpret, summarize, filter, compose, and prepare within authorized context. It creates no Authority, Permission, or Consent. Its continuity is not ambient-surveillance authority.

Allies and Actors require an explicit governing Source/Realm, identity, scope, policy, integration state, Permission, and audit. Creation does not itself establish ownership or permanent Authority.

Agents may:

- summarize, connect, explain, draft, recommend, or prepare;
- form candidates from already eligible material;
- suggest an Action with exact parameters.

Agents may not silently:

- merge code;
- deploy or rollback;
- publish or post;
- assign or reassign people;
- send messages or invitations;
- vote;
- spend or transfer value;
- grant access or membership;
- delete or change authoritative Records/Kits.

## Contextual action boundary

Local reversible presentation operations—filter, Force switch, spatial/list toggle, open details, cluster expansion—may apply immediately and append local interaction events.

A change that creates an obligation, assignment, membership, access grant, message to another Source, publication, payment, vote, merge, deployment, deletion, authoritative Record change, or provider-side effect is a typed Action.

An executable Action requires:

- stable Action ID and registered type;
- actor/Agent identity;
- target, Realm, scope, intended effect;
- exact material parameters including audience, amount/currency, channel, content, account, revision, environment, or time where applicable;
- Authority basis and Permission reference;
- required Consent;
- approval mode and exact approval binding/expiry;
- limits, Constraints, reversibility, evidence, and Record requirements;
- deterministic allow/hold/deny immediately before execution;
- provider/system receipt, side effects, failure, and reversal state.

Material changes after approval invalidate it. Persuasive language, urgency, an earlier Landing approval, or a UI selection cannot substitute.

## Notifications and interruption

Notification requires recipient-specific visibility, material reason, timing, expected acknowledgement, expiry/suppression, and interruption policy. Delivery does not prove attention.

Interruption requires an explicit eligible basis such as Source preference, Commitment, safety condition, deadline, or governed threshold. Urgency alone is insufficient. An interrupt preserves and restores the prior Locus and conversation.

Passing tests update evidence without interrupting by default. Failed deployment may interrupt the current responsible release owner only under a declared policy and exact evidence. Purpose-level risk may reach an appropriate Catalyst only as a minimized view that does not expose private details.

## Resources and money

Every money/value display states amount/range, currency, source, time, state, restrictions, and measurement status. Pledges, budgets, available balances, allocations, transfers, expenses, payments, and settled balances are distinct. Unknown is not zero. Illustrative Metrics values are labelled prototype and cannot be used to authorize transfers or claim contributor payment.

## Retention, expiry, and deletion

Signal, derivative, Landing, projection, and Action Record retention may differ. Expiry stops new propagation but does not falsify history. Deletion/export are governed Actions. Legal, safety, accounting, or required Records may remain under applicable authority while access stays bounded.

Local prototype preferences can be reset without representing that shared/system records were deleted.

## Idempotency and replay

- Deduplicate inbound data using stable provider/event identity or explicit idempotency key.
- Deduplicate destination delivery using Landing ID.
- Bind approval to exact material parameters and expiry.
- Store execution receipt/idempotency before acknowledging completion where possible.
- Event replay rebuilds projections only; it never invokes an executor.
- Retry never broadens recipients, content, visibility, amount, account, or time.
- Partial success remains visible; one destination’s success does not imply another’s.
- If durable Action recording fails, execution fails closed.

## Prototype honesty

Use these labels consistently:

- `Board snapshot · activity through Sep 3, 2026 at 9:38 AM EDT`
- `Prototype` for product behavior/sample local state;
- `Illustrative example` for Inner Clinic, Nature of Work, network metrics, treasuries, Resource totals, and other invented values;
- `Unknown` / `Not connected` for absent source facts and integrations;
- `Prepared for review · nothing sent` for unexecuted external proposals.

Never use `live`, `verified`, `paid`, `deployed`, `member`, `authorized`, or `completed` without evidence appropriate to that claim.

## Fail-closed checklist

- Missing view grant → do not fetch/render cross-person data.
- Missing/ambiguous Realm context → hold or quarantine.
- Missing currency/comparable Resources → no numeric comparison claim.
- Missing Consent/Permission/Authority → hold/deny consequential Action.
- Unconfigured connector → prepare only; never simulate success.
- Changed exact parameters → invalidate approval.
- Missing event/receipt durability → no external execution.
- Private exclusion → no count, gap, curve, timing, or explanation leak.
- Unknown evidence → display unknown; never infer zero or completion.

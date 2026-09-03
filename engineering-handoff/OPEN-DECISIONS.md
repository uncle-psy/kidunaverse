# Assumptions, Known Gaps, Rejected Alternatives, and Next Decisions

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Reversible assumptions used in this iteration

1. **Ki plus menu.** The source sentence was incomplete. The prototype uses Attach a file, Add a link, Bring in something from Receiver, and Reference a Field item. These open preparation states only; uploads and external services stay inactive.
2. **Default Realm state.** Build Kiduna, Inner Clinic, and The Nature of Work are prejoined; Repair Cell is muted; all other Realms are unjoined and unmuted. This is exact local prototype state, not evidence of membership or a production preference.
3. **Alternate Source demonstration.** The current client enables read-only Jeya and Vijay views with hardcoded `allowed` flags. Every other cross-person option stays disabled. The scope/expiry fixture documents the required future policy shape but is not enforced authorization.
4. **Field layering.** The Trello-to-layer mapping is editorial and explainable: explicit review requests, current workflow state, board order, and recency remain separate evidence. It is not a universal ranking.
5. **Result and Activity mapping.** Trello does not supply the full Action→Activity→Task→Result→Purpose chain. Purpose, Result type, Activity, next action, and `Why here?` are marked editorial prototype fields.
6. **Realm facts.** The Trello export is not a Realm registry, membership ledger, treasury service, sponsorship register, or formation-date source. Missing facts remain unknown; demo values are labelled prototype/illustrative.
7. **Metrics.** Network/movement values retained from the prior UI are illustrative unless a connected source is added. They are not audited finance, settled payments, or live participation.
8. **Modal deep links.** `#topic-tuner` and `#realm-details` may open a safe default example on direct navigation so the rationale document can link precisely. Back closes the overlay predictably.
9. **Static implementation.** This iteration rehearses event and Action contracts in client state. It does not claim production event storage, connectors, notifications, or execution.
10. **Realm reception values.** Intensity and Range are static, visible `realmReception` metadata used by cards, Details, and sorting. They are not editable or persisted and are not importance scores.

Each assumption must be easy to change without data loss and visible in product or Builder Notes where a member/product owner could otherwise mistake it for reality.

## Known gaps

- No live Trello connector, webhook validation, authorization service, append-only event store, queue, notification provider, or Action executor.
- The private Trello export may be bundled into static prototype data; production use requires server-side minimization and must not ship unauthorized records to the client.
- No governed Realm registry supplies membership, parent DUNA, formation, sponsorship, coin, maps, treasury, or Resource balances.
- No canonical shared predicate registry has approved the proposed purpose-throughline relationship names.
- No production candidate/materiality/staging service implements the full Transceiver V0.02 judgment model.
- No production fairness/neglected-Purpose policy has been defined for candidate formation.
- No production policy defines which internal delivery to another Source becomes a messaging Action.
- No production ViewGrant model has been approved; prototype grants exist only for interaction rehearsal.
- The client’s Jeya/Vijay `allowed` booleans are not a policy-engine decision, are not expiring grants, and must not ship as production access control.
- No production notification preferences, quiet hours, escalation rules, expiry, or suppression policies are connected.
- No clinical/governed source exists for Inner Clinic; it remains illustrative and cannot be construed as care advice.
- No authorized employment/compensation source exists for The Nature of Work; it remains illustrative.
- Cross-currency Resource sorting requires a dated conversion policy/source; prototype should avoid unsupported comparison.
- The current Realm comparator has only known numeric USD prototype values. It does not yet implement the documented null/unknown/incomparable-currency ordering contract.
- Realm Intensity and Range cannot yet be tuned in this Realm-only Receiver. Moving them into editable state needs a Source/profile contract, migration, undo, and event receipts.
- Production accessibility, security, multi-tenant isolation, and performance certification remain future gates even if the static prototype passes interface QA.
- The registry-current Layout Kit V0.03 still embeds older Design Kit V0.04/KDS 1.4.0 and Canon V0.60. This product follows current Design V0.06 and Canon V0.62 but does not update or publish Layout Kit.
- The Transceiver Specification’s open implementation decisions remain open unless separately approved.

## Open product decisions

1. Which Realm types should ship in the initial Receiver, and which are only shown when data exists?
2. Should a Field join be named `Join`, `Bring into my Field`, or use both label and explanatory copy?
3. What explicit governed flow requests legal Realm membership after a personal Field join?
4. Which named Source/team views should Moto actually be allowed to inspect, at which scopes, and for how long?
5. Should a permitted alternate view be read-only, or can the viewer prepare Actions for that person’s work?
6. Which data owner establishes Build Kiduna Purpose, Result classifications, Activities, completion conditions, and relationship predicates?
7. How should work with multiple assignees or multiple Purposes appear without duplicating or flattening it?
8. How are Focus capacity conflicts resolved between Source pins, explicit review requests, commitments, governed risk, and accessibility needs?
9. How should Sources inspect a staging reason without seeing private exclusion rules or implementation machinery?
10. What fairness policy prevents current/recent work from crowding out neglected Purpose, invisible labor, minority evidence, maintenance, or care?
11. Which Far Horizon clustering dimensions are acceptable, and when can even a safe count be omitted?
12. Which Force-specific evidence is sufficiently reliable for production, and who governs those rules?
13. Should changing Force happen immediately as a local projection change or appear first as a Ki proposal?
14. Which notification events may interrupt, what quiet hours apply, and who is the responsible person when ownership is ambiguous?
15. Which passing/failing test, build, and deployment records satisfy Result completion evidence?
16. Which contextual actions should connect first to production services: review comment, tests, deployment verification, or documentation?
17. Which internal deliveries/messages count as Actions under production policy?
18. What retention, legal hold, export, and deletion policy applies to Signals, Landings, candidate decisions, and notification receipts?
19. Should production preserve the current policy—stored presentation preference on wide screens and an explicit ordered presentation at 900px or narrower—or offer a different accessible responsive choice?
20. What metrics sources can replace illustrative participation, volume, payment, treasury, and growth values?
21. Should Delivery Landing and Semantic Landing receive distinct member-facing names?
22. What is the smallest production service boundary that preserves the Transceiver contract without premature fragmentation?
23. Should Realm Intensity and Range be editable here, inherited from a Reception profile, or governed through a separate tuning surface?
24. Should a future iteration add item-to-item relationship curves; if so, which safe typed records and text equivalents govern them without confusing them with the current adjacent-layer movement curves?

## Rejected alternatives

| Alternative | Rejected because |
|---|---|
| Keep mixed Transmitters/Nodes/Maps/Packages as Receiver cards | Contradicts the explicit Realm-only Receiver model and blurs availability with internal Realm detail. |
| Keep aggregate Metrics in Field | Network totals compete with personal next work and imply a dashboard rather than a Source-relative Field. |
| Render every Trello card | Overwhelms attention, includes History/Resources improperly, and treats source-system inventory as product composition. |
| Use one opaque priority score | Collapses Source relevance, urgency, evidence, interruption, materiality, and Forces; encourages hidden engagement ranking. |
| Let Force query the entire board each time | Risks privacy leakage and changes the candidate truth set rather than explainably recomposing eligible material. |
| Treat Join as Realm membership | Silently creates governance/access implications that require separate terms, Consent, Authority, and Action. |
| Hide muted Realms permanently | Removes reversibility and makes it impossible to inspect/restore personal reception state. |
| Put all Topic levels in the toolbar | Creates clutter, hidden hierarchy, poor mobile behavior, and hard-to-understand selection state. |
| Use a conventional grid for Field | Loses the requested spatial depth, center of gravity, and meaningful foreground/background relationship. |
| Use curves without stated semantics | Suggests relationships that have no attributable basis and harms nonvisual equivalence. Current curves instead declare only possible movement between adjacent layers. |
| Use `Task` as a badge everywhere | Exposes generic implementation vocabulary and fails to tell members what to do. |
| Let Ki directly send/merge/deploy/pay | A recommendation or conversation cannot create Authority; exact review, authorization, receipt, and return state are required. |
| Simulate successful provider receipts | Misrepresents unconnected systems and teaches unsafe product expectations. |
| Infer unknown Resources as `$0` | Confuses missing evidence with a real financial state and corrupts sorting. |
| Restore the screenshot’s old content/strip | The screenshot is spatial style evidence only; its information architecture and copy are obsolete. |
| Add Builder Notes to the primary left rail | Builder Notes is secondary implementation material, not a product Role/destination in the required nav. |
| Modify/publish Canon or Kits with this site iteration | The Source authorized product deployment and a draft handoff, not canonical lifecycle changes. |

## Recommended next experiments

1. Test Gravity against Constraint and Renewal using the same 20–30 authorized Build Kiduna items; ask Sources whether reasons match their judgment.
2. Test three Focus-card compositions: direct request led, commitment led, and Source-pinned, while preserving capacity and displacement explanations.
3. Test Realm `Join` comprehension with and without “adds this Realm to your Field; does not make you a member” inline copy.
4. Test Topics on desktop and mobile with a deep hierarchy, long labels, zero-count choices, and parent deselection.
5. Test spatial versus ordered view parity with VoiceOver and keyboard-only participants.
6. Integrate one read-only Trello adapter behind a server-side eligibility boundary and compare results with the static snapshot.
7. Implement one low-risk Action path: prepare and send an attributable review comment with exact per-action approval, provider receipt, and idempotent replay test.
8. Replace one illustrative Metrics scope with a clearly sourced, dated aggregate and document monetary state.
9. Rehearse a failed deployment event that may Interrupt under explicit policy, then test restore-to-prior-Locus behavior.
10. Conduct a privacy red-team exercise using hidden cards/Realms to test counts, timings, filters, clusters, curves, and error messages.

## Canon/Kit lifecycle follow-up

If the Source later approves canonical changes, use the registry-current Builder workflow to determine which product findings belong in Layout, Transceiver, Actions, Design, or Canon. Create new complete immutable releases and update-only packages under their own versions and Eastern timestamps, validate them, and publish only on explicit instruction. This draft is evidence for that later process; it is not the process itself.

# Receiver Realm Model

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Responsibility

Receiver is the Source-relative Realm availability and tuning surface. It answers:

- Which Realms may this Source know about?
- Which visible Realms have been joined to this Source’s personal Field?
- Which Realms are muted?
- Which Topics, Foci, and Tags are currently selected for discovery?
- Why is a Realm visible?
- What would joining it change?

Receiver does not display Transmitters, Maps, Packages, Media, Nodes, coins, or other object classes as top-level boxes. Those may be facts within a Realm Details view.

Reception, visibility, discovery, Field join, legal membership, Role, Permission, Consent, Authority, and Action are separate states.

## Realm record

Every Realm card requires:

| Field | Rule |
|---|---|
| `id` | Stable, non-display identity. |
| `name` | Friendly visible Realm name. |
| `realmType` | Canon-aligned type represented in the data: Ecosystem, Organization, Alliance, Program, Project, Dyad, Community, Association, Institution, Council, Concept, Cell, or Clan. Do not invent a type merely for UI variety. |
| `purpose` | Concise, inspirational, and practically legible reason the Realm exists. |
| `image` / `visualStatus` | Identity visual plus honest approved/provisional/source state. |
| `members` | Authorized count or `unknown`; never inferred through hidden membership. |
| `resources` | Structured amount with currency and measurement state, or explicit unknown/unavailable. |
| `activity` | Named band plus evidence window/method; never an undisclosed engagement score. |
| `formedAt` | ISO time/date or explicit unknown. |
| `joinedToField` | Personal presentation preference only. |
| `muted` | Personal reception preference only. |
| `sponsorship` | Disclosed sponsor and scope or `null`; sponsorship does not imply control or endorsement. |
| `reception.intensity` | Source-relative 0–100 reception amount. Visible and sortable; never a Realm importance or quality score. |
| `reception.range` | Source-relative 0–100 exploration radius within already eligible material. Visible and sortable; never a visibility override. |
| `theme`, `primaryFocus`, `supportingFoci`, `tags` | Canonical Theme/Focus structure plus open Tags. |
| `visibility` / `access` | Resolved boundary, not merely a label. |
| `whyVisible` | Member-facing explanation using only safe facts. |
| `provenance` | Source system, record ID, observed/snapshot time, and editorial fields. |

The fixture in `fixtures/realms.json` demonstrates the shape and distinguishes board-backed, prototype, and illustrative fields.

## Realm card content

Each visible card shows:

1. Realm-type eyebrow;
2. identity image or explicitly provisional visual;
3. name and Purpose;
4. members;
5. treasury/current Resources;
6. Activity band;
7. formation date;
8. joined, muted, and sponsored state using text or shape in addition to color;
9. visible Intensity and Range values with their reception meaning;
10. `Mute` or `Restore`, `Join`/joined state, and `Details`.

Friendly copy is required. Engineering terms such as candidate set, projector, semantic landing, or record contract stay out of the card.

## Join semantics

`Join` means: include eligible work from this Realm in the current Source’s personal Field composition.

It MUST:

- set `joinedToField: true` in personal prototype preference state;
- retain the Realm in Receiver;
- make eligible work available to later Field composition after privacy and permission checks;
- expose a reversible joined state;
- append a local preference event/receipt when an event model is present;
- explain that legal membership is separate.

It MUST NOT:

- create membership;
- accept Realm terms;
- grant a Role or Permission;
- establish Authority or Consent;
- expose private work;
- notify the Realm or another Source unless a separately reviewed Action is created;
- count the Source as a member in Realm/network metrics.

If legal/governed membership is required, the UI exposes a separate reviewed membership request with terms, access, proposed Role, host, visibility, Consent, and approval. The prototype does not execute it.

## Mute and restore

Mute is a personal reception preference. It does not leave a Realm, delete Records, revoke membership, alter shared state, or inform others. Restore reverses the local preference.

Muted Realms remain recoverable. When the `Muted` filter is not selected, muted Realms are absent from the result set. The result count is computed from visible eligible records only and must not reveal private/ineligible Realms.

Mute also gates Field candidate formation. The implemented `eligibleWork(state)` first requires the Realm in `joinedRealmIds`, then rejects it when the same ID is present in `mutedRealmIds`. This preserves the join while pausing current reception. Joining a muted Realm does not bypass mute; Restore is required before that Realm’s eligible work can enter Field.

## Multi-select filter algebra

The implemented toolbar starts with `All Realms`, then `Organization`, `Community`, `Project`, `Institution`, `Alliance`, `Cell`, and the additional represented type `Association`, followed by `Sponsored`, the distinct `Topics` control, `Joined`, and `Muted`; the separate `Sort by` row follows. This keeps Topics between Sponsored and Sort by without mixing sort direction into the filter group.

Semantics:

- `All Realms` selects/deselects all represented type filters; it is not a separate record class.
- Selected Realm types combine with **OR**: Project or Community.
- Type selection combines with state filters using **AND**: `(Project OR Community) AND Sponsored AND Joined`.
- `Muted` controls inclusion of muted records. When off, muted records are excluded even if they match other filters.
- `Joined` narrows to joined Realms when on; it does not change join state.
- `Sponsored` narrows to disclosed sponsored Realms when on.
- Search and applied Topic selections further narrow using AND across filter families.
- Within selected Topics/Foci/Tags, the implementation must visibly state whether matching is any-selected or all-selected. Prototype default: any selected value inside a level, with hierarchy validity enforced.
- An active-filter summary displays every narrowing condition and a visible reset. The current prototype uses a text summary; removable chips are an allowed enhancement only if every state remains equally explicit.
- Reset returns the documented baseline; it does not mutate shared Realm data.

If no Realm type is selected, show a clear empty state rather than interpreting it as all types. `All Realms` makes the inclusive state explicit.

## Topics → Foci → Tags

Topics opens a major modal/panel rather than expanding the entire hierarchy into the toolbar.

### Interaction state

Use separate working and applied selections:

```text
open panel
  → copy applied selections into draft selections
  → edit/search/select/deselect in draft
  → Apply commits draft and closes
  → Cancel/Escape discards draft and closes
```

Cancel must not change results. Focus returns to the Topics button after close.

### Progressive hierarchy

1. Topics are the first column/step.
2. Foci shown belong to selected Topics.
3. Tags shown belong to selected Foci.
4. Deselecting a parent identifies now-invalid descendants. The prototype should remove them from the draft with an explicit notice or ask for confirmation; it must not leave hidden selections.
5. Visible counts are computed only over the already eligible, disclosure-safe Realm set.

Required controls:

- one clear search field;
- keyboard-operable multi-select controls with explicit names and states;
- visible per-option counts;
- selected-summary chips;
- Clear all;
- Apply;
- Cancel;
- accessible heading and description;
- focus containment without trapping after close;
- mobile full-height sheet or full-screen equivalent.

The canonical six Themes and their Foci may organize the choices, but the product’s visible `Topics` control can use member-friendly topic wording. Theme, Focus, and open Tag identities remain distinct in data.

## Sorting contract

`Sort by` contains only these options. A separate text-labelled direction button reverses the default.

| Sort | Default direction | Reverse | Missing-value rule |
|---|---|---|---|
| Formation Date | newest → oldest | oldest → newest | Unknown dates always after known dates; reversing does not promote unknown as oldest. |
| Intensity | highest → lowest | lowest → highest | Unknown after known. Intensity is a reception preference, not importance. |
| Range | widest → narrowest | narrowest → widest | Unknown after known. Range is a visibility-safe exploration preference. |
| Members | most → least | least → most | Unknown after known; never treat unknown as zero. |
| Resources | most → least | least → most | Compare only normalized values in the same currency or through an explicit dated conversion source; unknown/incomparable after comparable values. |
| Activity | most active → least active | least active → most active | Sort declared bands/evidence, not raw hidden engagement. Unknown after known. |
| Alphabetical | A → Z | Z → A | Locale-aware comparison; stable ID tie-break. |

The adjacent direction control must announce, for example, `Direction: newest to oldest`. An arrow may supplement, never replace, that text/accessible label.

Sorting changes presentation only. It cannot widen eligibility, modify shared Realm state, or claim universal priority.

### Implemented Intensity and Range boundary

`purposeful.js` currently holds `realmReception[realmId] = { intensity, range }` as static, member-visible prototype metadata. `realmCard` and Realm Details show both numbers; `currentRealms` reads them for the Intensity and Range sorts. They are deliberately separate from the legacy Version 0.02 mixed-object Receiver profiles in `data.js`.

This iteration does not provide Realm-level Intensity/Range editing, does not persist these values, and does not infer them from member behavior. A production tuning control requires a Source/profile-scoped record, provenance, allowed range, update event, migration, undo, and accessibility contract. Until that exists, treat the fixture values as editorial test data only.

All current runtime Realm records use known numeric USD Resources and known formation dates. The missing-value and cross-currency rules above remain the required production comparator contract; they are not evidenced by the current static comparator and must not be marked verified until null/incomparable fixtures pass.

## Realm Details

Details opens a large, warm, centered landscape dialog on wide screens and an operable full-screen/sheet equivalent on narrow screens. It is a member-facing invitation to understand consequence, not a developer inspector.

Required sections:

- large identity visual with provenance/approval-safe alt treatment;
- Realm-type eyebrow, headline, subhead, and meaningful body copy;
- Purpose;
- Realm type;
- parent DUNA where applicable (DUNA remains a data fact; member-facing copy should remain comprehensible);
- Catalyst;
- coin;
- maps;
- members;
- treasury and Resources with currency/state;
- Activity with evidence window;
- formation date;
- sponsorship disclosure;
- joined and muted state;
- why visible;
- what joining changes and does not change;
- privacy and access facts;
- data source, snapshot time, provenance, and illustrative/connected status;
- `Join` or joined-state action, `Mute`/`Restore`, and close.

Dialog contract:

- `role="dialog"`, `aria-modal="true"`, labelled heading and optional description;
- initial focus on the heading or first meaningful control;
- Tab/Shift+Tab contained while open;
- Escape and explicit close supported;
- focus restored to the exact triggering card/control;
- background inert/non-interactive;
- page scroll managed and restored;
- deep link `#realm-details` safely opens a documented example Realm without exposing ineligible data;
- browser Back closes the dialog or returns to the prior URL state consistently.

## Receiver data states

- **Connected snapshot:** derived from an authorized source at a recorded watermark; never labelled live.
- **Prototype:** product behavior or demo value created for interface rehearsal.
- **Illustrative:** editorial example intended to test a domain; not a real assignment, balance, or membership.
- **Unknown/unavailable:** shown honestly; never silently converted to zero.

The Realm library itself in this iteration is largely prototype/illustrative. The Trello export supplies work within Build Kiduna, not a Realm registry, membership ledger, treasury service, or sponsorship system.

## Receiver invariants

1. Top-level cards are Realms only.
2. Eligibility/privacy are resolved before search, counts, filters, sorting, and animation.
3. Join is personal Field inclusion, never membership.
4. Muted records remain recoverable and do not vanish from persistence.
5. Joining never removes a Realm from Receiver.
6. Topic cancel never mutates applied state.
7. Details never widens access beyond the card’s authorized view.
8. Numeric sort never equates missing with zero or silently mixes currencies.
9. Sponsorship is disclosed and never confers hidden prominence, endorsement, control, or permission.
10. All states and actions are available without hover, color, spatial position, or motion alone.
11. A Realm that is joined and muted remains joined but contributes no current Field candidates.
12. Intensity and Range never widen the privacy-filtered eligible Realm set.

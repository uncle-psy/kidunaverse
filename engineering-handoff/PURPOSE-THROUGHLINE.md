# Purpose Throughline

> Draft product implementation handoff. Not a canonical Kit release. Not published through Builder Kit.

## Why Purpose is central

A Theme says what a Realm concerns. Purpose says why it exists and what it intends to accomplish or sustain. Field work is useful only when the person can connect the next move to a meaningful Result and a larger Purpose.

Purpose cannot be a decorative slogan above unrelated work. Each visible Field item must have an inspectable, attributable throughline:

```text
Action → Activity → Task → Result → Purpose
```

This hierarchy is primarily a data/details model. Member-facing cards lead with a clear verb and context rather than printing internal labels such as `Task`, `Activity`, or `Result` mechanically.

## Record relationships

| Level | Meaning | Required fields |
|---|---|---|
| Action | The next bounded operation someone may take or prepare | stable ID/type, actor candidate, exact effect, target, parameters, reversibility, authorization state |
| Activity | The purposeful course of participation over time | stable ID, Realm, participants/Role context, state, timing, Records |
| Task | The specific work item whose next move is being composed | stable ID, source/provenance, state, assignee/owner when known, dependencies, completion conditions |
| Result | The intended outcome or completed condition | stable ID/type, evidence/conditions, measurement state; never fabricated completion |
| Purpose | The intended change, value, contribution, condition, or continuing function served | stable ID, Realm/DUNA context, exact statement, provenance/governance |

Every edge must be typed and directional; `related_to` is insufficient when the actual mechanism is known. Suggested implementation predicates include `next_action_for`, `participates_in`, `works_toward`, `produces_result_for`, and `serves_purpose_of`, subject to later canonical registry review.

## Build Kiduna model

| Level | Prototype value |
|---|---|
| DUNA context | Kinship Duna |
| Realm | Build Kiduna / Kiduna Dev Project |
| Purpose | Software made from Truth, Beauty, and Love |
| Result types | Feature complete; Bug Fix complete; Chore complete |
| Activities | development; testing; review; documentation; deployment |
| Work source | private Trello export snapshot, explicitly non-live |
| Next move | contextual verb derived from current evidence and state |

Example throughline:

```json
{
  "action": {
    "label": "Review the chip flow",
    "effect": "Open the attached evidence and prepare attributable feedback; do not approve or publish."
  },
  "activity": "review",
  "task": "Acquiring free Chips",
  "result": "Feature complete",
  "purpose": "Software made from Truth, Beauty, and Love",
  "realm": "Build Kiduna / Kiduna Dev Project",
  "duna": "Kinship Duna"
}
```

The Task title and board state are board-backed. Activity, intended Result classification, next-action wording, and Purpose linkage are editorial prototype mappings and must be marked as such until the project’s governed data model confirms them.

## Card copy hierarchy

The Field card should expose, in order:

1. contextual state/Realm cue;
2. actionable headline (`Review the Cell flow` rather than `Task`);
3. one-sentence Purpose connection;
4. who/context and current evidence;
5. `Why here?`;
6. contextual action with consequence preview;
7. Details for the full throughline.

Avoid stilted engineering phrases such as “Field Canvas,” “candidate set,” “semantic projection,” or “complete piece present to you” in the member view. Those remain in Builder Notes where useful.

## Details throughline

The detailed view must answer in plain language:

- **Why this matters:** the larger Purpose.
- **What good looks like:** intended Result and evidence/conditions for completion.
- **What is moving:** the current work item and current state.
- **How the work is happening:** Activity.
- **What you can do next:** Action and exact effect.
- **What has not happened:** no approval, merge, deployment, publication, message, payment, membership change, or completion without a receipt.
- **Where this came from:** source, snapshot, stable IDs, and editorial versus source-backed fields.

## Contextual action patterns

| Context | Member-facing verb | Preview must state | Consequential boundary |
|---|---|---|---|
| Media | Amplify | destination, audience, identity, content, timing | Posting/sending is a typed Action. |
| Pull request/review | Review | evidence opened and feedback prepared | Approval/merge requires exact repository authority and receipt. |
| Tests | Run checks | suite, revision, environment | Execution requires configured capability; results require receipt. |
| Deployment | Verify staging | URL/revision/checklist | Does not deploy; deployment is separate. |
| Documentation | Continue writing | draft/document opened | Publishing/sharing is separate. |
| Health example | Review plan | illustrative plan and limits | No medical directive or care change. |
| Work opportunity | Request an introduction | sender, recipient, message, relationship | Sending is separate and consent-aware. |
| Decision | Vote / Review | exact proposal, mandate, effect | Casting vote requires authority and final confirmation. |
| Blocked work | Resolve blocker | dependency, responsible person, proposed step | No silent reassignment or message. |
| Completed work | Inspect result | Record and evidence | No mutation or reopening by inspection. |

## Inner Clinic example

| Level | Illustrative value |
|---|---|
| Realm | Inner Clinic |
| Purpose | Better health |
| Results | Weight loss; muscle gain |
| Activity | planning/review |
| Next move | Review this week’s plan |
| Boundary | Prototype example only; not clinical advice, a diagnosis, live care, or evidence of a health outcome. |

The interface should make both inspiration and limitation visible. It must not imply a clinician, treatment relationship, personal health data, or outcome.

## The Nature of Work example

| Level | Illustrative value |
|---|---|
| Realm | The Nature of Work |
| Purpose | More fulfillment |
| Results | Increased salary; a better job |
| Activities | reflection, portfolio work, relationship-building, preparation |
| Next moves | Clarify a target role; improve a portfolio; request an introduction; prepare for a salary conversation |
| Boundary | Illustrative unless connected to Source-authorized data; no opportunity, salary, deadline, or message is claimed as real. |

## Evidence and completion

Completion cannot be inferred from placement, a click, board list name, AI wording, or visual celebration. A Result becomes completed only when its declared conditions and attributable evidence are satisfied. Where evidence is missing, show unknown, awaiting evidence, or prototype—not 0%, failed, or complete.

Board `Done` cards belong in History/completion context. Closed archived workflow examples may inform editorial action language but must not be presented as current assignments.

## Throughline invariants

1. Every Field item resolves to one stated Purpose.
2. Purpose is governed/provenanced; copy polish cannot invent it as source fact.
3. Result, Task, Activity, and Action identities remain distinct.
4. Member-facing cards do not use a generic `Task` badge.
5. The next action states its effect before execution.
6. A proposed Action does not equal authorized or completed Action.
7. Evidence states remain visible and missing is not zero.
8. Illustrative health/work examples are labelled as such.
9. Board-backed and editorial fields remain separately attributable.
10. Details reveal the full chain without forcing it onto every card.

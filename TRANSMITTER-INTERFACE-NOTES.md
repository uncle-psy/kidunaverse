# Transmitter Interface Notes

> Superseded interface note: the published Layout Site now has one current Version 0.02 interface. The version selector and Version 0.01 product surface described below are historical implementation context, not current behavior. This is a Layout Kit/product proposal and does not update the Kiduna Canon.

## Scope

Transmitter Version 0.02 is the outward-facing complement to Receiver Version 0.02. It replaces only the Field when the Transmitter rail icon is selected; the titlebar, version selector, reset control, left rail, active Source context, and surrounding Layout remain intact. Version 0.01 remains unchanged.

## Interface model

The desktop view uses two coordinated areas:

- **Your Seed library** occupies approximately two thirds of the Field. It is searchable, multi-filterable, sortable, inspectable, and contains only material currently attributed to the active Source context.
- **Signal builder** occupies approximately one third. It keeps the two parts of every proposed Signal visible: **Message + Payload**.

Each Payload contains one or more individually identified Seeds. The builder preserves Seed identity, ordering, type, privacy, creator, provenance, and rights information. The user chooses the transmitting presentation separately: Source, Avatar, Ally, Actor, or Anonymous where policy permits. The recipient-facing identity is shown before review.

Destinations are explicit and independently checked. The prototype includes Realms, Receivers, an Ally queue, an Actor queue, and a governed review queue. Each destination declares a boundary, retention context, sender policy, and secret-handling capability.

## Privacy behavior

The live privacy check compares the Message and every Seed against every selected destination.

- Public material may enter Public, Private, Secret-handling, or Personal receiving contexts, subject to sender policy.
- Private material is blocked from a Public destination. It may enter an appropriate Private context without being silently reclassified.
- Secret material requires an explicitly declared secret-handling destination.
- Personal material remains within the Source's Personal boundary.
- Sender permission is checked separately from content privacy.
- Anonymous presentation changes what recipients see; the Source remains attributable in restricted audit context.

The prototype never silently downgrades, upgrades, or reclassifies a Message or Seed. Incompatible combinations are blocked and explained per destination.

## Review and truthful completion

Review presents the whole Signal, transmitting identity, recipients, boundary results, and possible delivery states. The only terminal prototype action is **Prepare transmission**. It produces the exact local confirmation:

> Transmission prepared locally. Nothing has been sent.

The interface does not claim that a Signal was transmitted, landed, held, denied, failed, or approved. Those outcomes require real infrastructure and evidence-backed receipts.

## Ki boundary

Ki remains persistently available at the bottom of the Transmitter. Ki can search, recommend, and propose local changes. A proposal must be previewed and applied; it never transmits directly. Dictate and Voice controls are explicit non-recording placeholders in this static prototype.

## Persistence, reset, and accessibility

Transmitter filters, sorts, selected Seeds, Message, Payload name, sender, destinations, review state, and prepared state persist locally. Receiver state is preserved independently. **Reset to default** clears the Transmitter prototype and returns the Layout to Version 0.01 Composed.

Controls have programmatic labels, visible focus behavior inherited from the Layout Kit, keyboard-operable native inputs, live status regions, and an Escape path for inspector, review, and the Transmitter itself. Narrow screens become a stacked, scrollable flow with explicit Seeds, Signal, Destinations, and Review step markers.

## Implementation status

This is a development interface demonstration. It uses provisional examples and no live transmission infrastructure. It establishes no new Canon, permission, consent, delivery receipt, or external state.

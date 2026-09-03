# Receiver interface notes

> Current status: Receiver 0.02 is the sole published Receiver interface inside the unified Layout Site. Historical experiment language below does not create an in-product version archive. This is a Layout Kit/product proposal and does not update the Kiduna Canon.

## Dynamic eyebrow

The Receiver eyebrow is a short, playful, context-aware line that changes each time the Source opens Receiver. “Got your ears on?” is the baseline first-open line.

In this static prototype, the interface rotates through a curated fallback set so the behavior can be tested without a live model connection. In a connected implementation, Ki generates a clever, relevant line from the Source's authorized current context and active Reception Profile.

The eyebrow is presentation only. It must not imply that a Signal is true, important, urgent, accepted, or authorized; invent private context; expose excluded material; diagnose the Source; or manufacture pressure to engage. A safe curated fallback is used whenever an appropriate contextual line cannot be generated.

## Receiver filters

Receiver class filters are multi-select visibility controls. Deselecting a class removes that class from the current projection without deleting its Signals, Landings, Records, or profile configuration. “Sponsored” is an additional visibility facet for material that carries an explicit sponsorship designation; the prototype does not infer sponsorship from payment, prominence, or a Sponsor Role.

## Sort order

“Most recent” is the default presentation order, with “Oldest” immediately after it. Recency is a display order based on attributable receipt time. It is not a measure of relevance, urgency, importance, truth, worth, or right to attention.

## Voice controls

Dictate and Voice are placed interface controls using the supplied Microphone and Voice Live assets. This static prototype does not request microphone access or simulate recording. A connected implementation must make listening state visible, request appropriate permission, preserve accessibility, and keep voice input within the same Receiver authority and privacy boundaries as text input.

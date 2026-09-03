# Transmission Vocabulary Proposal

## Status

This document records Source-directed product vocabulary used by the Layout Kit Transmitter experiment. It is a proposal for interface evaluation, not a change to the Kiduna Taxonomy Canon or the Transceiver Specification.

## Proposed terms

### Signal

In this interface, a proposed outward Signal has two visibly separate parts:

1. **Message** — the communicative material that frames what is being sent.
2. **Payload** — the bounded collection of included material.

This interface shorthand does not erase canonical distinctions among Signal, Action, transmission, delivery, and Semantic Landing. Any consequential external transmission must remain an authorized, inspectable Action.

### Payload

A Payload is the grouped material proposed for transmission with a Message. A Payload must contain at least one Seed. It preserves the identity and ordering of its Seeds and does not merge their provenance, privacy, or rights boundaries.

### Seed

A Seed is each individually identified part of a Payload. Examples in the prototype include Packages, Maps, Nodes, Scenes, Media, Resources, Records, and other bounded artifacts or components. A Seed retains its own stable identity, creator, source context, privacy label, status, version, provenance, eligibility, and authority information.

The word **Seed** is deliberately not treated as canonical in this release. It is a proposed product term for a transmissible, individually inspectable payload part.

### Expression

An Expression is what occurs when a Seed is opened, instantiated, rendered, experienced, or run in a particular context. Selecting, bundling, reviewing, preparing, transmitting, delivering, or landing a Seed does not by itself prove that an Expression occurred.

The interface therefore preserves these distinctions:

- Seed selected ≠ Expression created
- Payload prepared ≠ transmitted
- transmitted ≠ delivered
- delivered ≠ semantically landed
- landed ≠ opened or run
- opened or run ≠ understood, accepted, or trusted

## Privacy proposal

The prototype evaluates four Source-directed labels:

- **Public** — may enter public or more restrictive receiving contexts, subject to destination and sender policy.
- **Private** — must not enter a Public destination; may enter a compatible Private or more restrictive context without reclassification.
- **Secret** — requires a destination with declared secret-handling capability and appropriate sender authority.
- **Personal** — remains within the Source's Personal boundary unless the Source explicitly performs a separate reclassification process outside this prototype.

These are prototype interface labels, not a newly canonical privacy ontology. No label is silently changed to make a transmission pass.

## Identity proposal

The interface separates the governing Source from the presentation used for transmission:

- **Source** transmits directly.
- **Avatar** represents the Source in a context.
- **Ally** may communicate under revocable delegated authority.
- **Actor** may operate only inside its bounded role and permissions.
- **Anonymous** affects recipient presentation only; it does not erase the responsible Source from restricted audit and accountability records.

## Outcome language

The product should keep these result states distinct and evidence-backed: prepared, transmitted, delivered, landed, held, denied, failed, and awaiting approval. A static prototype may truthfully claim only local preparation. It must not manufacture receipts or imply external effects.

## Questions for later governance

- Should Seed become a canonical term, remain interface vocabulary, or map to an existing canonical object?
- Is Payload a single Action input, a Signal container, or an implementation-layer artifact?
- Which privacy labels and compatibility rules are canonical, Realm-defined, Source-defined, or system-specific?
- What Record proves an Expression, and who is authorized to attest that it occurred?
- How should multi-destination transmission preserve per-destination transformation lineage and Semantic Landing evidence?

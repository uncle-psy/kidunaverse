export const layoutTypes = [
  {
    id: 'composed',
    name: 'Composed',
    meta: 'WIMP · connected interface',
    description: 'Windows, icons, menus, and pointer-ready controls composed over a living backdrop.'
  },
  {
    id: 'setting',
    name: 'Setting',
    meta: 'Isometric · Moto’s working room',
    description: 'A spatial environment for arranging live work, relationships, and instruments.'
  },
  {
    id: 'pulse',
    name: 'Pulse',
    meta: '11 signals · 3 near',
    description: 'A Layout Type for encountering many relevant objects spatially.'
  },
  {
    id: 'graph',
    name: 'Graph',
    meta: 'Build Kiduna · 8 nodes',
    description: 'Meaningful nodes and typed relationships from active Power Maps and Realms.'
  },
  {
    id: 'theater',
    name: 'Theater',
    meta: 'Focused · 1 scene',
    description: 'A quiet stage for one conversation, presentation, simulation, or package.'
  }
];

export const railItems = [
  { id: 'receive', label: 'Receiver', roleIcon: 'receiver' },
  { id: 'transmit', label: 'Transmitter', roleIcon: 'transmitter' },
  { id: 'connect', label: 'Connector', roleIcon: 'connector' },
  { id: 'create', label: 'Creator', roleIcon: 'creator' },
  { id: 'packages', label: 'Inspector', roleIcon: 'inspector' },
  { id: 'history', label: 'Broker', roleIcon: 'broker' }
];

export const instruments = [
  { id: 'type', label: 'Type', status: 'Composed' },
  { id: 'map', label: 'Map', status: 'Home / Moto' },
  { id: 'economics', label: 'Economics', status: '31.8k compute' },
  { id: 'governance', label: 'Governance', status: '2 need you', attention: true },
  { id: 'culture', label: 'Culture', status: '3 patterns' }
];

export const receiverThemes = [
  { name: 'People & Care', foci: ['Health, Disability & Wellbeing', 'Mental Health, Recovery & Grief', 'Relationships, Family & Caregiving', 'Service Communities'] },
  { name: 'Society & Justice', foci: ['Rights, Justice & Solidarity', 'Civic Life, Democracy & Governance', 'Community, Mutual Aid & Participation', 'Safety, Preparedness & Response'] },
  { name: 'Culture & Play', foci: ['Arts & Creative Expression', 'Heritage, Language & Identity', 'Spirit, Meaning & Practice', 'Sports, Outdoors & Recreation', 'Games, Fandom & Social Entertainment', 'Media, Storytelling & Journalism'] },
  { name: 'Place & Planet', foci: ['Travel, Hospitality & Tourism', 'Environment, Climate & Conservation', 'Energy, Infrastructure & Mobility', 'Housing, Place & Belonging', 'Water, Agriculture & Food Systems', 'Animals & Animal Welfare'] },
  { name: 'Work & Wealth', foci: ['Work, Careers & Trades', 'Enterprise, Commerce & Markets', 'Money, Finance & Ownership'] },
  { name: 'Knowledge & Frontier', foci: ['Education, Learning & Skills', 'Science, Research & Discovery', 'Technology, AI & Digital Life'] }
];

export const transmitterCatalog = [
  { id: 'realm-build-kiduna', name: 'Build Kiduna', type: 'Realm', context: 'Catalyst · active Realm', signalKinds: ['decisions', 'contributions', 'receipts'], why: 'You participate in this Realm and have current work here.', addedAt: 'Today, 09:18' },
  { id: 'realm-service-alliance', name: 'Service Alliance', type: 'Realm', context: 'Alliance · invitation context', signalKinds: ['conversations', 'offers', 'gatherings'], why: 'Alice invited Moto into an active welcome-path conversation.', addedAt: 'Yesterday' },
  { id: 'avatar-alice', name: 'Alice', type: 'Avatar', context: 'Connected Source representation', signalKinds: ['messages', 'invitations', 'observations'], why: 'Alice is a direct relationship in the current Locus.', addedAt: 'Aug 31' },
  { id: 'avatar-jeya', name: 'Jeya', type: 'Avatar', context: 'Invitation proposal · not yet connected', signalKinds: ['public contributions', 'proposals'], why: 'Moto explicitly added Jeya while reviewing a proposal.', addedAt: 'Aug 30' },
  { id: 'ally-research', name: 'Research Ally', type: 'Ally', context: 'Personal Ally · advisory', signalKinds: ['findings', 'evidence', 'questions'], why: 'This Ally works within Moto’s research boundary.', addedAt: 'Aug 29' },
  { id: 'actor-budget', name: 'Budget Actor', type: 'Actor', context: 'Realm Actor · bounded record access', signalKinds: ['thresholds', 'receipts', 'holds'], why: 'Compute thresholds and receipts affect current work.', addedAt: 'Aug 28' },
  { id: 'theme-people-care', name: 'People & Care', type: 'Theme', context: 'Canonical field of meaning', signalKinds: ['Realms', 'maps', 'publications'], why: 'Selected as a canonical Theme in this Reception Profile.', addedAt: 'Aug 27' },
  { id: 'theme-technology', name: 'Technology, AI & Digital Life', type: 'Focus', context: 'Knowledge & Frontier', signalKinds: ['research', 'tools', 'publications'], why: 'Selected as a canonical Focus in this profile.', addedAt: 'Aug 27' },
  { id: 'topic-agentic-ui', name: 'Agentic interfaces', type: 'Topic', context: 'Open-ended topic', signalKinds: ['projects', 'notes', 'examples'], why: 'Moto added this topic in free-form Receiver input.', addedAt: 'Aug 27' },
  { id: 'coin-build', name: 'Build Themecoin', type: 'Themecoin', context: 'Build Kiduna · economic Resource', signalKinds: ['rewards', 'allocations', 'receipts'], why: 'Value movement is visible within Moto’s authorization boundary.', addedAt: 'Aug 25' },
  { id: 'map-kinship', name: 'Kinship', type: 'Power Map', context: 'Culture & Play · visible Valence', signalKinds: ['nodes', 'paths', 'valence changes'], why: 'This Power Map supports current relationship work.', addedAt: 'Aug 24' },
  { id: 'map-systems', name: 'Systems Oracle', type: 'Power Map', context: 'Technology · Inception Point', signalKinds: ['nodes', 'connections', 'card studies'], why: 'Moto follows changes in this Power Map.', addedAt: 'Aug 22' },
  { id: 'package-layout', name: 'Layout Kit', type: 'Package', context: 'Development · local package', signalKinds: ['releases', 'issues', 'receipts'], why: 'The Layout Kit is active in Moto’s Field.', addedAt: 'Aug 20' },
  { id: 'package-build-kiduna', name: 'Build Kiduna Package', type: 'Package', context: 'Working system · active', signalKinds: ['releases', 'issues', 'receipts'], why: 'This complete working package is active in Moto’s Field.', addedAt: 'Aug 19' },
  { id: 'package-royals', name: 'Royals & Rogues', type: 'Package', context: 'Game package · Rehearsal', signalKinds: ['sessions', 'updates', 'invitations'], why: 'Moto asked to keep rehearsal changes near.', addedAt: 'Aug 18' },
  { id: 'node-contribution', name: 'Contribution', type: 'Node', context: 'Build Kiduna Power Map', signalKinds: ['proposals', 'work', 'learning'], why: 'Contribution is adjacent to Moto’s current Build Kiduna Locus.', addedAt: 'Sep 2' },
  { id: 'node-invitation', name: 'Invitation as Orientation', type: 'Node', context: 'Kinship Power Map', signalKinds: ['invitations', 'relationships', 'patterns'], why: 'This node connects current invitation and belonging work.', addedAt: 'Sep 2' },
  { id: 'node-authority', name: 'Authority Legibility', type: 'Node', context: 'Build Kiduna Power Map', signalKinds: ['decisions', 'policies', 'records'], why: 'This node relates to two active governance questions.', addedAt: 'Sep 2' },
  { id: 'node-care-threshold', name: 'Care Threshold', type: 'Node', context: 'Service Alliance Power Map', signalKinds: ['needs', 'thresholds', 'offers'], why: 'Care constraints are material to the current welcome path.', addedAt: 'Sep 2' },
  { id: 'node-value-flow', name: 'Visible Value Flow', type: 'Node', context: 'Build Kiduna Power Map', signalKinds: ['resources', 'receipts', 'allocations'], why: 'This node makes contribution and Resource movement legible.', addedAt: 'Sep 2' }
];

export const receiverV2Catalog = [
  { id: 'transmitter-weather-relay', kind: 'Transmitter', title: 'Weather Relay', eyebrow: 'External connector · not configured', description: 'A possible public conditions feed. This Receiver cannot add it until an authorized connector is configured.', origin: 'No registered Receptor', verification: 'Unavailable', evidence: 'No active connector or delivery receipt', provenance: 'No Signal has entered the local system', transform: 'None', visibility: 'No private or external data disclosed', delivery: 'Not delivered', semantic: 'No Semantic Landing', theme: 'Place & Planet', focus: 'Environment, Climate & Conservation', topic: 'Weather', vibes: 'No published dimensions', valence: 'Not measured', measurement: 'Unavailable', visual: 'weather', visualStatus: 'Provisional interface tile; no canonical Card', recommendation: 'Unavailable until Moto explicitly configures a connector.', related: 'No current relationship', available: false },
  { id: 'avatar-alice', kind: 'Transmitter', title: 'Alice', eyebrow: 'Direct Source relationship', description: 'Invitations, observations, and messages from Alice’s visible transmitting context.', origin: 'Alice · represented through her current Avatar', verification: 'Verified relationship', evidence: 'Direct relationship record · current', provenance: 'Alice → registered Receptor → Moto’s private Locus', transform: 'Minimized display view; original preserved', visibility: 'Personal · Moto', delivery: 'Current Locus pool · landed', semantic: 'invites_to · candidate relationship', theme: 'People & Care', focus: 'Relationships, Family & Caregiving', topic: 'Invitations', vibes: 'Participation · Belonging', valence: 'Belonging disputed; Participation 64–78', measurement: 'Mixed: measured + disputed', visual: 'alice', visualStatus: 'Provisional typographic tile', recommendation: 'Alice is already close to two active invitation threads.', related: 'Service Alliance, Invitation as Orientation' },
  { id: 'ally-research', kind: 'Transmitter', title: 'Research Ally', eyebrow: 'Personal Ally · advisory', description: 'Evidence-backed findings and questions gathered within Moto’s research boundary.', origin: 'Moto’s Personal Ally', verification: 'Verified configuration', evidence: 'Bounded Ally profile · current', provenance: 'Research sources → attributable transforms → Ally', transform: 'Summaries retain links to original evidence', visibility: 'Personal · Moto', delivery: 'Ki context · landed', semantic: 'supplies_evidence_to · stable', theme: 'Knowledge & Frontier', focus: 'Science, Research & Discovery', topic: 'Research', vibes: 'Authority legibility', valence: 'Last observed 46–68', measurement: 'Stale evidence visible', visual: 'research', visualStatus: 'Provisional visual tile', recommendation: 'Research is active in the Quiet research profile.', related: 'Systems Oracle, Authority Legibility' },
  { id: 'actor-budget', kind: 'Transmitter', title: 'Budget Actor', eyebrow: 'Bounded Realm Actor', description: 'Thresholds, holds, and receipts from an explicitly limited compute-allocation role.', origin: 'Build Kiduna Realm Actor', verification: 'Verified configuration', evidence: 'Standing permission · weekly limit', provenance: 'Vault receipt → Realm Receptor → Moto', transform: 'Amounts preserved; private account data minimized', visibility: 'Personal + governed Realm', delivery: 'Vault Record projection · landed', semantic: 'reports_resource_state_to · stable', theme: 'Work & Wealth', focus: 'Money, Finance & Ownership', topic: 'Resources', vibes: 'Stewardship · Authority legibility', valence: 'Stewardship 58–82', measurement: 'Measured', visual: 'budget', visualStatus: 'Provisional visual tile', recommendation: 'A compute threshold is active in the current time window.', related: 'Visible Value Flow, Build Kiduna' },
  { id: 'realm-build-kiduna', kind: 'Realm', title: 'Build Kiduna', eyebrow: 'Active Realm · Catalyst context', description: 'Purpose, contribution, governance, resources, and release activity from the working center.', origin: 'Build Kiduna Realm', verification: 'Verified Realm', evidence: 'Realm registry + current Role context', provenance: 'Realm Signals → registered Receptors → bounded destinations', transform: 'Per-destination minimized views', visibility: 'Realm + personal views', delivery: 'Current Locus pool · landed', semantic: 'supports_purpose_of · stable', theme: 'Knowledge & Frontier', focus: 'Technology, AI & Digital Life', topic: 'Kiduna', vibes: 'Participation · Stewardship · Authority legibility', valence: 'Participation 64–78; Stewardship 58–82', measurement: 'Measured with one stale dimension', visual: 'build', visualStatus: 'Approved Alliance Sigil used as interface graphic', image: 'assets/sigils/alliance.png', recommendation: 'Moto has current work, decisions, and receipts in this Realm.', related: 'Contribution, Layout Kit, Visible Value Flow' },
  { id: 'realm-service-alliance', kind: 'Realm', title: 'Service Alliance', eyebrow: 'Alliance · welcome path', description: 'Conversations, Offers, Gatherings, and relationship work around meaningful participation.', origin: 'Service Alliance Realm', verification: 'Verified Realm', evidence: 'Realm registry · current invitation context', provenance: 'Realm participants → Alliance Receptor → Moto', transform: 'Relationship-safe display view', visibility: 'Invitation-scoped view', delivery: 'Current Locus pool · landed', semantic: 'invites_to · candidate', theme: 'People & Care', focus: 'Service Communities', topic: 'Welcome paths', vibes: 'Participation · Belonging', valence: 'Belonging disputed', measurement: 'Disputed perspective remains visible', visual: 'service', visualStatus: 'Approved Alliance Sigil used as interface graphic', image: 'assets/sigils/alliance.png', recommendation: 'Alice’s invitation makes this Realm directly relevant now.', related: 'Alice, Care Threshold, Invitation as Orientation' },
  { id: 'map-kinship', kind: 'Power Map', title: 'Kinship', eyebrow: 'Living relationship map', description: 'Patterns of invitation, belonging, care, affinity, and durable relationship.', origin: 'Kinship Power Map', verification: 'Published map identity', evidence: 'Versioned map release + visible Valence', provenance: 'Map release → Realm use → Source-relative projection', transform: 'Graph neighborhood projected without changing the map', visibility: 'Visible map material only', delivery: 'Map projection · landed', semantic: 'provides_lens_for · stable', theme: 'People & Care', focus: 'Relationships, Family & Caregiving', topic: 'Kinship', vibes: 'Belonging', valence: 'Disputed', measurement: 'Disputed; not silently averaged', visual: 'kinship', visualStatus: 'Approved Invitation Sigil used as interface graphic', image: 'assets/sigils/invitation.png', recommendation: 'Three current decisions share a relationship structure.', related: 'Invitation as Orientation, Service Alliance' },
  { id: 'map-systems', kind: 'Power Map', title: 'Systems Oracle', eyebrow: 'Technology power map', description: 'Institutions, technologies, incentives, and relationships shaping Big Tech.', origin: 'Systems Oracle Power Map', verification: 'Versioned Inception Point', evidence: 'Map release · provenance available', provenance: 'Source archive → Mapshifting lineage → projection', transform: 'Selected graph neighborhood', visibility: 'Published map material', delivery: 'Map projection · eligible', semantic: 'provides_lens_for · stable', theme: 'Knowledge & Frontier', focus: 'Technology, AI & Digital Life', topic: 'Systems', vibes: 'Stewardship · Authority legibility', valence: 'Mixed measurement states', measurement: 'Measured + stale', visual: 'systems', visualStatus: 'Provisional interface tile; not a Power Map Card', recommendation: 'It is adjacent to Agentic interfaces and current technology work.', related: 'Research Ally, Authority Legibility' },
  { id: 'package-layout', kind: 'Package', title: 'Layout Kit', eyebrow: 'Development package', description: 'The interface system for arranging Field material across Composed, Setting, Pulse, Graph, and Theater.', origin: 'Layout Kit V0.03 lineage', verification: 'Verified local package', evidence: 'Git commit + deployment receipt', provenance: 'Layout release → Kidunaverse implementation', transform: 'Runtime projection', visibility: 'Public implementation + local state', delivery: 'Package context · active', semantic: 'implements_projection_for · stable', theme: 'Knowledge & Frontier', focus: 'Technology, AI & Digital Life', topic: 'Interfaces', vibes: 'Participation · Authority legibility', valence: 'Not measured for all dimensions', measurement: 'Partial; missing remains explicit', visual: 'layout', visualStatus: 'Provisional interface tile', recommendation: 'This package is active in the current Layout.', related: 'Build Kiduna, Contribution' },
  { id: 'package-build-kiduna', kind: 'Package', title: 'Build Kiduna Package', eyebrow: 'Working system package', description: 'A bounded collection connecting purpose, people, contribution, governance, learning, and value.', origin: 'Build Kiduna working release', verification: 'Verified package', evidence: 'Release manifest + checksums', provenance: 'Builder output → package registry', transform: 'Package summary view', visibility: 'Authorized package metadata', delivery: 'Package context · eligible', semantic: 'packages_capability_for · stable', theme: 'Knowledge & Frontier', focus: 'Technology, AI & Digital Life', topic: 'Building Kiduna', vibes: 'Participation · Stewardship', valence: '64–82 across applicable dimensions', measurement: 'Measured', visual: 'build-package', visualStatus: 'Approved Actions Sigil used as interface graphic', image: 'assets/sigils/actions.png', recommendation: 'Its release activity is directly connected to Moto’s current Realm.', related: 'Build Kiduna, Layout Kit, Contribution' },
  { id: 'package-royals', kind: 'Package', title: 'Royals & Rogues', eyebrow: 'Game package · Rehearsal', description: 'A complete social strategy experience of position, risk, exchange, and shifting allegiance.', origin: 'Royals & Rogues package', verification: 'Verified package', evidence: 'Package manifest · rehearsal receipt', provenance: 'Package release → Theater rehearsal', transform: 'Package artwork and bounded metadata', visibility: 'Local rehearsal context', delivery: 'Theater package context · landed', semantic: 'supports_play_in · stable', theme: 'Culture & Play', focus: 'Games, Fandom & Social Entertainment', topic: 'Strategy games', vibes: 'Participation', valence: 'Not currently measured', measurement: 'Missing; no value fabricated', visual: 'royals', visualStatus: 'Package artwork; not a Power Map Card', image: 'assets/packages/royals-and-rogues.png', recommendation: 'Moto recently rehearsed this package.', related: 'Theater, Play' },
  { id: 'node-contribution', kind: 'Node', title: 'Contribution', eyebrow: 'Work and learning node', description: 'Issues, stewardship, attribution, and learning through meaningful participation.', origin: 'Build Kiduna Power Map', verification: 'Verified node identity', evidence: 'Graph record + typed edges', provenance: 'Build Kiduna map release', transform: 'Node summary from graph record', visibility: 'Realm-visible', delivery: 'Graph projection · landed', semantic: 'advances_purpose_of · stable', theme: 'Work & Wealth', focus: 'Work, Careers & Trades', topic: 'Contribution', vibes: 'Participation · Stewardship', valence: 'Participation 72; Stewardship 66', measurement: 'Measured', visual: 'contribution', visualStatus: 'Approved Organizer Sigil used as interface graphic', image: 'assets/sigils/organizer.png', recommendation: 'Contribution is one edge from the current Build Kiduna Locus.', related: 'Build Kiduna, Visible Value Flow' },
  { id: 'node-invitation', kind: 'Node', title: 'Invitation as Orientation', eyebrow: 'Relationship pattern node', description: 'Reveal living work and context before asking someone to commit or belong.', origin: 'Kinship Power Map', verification: 'Candidate node interpretation', evidence: 'Three related moments · reviewable', provenance: 'Observed pattern → candidate Semantic Landing', transform: 'Attributable pattern summary', visibility: 'Personal + invitation-safe context', delivery: 'Culture projection · landed', semantic: 'interprets_pattern_in · candidate', theme: 'People & Care', focus: 'Relationships, Family & Caregiving', topic: 'Invitations', vibes: 'Belonging · Participation', valence: 'Belonging disputed', measurement: 'Candidate + disputed', visual: 'invitation', visualStatus: 'Approved Invitation Sigil used as interface graphic', image: 'assets/sigils/invitation.png', recommendation: 'It connects Alice’s invitation to the Service Alliance welcome path.', related: 'Alice, Service Alliance, Kinship' },
  { id: 'node-authority', kind: 'Node', title: 'Authority Legibility', eyebrow: 'Governance node', description: 'Make the basis, scope, limits, and review path of authority visible.', origin: 'Build Kiduna Power Map', verification: 'Verified node identity', evidence: 'Graph record; observation is stale', provenance: 'Governance records → node Valence', transform: 'Governance-safe summary', visibility: 'Realm-visible', delivery: 'Governance projection · landed', semantic: 'clarifies_authority_for · stable', theme: 'Society & Justice', focus: 'Civic Life, Democracy & Governance', topic: 'Authority', vibes: 'Authority legibility', valence: 'Last observed 46–68', measurement: 'Stale evidence', visual: 'authority', visualStatus: 'Provisional interface tile; no approved Card', recommendation: 'Two active decisions depend on visible authority boundaries.', related: 'Build Kiduna, Research Ally' },
  { id: 'node-care-threshold', kind: 'Node', title: 'Care Threshold', eyebrow: 'Material condition node', description: 'A condition where care, accessibility, or human capacity changes what can responsibly proceed.', origin: 'Service Alliance Power Map', verification: 'Candidate node', evidence: 'Current welcome-path discussion', provenance: 'Care observation → held candidate', transform: 'Private details removed', visibility: 'Minimized invitation-scoped view', delivery: 'Current Locus pool · held', semantic: 'constrains_activity_in · candidate', theme: 'People & Care', focus: 'Service Communities', topic: 'Care', vibes: 'Participation · Stewardship', valence: 'Unknown in current context', measurement: 'Unknown; held for review', visual: 'care', visualStatus: 'Provisional interface tile; no approved Card', recommendation: 'It may explain why the welcome path needs a slower threshold.', related: 'Service Alliance, Invitation as Orientation' },
  { id: 'node-value-flow', kind: 'Node', title: 'Visible Value Flow', eyebrow: 'Economic relationship node', description: 'Make money, labor, care, knowledge, benefit, cost, and stewardship legible without collapsing them.', origin: 'Build Kiduna Power Map', verification: 'Verified node identity', evidence: 'Graph record + Vault receipts', provenance: 'Resource Records → typed relationship projection', transform: 'Amounts minimized where required', visibility: 'Personal + governed Realm views', delivery: 'Economics projection · landed', semantic: 'makes_value_visible_in · stable', theme: 'Work & Wealth', focus: 'Money, Finance & Ownership', topic: 'Value', vibes: 'Stewardship · Authority legibility', valence: 'Stewardship 58–82', measurement: 'Measured', visual: 'value', visualStatus: 'Approved Actions Sigil used as interface graphic', image: 'assets/sigils/actions.png', recommendation: 'Current compute and Themecoin receipts make this node material.', related: 'Budget Actor, Contribution, Build Kiduna' }
];

export const coherenceDimensions = [
  { id: 'participation', label: 'Participation', low: 'Closed', high: 'Open', map: 'Build Kiduna Power Map', status: 'Published · measured', valence: '64–78', explanation: 'How available the current work is to meaningful participation. This is contextual, not a measure of people.' },
  { id: 'stewardship', label: 'Stewardship', low: 'Extractive', high: 'Regenerative', map: 'Build Kiduna Power Map', status: 'Published · measured', valence: '58–82', explanation: 'How responsibility, maintenance, and renewal are carried in this map context.' },
  { id: 'belonging', label: 'Belonging', low: 'Peripheral', high: 'Rooted', map: 'Kinship Power Map', status: 'Published · disputed', valence: 'Disputed', explanation: 'A relationship-specific dimension whose current evidence contains multiple perspectives.' },
  { id: 'legibility', label: 'Authority legibility', low: 'Opaque', high: 'Explicit', map: 'Build Kiduna Realm', status: 'Published · stale evidence', valence: 'Last observed 46–68', explanation: 'Whether the basis and scope of authority are visible. The current observation needs review.' }
];

export const defaultReceptionProfiles = [
  {
    id: 'working-horizon', name: 'Working horizon', createdAt: '2026-09-01T09:18:00-04:00',
    transmitterIds: ['realm-build-kiduna', 'realm-service-alliance', 'avatar-alice', 'ally-research', 'actor-budget', 'map-kinship', 'package-layout'],
    themes: ['People & Care', 'Knowledge & Frontier'],
    foci: ['Community, Mutual Aid & Participation', 'Technology, AI & Digital Life'],
    topics: ['Kiduna', 'Agentic interfaces', 'Community power'],
    sourcePreferences: { 'realm-build-kiduna': { stage: 'Bring closer', order: 1, interruption: 'When available' }, 'realm-service-alliance': { stage: 'Normal', order: 0, interruption: 'Ambient only' }, 'avatar-alice': { stage: 'Bring closer', order: 2, interruption: 'When available' }, 'ally-research': { stage: 'Normal', order: 0, interruption: 'Do not interrupt' }, 'actor-budget': { stage: 'Hold', order: 0, interruption: 'Threshold only' }, 'map-kinship': { stage: 'Normal', order: 0, interruption: 'Ambient only' }, 'package-layout': { stage: 'Normal', order: 0, interruption: 'Ambient only' } },
    vibeRanges: { participation: [40, 88], stewardship: [55, 92], belonging: [28, 84], legibility: [50, 100] },
    strength: 72,
    time: { preset: 'Last 30 days', start: '', end: '', timezone: 'America/New_York', includeCurrent: true, includeHistory: true }
  },
  {
    id: 'quiet-research', name: 'Quiet research', createdAt: '2026-08-29T14:00:00-04:00',
    transmitterIds: ['ally-research', 'theme-technology', 'map-systems'], themes: ['Knowledge & Frontier'],
    foci: ['Science, Research & Discovery', 'Technology, AI & Digital Life'], topics: ['Coherence', 'Agentic interfaces'],
    sourcePreferences: { 'ally-research': { stage: 'Bring closer', order: 1, interruption: 'Do not interrupt' }, 'theme-technology': { stage: 'Normal', order: 0, interruption: 'Do not interrupt' }, 'map-systems': { stage: 'Normal', order: 0, interruption: 'Do not interrupt' } },
    vibeRanges: { participation: [20, 78], stewardship: [45, 100], belonging: [0, 100], legibility: [65, 100] },
    strength: 38, time: { preset: 'Last 7 days', start: '', end: '', timezone: 'America/New_York', includeCurrent: false, includeHistory: true }
  },
  {
    id: 'people-i-trust', name: 'People I trust', createdAt: '2026-08-26T11:30:00-04:00',
    transmitterIds: ['avatar-alice', 'avatar-jeya', 'realm-service-alliance'], themes: ['People & Care'], foci: ['Relationships, Family & Caregiving'], topics: ['Invitations'],
    sourcePreferences: { 'avatar-alice': { stage: 'Bring closer', order: 1, interruption: 'When available' }, 'avatar-jeya': { stage: 'Normal', order: 0, interruption: 'Ambient only' }, 'realm-service-alliance': { stage: 'Normal', order: 0, interruption: 'Ambient only' } },
    vibeRanges: { participation: [50, 100], stewardship: [60, 100], belonging: [48, 100], legibility: [40, 100] },
    strength: 55, time: { preset: 'Right now', start: '', end: '', timezone: 'America/New_York', includeCurrent: true, includeHistory: false }
  }
];

export const fieldObjects = {
  composed: [
    {
      id: 'service-alliance', type: 'Alliance', title: 'Service Alliance', eyebrow: 'Already in motion',
      body: 'People are shaping a welcome path so new members find a real place to contribute.',
      meta: 'Conversation active now', accent: 'sky', x: 18, y: 50
    },
    {
      id: 'alice-invitation', type: 'Invitation', title: 'There’s a place for the way you work.', eyebrow: 'Personal invitation · from Alice',
      body: 'Alice has opened a way into Service Alliance—not a blank account, but living work you can see before choosing where to stand.',
      meta: 'Nothing committed yet', accent: 'gold', x: 50, y: 39
    },
    {
      id: 'place-to-contribute', type: 'Contribution', title: 'A place to contribute', eyebrow: 'A thread Alice pointed to',
      body: 'Help someone joining after you find the useful edge of their power.',
      meta: 'Three possible first moves', accent: 'lavender', x: 82, y: 51
    }
  ],
  setting: [
    {
      id: 'build-kiduna', type: 'Realm', title: 'Build Kiduna', eyebrow: 'Current Realm',
      body: 'The working center for making Kiduna real with people, code, and shared purpose.',
      meta: '8 active · 3 decisions', accent: 'sky', x: 29, y: 39
    },
    {
      id: 'founding-table', type: 'Scene', title: 'Founding table', eyebrow: 'Gathering in motion',
      body: 'Jeya’s invitation and the contribution model are ready for a closer look.',
      meta: 'Conversation · 18 min ago', accent: 'gold', x: 57, y: 29
    },
    {
      id: 'service-alliance', type: 'Alliance', title: 'Service Alliance', eyebrow: 'Relationship field',
      body: 'A welcome path where people can find the useful edge of their power.',
      meta: 'Momentum rising', accent: 'mint', x: 70, y: 58
    },
    {
      id: 'layout-kit', type: 'Kit', title: 'Layout Kit', eyebrow: 'Development',
      body: 'The interface system taking shape through Moto’s daily work with Ki.',
      meta: 'Local · changes preserved', accent: 'lavender', x: 39, y: 68
    }
  ],
  pulse: [
    { id: 'signal-jeya', type: 'Person', title: 'Jeya', eyebrow: 'Invitation proposal', body: 'Could help shape how contribution works.', meta: 'High relevance · unresolved', accent: 'gold', x: 46, y: 31 },
    { id: 'signal-contribution', type: 'Question', title: 'Contribution', eyebrow: 'Scale question', body: 'How do 5,000 people find meaningful work?', meta: 'Purpose · value · governance', accent: 'sky', x: 67, y: 39 },
    { id: 'signal-kinship', type: 'Power Map', title: 'Kinship', eyebrow: 'Emerging pattern', body: 'Three current decisions share a relationship structure.', meta: 'Culture · 4 connections', accent: 'lavender', x: 27, y: 49 },
    { id: 'signal-funding', type: 'Opportunity', title: 'Accelerator window', eyebrow: 'Closes in 4 days', body: 'The application can reuse the current investor narrative.', meta: 'Action possible · review first', accent: 'mint', x: 55, y: 62 },
    { id: 'signal-compute', type: 'Resource', title: 'Compute threshold', eyebrow: 'Resource condition', body: 'Projected runway remains inside your weekly boundary.', meta: '31.8k available', accent: 'sky', x: 78, y: 67 },
    { id: 'signal-receipt', type: 'Record', title: 'Design Kit V0.04', eyebrow: 'Recent receipt', body: 'Violet-led foundations and master colors are current.', meta: 'Verified · 08:37 MDT', accent: 'gold', x: 20, y: 69 }
  ],
  graph: [
    { id: 'graph-purpose', type: 'Purpose', title: 'Build Kiduna', eyebrow: 'Locus', body: 'Create the living system and the relationships that sustain it.', meta: 'Center node', accent: 'gold', x: 48, y: 42 },
    { id: 'graph-people', type: 'Source group', title: 'Founding people', eyebrow: 'Relationship', body: 'Sources represented through their active Avatars.', meta: '8 linked Sources', accent: 'lavender', x: 23, y: 26 },
    { id: 'graph-contribution', type: 'Activity', title: 'Contribution', eyebrow: 'Work system', body: 'Issues, stewardship, attribution, and learning.', meta: '4 incoming edges', accent: 'sky', x: 73, y: 24 },
    { id: 'graph-governance', type: 'Forum', title: 'Decision field', eyebrow: 'Authority', body: 'Proposals, policy, and delegated authority.', meta: '2 open proposals', accent: 'gold', x: 77, y: 65 },
    { id: 'graph-value', type: 'Exchange', title: 'Value flows', eyebrow: 'Economics', body: 'Compute, compensation, contribution, and ownership.', meta: '3 typed flows', accent: 'mint', x: 22, y: 67 }
  ],
  theater: []
};

export const historyEntries = [
  { id: 'h1', time: '22:18', kind: 'Creation', title: 'Layout Kit session opened', actor: 'Moto', authority: 'Local development', detail: 'Composed became the default Layout Type for this browser session.', source: 'Layout Kit local state' },
  { id: 'h2', time: '21:42', kind: 'Governance', title: 'Contribution policy moved to review', actor: 'Moto + Ki', authority: 'Build Kiduna · Catalyst', detail: 'Draft retained; no policy was published and no member permissions changed.', source: 'Build Kiduna Forum' },
  { id: 'h3', time: '20:58', kind: 'Connection', title: 'Jeya invitation proposal inspected', actor: 'Moto', authority: 'Personal request', detail: 'The proposal remains unsent. Consent, membership, Role, and access are not established.', source: 'Meeting record · Aug 31' },
  { id: 'h4', time: '19:26', kind: 'Economic', title: 'Compute allocation updated', actor: 'Budget Actor', authority: 'Standing permission · weekly limit', detail: '3,200 compute units were moved into the Design and Build allocation.', source: 'Vault receipt 8814' },
  { id: 'h5', time: '18:11', kind: 'System', title: 'Design Kit V0.04 resolved', actor: 'Ki', authority: 'Read-only discovery', detail: 'The latest visible Design Kit now points to Kiduna Design System v1.4.0.', source: 'Foundation registry and current link' },
  { id: 'h6', time: 'Yesterday', kind: 'Package', title: 'Royals & Rogues rehearsed', actor: 'Moto', authority: 'Local Play', detail: 'The package entered Theater in Rehearsal and returned to the previous Field context.', source: 'Package session record' }
];

export const packages = [
  { id: 'royals-rogues', title: 'Royals & Rogues', kind: 'Game package', description: 'A complete social strategy experience of position, risk, exchange, and shifting allegiance.', image: 'assets/packages/royals-and-rogues.png', accent: 'gold', status: 'Ready to rehearse' },
  { id: 'systems-oracle', title: 'Systems Oracle', kind: 'Power Map package', description: 'Traverse institutions, technologies, incentives, and relationships shaping Big Tech.', accent: 'sky', status: 'Ready' },
  { id: 'build-kiduna', title: 'Build Kiduna', kind: 'Working system', description: 'Purpose, people, contribution, governance, learning, and value in one evolving package.', accent: 'mint', status: 'Active' }
];

export const initialNotifications = [
  { id: 'n1', kind: 'ki', tone: 'sky', title: 'Ki noticed a shared pattern', body: 'Contribution, invitations, and governance are converging around one question.', persistent: false },
  { id: 'n2', kind: 'governance', tone: 'gold', title: 'Two decisions need you', body: 'One proposal closes tomorrow; one needs an authority boundary.', persistent: true },
  { id: 'n3', kind: 'system', tone: 'mint', title: 'Layout state is local', body: 'Type, panel, filters, and Avatar state will persist in this browser.', persistent: false }
];

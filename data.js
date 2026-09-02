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
  { id: 'package-royals', name: 'Royals & Rogues', type: 'Package', context: 'Game package · Rehearsal', signalKinds: ['sessions', 'updates', 'invitations'], why: 'Moto asked to keep rehearsal changes near.', addedAt: 'Aug 18' }
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

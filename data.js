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

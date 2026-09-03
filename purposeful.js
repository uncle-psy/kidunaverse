import { icon } from './icons.js';

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));

export const sourceOptions = [
  { id: 'moto', name: 'Moto', role: 'Catalyst', allowed: true, access: 'Signed-in Source · own Field' },
  { id: 'jeya', name: 'Jeya', role: 'Mage', allowed: true, access: 'Shared project view · prototype permission' },
  { id: 'aashik', name: 'Aashik', role: 'Mage', allowed: false, access: 'Permission required' },
  { id: 'sri', name: 'Sri', role: 'Mage', allowed: false, access: 'Permission required' },
  { id: 'elias', name: 'Elias', role: 'Builder', allowed: false, access: 'Permission required' },
  { id: 'vijay', name: 'Vijay', role: 'Builder', allowed: true, access: 'Shared project view · prototype permission' },
  { id: 'muthu', name: 'Muthu', role: 'Builder', allowed: false, access: 'Permission required' }
];

export const forces = [
  ['Gravity', 'What matters here, to this Source, now?'],
  ['Affinity', 'What is connected through relationship and belonging?'],
  ['Attention', 'What is already being consciously encountered?'],
  ['Constraint', 'What boundary or dependency most needs care?'],
  ['Momentum', 'What is already moving and ready to continue?'],
  ['Renewal', 'What needs repair, replenishment, or another beginning?']
];

export const topicHierarchy = [
  { name: 'People & Care', foci: [
    { name: 'Health, Disability & Wellbeing', tags: ['strength', 'nutrition', 'accessibility', 'daily care'] },
    { name: 'Mental Health, Recovery & Grief', tags: ['recovery', 'grief', 'peer support'] },
    { name: 'Relationships, Family & Caregiving', tags: ['caregiving', 'family', 'kinship'] },
    { name: 'Service Communities', tags: ['mutual care', 'welcome', 'service'] }
  ] },
  { name: 'Society & Justice', foci: [
    { name: 'Rights, Justice & Solidarity', tags: ['rights', 'solidarity', 'access'] },
    { name: 'Civic Life, Democracy & Governance', tags: ['governance', 'voting', 'public life'] },
    { name: 'Community, Mutual Aid & Participation', tags: ['mutual aid', 'participation', 'organizing'] },
    { name: 'Safety, Preparedness & Response', tags: ['preparedness', 'response', 'safety'] }
  ] },
  { name: 'Culture & Play', foci: [
    { name: 'Arts & Creative Expression', tags: ['visual art', 'music', 'performance'] },
    { name: 'Heritage, Language & Identity', tags: ['heritage', 'language', 'identity'] },
    { name: 'Games, Fandom & Social Entertainment', tags: ['games', 'theater', 'sports'] },
    { name: 'Media, Storytelling & Journalism', tags: ['media', 'video', 'storytelling'] }
  ] },
  { name: 'Place & Planet', foci: [
    { name: 'Environment, Climate & Conservation', tags: ['watersheds', 'climate', 'conservation'] },
    { name: 'Energy, Infrastructure & Mobility', tags: ['energy', 'infrastructure', 'mobility'] },
    { name: 'Housing, Place & Belonging', tags: ['housing', 'place', 'belonging'] },
    { name: 'Water, Agriculture & Food Systems', tags: ['water', 'food', 'agriculture'] }
  ] },
  { name: 'Work & Wealth', foci: [
    { name: 'Work, Careers & Trades', tags: ['career', 'salary', 'portfolio', 'craft'] },
    { name: 'Enterprise, Commerce & Markets', tags: ['enterprise', 'markets', 'cooperation'] },
    { name: 'Money, Finance & Ownership', tags: ['treasury', 'ownership', 'payments'] }
  ] },
  { name: 'Knowledge & Frontier', foci: [
    { name: 'Education, Learning & Skills', tags: ['learning', 'documentation', 'training'] },
    { name: 'Science, Research & Discovery', tags: ['research', 'evidence', 'discovery'] },
    { name: 'Technology, AI & Digital Life', tags: ['Kiduna', 'AI', 'software', 'agents'] }
  ] }
];

export const realms = [
  {
    id: 'build-kiduna', name: 'Build Kiduna', type: 'Project', monogram: 'BK',
    purpose: 'Software made from Truth, Beauty, and Love.',
    subtitle: 'A working project inside Kinship Duna',
    body: 'Builders, creators, and Mages are shaping the systems that make Kiduna useful, legible, and worthy of trust.',
    members: 7, resources: 31800, resourceLabel: '$31.8K', activity: 94, activityLabel: 'Very active', formed: '2026-07-18', joined: true, muted: false, sponsored: false,
    parent: 'Kinship Duna', catalyst: 'Moto', coin: 'Kinship Capacity', maps: ['Kiduna Canon', 'Transceiver', 'Realm creation'],
    topic: 'Knowledge & Frontier', foci: ['Technology, AI & Digital Life', 'Education, Learning & Skills'], tags: ['Kiduna', 'software', 'agents'],
    privacy: 'Private project', access: 'Visible here through a prototype project-view Permission.', provenance: 'Trello export snapshot and product-owner requirements'
  },
  {
    id: 'inner-clinic', name: 'Inner Clinic', type: 'Project', monogram: 'IC',
    purpose: 'Make better health feel possible, personal, and sustainable.',
    subtitle: 'A provisional personal health practice',
    body: 'A place to connect goals, small practices, reflection, and trusted care without pretending a prototype is medical advice.',
    members: 14, resources: 12000, resourceLabel: '$12K', activity: 61, activityLabel: 'Steady', formed: '2026-05-12', joined: true, muted: false, sponsored: false,
    parent: 'Kinship Duna', catalyst: 'Moto', coin: 'Care Capacity', maps: ['Better Health', 'Strength & Recovery'],
    topic: 'People & Care', foci: ['Health, Disability & Wellbeing'], tags: ['strength', 'nutrition', 'daily care'],
    privacy: 'Personal prototype', access: 'Illustrative only; no clinical system or live care record is connected.', provenance: 'Product-owner scenario; editorial prototype data'
  },
  {
    id: 'nature-of-work', name: 'The Nature of Work', type: 'Community', monogram: 'NW',
    purpose: 'Help people find more fulfillment, dignity, and possibility in work.',
    subtitle: 'A community for making work more human',
    body: 'People explore better roles, stronger portfolios, trusted introductions, fairer compensation, and meaningful working lives.',
    members: 284, resources: 86000, resourceLabel: '$86K', activity: 73, activityLabel: 'Active', formed: '2025-11-03', joined: true, muted: false, sponsored: false,
    parent: 'Kinship Duna', catalyst: 'Mara', coin: 'Work Capacity', maps: ['Nature of Work', 'Careers & Trades'],
    topic: 'Work & Wealth', foci: ['Work, Careers & Trades'], tags: ['career', 'salary', 'portfolio'],
    privacy: 'Community view', access: 'Illustrative work examples; no live employer or salary data.', provenance: 'Product-owner scenario; editorial prototype data'
  },
  {
    id: 'service-alliance', name: 'Service Alliance', type: 'Alliance', monogram: 'SA',
    purpose: 'Make it easier for people to find a useful place in work that matters.',
    subtitle: 'An alliance building warmer welcome paths',
    body: 'Communities share invitations, facilitation, practices, and care so a newcomer can arrive with context and agency.',
    members: 612, resources: 154000, resourceLabel: '$154K', activity: 87, activityLabel: 'Very active', formed: '2025-08-19', joined: false, muted: false, sponsored: true,
    parent: 'Kinship Duna', catalyst: 'Alice', coin: 'Service Capacity', maps: ['Welcome Paths', 'Service Communities'],
    topic: 'People & Care', foci: ['Service Communities', 'Relationships, Family & Caregiving'], tags: ['welcome', 'service', 'participation'],
    privacy: 'Invitation-scoped', access: 'A public summary is visible; participation requires a separately reviewed invitation.', provenance: 'Existing prototype Realm, adapted from prior Field content'
  },
  {
    id: 'kinship-duna', name: 'Kinship Duna', type: 'Organization', monogram: 'KD',
    purpose: 'Grow forms of belonging that expand human and collective agency.',
    subtitle: 'The organization holding Build Kiduna',
    body: 'Kinship Duna gathers projects, programs, people, and shared resources around a durable social purpose.',
    members: 1840, resources: 820000, resourceLabel: '$820K', activity: 78, activityLabel: 'Active', formed: '2024-03-21', joined: false, muted: false, sponsored: false,
    parent: 'No parent Realm shown', catalyst: 'Moto', coin: 'Kinship Coin', maps: ['Kinship', 'Governance', 'Contribution'],
    topic: 'Society & Justice', foci: ['Community, Mutual Aid & Participation'], tags: ['kinship', 'participation', 'governance'],
    privacy: 'Organization summary', access: 'Public summary; nested Realm access remains independent.', provenance: 'Product-owner requirements and existing prototype context'
  },
  {
    id: 'open-school', name: 'Open School', type: 'Institution', monogram: 'OS',
    purpose: 'Let learning follow curiosity, contribution, and real life.',
    subtitle: 'A learning institution in formation',
    body: 'Open School connects learners, teachers, practical projects, and evidence of growing capability.',
    members: 930, resources: 240000, resourceLabel: '$240K', activity: 66, activityLabel: 'Steady', formed: '2025-02-14', joined: false, muted: false, sponsored: true,
    parent: 'Commons Network', catalyst: 'Amal', coin: 'Learning Capacity', maps: ['Open Learning', 'Skills'],
    topic: 'Knowledge & Frontier', foci: ['Education, Learning & Skills'], tags: ['learning', 'skills', 'documentation'],
    privacy: 'Public summary', access: 'Programs have their own admission and privacy rules.', provenance: 'Illustrative Realm record'
  },
  {
    id: 'river-commons', name: 'River Commons', type: 'Community', monogram: 'RC',
    purpose: 'Restore living waters and the relationships that sustain them.',
    subtitle: 'A watershed community',
    body: 'Neighbors, researchers, stewards, and local organizations coordinate restoration, learning, and care.',
    members: 376, resources: 128000, resourceLabel: '$128K', activity: 82, activityLabel: 'Very active', formed: '2025-04-06', joined: false, muted: false, sponsored: true,
    parent: 'Living Watersheds', catalyst: 'Nia', coin: 'Watershed Capacity', maps: ['Watersheds', 'Mutual Stewardship'],
    topic: 'Place & Planet', foci: ['Water, Agriculture & Food Systems', 'Environment, Climate & Conservation'], tags: ['water', 'conservation', 'community'],
    privacy: 'Public community', access: 'Public summary; contributor details depend on Role and Consent.', provenance: 'Illustrative Realm record'
  },
  {
    id: 'repair-cell', name: 'Repair Cell', type: 'Cell', monogram: 'RX',
    purpose: 'Keep essential tools useful and out of the waste stream.',
    subtitle: 'A small autonomous repair team',
    body: 'A compact local group shares tools, parts, practical knowledge, and scheduled repair sessions.',
    members: 18, resources: 7400, resourceLabel: '$7.4K', activity: 48, activityLabel: 'Occasional', formed: '2026-01-28', joined: false, muted: true, sponsored: false,
    parent: 'Makers Commons', catalyst: 'Rey', coin: 'Repair Credits', maps: ['Repair Practice'],
    topic: 'Work & Wealth', foci: ['Work, Careers & Trades'], tags: ['repair', 'craft', 'tools'],
    privacy: 'Members and invited guests', access: 'Muted in this Reception profile; prior authorized records remain.', provenance: 'Illustrative Realm record'
  },
  {
    id: 'makers-association', name: 'Makers Association', type: 'Association', monogram: 'MA',
    purpose: 'Help practical crafts travel through teaching, exchange, and shared standards.',
    subtitle: 'A community of practice',
    body: 'Makers learn together, document methods, share opportunities, and steward the quality of their craft.',
    members: 1240, resources: 310000, resourceLabel: '$310K', activity: 58, activityLabel: 'Steady', formed: '2024-09-02', joined: false, muted: false, sponsored: false,
    parent: 'Commons Network', catalyst: 'June', coin: 'Maker Capacity', maps: ['Craft & Practice'],
    topic: 'Work & Wealth', foci: ['Work, Careers & Trades', 'Enterprise, Commerce & Markets'], tags: ['craft', 'skills', 'enterprise'],
    privacy: 'Association summary', access: 'Public summary; professional records remain participant-controlled.', provenance: 'Illustrative Realm record'
  }
];

// Local Receiver tuning metadata. These values are visible to the member and
// sort only this Source's presentation; they are not importance or quality scores.
const realmReception = {
  'build-kiduna': { intensity: 92, range: 68 },
  'inner-clinic': { intensity: 72, range: 34 },
  'nature-of-work': { intensity: 78, range: 61 },
  'service-alliance': { intensity: 66, range: 73 },
  'kinship-duna': { intensity: 58, range: 88 },
  'open-school': { intensity: 48, range: 79 },
  'river-commons': { intensity: 62, range: 70 },
  'repair-cell': { intensity: 22, range: 26 },
  'makers-association': { intensity: 44, range: 64 }
};

const board = { id: '6a85ca8e5b32c551dc97cdb6', name: 'Kiduna AI Flow Board 🛠️', snapshot: '2026-09-03T13:38:23.016Z', snapshotLabel: 'Sep 3, 2026 at 9:38 AM EDT', privacy: 'Private Trello export snapshot' };

const boardWork = [
  ['6a85d5268ecba8e3a6ded588','Review the free Chips flow','Review','Muthu + Aashik','Review the chip flow','Opens submitted screenshots and prepares feedback; it does not approve, publish, or change the flow.','Muthu asked Moto for feedback after moving this work into Review.',1],
  ['6a85d507c50249d21f7ace05','Review the Cell creation flow','Review','Vijay','Review the Cell flow','Opens the flow evidence and prepares comments; it does not approve a Realm or change membership.','Vijay requested review of the creation flow.',2],
  ['6a85d50d184b5b5776f061a6','Review the Alliance creation flow','Review','Muthu','Review the Alliance flow','Opens the submitted evidence and prepares feedback; it does not create or approve an Alliance.','Muthu directly requested Moto’s review.',3],
  ['6a982410f9357bc785d37f7d','Continue the Mapping creation engine','Development','Muthu + Jeya','See the next build move','Opens current project context and prepares a next-step note; it does not assign or merge work.','This recently moved into active development and supports the project Purpose.',4],
  ['6a9831ed67591cc4e8c6982a','Prepare the next website release','Deployment','Vijay','Verify the release path','Shows the release context and a staging checklist; it does not deploy or publish.', 'Website work is active and connects the product to people using it.',5],
  ['6a9589998b706ea72a1c08b4','Shape video and YouTube in Theater','Development','Elias','Continue the Theater design','Opens the exploratory notes and prepares a scoped follow-up; it does not connect an external account.','This is the board’s most recently active work.',6],
  ['6a9821dcc1c2e6ac28daec1a','Review the Transceiver changes','Review','Jeya','Review the Transceiver','Opens the current evidence and prepares review notes; it does not merge or publish changes.','The Transceiver carries reception, landing, and authorized transmission through the product.',7],
  ['6a85d502683e61492d01b90b','Verify the new Realm roles','Review','Aashik','Review the Role model','Opens the proposed Role behavior and prepares questions; it does not grant any Role or Permission.','Realm roles affect how people participate and must remain legible.',8],
  ['6a85d539163a1df562c22127','Clarify voice chat between players','Development','Aashik','Review the voice boundary','Prepares a review of participation and privacy boundaries; it does not begin recording.', 'The item is in Review and affects direct participation.',9],
  ['6a85d52f0766f0fab091af18','Review tournaments and leaderboards','Review','Jeya','Review the game loop','Opens the proposed game loop and prepares feedback; it does not publish standings.', 'The item is in Review and needs a fair, non-manipulative interaction model.',10],
  ['6a95876209dd714c27b1cddd','Clarify the Launchpad path','Review','Aashik','Review the Launchpad','Opens the current proposal and prepares questions; it does not launch anything.', 'The proposal could shape how people begin new work.',11],
  ['6a96de7403eb6134a7a0bb83','Review proposal-making Agents','Review','Vijay','Review the proposal boundary','Shows the Agent proposal flow and prepares feedback; it does not authorize an Agent.', 'Agent proposals must stay upstream of human authority.',12],
  ['6a9587b4f4b28ba4f88a56b6','Review Decision Market policy','Governance','Aashik','Review the policy','Opens exact proposed terms and prepares comments; it does not vote or enact policy.', 'The item is in Review and touches collective decision-making.',13],
  ['6a9589748301faf5c6cbcd10','Review the Envoy naming and mandate','Governance','Vijay','Review the mandate','Shows the mandate and boundaries before any delegation; it does not delegate Authority.', 'The item is in Review and affects delegated action.',14],
  ['6a9976fa0c7cd97a8ce6983c','Explore Coins for compute','Research','Unassigned','Bring the question closer','Brings the backlog question into a local working view; it does not spend or allocate Capacity.', 'A recent backlog question connects Economics to the project Purpose.',15],
  ['6a9833529ddfbba4df5b3560','Define Realm purposes and Realm-specific Agents','Research','Unassigned','Clarify the Purpose boundary','Prepares a comparison of Realm Purpose and Agent scope; it creates no Agent or Authority.', 'Purpose must be clear before automating Realm work.',16],
  ['6a98231c7b4e51b571211703','Plan lineage and pool portability','Development','Unassigned','Outline the migration','Prepares a reversible migration outline; it does not move or overwrite lineage.', 'Portability matters to durable project continuity.',17],
  ['6a96e41f5a1d442203220d02','Explore Scene sprites','Creation','Unassigned','Open the visual brief','Stages the visual brief for review; it does not generate or publish assets.', 'Scene expression supports a more inhabitable product.',18],
  ['6a96daad82c329d458ea3387','Explore an Organization becoming a DUNA','Governance','Unassigned','Map the decision path','Prepares governance questions; it does not change the Organization’s identity.', 'The change would be consequential and needs an explicit path.',19],
  ['6a86fce6ca481391a9f5aacf','Clarify Mage presence in the world','Design','Muthu','Open the Role scenario','Stages the scenario and questions; it does not expand Mage Authority.', 'Realm-scoped Authority must remain clear in every Scene.',20],
  ['6a85d4f6d5fe335cae5fa3b6','Explore the matching system','Research','Vijay','Review the matching premise','Prepares questions about purpose, evidence, and consent; it does not rank people.', 'Matching can support connection only if it preserves agency.',21],
  ['6a85d54152be976c547c2666','Make coherence legible','Design','Vijay','Review the coherence model','Opens the model and prepares feedback; it does not diagnose anyone or create a score.', 'Coherence needs contextual, non-diagnostic expression.',22],
  ['6a85d4f0fb0899e22d0997bd','Plan automation integration','Development','Vijay','Map the safe boundary','Prepares an integration outline; it does not connect or schedule an Automation.', 'Automations need explicit triggers, Permissions, and receipts.',23],
  ['6a89998eec2c0b943e549fdc','Connect the game to the wider world','Design','Unassigned','Explore the transition','Stages a transition concept; it does not create an external connection.', 'A coherent return path can connect Play and the wider Field.',24],
  ['6a8999818437af966af2ad61','Clarify character creation and player type','Game design','Unassigned','Review the choice model','Prepares a choice-model review; it does not infer identity from behavior.', 'Player choice should remain playful without becoming a hidden profile.',25],
  ['6a89995d54d9ee22180acebb','Help players use Ki while chatting','Game design','Unassigned','Review the Ki assist','Stages the assist flow; it does not listen, message, or act for a player.', 'Ki can support learning while preserving conversation boundaries.',26],
  ['6a8da7183be0e3fe85d50543','Explore a Creator-made Power Map','Creation','Unassigned','Open the creation question','Brings the concept forward for review; it does not create or publish a Power Map.', 'This later exploration connects Creator to living Power Maps.',27],
  ['6a8da7d2c1542f24132b5cff','Explore fantasy sports with the Sports map','Game design','Unassigned','Explore the game premise','Stages a game concept; it does not connect a league or use private sports data.', 'This is a later, eligible exploration rather than current work.',28],
  ['6a8daa07c6115dcafe9e8b44','Explore seven-layer Scenes','Design','Unassigned','Compare the layer model','Prepares a visual comparison; it does not replace the current five-layer Field.', 'This is a later design exploration, kept far from current work.',29]
].map(([cardId,title,activity,assignee,action,effect,why,rank]) => ({
  id: `work:trello:${cardId}`, cardId, title, realmId: 'build-kiduna', activity, assignee, sourceViews: ['moto', ...(assignee.toLowerCase().includes('jeya') ? ['jeya'] : []), ...(assignee.toLowerCase().includes('vijay') ? ['vijay'] : [])],
  status: rank <= 3 ? 'Review requested' : rank <= 8 ? 'In progress' : rank <= 14 ? 'In review' : 'Backlog',
  result: activity === 'Governance' ? 'Chore complete' : activity === 'Review' ? 'Feature complete' : rank > 14 ? 'Chore complete' : 'Feature complete',
  purpose: 'Software made from Truth, Beauty, and Love.', action, effect, why, dependency: 'No dependency is recorded in this export snapshot.', gravity: rank,
  affinity: assignee.includes('Jeya') ? rank - 5 : rank + 3, attention: rank <= 14 ? rank : rank + 8, constraint: [8,12,13,19,21,22,23].includes(rank) ? rank - 12 : rank + 5,
  momentum: rank >= 4 && rank <= 8 ? rank - 8 : rank + 5, renewal: [5,8,17,20,22,23].includes(rank) ? rank - 9 : rank + 7,
  provenance: { kind: 'Trello export snapshot', board, list: rank <= 3 || (rank >= 9 && rank <= 14) ? 'Review' : rank <= 8 ? 'In Progress' : 'Backlog' }
}));

const illustrativeWork = [
  { id:'work:inner-clinic:weekly-plan', title:'Choose this week’s health plan', realmId:'inner-clinic', activity:'Reflection', assignee:'Moto', sourceViews:['moto'], status:'Prototype example', result:'A realistic week of care', purpose:'Make better health feel possible, personal, and sustainable.', action:'Review the plan', effect:'Shows a reversible weekly outline and questions to discuss with a qualified professional; it does not give medical advice.', why:'You joined Inner Clinic and asked for a small, sustainable next move.', gravity:9, affinity:2, attention:15, constraint:7, momentum:14, renewal:1, illustrative:true },
  { id:'work:inner-clinic:strength', title:'Notice what supports strength', realmId:'inner-clinic', activity:'Learning', assignee:'Moto', sourceViews:['moto'], status:'Prototype example', result:'A clearer strength practice', purpose:'Make better health feel possible, personal, and sustainable.', action:'Open the reflection', effect:'Opens non-clinical reflection prompts; it does not measure, diagnose, or prescribe.', why:'This illustrates how a health Purpose can lead to a safe next move.', gravity:18, affinity:5, attention:22, constraint:9, momentum:18, renewal:2, illustrative:true },
  { id:'work:nature-of-work:target-role', title:'Clarify the role you want next', realmId:'nature-of-work', activity:'Career reflection', assignee:'Moto', sourceViews:['moto'], status:'Illustrative', result:'A clearer job direction', purpose:'Help people find more fulfillment, dignity, and possibility in work.', action:'Shape the target role', effect:'Opens a private draft of priorities and tradeoffs; it does not apply for a job or contact anyone.', why:'You joined The Nature of Work and this is a low-risk place to begin.', gravity:10, affinity:1, attention:19, constraint:18, momentum:12, renewal:4, illustrative:true },
  { id:'work:nature-of-work:introduction', title:'Prepare to ask for an introduction', realmId:'nature-of-work', activity:'Connection', assignee:'Moto', sourceViews:['moto'], status:'Illustrative', result:'A trusted path to a better job', purpose:'Help people find more fulfillment, dignity, and possibility in work.', action:'Draft the request', effect:'Prepares a private message for review; it does not contact or message anyone.', why:'A relationship-mediated opportunity can be useful when the request stays under your control.', gravity:20, affinity:3, attention:24, constraint:16, momentum:11, renewal:6, illustrative:true },
  { id:'work:service-alliance:welcome-path', title:'Look over the welcome path', realmId:'service-alliance', activity:'Participation', assignee:'Moto', sourceViews:['moto'], status:'Illustrative invitation', result:'A warmer first way into useful work', purpose:'Make it easier for people to find a useful place in work that matters.', action:'Review the invitation', effect:'Opens an invitation preview and questions for Alice; it does not accept membership, send a reply, or create a Commitment.', why:'This appears only after Service Alliance is joined to the personal Field.', gravity:13, affinity:4, attention:18, constraint:11, momentum:9, renewal:8, dependency:'A separately reviewed invitation is required before participation.', illustrative:true }
];

export const workItems = [...boardWork, ...illustrativeWork];
export const representedRealmTypes = ['Organization', 'Community', 'Project', 'Institution', 'Alliance', 'Cell', 'Association'];

export const receiverSortDefaults = {
  'Formation Date': 'desc', Intensity: 'desc', Range: 'desc', Members: 'desc', Resources: 'desc', Activity: 'desc', Alphabetical: 'asc'
};

const receiverDirectionLabels = {
  'Formation Date': { desc: 'Newest to oldest', asc: 'Oldest to newest' },
  Intensity: { desc: 'Highest to lowest', asc: 'Lowest to highest' },
  Range: { desc: 'Widest to narrowest', asc: 'Narrowest to widest' },
  Members: { desc: 'Most to least', asc: 'Least to most' },
  Resources: { desc: 'Most to least', asc: 'Least to most' },
  Activity: { desc: 'Most active to least active', asc: 'Least active to most active' },
  Alphabetical: { desc: 'Z to A', asc: 'A to Z' }
};

export function realmState(state, realm) {
  const joined = (state.joinedRealmIds || []).includes(realm.id);
  const muted = (state.mutedRealmIds || []).includes(realm.id);
  return { joined, muted };
}

function currentRealms(state) {
  const query = (state.receiverRealmQuery || '').trim().toLowerCase();
  const types = state.receiverRealmTypes?.length ? state.receiverRealmTypes : [];
  const selected = state.receiverTopicSelection || { topics: [], foci: [], tags: [] };
  let items = realms.filter(realm => {
    const dynamic = realmState(state, realm);
    const searchable = [realm.name, realm.type, realm.purpose, realm.subtitle, realm.topic, realm.foci, realm.tags].flat().join(' ').toLowerCase();
    if (query && !searchable.includes(query)) return false;
    if (!types.includes(realm.type)) return false;
    if (!state.receiverShowMuted && dynamic.muted) return false;
    if (state.receiverOnlyJoined && !dynamic.joined) return false;
    if (state.receiverOnlySponsored && !realm.sponsored) return false;
    if (selected.topics?.length && !selected.topics.includes(realm.topic)) return false;
    if (selected.foci?.length && !realm.foci.some(item => selected.foci.includes(item))) return false;
    if (selected.tags?.length && !realm.tags.some(item => selected.tags.includes(item))) return false;
    return true;
  });
  const direction = state.receiverSortDirection === 'asc' ? 1 : -1;
  const sort = state.receiverRealmSort || 'Formation Date';
  const value = realm => sort === 'Formation Date' ? new Date(realm.formed).getTime() : sort === 'Intensity' ? realmReception[realm.id]?.intensity : sort === 'Range' ? realmReception[realm.id]?.range : sort === 'Members' ? realm.members : sort === 'Resources' ? (Number.isFinite(realm.resources) ? realm.resources : null) : sort === 'Activity' ? realm.activity : realm.name.toLowerCase();
  items.sort((a,b) => {
    const av = value(a), bv = value(b);
    if (av == null && bv == null) return a.name.localeCompare(b.name);
    if (av == null) return 1;
    if (bv == null) return -1;
    const result = typeof av === 'string' ? av.localeCompare(bv) : av - bv;
    return result * direction || a.name.localeCompare(b.name);
  });
  return items;
}

function selectionCount(selection = {}) {
  return (selection.topics?.length || 0) + (selection.foci?.length || 0) + (selection.tags?.length || 0);
}

function realmCard(state, realm, index) {
  const dynamic = realmState(state, realm);
  return `<article class="realm-library-card ${dynamic.muted ? 'is-muted' : ''}" data-realm-card="${realm.id}">
    <div class="realm-identity realm-tone-${index % 6}" aria-hidden="true"><span>${escapeHtml(realm.monogram)}</span><i></i></div>
    <div class="realm-card-copy"><span>${escapeHtml(realm.type)}${realm.sponsored ? ' · Sponsored' : ''}</span><h2>${escapeHtml(realm.name)}</h2><p>${escapeHtml(realm.purpose)}</p>
      <dl><div><dt>Members</dt><dd>${realm.members.toLocaleString()}</dd></div><div><dt>Resources</dt><dd>${realm.resourceLabel}</dd></div><div><dt>Activity</dt><dd>${realm.activityLabel}</dd></div><div><dt>Formed</dt><dd>${new Date(`${realm.formed}T12:00:00`).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</dd></div></dl>
      <div class="realm-card-states"><span>${dynamic.joined ? 'In your Field' : 'Available to join'}</span><span>${dynamic.muted ? 'Muted' : 'Receiving'}</span><span>Intensity ${realmReception[realm.id].intensity}%</span><span>Range ${realmReception[realm.id].range}%</span></div>
    </div>
    <footer><button type="button" data-realm-mute="${realm.id}">${dynamic.muted ? 'Restore' : 'Mute'}</button><button class="realm-join ${dynamic.joined ? 'is-joined' : ''}" type="button" data-realm-join="${realm.id}" aria-pressed="${dynamic.joined}">${dynamic.joined ? 'Joined' : 'Join'}</button><button ${index === 0 && !state.realmDetailId ? 'id="realm-details"' : ''} class="primary" type="button" data-realm-details="${realm.id}">Details</button></footer>
  </article>`;
}

export function renderReceiverRealm(state) {
  const visible = currentRealms(state);
  const selectedTopics = state.receiverTopicSelection || { topics: [], foci: [], tags: [] };
  const allTypes = representedRealmTypes.every(type => state.receiverRealmTypes?.includes(type));
  const filterSummary = [allTypes ? 'All Realm types' : (state.receiverRealmTypes || []).join(', ') || 'No Realm types', state.receiverOnlyJoined ? 'Joined only' : 'Joined + available', state.receiverOnlySponsored ? 'Sponsored only' : 'All funding states', state.receiverShowMuted ? 'including muted' : 'muted hidden', selectionCount(selectedTopics) ? `${selectionCount(selectedTopics)} interest selections` : 'all interests'];
  const directionLabel = receiverDirectionLabels[state.receiverRealmSort]?.[state.receiverSortDirection] || (state.receiverSortDirection === 'asc' ? 'Ascending' : 'Descending');
  return `<main class="realm-receiver" aria-label="Receiver Realm library">
    <div class="realm-atmosphere" aria-hidden="true"></div>
    <header class="realm-receiver-header"><div><span>Receiver · your available Realms</span><h1>Choose what can enter your Field.</h1><p>Tune, mute, and inspect places of participation. Joining here adds a Realm to your personal Field; it does not make you a Member or grant Authority.</p></div><button class="tool-close" type="button" data-close-panel aria-label="Close Receiver">${icon('close',20)}</button></header>
    <section class="realm-filter-shell" id="realm-filters" aria-labelledby="realm-filter-title">
      <div class="realm-search-row"><label>${icon('search',18)}<span class="sr-only">Search Realms</span><input id="realm-search" type="search" value="${escapeHtml(state.receiverRealmQuery)}" placeholder="Search Realms, Purpose, Topics, or Tags…"></label><button type="button" data-receiver-clear>Reset Receiver filters</button></div>
      <div class="realm-filter-title"><div><span>Multi-select filters</span><h2 id="realm-filter-title">What should stay visible?</h2></div><p>${visible.length} of ${realms.length} Realms · ${escapeHtml(filterSummary.join(' · '))}</p></div>
      <div class="realm-filter-buttons" role="group" aria-label="Realm filters">
        <button class="${allTypes ? 'active' : ''}" type="button" data-realm-type="All Realms" aria-pressed="${allTypes}">All Realms</button>
        ${representedRealmTypes.map(type => `<button class="${state.receiverRealmTypes?.includes(type) ? 'active' : ''}" type="button" data-realm-type="${type}" aria-pressed="${state.receiverRealmTypes?.includes(type)}">${type}</button>`).join('')}
        <button class="state-filter ${state.receiverOnlySponsored ? 'active' : ''}" type="button" data-realm-facet="Sponsored" aria-pressed="${state.receiverOnlySponsored}">Sponsored</button>
        <button class="topics-trigger ${selectionCount(selectedTopics) ? 'active' : ''}" ${!state.receiverTopicOpen ? 'id="topic-tuner"' : ''} type="button" data-action="open-topic-tuner" aria-haspopup="dialog">Topics${selectionCount(selectedTopics) ? ` (${selectionCount(selectedTopics)})` : ''}</button>
        <button class="state-filter ${state.receiverOnlyJoined ? 'active' : ''}" type="button" data-realm-facet="Joined" aria-pressed="${state.receiverOnlyJoined}">Joined</button>
        <button class="state-filter ${state.receiverShowMuted ? 'active' : ''}" type="button" data-realm-facet="Muted" aria-pressed="${state.receiverShowMuted}">Muted</button>
      </div>
      <div class="realm-sort-row"><label>Sort by<select id="realm-sort">${Object.keys(receiverSortDefaults).map(sort => `<option ${state.receiverRealmSort === sort ? 'selected' : ''}>${sort}</option>`).join('')}</select></label><button type="button" data-action="toggle-realm-sort" aria-label="Reverse Realm sort direction. Current order: ${directionLabel}">${directionLabel} <span aria-hidden="true">${state.receiverSortDirection === 'asc' ? '↑' : '↓'}</span></button><small>Resources use comparable prototype USD-equivalent values; unknown values would appear last.</small></div>
    </section>
    <section class="realm-library" id="realm-library" aria-label="Realm library">${visible.length ? visible.map(realmCard.bind(null,state)).join('') : `<div class="purposeful-empty"><span>The Receiver is quiet</span><h2>No Realms match this combination.</h2><p>Clear one or more filters. Hidden or inaccessible Realms are never disclosed through counts or empty space.</p><button type="button" data-receiver-clear>Reset Receiver filters</button></div>`}</section>
    <aside class="realm-join-boundary"><strong>What Join means here</strong><p>Join includes the Realm in this Source’s personal Field composition. Membership, Roles, Consent, Permission, and governance rights remain separate reviewed actions.</p></aside>
  </main>`;
}

function activeTopicDraft(state) {
  return state.receiverTopicDraft || { topics: [], foci: [], tags: [] };
}

function renderTopicDialog(state) {
  const draft = activeTopicDraft(state);
  const query = (state.receiverTopicQuery || '').toLowerCase();
  const topics = topicHierarchy.filter(topic => !query || topic.name.toLowerCase().includes(query) || topic.foci.some(focus => focus.name.toLowerCase().includes(query) || focus.tags.some(tag => tag.includes(query))));
  const focusOptions = topicHierarchy.filter(topic => draft.topics.includes(topic.name)).flatMap(topic => topic.foci.map(focus => ({...focus, topic:topic.name})));
  const tagOptions = focusOptions.filter(focus => draft.foci.includes(focus.name)).flatMap(focus => focus.tags);
  const chips = [...draft.topics.map(value => ['topic',value]), ...draft.foci.map(value => ['focus',value]), ...draft.tags.map(value => ['tag',value])];
  return `<section class="purposeful-dialog-backdrop" data-modal-backdrop><div class="purposeful-dialog topic-dialog" id="topic-tuner" role="dialog" aria-modal="true" aria-labelledby="topic-title" aria-describedby="topic-description" tabindex="-1">
    <header><div><span>Tune your interests</span><h1 id="topic-title">Topics, Foci, and Tags</h1><p id="topic-description">Move from a broad field of meaning toward the details you want. Nothing changes until you apply.</p></div><button type="button" data-action="cancel-topic-tuner" aria-label="Close without applying">${icon('close',20)}</button></header>
    <label class="topic-search">${icon('search',18)}<span class="sr-only">Search Topics, Foci, and Tags</span><input id="topic-search" type="search" value="${escapeHtml(state.receiverTopicQuery)}" placeholder="Search interests…"></label>
    <div class="topic-columns">
      <section><header><span>1</span><div><h2>Topics</h2><p>${draft.topics.length} selected</p></div></header><div class="topic-choice-list">${topics.map(topic => `<button class="${draft.topics.includes(topic.name) ? 'active' : ''}" type="button" data-topic-choice="${escapeHtml(topic.name)}" aria-pressed="${draft.topics.includes(topic.name)}"><span>${escapeHtml(topic.name)}</span><small>${topic.foci.length} Foci</small></button>`).join('') || '<p>No matching Topics.</p>'}</div></section>
      <section><header><span>2</span><div><h2>Foci</h2><p>${draft.foci.length} selected</p></div></header><div class="topic-choice-list">${focusOptions.length ? focusOptions.map(focus => `<button class="${draft.foci.includes(focus.name) ? 'active' : ''}" type="button" data-focus-choice="${escapeHtml(focus.name)}" aria-pressed="${draft.foci.includes(focus.name)}"><span>${escapeHtml(focus.name)}</span><small>${escapeHtml(focus.topic)} · ${focus.tags.length} Tags</small></button>`).join('') : '<p>Select a Topic to see its Foci.</p>'}</div></section>
      <section><header><span>3</span><div><h2>Tags</h2><p>${draft.tags.length} selected</p></div></header><div class="topic-choice-list compact">${tagOptions.length ? [...new Set(tagOptions)].map(tag => `<button class="${draft.tags.includes(tag) ? 'active' : ''}" type="button" data-tag-choice="${escapeHtml(tag)}" aria-pressed="${draft.tags.includes(tag)}">${escapeHtml(tag)}</button>`).join('') : '<p>Select a Focus to see its Tags.</p>'}</div></section>
    </div>
    <div class="topic-selected"><strong>Your draft</strong><div>${chips.length ? chips.map(([kind,value]) => `<button type="button" data-topic-remove="${kind}" data-topic-value="${escapeHtml(value)}" aria-label="Remove ${escapeHtml(value)}">${escapeHtml(value)} <span aria-hidden="true">×</span></button>`).join('') : '<span>No interests selected—the full Realm library will remain available.</span>'}</div></div>
    <footer><button type="button" data-action="clear-topic-draft">Clear all</button><span>Cancel keeps your prior selection.</span><button type="button" data-action="cancel-topic-tuner">Cancel</button><button class="primary" type="button" data-action="apply-topic-tuner">Apply ${selectionCount(draft) ? `${selectionCount(draft)} selections` : 'all interests'}</button></footer>
  </div></section>`;
}

function renderRealmDetails(state) {
  const realm = realms.find(item => item.id === state.realmDetailId);
  if (!realm) return '';
  const dynamic = realmState(state, realm);
  return `<section class="purposeful-dialog-backdrop" data-modal-backdrop><div class="purposeful-dialog realm-detail-dialog" id="realm-details" role="dialog" aria-modal="true" aria-labelledby="realm-detail-title" aria-describedby="realm-detail-description" tabindex="-1">
    <header><div><span>${escapeHtml(realm.type)}${realm.sponsored ? ' · Sponsored relationship disclosed' : ''}</span><h1 id="realm-detail-title">${escapeHtml(realm.name)}</h1><p id="realm-detail-description">${escapeHtml(realm.subtitle)}</p></div><button type="button" data-action="close-realm-details" aria-label="Close Realm Details">${icon('close',20)}</button></header>
    <div class="realm-detail-landscape"><div class="realm-detail-art" aria-hidden="true"><span>${escapeHtml(realm.monogram)}</span><i></i><b></b></div><section class="realm-detail-story"><span>Purpose</span><h2>${escapeHtml(realm.purpose)}</h2><p>${escapeHtml(realm.body)}</p><aside><strong>Why you can see this</strong><p>${escapeHtml(realm.access)}</p></aside></section></div>
    <div class="realm-detail-grid"><section><span>Realm</span><dl><div><dt>Type</dt><dd>${realm.type}</dd></div><div><dt>Parent</dt><dd>${escapeHtml(realm.parent)}</dd></div><div><dt>Catalyst</dt><dd>${escapeHtml(realm.catalyst)}</dd></div><div><dt>Formed</dt><dd>${new Date(`${realm.formed}T12:00:00`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</dd></div></dl></section><section><span>Life here</span><dl><div><dt>Members</dt><dd>${realm.members.toLocaleString()}</dd></div><div><dt>Resources</dt><dd>${realm.resourceLabel} · prototype USD equivalent</dd></div><div><dt>Activity</dt><dd>${realm.activityLabel} · ${realm.activity}/100 display band</dd></div><div><dt>Reception</dt><dd>${dynamic.muted ? 'Muted' : 'Receiving'} · intensity ${realmReception[realm.id].intensity}% · range ${realmReception[realm.id].range}% · ${dynamic.joined ? 'in your Field' : 'available'}</dd></div></dl></section><section><span>Inside the Realm</span><dl><div><dt>Coin</dt><dd>${escapeHtml(realm.coin)}</dd></div><div><dt>Maps</dt><dd>${realm.maps.map(escapeHtml).join(' · ')}</dd></div><div><dt>Interests</dt><dd>${escapeHtml(realm.topic)} · ${realm.foci.map(escapeHtml).join(' · ')}</dd></div><div><dt>Sponsorship</dt><dd>${realm.sponsored ? 'Sponsored visibility is disclosed; sponsorship grants no governance control.' : 'No sponsorship shown in this prototype record.'}</dd></div></dl></section></div>
    <div class="realm-detail-boundaries"><article><span>What joining does</span><p>Adds eligible work from this Realm to your Source-relative Field. It stays in Receiver so you can tune or mute it later.</p></article><article><span>What joining does not do</span><p>It does not make you a Member, grant a Role, create Consent, widen access, or accept a Commitment.</p></article><article><span>Privacy & source</span><p>${escapeHtml(realm.privacy)} · ${escapeHtml(realm.provenance)}</p></article></div>
    <footer><button type="button" data-realm-mute="${realm.id}">${dynamic.muted ? 'Restore reception' : 'Mute Realm'}</button><button type="button" data-action="close-realm-details">Keep browsing</button><button class="primary ${dynamic.joined ? 'is-joined' : ''}" type="button" data-realm-join="${realm.id}" aria-pressed="${dynamic.joined}">${dynamic.joined ? 'Joined to your Field' : 'Join to your Field'}</button></footer>
  </div></section>`;
}

function workRealm(item) { return realms.find(realm => realm.id === item.realmId); }

export function eligibleWork(state) {
  const joined = state.joinedRealmIds || [];
  const muted = state.mutedRealmIds || [];
  const selectedSource = state.selectedSource || 'moto';
  return workItems.filter(item => {
    const realm = workRealm(item);
    if (!realm || !joined.includes(realm.id) || muted.includes(realm.id)) return false;
    if (!item.sourceViews.includes(selectedSource)) return false;
    if (state.fieldRealmType !== 'All types' && realm.type !== state.fieldRealmType) return false;
    if (state.fieldRealm !== 'All joined Realms' && realm.id !== state.fieldRealm) return false;
    if (state.fieldProject !== 'All Projects' && realm.id !== state.fieldProject) return false;
    if (state.fieldActivity !== 'All Activity' && item.activity !== state.fieldActivity) return false;
    if (state.fieldTopic !== 'All Topics' && realm.topic !== state.fieldTopic && !realm.foci.includes(state.fieldTopic) && !realm.tags.includes(state.fieldTopic)) return false;
    return true;
  });
}

export function composeField(state) {
  const force = (state.fieldForce || 'Gravity').toLowerCase();
  const eligible = eligibleWork(state);
  const sorted = [...eligible].sort((a,b) => (a[force] ?? 999) - (b[force] ?? 999) || a.id.localeCompare(b.id));
  const layers = {
    focus: sorted.slice(0,3),
    near: sorted.slice(3,8),
    active: sorted.slice(8,15),
    context: sorted.slice(15,27),
    far: sorted.slice(27)
  };
  return { eligible, layers };
}

function whyForForce(item, force) {
  if (force === 'Gravity') return item.why;
  const realm = workRealm(item);
  const language = {
    Affinity: `This connects through ${realm?.name || 'a joined Realm'}, shared relationships, and the Source’s selected interests.`,
    Attention: `This is already in active work or review, so the Attention view brings it closer without claiming urgency.`,
    Constraint: `A boundary, dependency, permission, or unresolved condition makes this worth seeing under Constraint.`,
    Momentum: `Recent activity gives this a path that can continue; movement alone does not make it universally important.`,
    Renewal: `This can repair, replenish, clarify, or restore capacity in service of the Realm’s Purpose.`
  };
  return language[force] || item.why;
}

function workCard(state, item, layer) {
  const realm = workRealm(item);
  const expanded = state.fieldWhyIds?.includes(item.id);
  const source = sourceOptions.find(option => option.id === state.selectedSource) || sourceOptions[0];
  return `<article class="purpose-work-card layer-${layer} ${item.illustrative ? 'is-illustrative' : ''}" data-work-id="${item.id}">
    <header><span>${escapeHtml(item.activity)} · ${escapeHtml(realm?.name)}${item.illustrative ? ' · Illustrative' : ''}</span><em>${escapeHtml(item.status)}</em></header>
    <h3>${escapeHtml(item.title)}</h3>
    ${layer === 'context' ? '' : `<p>${escapeHtml(item.purpose)}</p>`}
    <div class="purpose-work-meta"><span>${escapeHtml(item.assignee === source.name ? 'Yours' : item.assignee)}</span><span>${escapeHtml(item.result)}</span><span>${escapeHtml(item.dependency || 'No dependency recorded')}</span></div>
    ${expanded ? `<aside class="why-here"><strong>Why here under ${escapeHtml(state.fieldForce)}</strong><p>${escapeHtml(whyForForce(item,state.fieldForce))}</p><small>Eligibility and access were resolved before this Force arranged the candidate set.</small></aside>` : ''}
    <footer><button type="button" data-work-why="${item.id}" aria-expanded="${Boolean(expanded)}">${expanded ? 'Hide reason' : 'Why here?'}</button><button type="button" data-work-details="${item.id}">Throughline</button><button class="primary" type="button" data-work-action="${item.id}">${escapeHtml(item.action)}</button></footer>
  </article>`;
}

function layerSection(state, id, title, note, items, capacity, className) {
  return `<section class="field-layer field-layer-${className}" id="${id}" aria-labelledby="${id}-title"><header><div><span>${escapeHtml(note)}</span><h2 id="${id}-title">${escapeHtml(title)}</h2></div><p>${items.length} of ${capacity}</p></header><div class="field-layer-items">${items.length ? items.map(item => workCard(state,item,className)).join('') : `<div class="layer-empty"><span>No eligible work in this layer.</span><small>Nothing private is implied by this space.</small></div>`}</div></section>`;
}

function farClusters(state, items) {
  const groups = items.reduce((all,item) => { (all[item.realmId] ||= []).push(item); return all; },{});
  const entries = Object.entries(groups);
  if (!entries.length) return '<div class="layer-empty"><span>No farther clusters in this filtered view.</span><small>Counts appear only after eligibility is resolved.</small></div>';
  return entries.map(([realmId,members]) => {
    const realm = realms.find(item => item.id === realmId);
    const open = state.fieldOpenClusters?.includes(realmId);
    return `<article class="far-cluster"><button type="button" data-field-cluster="${realmId}" aria-expanded="${Boolean(open)}"><span>${escapeHtml(realm?.name || 'Realm')}</span><strong>${members.length} later ${members.length === 1 ? 'move' : 'moves'}</strong><small>${open ? 'Collapse the cluster' : 'Bring its eligible contents forward'}</small></button>${open ? `<div class="far-cluster-items">${members.map(item => workCard(state,item,'far')).join('')}</div>` : ''}</article>`;
  }).join('');
}

function fieldFilters(state, fieldViewMode = state.fieldViewMode, narrowOrdered = false) {
  const joinedRealms = realms.filter(realm => state.joinedRealmIds?.includes(realm.id));
  const realmTypes = [...new Set(joinedRealms.map(realm => realm.type))];
  const topics = [...new Set(joinedRealms.flatMap(realm => [realm.topic,...realm.foci,...realm.tags]))];
  const activities = [...new Set(workItems.map(item => item.activity))];
  const projects = joinedRealms.filter(realm => realm.type === 'Project');
  const option = (value,current,label=value) => `<option value="${escapeHtml(value)}" ${value === current ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  return `<section class="purpose-field-controls" id="field-controls" aria-labelledby="field-controls-title"><header><div><span>Shape this moment</span><h2 id="field-controls-title">Your Field controls</h2></div><button type="button" data-action="reset-field">Reset Field</button></header><div class="field-filter-grid">
    <label>Realm type<select id="field-realm-type">${option('All types',state.fieldRealmType)}${realmTypes.map(value => option(value,state.fieldRealmType)).join('')}</select></label>
    <label>Joined Realm<select id="field-realm">${option('All joined Realms',state.fieldRealm)}${joinedRealms.map(realm => option(realm.id,state.fieldRealm,realm.name)).join('')}</select></label>
    <label>Project<select id="field-project">${option('All Projects',state.fieldProject)}${projects.map(realm => option(realm.id,state.fieldProject,realm.name)).join('')}</select></label>
    <label>Topic, Focus, or Tag<select id="field-topic">${option('All Topics',state.fieldTopic)}${topics.map(value => option(value,state.fieldTopic)).join('')}</select></label>
    <label>Activity<select id="field-activity">${option('All Activity',state.fieldActivity)}${activities.map(value => option(value,state.fieldActivity)).join('')}</select></label>
    <label id="assignment-view">Assignment view<select id="field-assignment"><option value="source" selected>${escapeHtml((sourceOptions.find(item => item.id === state.selectedSource) || sourceOptions[0]).name)} · own work + permitted context</option><option disabled>Whole project · additional Permission required</option></select></label>
    <label class="force-control" id="force-selector">Force<select id="field-force">${forces.map(([name]) => option(name,state.fieldForce)).join('')}</select></label>
    <div class="field-view-switch" role="group" aria-label="Field presentation"><button class="${fieldViewMode === 'spatial' ? 'active' : ''}" type="button" data-field-view="spatial" aria-pressed="${fieldViewMode === 'spatial'}" ${narrowOrdered ? 'disabled aria-describedby="narrow-field-view-note"' : ''}>Spatial</button><button class="${fieldViewMode === 'list' ? 'active' : ''}" type="button" data-field-view="list" aria-pressed="${fieldViewMode === 'list'}">Ordered list</button></div>
    ${narrowOrdered ? '<small class="sr-only" id="narrow-field-view-note">This narrow screen uses the complete ordered presentation. Spatial arrangement is available on a wider screen.</small>' : ''}
  </div></section>`;
}

export function renderPurposefulField(state) {
  const source = sourceOptions.find(item => item.id === state.selectedSource) || sourceOptions[0];
  const force = forces.find(([name]) => name === state.fieldForce) || forces[0];
  const { eligible, layers } = composeField(state);
  const eligibleIds = eligible.map(item => item.id).sort().join('|');
  const narrowOrdered = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches;
  const fieldViewMode = narrowOrdered ? 'list' : state.fieldViewMode;
  return `<main class="purposeful-field ${fieldViewMode === 'list' ? 'is-list-view' : ''}" aria-label="${escapeHtml(source.name)}’s purposeful Field" data-eligible-set="${escapeHtml(eligibleIds)}" data-effective-view="${fieldViewMode}">
    <div class="purposeful-field-atmosphere" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
    <header class="purposeful-field-header"><div><span>${escapeHtml(source.name)}’s Field · ${escapeHtml(source.role)} · Composed</span><h1>What matters now has a reason.</h1><p>This view centers your own work and explicit requests, then places permitted project context farther away. No position creates urgency, Authority, or truth.</p></div><aside><strong>${escapeHtml(state.fieldForce)}</strong><p>${escapeHtml(force[1])}</p><small>${eligible.length} eligible items · same set when Force changes</small></aside></header>
    <section class="source-access-note" id="source-selector"><span>Source-relative view</span><p><strong>${escapeHtml(source.name)} · ${escapeHtml(source.role)}</strong> — ${escapeHtml(source.access)}. Role names alone do not grant Permission.</p></section>
    <div class="field-opening-plane">
      ${fieldFilters(state, fieldViewMode, narrowOrdered)}
      <section class="purpose-throughline" id="purpose-throughline"><span>Purpose throughline</span><div><strong>Kinship Duna</strong><i aria-hidden="true">→</i><strong>Build Kiduna</strong><i aria-hidden="true">→</i><h2>Software made from Truth, Beauty, and Love.</h2></div><p>Each visible move can be followed through Action → Activity → Task → Result → Purpose. Open a throughline to see the complete chain.</p></section>
    </div>
    <aside class="field-provenance"><span>Board-backed prototype</span><p>Kiduna AI Flow Board snapshot · activity through ${board.snapshotLabel}. Private export, not a live connection. Done and Resources-list cards stay out of active layers.</p></aside>
    <div class="five-layer-field" aria-label="Five-layer Composed Field" aria-describedby="field-relationship-legend">
      <p class="field-relationship-legend" id="field-relationship-legend"><strong>How to read the curves</strong> They trace possible movement between adjacent layers when eligibility, filters, or Force changes. They do not claim a dependency, urgency, or Authority relationship.</p>
      <svg class="field-connection-lines" viewBox="0 0 1200 1180" preserveAspectRatio="none" role="img" aria-labelledby="field-connection-title field-connection-description"><title id="field-connection-title">Relationships between adjacent Field layers</title><desc id="field-connection-description">Four curves connect Focus to Near, Near to Active Horizon, Active Horizon to Context Field, and Context Field to Far Horizon. Card details and the ordered list state actual dependencies in words.</desc><path data-from="focus-layer" data-to="near-layer" d="M70 230 C330 80 470 140 600 280 S900 400 1130 230"/><path data-from="near-layer" data-to="active-horizon" d="M40 520 C250 380 410 560 600 450 S920 350 1160 530"/><path data-from="active-horizon" data-to="context-field" d="M80 800 C300 660 470 830 650 730 S930 670 1120 820"/><path data-from="context-field" data-to="far-horizon" d="M170 1060 C370 930 620 1030 980 960"/></svg>
      ${layerSection(state,'focus-layer','Focus','Immediate center · up to 3',layers.focus,3,'focus')}
      ${layerSection(state,'near-layer','Near','One useful move away · up to 5',layers.near,5,'near')}
      ${layerSection(state,'active-horizon','Active Horizon','Work and decisions in motion · up to 7',layers.active,7,'active')}
      ${layerSection(state,'context-field','Context Field','Supporting and lower-priority context · up to 12',layers.context,12,'context')}
      <section class="field-layer field-layer-far" id="far-horizon" aria-labelledby="far-horizon-title"><header><div><span>Eligible material beyond the active moment</span><h2 id="far-horizon-title">Far Horizon</h2></div><p>${layers.far.length} clustered</p></header><div class="field-layer-items">${farClusters(state,layers.far)}</div></section>
    </div>
    <section class="accessibility-equivalent"><span>Equivalent presentation</span><h2>${fieldViewMode === 'list' ? 'Sequence is active.' : 'Prefer sequence to space?'}</h2><p>The Ordered list presents the same eligible IDs, layers, reasons, Purpose, Realm, assignee, status, action, and dependencies in semantic order. On narrow screens it becomes the explicit presentation automatically.</p><button type="button" data-field-view="list" ${fieldViewMode === 'list' ? 'disabled aria-pressed="true"' : ''}>${fieldViewMode === 'list' ? 'Using ordered list' : 'Use ordered list'}</button></section>
  </main>`;
}

function renderWorkDetails(state) {
  const item = workItems.find(candidate => candidate.id === state.fieldDetailId);
  if (!item) return '';
  const realm = workRealm(item);
  return `<section class="purposeful-dialog-backdrop" data-modal-backdrop><div class="purposeful-dialog work-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="work-detail-title" aria-describedby="work-detail-description" tabindex="-1">
    <header><div><span>${item.illustrative ? 'Illustrative example' : `${escapeHtml(item.provenance.list)} · Trello snapshot`}</span><h1 id="work-detail-title">${escapeHtml(item.title)}</h1><p id="work-detail-description">See the complete reason and consequence before taking a next step.</p></div><button type="button" data-action="close-work-details" aria-label="Close throughline">${icon('close',20)}</button></header>
    <div class="throughline-chain"><article><span>Purpose</span><strong>${escapeHtml(item.purpose)}</strong></article><i aria-hidden="true">←</i><article><span>Result</span><strong>${escapeHtml(item.result)}</strong></article><i aria-hidden="true">←</i><article><span>Current work</span><strong>${escapeHtml(item.title)}</strong></article><i aria-hidden="true">←</i><article><span>Activity</span><strong>${escapeHtml(item.activity)}</strong></article><i aria-hidden="true">←</i><article><span>Next Action</span><strong>${escapeHtml(item.action)}</strong></article></div>
    <div class="work-detail-columns"><section><span>Why here?</span><h2>${escapeHtml(state.fieldForce)} makes this legible now.</h2><p>${escapeHtml(whyForForce(item,state.fieldForce))}</p><small>Realm: ${escapeHtml(realm?.name)} · Source view: ${escapeHtml((sourceOptions.find(source => source.id === state.selectedSource) || sourceOptions[0]).name)} · Assignee/context: ${escapeHtml(item.assignee)}</small></section><section><span>What the button will do</span><h2>${escapeHtml(item.action)}</h2><p>${escapeHtml(item.effect)}</p><small>No external or consequential operation occurs in this prototype.</small></section><section><span>Evidence for completion</span><h2>${item.illustrative ? 'A reviewed personal draft' : 'Board evidence reviewed by the responsible person'}</h2><p>${item.illustrative ? 'This remains an example until connected to Source-authorized information.' : 'The export supplies current list and activity evidence only. It contains no due date, checklist, test result, build result, or verified completion state.'}</p></section></div>
    ${item.illustrative ? '<aside class="prototype-safety">Prototype example—not clinical advice, a live assignment, an employer claim, a deadline, or a completed result.</aside>' : `<aside class="board-record">Source: ${escapeHtml(board.privacy)} · Board ${board.id} · Card ${escapeHtml(item.cardId)} · snapshot ${escapeHtml(board.snapshot)}</aside>`}
    <footer><button type="button" data-action="close-work-details">Back to Field</button><button class="primary" type="button" data-action="purposeful-action-preview" data-preview-label="${escapeHtml(item.action)}">Prepare “${escapeHtml(item.action)}”</button></footer>
  </div></section>`;
}

export function renderAbout() {
  return `<main class="about-page" aria-label="About Kiduna"><div class="about-atmosphere" aria-hidden="true"></div><header id="about-overview"><span>About Kiduna</span><h1>A living place for purposeful work.</h1><p>Kiduna helps people gather around what matters, understand what is moving, and choose a useful next step without giving away their agency.</p></header><div class="about-story-grid"><section><span>The Field</span><h2>Your world, composed around Purpose.</h2><p>The Field is the complete working environment. This prototype’s Composed view brings eligible work closer or farther around one Source while preserving the same underlying reality.</p><a href="/field">Enter the Field</a></section><section><span>Receiver</span><h2>Choose which Realms can contribute.</h2><p>Receiver is your library of available Realms. You can inspect, tune, mute, or join one to your personal Field. Joining is not membership and grants no authority.</p><a href="/receiver">Open Receiver</a></section><section><span>Purpose</span><h2>The reason is never decoration.</h2><p>Every useful move should connect to a Result and the larger Purpose it serves, so a person can understand both what to do and why it matters.</p><a href="/field#purpose-throughline">See the throughline</a></section></div><section class="about-prototype"><div><span>Working product prototype</span><h2>Honest about what is real.</h2></div><p>Build Kiduna uses a private Trello export captured on Sep 3, 2026; it is a snapshot, not a live integration. Inner Clinic, The Nature of Work, network metrics, permissions, Realm records, and most other examples are illustrative. Buttons prepare or preview work but do not message, deploy, pay, join as a Member, or change external state.</p></section><section class="about-notes"><div><span>How it works</span><h2>Product for members. Evidence for builders.</h2><p>The main experience uses member-facing language. A separate implementation-notes area explains events, signals, landing, staging, notifications, authorization, and receipts.</p></div><a href="/builder-notes">Read Builder Notes</a></section></main>`;
}

export function renderBuilderNotes() {
  return `<main class="builder-notes" aria-label="Builder Notes"><header><span>Implementation notes · draft</span><h1>How this purposeful Field works.</h1><p>These notes expose the prototype model for review. They are not a canonical Kit release and do not claim production services are connected.</p></header><nav aria-label="Builder Notes sections"><a href="#receiver-field-model">Receiver → Field</a><a href="#five-layers">Five layers</a><a href="#event-model">Events</a><a href="#notifications">Notifications</a><a href="#action-boundary">Actions</a><a href="#open-decisions">Open decisions</a></nav>
    <section id="receiver-field-model"><span>Receiver → Field</span><h2>Availability first. Purposeful work second.</h2><p>Receiver exposes authorized Realm summaries. A personal Join record adds that Realm to one Source’s composition pool; it does not create membership, Role, Consent, Permission, or Authority. Field then derives eligible work only from joined Realms.</p><code>visible Realm → personal Field join → eligible work → Purpose throughline</code></section>
    <section id="five-layers"><span>Composition</span><h2>Eligibility precedes every Force.</h2><p>Privacy, access, consent, Realm boundaries, and Source view are resolved before a Force sees candidates. Focus, Near, Active Horizon, Context Field, and Far Horizon cap the visible moment at 3 / 5 / 7 / 12 / clustered remainder. Changing Force reorders the same eligible IDs and never mutates shared Field truth.</p><div class="builder-layer-row"><b>Focus · 3</b><b>Near · 5</b><b>Active · 7</b><b>Context · 12</b><b>Far · safe clusters</b></div></section>
    <section id="event-model"><span>Event model</span><h2>Every change keeps its cause.</h2><p>Board webhooks or imports, assignments, list changes, comments, dependencies, reviews, tests, builds, deployments, Realm joins, Topic changes, Force changes, Ki recommendations, acknowledgements, and external receipts become attributable events.</p><code>Trigger → Event → Signal → eligible destination → Delivery Landing → Semantic Landing → materiality → candidate set → staging → composition → member response → proposed Action → authorization → receipt → new state</code><div class="event-example"><strong>Build Kiduna example</strong><p>A Trello card moves to Review and explicitly asks Moto for feedback. The event preserves prior list, new list, card ID, actor, time, evidence, Realm, Purpose, visibility, and causation. A Signal may land in Moto’s permitted context. Gravity can stage it in Focus with a visible reason. No review, assignment, merge, or notification is implied by rendering.</p></div></section>
    <section id="notifications"><span>Notification decisions</span><h2>Update quietly unless interruption is justified.</h2><div class="notification-matrix"><article><strong>New assignment</strong><p>Notify the assignee when assignment is a real authorized Action.</p></article><article><strong>Review request</strong><p>Bring it Near or Focus for the named reviewer; notify only under their policy.</p></article><article><strong>Passing test</strong><p>Update evidence without interrupting anyone.</p></article><article><strong>Failed deployment</strong><p>Interrupt the responsible release person only when policy allows.</p></article><article><strong>Blocker</strong><p>Notify the assignee and responsible dependency owner with minimized context.</p></article><article><strong>Completed Result</strong><p>Notify contributors; do not broadcast publicly by default.</p></article></div><p>Every decision records recipient, reason, interruption permission, expiry, acknowledgement, suppression, and recovery path. Silence or visual absence never reveals private exclusions.</p></section>
    <section id="action-boundary"><span>Authorization boundary</span><h2>Ki can prepare. A typed Action must authorize effect.</h2><p>Reasoning, summaries, relevance, and recommendations may be probabilistic. Recipients, target, content, amount, account, channel, timing, Permission, Consent, limits, approval, execution, and recording are explicit and deterministic at the Action boundary.</p><div class="action-boundary-line"><b>Draft</b><i>→</i><b>Preview exact parameters</b><i>→</i><b>Resolve Authority</b><i>→</i><b>Approve</b><i>→</i><b>Execute</b><i>→</i><b>Verify receipt</b></div><p>No Signal, Landing, Force, polished button, Role name, Ki suggestion, Agent, or connector can silently merge code, deploy, publish, assign, message, spend, vote, grant access, or change membership.</p></section>
    <section id="prototype-boundary"><span>Prototype versus connected</span><h2>The current implementation is intentionally local.</h2><p>Trello is a read-only export. Realm joins, mutes, filters, Force changes, and Ki arrangements persist only in this browser. External connectors, live event ingestion, production policy resolution, Actions, and receipts are modeled but not connected.</p></section>
    <section id="open-decisions"><span>Open decisions</span><h2>What needs product-owner judgment next.</h2><ol><li>Which project-view Permissions should Moto, Mages, and Builders actually hold?</li><li>Should personal Field Join use a different product label to avoid confusion with membership?</li><li>How much priority reasoning can be shown without exposing private exclusion reasons?</li><li>When is delivery to another Source a bounded internal Landing versus a typed messaging Action?</li><li>How should fairness, neglected Purpose, and minority evidence affect candidate formation without becoming a score?</li></ol><a href="/field">Return to the Field</a></section>
  </main>`;
}

export function renderPurposefulModal(state) {
  if (state.receiverTopicOpen) return renderTopicDialog(state);
  if (state.realmDetailId) return renderRealmDetails(state);
  if (state.fieldDetailId) return renderWorkDetails(state);
  return '';
}

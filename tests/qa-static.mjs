import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { composeField, eligibleWork, forces, realms, representedRealmTypes, sourceOptions, workItems } from '../purposeful.js';

const read = file => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const app = read('app.js');
const data = read('data.js');
const index = read('index.html');
const purposeful = read('purposeful.js');
const workspaces = read('workspaces.js');

for (const file of ['app.js', 'components.js', 'data.js', 'icons.js', 'purposeful.js', 'workspaces.js']) {
  execFileSync(process.execPath, ['--check', new URL(`../${file}`, import.meta.url).pathname], { stdio: 'pipe' });
}

assert.match(index, /styles\.css\?v=0\.9\.0/);
assert.match(index, /app\.js\?v=0\.9\.0/);
assert.doesNotMatch(`${app}\n${workspaces}\n${read('components.js')}`, /v=0\.8\.0/);
assert.match(purposeful, /data-effective-view="\$\{fieldViewMode\}"/);
assert.match(purposeful, /matchMedia\('\(max-width: 900px\)'\)/);

const expectedRail = ['Receiver', 'Transmitter', 'Connector', 'Creator', 'Inspector', 'Broker', 'Envoy', 'Sentinel', 'Metrics'];
let cursor = -1;
for (const label of expectedRail) {
  const next = data.indexOf(`label: '${label}'`);
  assert.ok(next > cursor, `${label} must retain the required navigation order`);
  cursor = next;
}
assert.match(app, /aria-label="About"/);
assert.match(app, /field-rail-action[\s\S]*railItems\.map/);

const requiredRoutes = ['about', 'field', 'receiver', 'transmitter', 'connector', 'creator', 'inspector', 'broker', 'envoy', 'sentinel', 'metrics', 'builder-notes'];
for (const route of requiredRoutes) assert.match(app, new RegExp(`${route.replace('-', '\\-')}`));

const requiredIds = [
  'about-overview', 'source-selector', 'field-controls', 'purpose-throughline', 'focus-layer', 'near-layer',
  'active-horizon', 'context-field', 'far-horizon', 'force-selector', 'assignment-view', 'ki', 'realm-library',
  'realm-filters', 'topic-tuner', 'realm-details', 'network-overview', 'event-model', 'notifications', 'action-boundary'
];
for (const id of requiredIds) {
  const sources = `${purposeful}\n${workspaces}`;
  assert.ok(sources.includes(`id="${id}"`) || sources.includes(`'${id}'`), `missing stable id ${id}`);
}

const iconBytes = readFileSync(new URL('../assets/interface-icons/field.svg', import.meta.url));
assert.equal(createHash('sha256').update(iconBytes).digest('hex'), '3112cb5c834482a7b69ded401450289621d0c9f0e522ae2a920e1073ec9f8c6b');
assert.match(iconBytes.toString('utf8'), /currentColor/);

assert.equal(sourceOptions[0].id, 'moto');
assert.deepEqual(sourceOptions.filter(source => source.allowed).map(source => source.id), ['moto', 'jeya', 'vijay']);
assert.equal(realms.length, 9);
assert.deepEqual(new Set(realms.map(realm => realm.type)), new Set(representedRealmTypes));
assert.deepEqual(representedRealmTypes, ['Organization', 'Community', 'Project', 'Institution', 'Alliance', 'Cell', 'Association']);
assert.ok(realms.every(realm => realm.purpose && realm.formed && Number.isFinite(realm.resources)));
assert.equal(workItems.filter(item => item.provenance?.kind === 'Trello export snapshot').length, 29);
assert.equal(workItems.filter(item => item.illustrative).length, 5);
assert.ok(!workItems.some(item => item.provenance?.list === 'Done' || item.provenance?.list === 'Resources'));
assert.equal(workItems.filter(item => item.sourceViews.includes('jeya')).length, 3);
assert.equal(workItems.filter(item => item.sourceViews.includes('vijay')).length, 7);
for (const relationship of ['focus-layer" data-to="near-layer', 'near-layer" data-to="active-horizon', 'active-horizon" data-to="context-field', 'context-field" data-to="far-horizon']) {
  assert.ok(purposeful.includes(relationship), `missing accessible layer relationship ${relationship}`);
}

const baseline = {
  selectedSource: 'moto',
  joinedRealmIds: ['build-kiduna', 'inner-clinic', 'nature-of-work'],
  mutedRealmIds: ['repair-cell'],
  fieldRealmType: 'All types',
  fieldRealm: 'All joined Realms',
  fieldProject: 'All Projects',
  fieldTopic: 'All Topics',
  fieldActivity: 'All Activity',
  fieldForce: 'Gravity'
};
const baselineIds = eligibleWork(baseline).map(item => item.id).sort();
assert.equal(baselineIds.length, 33);
for (const [force] of forces) {
  const composed = composeField({ ...baseline, fieldForce: force });
  assert.deepEqual(composed.eligible.map(item => item.id).sort(), baselineIds, `${force} changed the eligible candidate set`);
  assert.ok(composed.layers.focus.length <= 3);
  assert.ok(composed.layers.near.length <= 5);
  assert.ok(composed.layers.active.length <= 7);
  assert.ok(composed.layers.context.length <= 12);
}

const serviceJoined = { ...baseline, joinedRealmIds: [...baseline.joinedRealmIds, 'service-alliance'] };
assert.ok(eligibleWork(serviceJoined).some(item => item.realmId === 'service-alliance'));
const buildMuted = { ...baseline, mutedRealmIds: [...baseline.mutedRealmIds, 'build-kiduna'] };
assert.ok(!eligibleWork(buildMuted).some(item => item.realmId === 'build-kiduna'));

for (const phrase of ['not a live connection', 'No external or consequential operation occurs', 'Role names alone do not grant Permission']) {
  assert.ok(purposeful.includes(phrase), `missing prototype boundary: ${phrase}`);
}

console.log('qa-static: all assertions passed');

import { defaultReceptionProfiles, evaluateTransmissionDraft, initialNotifications, layoutTypes, railItems, receiverV2Catalog, transmitterCatalog, transmitterDestinations, transmitterSeedCatalog, transmitterSeedTypes, transmitterSenders } from './data.js?v=0.9.0';
import {
  fieldStage,
  findObject,
  inspector,
  kiComposer,
  notificationStack,
  panelFor,
  panelTitle,
  railAction,
  selectionBar,
  toast
} from './components.js?v=0.9.0';
import { icon } from './icons.js';
import { expressionInspector, expressionOverlay, expressions, proposeKiActions, universalKi, workspaceFor } from './workspaces.js?v=0.9.0';
import {
  composeField,
  realms,
  receiverSortDefaults,
  renderAbout,
  renderBuilderNotes,
  renderPurposefulField,
  renderPurposefulModal,
  renderReceiverRealm,
  representedRealmTypes,
  sourceOptions,
  topicHierarchy
} from './purposeful.js?v=0.9.0';

const storageKey = 'kiduna-layout-kit-v0.2';
const clone = value => JSON.parse(JSON.stringify(value));
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const receiverV2FilterOptions = ['Transmitter', 'Realm', 'Power Map', 'Package', 'Node', 'Sponsored'];
const transmitterV2FilterOptions = [...transmitterSeedTypes];

function normalizeReceiverV2Profile(profile) {
  const tuning = { ...(profile.receiverV2Tuning || {}) };
  receiverV2Catalog.forEach(item => {
    if (tuning[item.id]) return;
    const stage = profile.sourcePreferences?.[item.id]?.stage;
    const added = profile.transmitterIds?.includes(item.id);
    tuning[item.id] = {
      intensity: added ? (stage === 'Bring closer' ? 86 : stage === 'Hold' ? 24 : stage === 'Send farther' ? 30 : 62) : 34,
      range: item.kind === 'Node' ? 48 : item.kind === 'Power Map' ? 56 : 32,
      muted: stage === 'Mute'
    };
  });
  return { ...profile, receiverV2Tuning: tuning, receiverV2Dismissed: profile.receiverV2Dismissed || [] };
}

const defaults = {
  uiRevision: '0.9.0',
  type: 'composed',
  defaultType: 'composed',
  openPanel: null,
  selectedObject: null,
  inspector: null,
  avatarState: 'open',
  notifications: initialNotifications,
  receiverProfiles: clone(defaultReceptionProfiles).map(normalizeReceiverV2Profile),
  receiverExperiment: '0.02',
  activeReceiverProfileId: 'working-horizon',
  receiverView: 'summary',
  receiverCommand: '',
  receiverProposal: null,
  receiverProfileDraft: '',
  receiverTransmitterQuery: '',
  receiverTransmitterFilter: 'All',
  receiverTransmitterSort: 'Name',
  receiverDetailId: null,
  receiverConfirmDelete: null,
  receiverRenameId: null,
  deletedReceiverProfile: null,
  receiverUndo: null,
  recentReceiverChanges: [],
  receiverV2Query: '',
  receiverV2Filters: [...receiverV2FilterOptions],
  receiverV2Sort: 'Most recent',
  receiverEyebrowIndex: -1,
  receiverV2Limit: 9,
  receiverV2InspectorId: null,
  receiverV2ProfileManagerOpen: false,
  receiverV2CompareId: null,
  receiverV2ConfirmRemove: null,
  receiverV2RecommendationsOpen: false,
  receiverV2KiDraft: '',
  receiverV2Proposal: null,
  receiverV2SliderBefore: null,
  receiverReturnScroll: 0,
  pulseFilter: 'All signals',
  connectTab: 'People',
  signalStrength: 72,
  historyQuery: '',
  historyFilter: 'All',
  composerDraft: '',
  transmitDraft: '',
  transmitterV2Query: '',
  transmitterV2Filters: [...transmitterV2FilterOptions],
  transmitterV2Sort: 'Most recent',
  transmitterV2SeedIds: [],
  transmitterV2PayloadName: 'Untitled Payload',
  transmitterV2Message: '',
  transmitterV2MessagePrivacy: 'Public',
  transmitterV2SenderId: 'moto-source',
  transmitterV2DestinationIds: [],
  transmitterV2DestinationQuery: '',
  transmitterV2InspectorId: null,
  transmitterV2DestinationInspectorId: null,
  transmitterV2ReviewOpen: false,
  transmitterV2Prepared: false,
  transmitterV2EyebrowIndex: -1,
  transmitterV2KiDraft: '',
  transmitterV2Proposal: null,
  transmitterV2Step: 'Seeds',
  transmitterReturnScroll: 0,
  expressionQuery: '',
  expressionLayout: 'All',
  expressionRealm: 'All',
  expressionSource: 'All',
  expressionSeed: 'All',
  expressionSort: 'Most recent',
  expressionSavedOnly: false,
  expressionFavorites: expressions.filter(item => item.saved).map(item => item.id),
  activeExpressionId: null,
  expressionInspectId: null,
  connectorWorkspaceTab: 'Agents',
  connectorConnections: {},
  creatorDraftName: '',
  creatorDraftPurpose: '',
  creatorLayout: 'composed',
  inspectorWorkspaceQuery: '',
  brokerTab: 'Overview',
  metricsScope: 'network',
  selectedSource: 'moto',
  joinedRealmIds: realms.filter(realm => realm.joined).map(realm => realm.id),
  mutedRealmIds: realms.filter(realm => realm.muted).map(realm => realm.id),
  receiverRealmQuery: '',
  receiverRealmTypes: [...representedRealmTypes],
  receiverOnlySponsored: false,
  receiverOnlyJoined: false,
  receiverShowMuted: false,
  receiverRealmSort: 'Formation Date',
  receiverSortDirection: 'desc',
  receiverTopicSelection: { topics: [], foci: [], tags: [] },
  receiverTopicDraft: null,
  receiverTopicOpen: false,
  receiverTopicQuery: '',
  realmDetailId: null,
  fieldForce: 'Gravity',
  fieldViewMode: 'spatial',
  fieldRealmType: 'All types',
  fieldRealm: 'All joined Realms',
  fieldProject: 'All Projects',
  fieldTopic: 'All Topics',
  fieldActivity: 'All Activity',
  fieldWhyIds: [],
  fieldOpenClusters: [],
  fieldDetailId: null,
  kiPlusOpen: false,
  sentinelPreset: 'Balanced',
  sentinelBoundaries: { participation: 72, stewardship: 66, belonging: 64, legibility: 76 },
  kiDraft: '',
  kiProposal: null,
  kiSelectedActions: [],
  kiRevisionMode: false,
  kiRevisionDraft: '',
  routeLabel: 'Field',
  launchedPackage: null,
  calmMotion: false,
  ambientMessages: true,
  toastMessage: ''
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    const next = { ...defaults, ...saved, toastMessage: '' };
    next.notifications = Array.isArray(saved.notifications) ? saved.notifications : initialNotifications;
    next.receiverProfiles = Array.isArray(saved.receiverProfiles) && saved.receiverProfiles.length ? saved.receiverProfiles : clone(defaultReceptionProfiles);
    next.receiverProfiles = next.receiverProfiles.map(profile => normalizeReceiverV2Profile({
      ...clone(defaultReceptionProfiles.find(item => item.id === profile.id) || defaultReceptionProfiles[0]),
      ...profile,
      sourcePreferences: { ...(profile.sourcePreferences || {}) },
      vibeRanges: { ...(profile.vibeRanges || {}) },
      time: { ...(profile.time || {}) }
    }));
    next.receiverExperiment = '0.02';
    const legacyFilter = typeof saved.receiverV2Filter === 'string' ? saved.receiverV2Filter : 'All';
    next.receiverV2Filters = Array.isArray(saved.receiverV2Filters)
      ? saved.receiverV2Filters.filter(filter => receiverV2FilterOptions.includes(filter))
      : legacyFilter === 'All' ? [...receiverV2FilterOptions] : [legacyFilter].filter(filter => receiverV2FilterOptions.includes(filter));
    next.transmitterV2Filters = Array.isArray(saved.transmitterV2Filters) ? saved.transmitterV2Filters.filter(type => transmitterV2FilterOptions.includes(type)) : [...transmitterV2FilterOptions];
    next.transmitterV2SeedIds = Array.isArray(saved.transmitterV2SeedIds) ? saved.transmitterV2SeedIds.filter(id => transmitterSeedCatalog.some(seed => seed.id === id)) : [];
    next.transmitterV2DestinationIds = Array.isArray(saved.transmitterV2DestinationIds) ? saved.transmitterV2DestinationIds.filter(id => transmitterDestinations.some(destination => destination.id === id)) : [];
    next.transmitterV2SenderId = transmitterSenders.some(sender => sender.id === saved.transmitterV2SenderId) ? saved.transmitterV2SenderId : defaults.transmitterV2SenderId;
    next.expressionFavorites = Array.isArray(saved.expressionFavorites) ? saved.expressionFavorites.filter(id => expressions.some(item => item.id === id)) : [...defaults.expressionFavorites];
    expressions.forEach(item => { item.saved = next.expressionFavorites.includes(item.id); });
    if (saved.uiRevision !== defaults.uiRevision) {
      next.uiRevision = defaults.uiRevision;
      next.receiverV2Sort = defaults.receiverV2Sort;
      next.receiverV2Filters = [...defaults.receiverV2Filters];
      next.transmitterV2Sort = defaults.transmitterV2Sort;
      next.transmitterV2Filters = [...defaults.transmitterV2Filters];
      next.selectedSource = defaults.selectedSource;
      next.joinedRealmIds = [...defaults.joinedRealmIds];
      next.mutedRealmIds = [...defaults.mutedRealmIds];
      next.receiverRealmTypes = [...defaults.receiverRealmTypes];
      next.receiverTopicSelection = clone(defaults.receiverTopicSelection);
    }
    next.selectedSource = sourceOptions.some(source => source.id === next.selectedSource && source.allowed) ? next.selectedSource : defaults.selectedSource;
    next.joinedRealmIds = Array.isArray(next.joinedRealmIds) ? next.joinedRealmIds.filter(id => realms.some(realm => realm.id === id)) : [...defaults.joinedRealmIds];
    next.mutedRealmIds = Array.isArray(next.mutedRealmIds) ? next.mutedRealmIds.filter(id => realms.some(realm => realm.id === id)) : [...defaults.mutedRealmIds];
    next.receiverRealmTypes = Array.isArray(next.receiverRealmTypes) ? next.receiverRealmTypes.filter(type => representedRealmTypes.includes(type)) : [...defaults.receiverRealmTypes];
    next.receiverTopicSelection = next.receiverTopicSelection && typeof next.receiverTopicSelection === 'object' ? {
      topics: Array.isArray(next.receiverTopicSelection.topics) ? next.receiverTopicSelection.topics : [],
      foci: Array.isArray(next.receiverTopicSelection.foci) ? next.receiverTopicSelection.foci : [],
      tags: Array.isArray(next.receiverTopicSelection.tags) ? next.receiverTopicSelection.tags : []
    } : clone(defaults.receiverTopicSelection);
    next.fieldWhyIds = Array.isArray(next.fieldWhyIds) ? next.fieldWhyIds : [];
    next.fieldOpenClusters = Array.isArray(next.fieldOpenClusters) ? next.fieldOpenClusters : [];
    if (!next.receiverProfiles.some(profile => profile.id === next.activeReceiverProfileId)) next.activeReceiverProfileId = next.receiverProfiles[0].id;
    next.type = layoutTypes.some(type => type.id === next.type) ? next.type : defaults.type;
    next.defaultType = layoutTypes.some(type => type.id === next.defaultType) ? next.defaultType : defaults.defaultType;
    return next;
  } catch {
    return { ...defaults };
  }
}

let state = loadState();
let toastTimer;
let receiverV2SearchTimer;
let purposefulReturnSelector = '';
const app = document.getElementById('app');
const routePanels = { about: 'about', field: null, receiver: 'receive', transmitter: 'transmit', connector: 'connector', creator: 'creator', inspector: 'inspector-workspace', broker: 'broker', envoy: 'envoy', sentinel: 'sentinel', metrics: 'metrics', 'builder-notes': 'builder-notes' };
const panelRoutes = Object.fromEntries(Object.entries(routePanels).map(([route, panel]) => [panel || 'field', route]));
const routeLabels = { about: 'About', field: 'Field', receive: 'Receiver', transmit: 'Transmitter', connector: 'Connector', creator: 'Creator', 'inspector-workspace': 'Inspector', broker: 'Broker', envoy: 'Envoy', sentinel: 'Sentinel', metrics: 'Metrics', 'builder-notes': 'Builder Notes' };
const fullFieldPanels = new Set(['about', 'receive', 'transmit', 'connector', 'creator', 'inspector-workspace', 'broker', 'envoy', 'sentinel', 'metrics', 'builder-notes']);

function routeFromLocation() {
  const parts = location.pathname.split('/').filter(Boolean);
  const route = parts[0] === 'v' ? parts[2] : parts[0];
  return Object.prototype.hasOwnProperty.call(routePanels, route) ? routePanels[route] : null;
}

function routePath(panel = null, versioned = false) {
  const route = panelRoutes[panel || 'field'] || 'field';
  return versioned ? `/v/0.02/${route}` : `/${route}`;
}

state.openPanel = routeFromLocation();
state.routeLabel = routeLabels[state.openPanel || 'field'];

function fragmentPatch(panel = state.openPanel) {
  const fragment = location.hash.slice(1);
  if (panel === 'receive' && fragment === 'topic-tuner') return { receiverTopicOpen: true, receiverTopicDraft: clone(state.receiverTopicSelection), receiverTopicQuery: '', realmDetailId: null };
  if (panel === 'receive' && fragment === 'realm-details') return { realmDetailId: 'build-kiduna', receiverTopicOpen: false };
  return {};
}

state = { ...state, ...fragmentPatch(state.openPanel) };

function setRoute(panel, { replace = false } = {}) {
  const path = routePath(panel);
  if (`${location.pathname}${location.search}${location.hash}` !== path) history[replace ? 'replaceState' : 'pushState']({ panel }, '', path);
}

function persistentState() {
  const { toastMessage, composerDraft, receiverProposal, receiverCommand, receiverConfirmDelete, receiverRenameId, receiverUndo, receiverV2Proposal, receiverV2KiDraft, receiverV2ConfirmRemove, receiverV2SliderBefore, receiverV2InspectorId, receiverV2ProfileManagerOpen, receiverV2CompareId, receiverReturnScroll, transmitterV2InspectorId, transmitterV2DestinationInspectorId, transmitterV2KiDraft, transmitterV2Proposal, transmitterReturnScroll, receiverTopicDraft, receiverTopicOpen, receiverTopicQuery, realmDetailId, fieldDetailId, kiPlusOpen, ...saved } = state;
  return saved;
}

function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(persistentState()));
  } catch {
    // The interface remains fully usable when local storage is unavailable.
  }
}

function update(patch, options = {}) {
  state = { ...state, ...patch };
  persist();
  render(options);
}

function announce(message) {
  window.clearTimeout(toastTimer);
  state.toastMessage = message;
  render();
  toastTimer = window.setTimeout(() => {
    state.toastMessage = '';
    render();
  }, 3200);
}

function titlebar() {
  const layoutType = layoutTypes.find(item => item.id === state.type)?.name;
  const activeSource = sourceOptions.find(source => source.id === state.selectedSource) || sourceOptions[0];
  return `<header class="titlebar">
    <div class="title-left"><div class="window-controls" aria-label="Window controls"><i></i><i></i><i></i><span>Kiduna</span></div><a class="release-stamp" href="${routePath(state.openPanel, true)}">Version 0.02 · Purposeful Field</a><button class="reset-to-default" type="button" data-action="reset-layout">Reset to default</button><label class="source-switcher" for="source-selector-top"><span>Source</span><select id="source-selector-top" aria-describedby="source-access-top">${sourceOptions.map(source => `<option value="${source.id}" ${source.id === state.selectedSource ? 'selected' : ''} ${source.allowed ? '' : 'disabled'}>${source.name} — ${source.role}${source.allowed ? '' : ' · Permission required'}</option>`).join('')}</select><small id="source-access-top">${escapeHtml(activeSource.access)}</small></label></div>
    <div class="title-identity"><img src="assets/design-system/assets/kiduna-mark.svg" alt=""><span>Layout Kit</span><i>/</i><strong>${activeSource.name}’s Field</strong><i>/</i><b>${state.routeLabel}${state.routeLabel === 'Field' ? ` · ${layoutType}` : ''}</b></div>
    <div class="title-state"><span><i></i>Development</span><button type="button" data-action="open-ki">Ki is present</button></div>
  </header>`;
}

function toolRail() {
  return `<nav class="toolrail" aria-label="Layout Kit tools">
    <button class="vault-entry ${state.openPanel === 'about' ? 'active' : ''}" type="button" data-action="go-about" aria-label="About">
      <img src="assets/design-system/assets/kiduna-mark.svg" alt=""><span>ABOUT</span><span class="rail-tooltip"><b>About</b><small>What Kiduna is and how this prototype works</small></span>
    </button>
    <div class="rail-divider" aria-hidden="true"></div>
    <button class="rail-action field-rail-action ${state.openPanel === null ? 'active' : ''}" type="button" data-action="go-field" aria-label="Field"><span class="field-icon-mask" aria-hidden="true"></span><span class="rail-tooltip"><b>Field</b><small>Purposeful work from joined Realms</small></span></button>
    <div class="rail-primary">${railItems.map(item => railAction(item, state.openPanel === item.id)).join('')}</div>
    <div class="rail-spacer"></div>
    <button class="rail-action ${state.openPanel === 'settings' ? 'active' : ''}" type="button" data-panel="settings" aria-label="Settings">${icon('settings', 21)}<span class="rail-tooltip"><b>Settings</b><small>Preferences, teams, privacy, connections</small></span></button>
    <button class="avatar-entry ${state.openPanel === 'avatar' ? 'active' : ''}" type="button" data-panel="avatar" aria-label="Active Avatar — Moto, ${state.avatarState}">
      <img src="assets/avatars/moto-${state.avatarState}.png" alt="Moto"><i></i><span class="rail-tooltip"><b>Moto</b><small>Active Avatar · ${state.avatarState}</small></span>
    </button>
  </nav>`;
}

function render(options = {}) {
  document.documentElement.classList.toggle('calm-motion', state.calmMotion);
  document.documentElement.dataset.currentLayoutType = state.type;
  const fieldTool = fullFieldPanels.has(state.openPanel);
  let mainContent;
  if (state.activeExpressionId) mainContent = `${fieldStage(state)}${expressionOverlay(state)}`;
  else if (state.openPanel === 'about') mainContent = renderAbout(state);
  else if (state.openPanel === 'receive') mainContent = renderReceiverRealm(state);
  else if (state.openPanel === 'builder-notes') mainContent = renderBuilderNotes(state);
  else if (!state.openPanel) mainContent = renderPurposefulField(state);
  else mainContent = fieldTool ? (workspaceFor(state) || panelFor(state)) : `${panelFor(state)}${inspector(state)}`;
  app.innerHTML = `<div class="desktop-app">
    ${titlebar()}
    <div class="app-body">
      ${toolRail()}
      <section class="workspace" aria-label="Moto’s Layout">
        <section class="field-shell" id="field-stage" tabindex="-1">
          ${mainContent}
          ${renderPurposefulModal(state)}
          ${expressionInspector(state)}
          ${universalKi(state)}
          ${toast(state.toastMessage)}
        </section>
      </section>
    </div>
  </div>`;

  const modal = document.querySelector('.purposeful-dialog');
  if (modal) {
    document.querySelectorAll('.titlebar, .toolrail, .field-shell > :not(.purposeful-dialog-backdrop)').forEach(element => {
      element.inert = true;
      element.setAttribute('aria-hidden', 'true');
    });
  }

  if (options.focus) {
    requestAnimationFrame(() => {
      const target = document.querySelector(options.focus);
      target?.focus();
      if (target && 'selectionStart' in target) target.selectionStart = target.selectionEnd = target.value.length;
    });
  } else if (modal) {
    requestAnimationFrame(() => modal.focus());
  }
  if (options.restoreFieldScroll !== undefined) {
    requestAnimationFrame(() => {
      const world = document.querySelector('.mode-world');
      if (world) world.scrollTop = options.restoreFieldScroll;
    });
  }
  if (options.scrollHash || (!modal && location.hash)) {
    requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' }));
  }
}

function selectLayoutType(type) {
  if (!layoutTypes.some(item => item.id === type)) return;
  setRoute(null);
  update({ type, selectedObject: null, inspector: null, openPanel: null, routeLabel: 'Field' });
  announce(`${layoutTypes.find(item => item.id === type).name} is now arranging the Field.`);
}

function openPanel(id) {
  const closing = state.openPanel === id;
  const worldScroll = document.querySelector('.mode-world')?.scrollTop || 0;
  const openingReceiver = !closing && id === 'receive';
  const openingTransmitter = !closing && id === 'transmit';
  const panel = closing ? null : id;
  setRoute(panel);
  update({
    openPanel: panel,
    routeLabel: routeLabels[panel || 'field'],
    activeExpressionId: null,
    receiverReturnScroll: openingReceiver ? worldScroll : state.receiverReturnScroll,
    receiverEyebrowIndex: openingReceiver ? (state.receiverEyebrowIndex + 1) % 6 : state.receiverEyebrowIndex,
    transmitterReturnScroll: openingTransmitter ? worldScroll : state.transmitterReturnScroll,
    transmitterV2EyebrowIndex: openingTransmitter ? (state.transmitterV2EyebrowIndex + 1) % 3 : state.transmitterV2EyebrowIndex
  }, { focus: openingReceiver ? '.realm-receiver .tool-close' : openingTransmitter ? '.transmitter-v2-close' : !closing && fullFieldPanels.has(id) ? '.tool-close' : undefined, restoreFieldScroll: closing && id === 'receive' ? state.receiverReturnScroll : closing && id === 'transmit' ? state.transmitterReturnScroll : undefined });
}

function activeReceiverProfile() {
  return state.receiverProfiles.find(profile => profile.id === state.activeReceiverProfileId) || state.receiverProfiles[0];
}

function receiverChange(label, mutate, extra = {}) {
  const before = clone(state.receiverProfiles);
  const profiles = clone(state.receiverProfiles);
  const profile = profiles.find(item => item.id === state.activeReceiverProfileId) || profiles[0];
  mutate(profile, profiles);
  update({
    receiverProfiles: profiles,
    receiverUndo: { profiles: before, activeReceiverProfileId: state.activeReceiverProfileId, label },
    recentReceiverChanges: [{ label, time: new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) }, ...(state.recentReceiverChanges || [])].slice(0, 12),
    ...extra
  });
}

function uniqueProfileId(name) {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'reception-profile';
  let id = base;
  let suffix = 2;
  while (state.receiverProfiles.some(profile => profile.id === id)) id = `${base}-${suffix++}`;
  return id;
}

function interpretReceiverCommand(command) {
  const text = command.trim();
  const lower = text.toLowerCase();
  const operations = [];
  const summary = [];
  const unresolved = [];
  if (!text) return { operations, summary: ['Enter a request to preview.'], unresolved: [] };

  const named = transmitterCatalog.filter(item => lower.includes(item.name.toLowerCase()));
  named.forEach(item => {
    const start = lower.indexOf(item.name.toLowerCase());
    const nearby = lower.slice(Math.max(0, start - 28), start + item.name.length + 28);
    if (/remove|stop receiving|drop/.test(nearby)) {
      operations.push({ type: 'remove', id: item.id }); summary.push(`Remove ${item.name} from this profile.`);
    } else if (/mute|quiet completely/.test(nearby)) {
      operations.push({ type: 'stage', id: item.id, value: 'Mute' }); summary.push(`Mute ${item.name}; its material stays preserved.`);
    } else if (/hold/.test(nearby)) {
      operations.push({ type: 'stage', id: item.id, value: 'Hold' }); summary.push(`Hold ${item.name} outside the current composition.`);
    } else if (/farther|less of/.test(nearby)) {
      operations.push({ type: 'stage', id: item.id, value: 'Send farther' }); summary.push(`Send ${item.name} farther.`);
    } else if (/closer|prioriti[sz]e|more of/.test(nearby)) {
      operations.push({ type: 'add', id: item.id }); operations.push({ type: 'stage', id: item.id, value: 'Bring closer' }); summary.push(`Add ${item.name} if needed and bring it closer.`);
    } else if (/add|receive|follow/.test(nearby)) {
      operations.push({ type: 'add', id: item.id }); summary.push(`Add ${item.name} to this profile.`);
    }
  });
  if (/firehose/.test(lower)) { operations.push({ type: 'strength', value: 100 }); summary.push('Set Signal Strength to Firehose (100%).'); }
  else if (/steady stream/.test(lower)) { operations.push({ type: 'strength', value: 50 }); summary.push('Set Signal Strength to Steady stream (50%).'); }
  else if (/trickle/.test(lower)) { operations.push({ type: 'strength', value: 0 }); summary.push('Set Signal Strength to Trickle (0%); this does not mute sources.'); }
  else {
    const strength = lower.match(/(?:strength|flow|signal)[^0-9]{0,10}(100|[1-9]?[0-9])\s*%?/);
    if (strength) { operations.push({ type: 'strength', value: Number(strength[1]) }); summary.push(`Set Signal Strength to ${strength[1]}%.`); }
  }
  const timePresets = [['last month', 'Last 30 days'], ['last 30 days', 'Last 30 days'], ['last week', 'Last 7 days'], ['last 7 days', 'Last 7 days'], ['last 24 hours', 'Last 24 hours'], ['right now', 'Right now']];
  const time = timePresets.find(([phrase]) => lower.includes(phrase));
  if (time) { operations.push({ type: 'time', value: time[1] }); summary.push(`Use the ${time[1]} time window.`); }
  const topic = text.match(/(?:add|follow)\s+(?:the\s+)?topic\s+[“"']?([^,.!;]+)[”"']?/i);
  if (topic) { const value = topic[1].trim(); operations.push({ type: 'topic', value }); summary.push(`Add the open-ended topic “${value}”.`); }
  if (!operations.length) unresolved.push(text);
  if (!summary.length) summary.push('No safe, specific change was identified. Revise the request with a named transmitter, time window, or strength.');
  return { operations, summary: [...new Set(summary)], unresolved };
}

function interpretReceiverV2Command(command) {
  const text = command.trim();
  const lower = text.toLowerCase();
  const operations = [];
  const summary = [];
  if (!text) return { operations, summary: ['Tell Ki what to search, recommend, inspect, add, remove, mute, or tune.'] };
  const named = receiverV2Catalog.filter(item => lower.includes(item.title.toLowerCase()));
  named.forEach(item => {
    const start = lower.indexOf(item.title.toLowerCase());
    const nearby = lower.slice(Math.max(0, start - 36), start + item.title.length + 50);
    if (/remove|drop/.test(nearby)) { operations.push({ type: 'remove', id: item.id }); summary.push(`Remove ${item.title} from the active profile; preserve prior authorized history.`); }
    else if (/unmute|restore/.test(nearby)) { operations.push({ type: 'mute', id: item.id, value: false }); summary.push(`Restore reception from ${item.title}.`); }
    else if (/mute|quiet/.test(nearby)) { operations.push({ type: 'mute', id: item.id, value: true }); summary.push(`Mute ${item.title} without deleting its history.`); }
    else if (/add|tune into|follow/.test(nearby)) { operations.push({ type: 'add', id: item.id }); summary.push(`Add ${item.title} to the active profile.`); }
    if (/inspect|explain|details/.test(nearby)) { operations.push({ type: 'inspect', id: item.id }); summary.push(`Open the inspection record for ${item.title}.`); }
    const intensity = nearby.match(/intensity\D{0,12}(100|[1-9]?[0-9])/);
    if (intensity) { operations.push({ type: 'intensity', id: item.id, value: Number(intensity[1]) }); summary.push(`Set ${item.title} Intensity to ${intensity[1]}.`); }
    const range = nearby.match(/range\D{0,12}(100|[1-9]?[0-9])/);
    if (range) { operations.push({ type: 'range', id: item.id, value: Number(range[1]) }); summary.push(`Set ${item.title} Range to ${range[1]}.`); }
  });
  const sort = lower.match(/sort(?:\s+by)?\s+(most recent|recent|oldest|intensity|range|topic|transmitter)/);
  if (sort) { const value = sort[1] === 'recent' ? 'Most recent' : sort[1][0].toUpperCase() + sort[1].slice(1); operations.push({ type: 'sort', value }); summary.push(`Sort the reception field by ${value}.`); }
  const filterKinds = [['power maps', 'Power Map'], ['maps', 'Power Map'], ['transmitters', 'Transmitter'], ['realms', 'Realm'], ['packages', 'Package'], ['nodes', 'Node']];
  const filter = filterKinds.find(([phrase]) => lower.includes(`show ${phrase}`) || lower.includes(`filter ${phrase}`));
  if (filter) { operations.push({ type: 'filter', value: filter[1] }); summary.push(`Show ${filter[0]}.`); }
  if (/recommend|suggest|what else/.test(lower)) { operations.push({ type: 'recommend' }); summary.push('Open Ki’s explainable recommendations. Nothing will be added automatically.'); }
  const search = text.match(/(?:search(?:\s+for)?|find)\s+(.+?)(?:\s+and\s+|$)/i);
  if (search) { const value = search[1].trim(); operations.push({ type: 'search', value }); summary.push(`Search the visible reception catalog for “${value}”.`); }
  if (!operations.length && named.length) { operations.push({ type: 'inspect', id: named[0].id }); summary.push(`Inspect ${named[0].title}.`); }
  if (!operations.length) summary.push('Ki could not identify a safe, specific Receiver change. Name an object or ask to search, sort, filter, or recommend.');
  return { operations, summary: [...new Set(summary)] };
}

function sendToKi(message) {
  const utterance = (message || state.composerDraft || document.getElementById('ki-input')?.value || '').trim();
  if (!utterance) {
    document.getElementById('ki-input')?.focus();
    return;
  }
  state.composerDraft = '';
  state.notifications = [{
    id: `n-${Date.now()}`,
    kind: 'ki',
    tone: 'sky',
    title: 'Ki is holding the thread',
    body: utterance,
    persistent: false
  }, ...state.notifications.filter(item => item.id !== 'n3')];
  persist();
  announce('Ki received this in the current Layout context. No external Action was taken.');
}

function draftForCurrentContext(prefix = 'Help me understand') {
  const selected = findObject(state.type, state.selectedObject);
  if (selected) return `${prefix} ${selected.title} and show what I can do with it.`;
  if (state.openPanel) return `${prefix} ${panelTitle(state.openPanel).toLowerCase()} in this context.`;
  return `${prefix} what has gravity in the ${layoutTypes.find(item => item.id === state.type)?.name} Layout Type.`;
}

function transmitterEvaluation(patch = {}) {
  return evaluateTransmissionDraft({
    seedIds: patch.seedIds || state.transmitterV2SeedIds,
    destinationIds: patch.destinationIds || state.transmitterV2DestinationIds,
    senderId: patch.senderId || state.transmitterV2SenderId,
    message: patch.message ?? state.transmitterV2Message,
    messagePrivacy: patch.messagePrivacy || state.transmitterV2MessagePrivacy
  });
}

function interpretTransmitterCommand(command) {
  const text = command.trim();
  const lower = text.toLowerCase();
  const seed = transmitterSeedCatalog.find(item => lower.includes(item.title.toLowerCase()));
  const destination = transmitterDestinations.find(item => lower.includes(item.name.toLowerCase()));
  const operations = [];
  const summary = [];
  if (seed) {
    const remove = /remove|drop|without/.test(lower);
    operations.push({ type: remove ? 'remove-seed' : 'add-seed', id: seed.id });
    summary.push(`${remove ? 'Remove' : 'Add'} ${seed.title} ${remove ? 'from' : 'to'} the Payload.`);
  }
  if (destination) {
    operations.push({ type: 'add-destination', id: destination.id });
    summary.push(`Add ${destination.name} as a destination, subject to its privacy and sender checks.`);
  }
  const privacy = ['public', 'private', 'secret', 'personal'].find(level => lower.includes(level));
  if (privacy) {
    operations.push({ type: 'message-privacy', value: privacy[0].toUpperCase() + privacy.slice(1) });
    summary.push(`Set the Message boundary to ${privacy}.`);
  }
  if (!operations.length) summary.push(text ? 'Ki can search the library, but this request needs a named Seed, destination, or privacy boundary before it changes the draft.' : 'Describe a Seed, destination, or privacy boundary first.');
  summary.push('Applying this proposal changes the local draft only. It does not transmit anything.');
  return { operations, summary };
}

app.addEventListener('click', event => {
  const panelButton = event.target.closest('[data-panel]');
  if (panelButton) {
    openPanel(panelButton.dataset.panel);
    return;
  }

  const typeButton = event.target.closest('[data-layout-type]');
  if (typeButton) {
    selectLayoutType(typeButton.dataset.layoutType);
    return;
  }

  const draftButton = event.target.closest('[data-fill-draft]');
  if (draftButton) {
    update({ composerDraft: draftButton.dataset.fillDraft }, { focus: '#ki-input' });
    return;
  }

  const object = event.target.closest('[data-object]');
  if (object && !event.target.closest('[data-action]')) {
    update({ selectedObject: state.selectedObject === object.dataset.object ? null : object.dataset.object, inspector: null });
    return;
  }

  const dismiss = event.target.closest('[data-dismiss-notification]');
  if (dismiss) {
    update({ notifications: state.notifications.filter(item => item.id !== dismiss.dataset.dismissNotification) });
    return;
  }

  const expressionOpen = event.target.closest('[data-expression-open]');
  if (expressionOpen) {
    const expression = expressions.find(item => item.id === expressionOpen.dataset.expressionOpen);
    if (!expression) return;
    update({ activeExpressionId: expression.id, type: expression.layout, selectedObject: null, expressionInspectId: null });
    announce(`${expression.title} is open in its ${layoutTypes.find(type => type.id === expression.layout)?.name} view.`);
    return;
  }
  const expressionInspect = event.target.closest('[data-expression-inspect]');
  if (expressionInspect) { update({ expressionInspectId: expressionInspect.dataset.expressionInspect }); announce('Details are open. Nothing was changed or shared.'); return; }
  const expressionFavorite = event.target.closest('[data-expression-favorite]');
  if (expressionFavorite) {
    const id = expressionFavorite.dataset.expressionFavorite;
    const favorites = state.expressionFavorites.includes(id) ? state.expressionFavorites.filter(item => item !== id) : [...state.expressionFavorites, id];
    const expression = expressions.find(item => item.id === id); if (expression) expression.saved = favorites.includes(id);
    update({ expressionFavorites: favorites }); return;
  }
  const toolTab = event.target.closest('[data-tool-tab]');
  if (toolTab) { update({ [toolTab.dataset.toolTab]: toolTab.dataset.toolTabValue }); return; }
  const connectionAction = event.target.closest('[data-connection-action]');
  if (connectionAction) {
    const id = connectionAction.dataset.connectionId; const action = connectionAction.dataset.connectionAction;
    const current = state.connectorConnections[id] || { connected: false, active: false, muted: false };
    const next = { ...current };
    if (action === 'connect') next.connected = true;
    if (action === 'disconnect') { next.connected = false; next.active = false; }
    if (action === 'activate' && next.connected) next.active = true;
    if (action === 'deactivate') next.active = false;
    if (action === 'mute') next.muted = !next.muted;
    update({ connectorConnections: { ...state.connectorConnections, [id]: next } });
    announce('Saved for this preview. No account or relationship outside this page changed.');
    return;
  }
  const creatorLayout = event.target.closest('[data-creator-layout]');
  if (creatorLayout) { update({ creatorLayout: creatorLayout.dataset.creatorLayout }); return; }
  const creatorKind = event.target.closest('[data-create-kind]');
  if (creatorKind) { update({ kiDraft: `Help me create ${creatorKind.dataset.createKind} in this Creator.` }, { focus: '#universal-ki-input' }); return; }
  const sentinelPreset = event.target.closest('[data-sentinel-preset]');
  if (sentinelPreset) {
    const preset = sentinelPreset.dataset.sentinelPreset;
    const values = preset === 'Open' ? { participation: 100, stewardship: 100, belonging: 100, legibility: 100 } : preset === 'Guided' ? { participation: 45, stewardship: 65, belonging: 55, legibility: 80 } : { participation: 72, stewardship: 66, belonging: 64, legibility: 76 };
    update({ sentinelPreset: preset, sentinelBoundaries: values }); return;
  }
  const metricsScope = event.target.closest('[data-metrics-scope]');
  if (metricsScope) { update({ metricsScope: metricsScope.dataset.metricsScope }); return; }
  const prototypeAction = event.target.closest('[data-prototype-action]');
  if (prototypeAction) { announce(`${prototypeAction.dataset.prototypeAction} is ready to explore in this preview. Nothing outside this page changed.`); return; }

  if (event.target.matches('[data-modal-backdrop]')) {
    if (state.receiverTopicOpen) {
      setRoute('receive', { replace: true });
      update({ receiverTopicOpen: false, receiverTopicDraft: null, receiverTopicQuery: '' }, { focus: purposefulReturnSelector || '[data-action="open-topic-tuner"]' });
    } else if (state.realmDetailId) {
      setRoute('receive', { replace: true });
      update({ realmDetailId: null }, { focus: purposefulReturnSelector || '[data-realm-details]' });
    } else if (state.fieldDetailId) update({ fieldDetailId: null }, { focus: purposefulReturnSelector || '[data-work-details]' });
    return;
  }

  const receiverClear = event.target.closest('[data-receiver-clear]');
  if (receiverClear) {
    update({ receiverRealmQuery: '', receiverRealmTypes: [...representedRealmTypes], receiverOnlySponsored: false, receiverOnlyJoined: false, receiverShowMuted: false, receiverTopicSelection: { topics: [], foci: [], tags: [] }, receiverRealmSort: 'Formation Date', receiverSortDirection: 'desc' });
    announce('Receiver filters returned to the Realm-library baseline. Joined and muted Realm state was preserved.');
    return;
  }

  const realmType = event.target.closest('[data-realm-type]');
  if (realmType) {
    const type = realmType.dataset.realmType;
    const allSelected = representedRealmTypes.every(item => state.receiverRealmTypes.includes(item));
    const receiverRealmTypes = type === 'All Realms'
      ? (allSelected ? [] : [...representedRealmTypes])
      : state.receiverRealmTypes.includes(type)
        ? state.receiverRealmTypes.filter(item => item !== type)
        : [...state.receiverRealmTypes, type];
    update({ receiverRealmTypes });
    return;
  }

  const realmFacet = event.target.closest('[data-realm-facet]');
  if (realmFacet) {
    const facet = realmFacet.dataset.realmFacet;
    if (facet === 'Sponsored') update({ receiverOnlySponsored: !state.receiverOnlySponsored });
    if (facet === 'Joined') update({ receiverOnlyJoined: !state.receiverOnlyJoined });
    if (facet === 'Muted') update({ receiverShowMuted: !state.receiverShowMuted });
    return;
  }

  const realmMute = event.target.closest('[data-realm-mute]');
  if (realmMute) {
    const id = realmMute.dataset.realmMute;
    const realm = realms.find(item => item.id === id);
    const isMuted = state.mutedRealmIds.includes(id);
    const mutedRealmIds = isMuted ? state.mutedRealmIds.filter(item => item !== id) : [...new Set([...state.mutedRealmIds, id])];
    update({ mutedRealmIds }, state.realmDetailId ? { focus: '.realm-detail-dialog [data-realm-mute]' } : {});
    announce(`${realm?.name || 'Realm'} is ${isMuted ? 'receiving again' : 'muted; prior authorized history remains preserved'}.`);
    return;
  }

  const realmJoin = event.target.closest('[data-realm-join]');
  if (realmJoin) {
    const id = realmJoin.dataset.realmJoin;
    const realm = realms.find(item => item.id === id);
    if (state.joinedRealmIds.includes(id)) {
      announce(`${realm?.name || 'This Realm'} is already included in this Source’s Field. Membership and Roles remain separate.`);
      return;
    }
    update({ joinedRealmIds: [...new Set([...state.joinedRealmIds, id])] }, state.realmDetailId ? { focus: '.realm-detail-dialog [data-realm-join]' } : {});
    announce(`${realm?.name || 'Realm'} was added to this personal Field. No membership, Role, Permission, Consent, or Authority changed.`);
    return;
  }

  const realmDetails = event.target.closest('[data-realm-details]');
  if (realmDetails) {
    purposefulReturnSelector = `[data-realm-details="${realmDetails.dataset.realmDetails}"]`;
    history.pushState({ panel: 'receive', modal: 'realm-details' }, '', '/receiver#realm-details');
    update({ realmDetailId: realmDetails.dataset.realmDetails, receiverTopicOpen: false }, { focus: '.realm-detail-dialog' });
    return;
  }

  const topicChoice = event.target.closest('[data-topic-choice]');
  if (topicChoice) {
    const value = topicChoice.dataset.topicChoice;
    const draft = clone(state.receiverTopicDraft || state.receiverTopicSelection);
    const removing = draft.topics.includes(value);
    draft.topics = removing ? draft.topics.filter(item => item !== value) : [...draft.topics, value];
    if (removing) {
      const focusNames = topicHierarchy.find(topic => topic.name === value)?.foci.map(focus => focus.name) || [];
      const tagNames = topicHierarchy.find(topic => topic.name === value)?.foci.flatMap(focus => focus.tags) || [];
      draft.foci = draft.foci.filter(item => !focusNames.includes(item));
      draft.tags = draft.tags.filter(item => !tagNames.includes(item));
    }
    update({ receiverTopicDraft: draft }, { focus: `[data-topic-choice="${CSS.escape(value)}"]` });
    return;
  }

  const focusChoice = event.target.closest('[data-focus-choice]');
  if (focusChoice) {
    const value = focusChoice.dataset.focusChoice;
    const draft = clone(state.receiverTopicDraft || state.receiverTopicSelection);
    const removing = draft.foci.includes(value);
    draft.foci = removing ? draft.foci.filter(item => item !== value) : [...draft.foci, value];
    if (removing) {
      const tagNames = topicHierarchy.flatMap(topic => topic.foci).find(focus => focus.name === value)?.tags || [];
      draft.tags = draft.tags.filter(item => !tagNames.includes(item));
    }
    update({ receiverTopicDraft: draft }, { focus: `[data-focus-choice="${CSS.escape(value)}"]` });
    return;
  }

  const tagChoice = event.target.closest('[data-tag-choice]');
  if (tagChoice) {
    const value = tagChoice.dataset.tagChoice;
    const draft = clone(state.receiverTopicDraft || state.receiverTopicSelection);
    draft.tags = draft.tags.includes(value) ? draft.tags.filter(item => item !== value) : [...draft.tags, value];
    update({ receiverTopicDraft: draft }, { focus: `[data-tag-choice="${CSS.escape(value)}"]` });
    return;
  }

  const topicRemove = event.target.closest('[data-topic-remove]');
  if (topicRemove) {
    const draft = clone(state.receiverTopicDraft || state.receiverTopicSelection);
    const kind = topicRemove.dataset.topicRemove;
    const value = topicRemove.dataset.topicValue;
    const key = `${kind}s`;
    draft[key] = (draft[key] || []).filter(item => item !== value);
    if (kind === 'topic') {
      const removed = topicHierarchy.find(topic => topic.name === value)?.foci || [];
      const removedFoci = removed.map(focus => focus.name);
      const removedTags = removed.flatMap(focus => focus.tags);
      draft.foci = draft.foci.filter(item => !removedFoci.includes(item));
      draft.tags = draft.tags.filter(item => !removedTags.includes(item));
    }
    if (kind === 'focus') {
      const removedTags = topicHierarchy.flatMap(topic => topic.foci).find(focus => focus.name === value)?.tags || [];
      draft.tags = draft.tags.filter(item => !removedTags.includes(item));
    }
    update({ receiverTopicDraft: draft }, { focus: '.topic-dialog' });
    return;
  }

  const fieldView = event.target.closest('[data-field-view]');
  if (fieldView) { update({ fieldViewMode: fieldView.dataset.fieldView }); return; }

  const fieldWhy = event.target.closest('[data-work-why]');
  if (fieldWhy) {
    const id = fieldWhy.dataset.workWhy;
    const fieldWhyIds = state.fieldWhyIds.includes(id) ? state.fieldWhyIds.filter(item => item !== id) : [...state.fieldWhyIds, id];
    update({ fieldWhyIds }, { focus: `[data-work-why="${CSS.escape(id)}"]` });
    return;
  }

  const fieldCluster = event.target.closest('[data-field-cluster]');
  if (fieldCluster) {
    const id = fieldCluster.dataset.fieldCluster;
    const fieldOpenClusters = state.fieldOpenClusters.includes(id) ? state.fieldOpenClusters.filter(item => item !== id) : [...state.fieldOpenClusters, id];
    update({ fieldOpenClusters }, { focus: `[data-field-cluster="${CSS.escape(id)}"]` });
    return;
  }

  const workDetails = event.target.closest('[data-work-details], [data-work-action]');
  if (workDetails) {
    const id = workDetails.dataset.workDetails || workDetails.dataset.workAction;
    purposefulReturnSelector = workDetails.dataset.workAction ? `[data-work-action="${CSS.escape(id)}"]` : `[data-work-details="${CSS.escape(id)}"]`;
    update({ fieldDetailId: id }, { focus: '.work-detail-dialog' });
    return;
  }

  const txFilter = event.target.closest('[data-tx-filter]');
  if (txFilter) {
    const filter = txFilter.dataset.txFilter;
    const allSelected = state.transmitterV2Filters.length === transmitterV2FilterOptions.length;
    const filters = filter === 'All' ? (allSelected ? [] : [...transmitterV2FilterOptions]) : state.transmitterV2Filters.includes(filter) ? state.transmitterV2Filters.filter(item => item !== filter) : [...state.transmitterV2Filters, filter];
    update({ transmitterV2Filters: filters });
    return;
  }
  const txAdd = event.target.closest('[data-tx-seed-add]');
  if (txAdd) {
    const id = txAdd.dataset.txSeedAdd;
    if (!state.transmitterV2SeedIds.includes(id)) update({ transmitterV2SeedIds: [...state.transmitterV2SeedIds, id], transmitterV2Prepared: false, transmitterV2Proposal: null });
    return;
  }
  const txRemove = event.target.closest('[data-tx-seed-remove]');
  if (txRemove) { update({ transmitterV2SeedIds: state.transmitterV2SeedIds.filter(id => id !== txRemove.dataset.txSeedRemove), transmitterV2Prepared: false }); return; }
  const txInspect = event.target.closest('[data-tx-inspect]');
  if (txInspect) { update({ transmitterV2InspectorId: txInspect.dataset.txInspect, transmitterV2DestinationInspectorId: null }, { focus: '.tx-inspector header button' }); return; }
  const txDestinationInspect = event.target.closest('[data-tx-inspect-destination]');
  if (txDestinationInspect) { update({ transmitterV2DestinationInspectorId: txDestinationInspect.dataset.txInspectDestination, transmitterV2InspectorId: null }, { focus: '.tx-inspector header button' }); return; }
  const txDestination = event.target.closest('[data-tx-destination]');
  if (txDestination) {
    const id = txDestination.dataset.txDestination;
    update({ transmitterV2DestinationIds: state.transmitterV2DestinationIds.includes(id) ? state.transmitterV2DestinationIds.filter(item => item !== id) : [...state.transmitterV2DestinationIds, id], transmitterV2Prepared: false });
    return;
  }
  const txUp = event.target.closest('[data-tx-seed-up]');
  const txDown = event.target.closest('[data-tx-seed-down]');
  if (txUp || txDown) {
    const id = (txUp || txDown).dataset[txUp ? 'txSeedUp' : 'txSeedDown'];
    const ids = [...state.transmitterV2SeedIds];
    const from = ids.indexOf(id); const to = from + (txUp ? -1 : 1);
    if (from >= 0 && to >= 0 && to < ids.length) [ids[from], ids[to]] = [ids[to], ids[from]];
    update({ transmitterV2SeedIds: ids, transmitterV2Prepared: false });
    return;
  }
  const txStep = event.target.closest('[data-tx-step]');
  if (txStep) { update({ transmitterV2Step: txStep.dataset.txStep, transmitterV2ReviewOpen: txStep.dataset.txStep === 'Review' }); return; }

  const v2Filter = event.target.closest('[data-v2-filter]');
  if (v2Filter) {
    const filter = v2Filter.dataset.v2Filter;
    const allSelected = state.receiverV2Filters.length === receiverV2FilterOptions.length;
    const nextFilters = filter === 'All'
      ? (allSelected ? [] : [...receiverV2FilterOptions])
      : state.receiverV2Filters.includes(filter)
        ? state.receiverV2Filters.filter(item => item !== filter)
        : [...state.receiverV2Filters, filter];
    update({ receiverV2Filters: nextFilters, receiverV2Limit: 9 });
    return;
  }

  const v2Compare = event.target.closest('[data-v2-compare]');
  if (v2Compare) { update({ receiverV2CompareId: v2Compare.dataset.v2Compare }); return; }

  const v2Add = event.target.closest('[data-v2-add]');
  if (v2Add) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2Add.dataset.v2Add);
    const profile = activeReceiverProfile();
    if (!item || profile.transmitterIds.includes(item.id)) { if (item) announce(`${item.title} is already in ${profile.name}.`); return; }
    receiverChange(`Added ${item.title}`, active => {
      active.transmitterIds.push(item.id);
      active.sourcePreferences[item.id] = active.sourcePreferences[item.id] || { stage: 'Normal', order: 0, interruption: 'Ambient only' };
      active.receiverV2Tuning[item.id] = active.receiverV2Tuning[item.id] || { intensity: 60, range: item.kind === 'Node' ? 48 : 32, muted: false };
    }, { receiverV2Proposal: null });
    announce(`${item.title} was added to ${profile.name}. Undo is available.`);
    return;
  }

  const v2Remove = event.target.closest('[data-v2-remove]');
  if (v2Remove) {
    const fromInspector = Boolean(v2Remove.closest('.receiver-v2-inspector'));
    update({ receiverV2ConfirmRemove: v2Remove.dataset.v2Remove, receiverV2InspectorId: fromInspector ? null : state.receiverV2InspectorId }, { focus: fromInspector ? `[data-receiver-v2-box="${v2Remove.dataset.v2Remove}"] [data-v2-remove-confirm]` : undefined });
    return;
  }
  const v2RemoveConfirm = event.target.closest('[data-v2-remove-confirm]');
  if (v2RemoveConfirm) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2RemoveConfirm.dataset.v2RemoveConfirm);
    if (!item) return;
    receiverChange(`Removed ${item.title}`, active => {
      active.transmitterIds = active.transmitterIds.filter(id => id !== item.id);
      delete active.sourcePreferences[item.id];
    }, { receiverV2ConfirmRemove: null, receiverV2InspectorId: state.receiverV2InspectorId === item.id ? null : state.receiverV2InspectorId });
    announce(`${item.title} was removed from this profile. Prior authorized Records and Landings remain preserved.`);
    return;
  }

  const v2Mute = event.target.closest('[data-v2-mute]');
  if (v2Mute) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2Mute.dataset.v2Mute);
    if (!item) return;
    const isMuted = activeReceiverProfile().receiverV2Tuning[item.id]?.muted;
    receiverChange(`${isMuted ? 'Restored' : 'Muted'} ${item.title}`, active => {
      active.receiverV2Tuning[item.id] = { ...(active.receiverV2Tuning[item.id] || { intensity: 50, range: 32 }), muted: !isMuted };
      active.sourcePreferences[item.id] = { ...(active.sourcePreferences[item.id] || { order: 0, interruption: 'Ambient only' }), stage: !isMuted ? 'Mute' : 'Normal' };
    });
    announce(`${item.title} is ${isMuted ? 'receiving again' : 'muted in this profile; its history is preserved'}.`);
    return;
  }

  const v2Inspect = event.target.closest('[data-v2-inspect]');
  if (v2Inspect) { update({ receiverV2InspectorId: v2Inspect.dataset.v2Inspect, receiverV2ConfirmRemove: null }, { focus: '.receiver-v2-inspector-close' }); return; }

  const v2Preview = event.target.closest('[data-v2-recommend-preview]');
  if (v2Preview) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2Preview.dataset.v2RecommendPreview);
    if (item) update({ receiverV2Proposal: { operations: [{ type: 'add', id: item.id }], summary: [`Add ${item.title} to ${activeReceiverProfile().name} with its default Intensity and Range.`, `Basis: ${item.recommendation}`, 'This does not widen visibility or establish truth, membership, or Authority.'] }, receiverV2KiDraft: `Add ${item.title}` });
    return;
  }

  const v2NotInterested = event.target.closest('[data-v2-not-interested]');
  if (v2NotInterested) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2NotInterested.dataset.v2NotInterested);
    if (!item) return;
    receiverChange(`Not interested in ${item.title}`, active => { active.receiverV2Dismissed = [...new Set([...(active.receiverV2Dismissed || []), item.id])]; });
    return;
  }

  const v2SendFarther = event.target.closest('[data-v2-send-farther]');
  if (v2SendFarther) {
    const item = receiverV2Catalog.find(candidate => candidate.id === v2SendFarther.dataset.v2SendFarther);
    if (!item) return;
    receiverChange(`Sent ${item.title} farther`, active => {
      active.receiverV2Tuning[item.id] = { ...(active.receiverV2Tuning[item.id] || {}), intensity: 18, range: 0, muted: false };
      active.receiverV2Dismissed = [...new Set([...(active.receiverV2Dismissed || []), item.id])];
    });
    return;
  }

  const receiverView = event.target.closest('[data-receiver-view]');
  if (receiverView) {
    update({ receiverView: receiverView.dataset.receiverView, receiverProposal: null, receiverConfirmDelete: null, receiverRenameId: null });
    return;
  }

  const addReceiver = event.target.closest('[data-add-receiver]');
  if (addReceiver) {
    const item = transmitterCatalog.find(candidate => candidate.id === addReceiver.dataset.addReceiver);
    const profile = activeReceiverProfile();
    if (!item || !profile) return;
    if (profile.transmitterIds.includes(item.id)) {
      announce(`${item.name} is already in ${profile.name}.`);
      return;
    }
    receiverChange(`Added ${item.name}`, active => {
      active.transmitterIds.push(item.id);
      active.sourcePreferences[item.id] = { stage: 'Normal', order: 0, interruption: 'Ambient only' };
      if (active.receiverV2Tuning[item.id]) active.receiverV2Tuning[item.id].muted = false;
    });
    announce(`${item.name} was added to the active profile, ${profile.name}. Undo is available in Summary.`);
    return;
  }

  const removeReceiver = event.target.closest('[data-receiver-remove]');
  if (removeReceiver) {
    const item = transmitterCatalog.find(candidate => candidate.id === removeReceiver.dataset.receiverRemove);
    if (!item) return;
    receiverChange(`Removed ${item.name}`, active => {
      active.transmitterIds = active.transmitterIds.filter(id => id !== item.id);
      delete active.sourcePreferences[item.id];
    });
    announce(`${item.name} was removed from this Reception Profile. Its prior Signals were not deleted.`);
    return;
  }

  const receiverDetails = event.target.closest('[data-receiver-details]');
  if (receiverDetails) {
    update({ receiverDetailId: state.receiverDetailId === receiverDetails.dataset.receiverDetails ? null : receiverDetails.dataset.receiverDetails });
    return;
  }

  const receiverTheme = event.target.closest('[data-receiver-theme]');
  if (receiverTheme) {
    const name = receiverTheme.dataset.receiverTheme;
    receiverChange(`${activeReceiverProfile().themes.includes(name) ? 'Removed' : 'Added'} Theme ${name}`, active => {
      active.themes = active.themes.includes(name) ? active.themes.filter(item => item !== name) : [...active.themes, name];
    });
    return;
  }

  const receiverFocus = event.target.closest('[data-receiver-focus]');
  if (receiverFocus) {
    const name = receiverFocus.dataset.receiverFocus;
    receiverChange(`${activeReceiverProfile().foci.includes(name) ? 'Removed' : 'Added'} Focus ${name}`, active => {
      active.foci = active.foci.includes(name) ? active.foci.filter(item => item !== name) : [...active.foci, name];
    });
    return;
  }

  const removeTopic = event.target.closest('[data-receiver-remove-topic]');
  if (removeTopic) {
    const name = removeTopic.dataset.receiverRemoveTopic;
    receiverChange(`Removed topic ${name}`, active => { active.topics = active.topics.filter(item => item !== name); });
    return;
  }

  const timePreset = event.target.closest('[data-receiver-time-preset]');
  if (timePreset) {
    const value = timePreset.dataset.receiverTimePreset;
    receiverChange(`Changed time window to ${value}`, active => {
      active.time.preset = value;
      if (value === 'Right now') { active.time.includeCurrent = true; active.time.includeHistory = false; }
    });
    return;
  }

  const activateProfile = event.target.closest('[data-receiver-activate]');
  if (activateProfile) {
    const profile = state.receiverProfiles.find(item => item.id === activateProfile.dataset.receiverActivate);
    if (profile) {
      update({ activeReceiverProfileId: profile.id, receiverUndo: null, receiverDetailId: null });
      announce(`${profile.name} is now the active Reception Profile.`);
    }
    return;
  }

  const renameProfile = event.target.closest('[data-receiver-rename]');
  if (renameProfile) { update({ receiverRenameId: renameProfile.dataset.receiverRename, receiverConfirmDelete: null }, { focus: '#receiver-rename-input' }); return; }
  const duplicateProfile = event.target.closest('[data-receiver-duplicate]');
  if (duplicateProfile) {
    const source = state.receiverProfiles.find(item => item.id === duplicateProfile.dataset.receiverDuplicate);
    if (!source) return;
    const copy = { ...clone(source), id: uniqueProfileId(`${source.name} copy`), name: `${source.name} copy`, createdAt: new Date().toISOString() };
    update({ receiverProfiles: [...state.receiverProfiles, copy], activeReceiverProfileId: copy.id, receiverView: 'profiles', receiverUndo: { profiles: clone(state.receiverProfiles), activeReceiverProfileId: state.activeReceiverProfileId, label: 'Duplicate profile' }, recentReceiverChanges: [{ label: `Duplicated ${source.name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    announce(`${copy.name} was created and activated.`);
    return;
  }
  const deleteProfile = event.target.closest('[data-receiver-delete]');
  if (deleteProfile) { update({ receiverConfirmDelete: deleteProfile.dataset.receiverDelete, receiverRenameId: null }); return; }
  const confirmDelete = event.target.closest('[data-receiver-delete-confirm]');
  if (confirmDelete) {
    const deleted = state.receiverProfiles.find(item => item.id === confirmDelete.dataset.receiverDeleteConfirm);
    if (!deleted || state.receiverProfiles.length === 1) return;
    const remaining = state.receiverProfiles.filter(item => item.id !== deleted.id);
    const activeId = state.activeReceiverProfileId === deleted.id ? remaining[0].id : state.activeReceiverProfileId;
    update({ receiverProfiles: remaining, activeReceiverProfileId: activeId, deletedReceiverProfile: deleted, receiverConfirmDelete: null, receiverUndo: { profiles: clone(state.receiverProfiles), activeReceiverProfileId: state.activeReceiverProfileId, label: 'Delete profile' }, recentReceiverChanges: [{ label: `Deleted ${deleted.name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    announce(`${deleted.name} was deleted locally. Restore is available in Profiles.`);
    return;
  }

  const pulseFilter = event.target.closest('[data-pulse-filter]');
  if (pulseFilter) {
    update({ pulseFilter: pulseFilter.dataset.pulseFilter, selectedObject: null });
    return;
  }

  const connectTab = event.target.closest('[data-connect-tab]');
  if (connectTab) {
    update({ connectTab: connectTab.dataset.connectTab });
    return;
  }

  const historyFilter = event.target.closest('[data-history-filter]');
  if (historyFilter) {
    update({ historyFilter: historyFilter.dataset.historyFilter });
    return;
  }

  const historyEntry = event.target.closest('[data-history]');
  if (historyEntry) {
    update({ inspector: historyEntry.dataset.history });
    return;
  }

  const avatarState = event.target.closest('[data-avatar-state]');
  if (avatarState) {
    update({ avatarState: avatarState.dataset.avatarState });
    announce(`Moto’s Avatar is now presented as ${avatarState.dataset.avatarState}.`);
    return;
  }

  const packageButton = event.target.closest('[data-launch-package]');
  if (packageButton) {
    const packageId = packageButton.dataset.launchPackage;
    update({ launchedPackage: packageId, type: 'theater', openPanel: null, selectedObject: null });
    announce('Package loaded in Theater · Rehearsal. Your prior Field context is preserved.');
    return;
  }

  const createButton = event.target.closest('[data-create]');
  if (createButton) {
    update({ openPanel: null, composerDraft: `Create a ${createButton.dataset.create} that ` }, { focus: '#ki-input' });
    return;
  }

  if (event.target.closest('[data-close-panel]')) {
    const wasReceiver = state.openPanel === 'receive';
    const wasTransmitter = state.openPanel === 'transmit';
    setRoute(null);
    update({ openPanel: null, routeLabel: 'Field', receiverProposal: null, receiverV2Proposal: null, receiverV2InspectorId: null, receiverV2ProfileManagerOpen: false, receiverTopicOpen: false, receiverTopicDraft: null, realmDetailId: null, fieldDetailId: null, transmitterV2InspectorId: null, transmitterV2DestinationInspectorId: null, transmitterV2ReviewOpen: false, transmitterV2Proposal: null }, { focus: wasReceiver ? '[data-panel="receive"]' : wasTransmitter ? '[data-panel="transmit"]' : '[data-action="go-field"]', restoreFieldScroll: wasReceiver ? state.receiverReturnScroll : wasTransmitter ? state.transmitterReturnScroll : undefined });
    return;
  }
  if (event.target.closest('[data-close-inspector]')) {
    update({ inspector: null });
    return;
  }
  if (event.target.closest('[data-clear-selection]')) {
    update({ selectedObject: null, inspector: null });
    return;
  }

  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;

  if (action === 'go-about') { setRoute('about'); update({ openPanel: 'about', routeLabel: 'About', activeExpressionId: null, receiverTopicOpen: false, realmDetailId: null, fieldDetailId: null }); return; }
  if (action === 'go-field') { setRoute(null); update({ openPanel: null, routeLabel: 'Field', activeExpressionId: null, receiverTopicOpen: false, realmDetailId: null, fieldDetailId: null }, { focus: '#field-stage' }); return; }
  if (action === 'open-topic-tuner') {
    purposefulReturnSelector = '[data-action="open-topic-tuner"]';
    history.pushState({ panel: 'receive', modal: 'topic-tuner' }, '', '/receiver#topic-tuner');
    update({ receiverTopicOpen: true, receiverTopicDraft: clone(state.receiverTopicSelection), receiverTopicQuery: '', realmDetailId: null }, { focus: '.topic-dialog' });
    return;
  }
  if (action === 'cancel-topic-tuner') {
    setRoute('receive', { replace: true });
    update({ receiverTopicOpen: false, receiverTopicDraft: null, receiverTopicQuery: '' }, { focus: purposefulReturnSelector || '[data-action="open-topic-tuner"]' });
    announce('Topics closed without changing your applied interests.');
    return;
  }
  if (action === 'clear-topic-draft') { update({ receiverTopicDraft: { topics: [], foci: [], tags: [] } }, { focus: '[data-action="clear-topic-draft"]' }); return; }
  if (action === 'apply-topic-tuner') {
    const applied = clone(state.receiverTopicDraft || { topics: [], foci: [], tags: [] });
    setRoute('receive', { replace: true });
    update({ receiverTopicSelection: applied, receiverTopicOpen: false, receiverTopicDraft: null, receiverTopicQuery: '' }, { focus: purposefulReturnSelector || '[data-action="open-topic-tuner"]' });
    announce(`${applied.topics.length + applied.foci.length + applied.tags.length} interest selections applied to this Realm library.`);
    return;
  }
  if (action === 'toggle-realm-sort') { update({ receiverSortDirection: state.receiverSortDirection === 'asc' ? 'desc' : 'asc' }); return; }
  if (action === 'close-realm-details') {
    setRoute('receive', { replace: true });
    update({ realmDetailId: null }, { focus: purposefulReturnSelector || '[data-realm-details]' });
    return;
  }
  if (action === 'close-work-details') { update({ fieldDetailId: null }, { focus: purposefulReturnSelector || '[data-work-details]' }); return; }
  if (action === 'purposeful-action-preview') { announce(`“${event.target.closest('[data-preview-label]')?.dataset.previewLabel || 'This action'}” is prepared for review only. No external Action occurred.`); return; }
  if (action === 'reset-field') {
    update({ fieldForce: 'Gravity', fieldViewMode: 'spatial', fieldRealmType: 'All types', fieldRealm: 'All joined Realms', fieldProject: 'All Projects', fieldTopic: 'All Topics', fieldActivity: 'All Activity', fieldWhyIds: [], fieldOpenClusters: [] });
    announce('Field controls returned to Gravity and the Source-relative baseline. Joined Realms were preserved.');
    return;
  }
  if (action === 'open-ki-plus') { update({ kiPlusOpen: !state.kiPlusOpen }, { focus: state.kiPlusOpen ? '#universal-ki-input' : '.ki-plus-menu button' }); return; }
  if (action === 'close-ki-plus') { update({ kiPlusOpen: false }, { focus: '.ki-plus-button' }); return; }
  if (action === 'ki-plus-option') {
    const option = event.target.closest('[data-ki-plus-value]');
    const text = option?.dataset.kiPlusValue || '';
    update({ kiDraft: text, kiPlusOpen: false }, { focus: '#universal-ki-input' });
    announce(`${text} is staged in Ki. Nothing has been attached or shared.`);
    return;
  }

  if (action === 'close-expression') { update({ activeExpressionId: null, type: 'composed' }, { focus: '.field-home h1' }); return; }
  if (action === 'close-expression-inspector') { update({ expressionInspectId: null }, { focus: '[data-expression-inspect]' }); return; }
  if (action === 'expression-saved') { update({ expressionSavedOnly: !state.expressionSavedOnly }); return; }
  if (action === 'universal-dictate') { announce('Dictate is visible for a future voice connection; this prototype is not recording.'); return; }
  if (action === 'universal-voice') { announce('Voice is visible for a future real-time connection; this prototype is not listening.'); return; }
  if (action === 'ki-preview') {
    const proposal = proposeKiActions(state);
    update({ kiProposal: proposal, kiSelectedActions: proposal.actions.map(item => item.id), kiRevisionMode: false }); return;
  }
  if (action === 'ki-select-all') { update({ kiSelectedActions: state.kiProposal?.actions.map(item => item.id) || [] }); return; }
  if (action === 'ki-clear-all') { update({ kiSelectedActions: [] }); return; }
  if (action === 'ki-cancel') { update({ kiProposal: null, kiSelectedActions: [], kiRevisionMode: false, kiRevisionDraft: '' }); return; }
  if (action === 'ki-revise') { update({ kiRevisionMode: true, kiRevisionDraft: state.kiDraft }, { focus: '#ki-revision-input' }); return; }
  if (action === 'ki-revision-cancel') { update({ kiRevisionMode: false }, { focus: '.ki-action-review footer button' }); return; }
  if (action === 'ki-revision-preview') {
    const proposal = proposeKiActions(state, state.kiRevisionDraft);
    update({ kiProposal: proposal, kiDraft: state.kiRevisionDraft, kiSelectedActions: proposal.actions.map(item => item.id), kiRevisionMode: false }); return;
  }
  if (action === 'ki-approve-selected' || action === 'ki-approve-all') {
    const selected = action === 'ki-approve-all' ? state.kiProposal?.actions || [] : (state.kiProposal?.actions || []).filter(item => state.kiSelectedActions.includes(item.id));
    update({ kiProposal: null, kiSelectedActions: [], kiRevisionMode: false });
    announce(`${selected.length} local Ki action${selected.length === 1 ? '' : 's'} approved. No external or consequential Action occurred.`);
    return;
  }

  if (action === 'tx-clear-payload') { update({ transmitterV2SeedIds: [], transmitterV2Prepared: false }); return; }
  if (action === 'tx-save-draft') { persist(); announce('Transmitter draft saved locally. Nothing has been sent.'); return; }
  if (action === 'tx-inspect-payload') { update({ transmitterV2ReviewOpen: true }, { focus: '.tx-review header button' }); return; }
  if (action === 'tx-review') { update({ transmitterV2ReviewOpen: true, transmitterV2Prepared: false, transmitterV2Step: 'Review' }, { focus: '.tx-review header button' }); return; }
  if (action === 'tx-close-review') { update({ transmitterV2ReviewOpen: false, transmitterV2Step: 'Signal' }, { focus: '.tx-review-button' }); return; }
  if (action === 'tx-close-inspector') { update({ transmitterV2InspectorId: null, transmitterV2DestinationInspectorId: null }, { focus: state.transmitterV2InspectorId ? `[data-tx-inspect="${state.transmitterV2InspectorId}"]` : state.transmitterV2DestinationInspectorId ? `[data-tx-inspect-destination="${state.transmitterV2DestinationInspectorId}"]` : undefined }); return; }
  if (action === 'tx-prepare') {
    const result = transmitterEvaluation();
    if (!result.ready) { announce('Resolve the visible Signal, sender, and privacy checks before preparation.'); return; }
    update({ transmitterV2Prepared: true });
    announce('Transmission prepared locally. Nothing has been sent.');
    return;
  }
  if (action === 'tx-dictate') { announce('Dictate is placed for a future voice connection; this prototype is not recording.'); return; }
  if (action === 'tx-voice') { announce('Voice is placed for a future real-time connection; this prototype is not listening.'); return; }
  if (action === 'tx-ki-preview') { update({ transmitterV2Proposal: interpretTransmitterCommand(state.transmitterV2KiDraft) }); return; }
  if (action === 'tx-ki-cancel') { update({ transmitterV2Proposal: null }); return; }
  if (action === 'tx-ki-revise') { update({ transmitterV2Proposal: null }, { focus: '#tx-ki-input' }); return; }
  if (action === 'tx-ki-apply') {
    let seedIds = [...state.transmitterV2SeedIds]; let destinationIds = [...state.transmitterV2DestinationIds]; let messagePrivacy = state.transmitterV2MessagePrivacy;
    (state.transmitterV2Proposal?.operations || []).forEach(operation => {
      if (operation.type === 'add-seed') seedIds = [...new Set([...seedIds, operation.id])];
      if (operation.type === 'remove-seed') seedIds = seedIds.filter(id => id !== operation.id);
      if (operation.type === 'add-destination') destinationIds = [...new Set([...destinationIds, operation.id])];
      if (operation.type === 'message-privacy') messagePrivacy = operation.value;
    });
    update({ transmitterV2SeedIds: seedIds, transmitterV2DestinationIds: destinationIds, transmitterV2MessagePrivacy: messagePrivacy, transmitterV2Proposal: null, transmitterV2Prepared: false });
    announce('Ki’s proposed changes were applied to the local draft. Nothing was sent.');
    return;
  }

  if (action === 'receiver-v2-cancel-remove') { update({ receiverV2ConfirmRemove: null }); return; }
  if (action === 'receiver-v2-manage-profiles') { update({ receiverV2ProfileManagerOpen: true, receiverV2InspectorId: null }, { focus: '.receiver-v2-profile-manager header button' }); return; }
  if (action === 'receiver-v2-close-profiles') { update({ receiverV2ProfileManagerOpen: false, receiverConfirmDelete: null, receiverRenameId: null }, { focus: '.receiver-v2-manage' }); return; }
  if (action === 'receiver-v2-clear-compare') { update({ receiverV2CompareId: null }); return; }
  if (action === 'receiver-v2-close-inspector') { update({ receiverV2InspectorId: null }, { focus: state.receiverV2InspectorId ? `[data-v2-inspect="${state.receiverV2InspectorId}"]` : undefined }); return; }
  if (action === 'receiver-v2-show-recommendations') { update({ receiverV2RecommendationsOpen: true }); return; }
  if (action === 'receiver-v2-hide-recommendations') { update({ receiverV2RecommendationsOpen: false }); return; }
  if (action === 'receiver-v2-more') { update({ receiverV2Limit: state.receiverV2Limit + 6 }); return; }
  if (action === 'receiver-v2-ki-preview') {
    const draft = document.getElementById('receiver-v2-ki-input')?.value || state.receiverV2KiDraft;
    update({ receiverV2KiDraft: draft, receiverV2Proposal: interpretReceiverV2Command(draft) });
    return;
  }
  if (action === 'receiver-v2-ki-revise') { update({ receiverV2Proposal: null }, { focus: '#receiver-v2-ki-input' }); return; }
  if (action === 'receiver-v2-ki-cancel') { update({ receiverV2Proposal: null, receiverV2KiDraft: '' }); return; }
  if (action === 'receiver-v2-ki-apply') {
    const proposal = state.receiverV2Proposal;
    if (!proposal?.operations.length) return;
    const extra = { receiverV2Proposal: null, receiverV2KiDraft: '' };
    receiverChange('Applied Ki Receiver changes', active => {
      proposal.operations.forEach(operation => {
        const item = receiverV2Catalog.find(candidate => candidate.id === operation.id);
        if (operation.type === 'add' && item && !active.transmitterIds.includes(item.id)) {
          active.transmitterIds.push(item.id);
          active.sourcePreferences[item.id] = active.sourcePreferences[item.id] || { stage: 'Normal', order: 0, interruption: 'Ambient only' };
        }
        if (operation.type === 'remove' && item) {
          active.transmitterIds = active.transmitterIds.filter(id => id !== item.id);
          delete active.sourcePreferences[item.id];
        }
        if (operation.type === 'mute' && item) {
          active.receiverV2Tuning[item.id] = { ...(active.receiverV2Tuning[item.id] || { intensity: 50, range: 32 }), muted: operation.value };
          active.sourcePreferences[item.id] = { ...(active.sourcePreferences[item.id] || { order: 0, interruption: 'Ambient only' }), stage: operation.value ? 'Mute' : 'Normal' };
        }
        if (operation.type === 'intensity' && item) active.receiverV2Tuning[item.id].intensity = operation.value;
        if (operation.type === 'range' && item) active.receiverV2Tuning[item.id].range = operation.value;
        if (operation.type === 'sort') extra.receiverV2Sort = operation.value;
        if (operation.type === 'filter') extra.receiverV2Filters = [operation.value];
        if (operation.type === 'search') extra.receiverV2Query = operation.value;
        if (operation.type === 'recommend') extra.receiverV2RecommendationsOpen = true;
        if (operation.type === 'inspect') extra.receiverV2InspectorId = operation.id;
      });
    }, extra);
    announce('Ki’s reviewed Receiver changes were applied locally. Undo is available.');
    return;
  }

  if (action === 'receiver-interpret') {
    const command = document.getElementById('receiver-command')?.value || state.receiverCommand;
    update({ receiverCommand: command, receiverProposal: interpretReceiverCommand(command) });
    return;
  }
  if (action === 'receiver-command-clear') { update({ receiverCommand: '', receiverProposal: null }, { focus: '#receiver-command' }); return; }
  if (action === 'receiver-revise-proposal') { update({ receiverProposal: null }, { focus: '#receiver-command' }); return; }
  if (action === 'receiver-cancel-proposal') { update({ receiverCommand: '', receiverProposal: null }); return; }
  if (action === 'receiver-apply-proposal') {
    const proposal = state.receiverProposal;
    if (!proposal?.operations.length) return;
    receiverChange('Applied free-form Receiver request', active => {
      proposal.operations.forEach(operation => {
        if (operation.type === 'add' && !active.transmitterIds.includes(operation.id)) {
          active.transmitterIds.push(operation.id);
          active.sourcePreferences[operation.id] = { stage: 'Normal', order: 0, interruption: 'Ambient only' };
          if (active.receiverV2Tuning[operation.id]) active.receiverV2Tuning[operation.id].muted = false;
        }
        if (operation.type === 'remove') {
          active.transmitterIds = active.transmitterIds.filter(id => id !== operation.id);
          delete active.sourcePreferences[operation.id];
        }
        if (operation.type === 'stage') {
          if (!active.transmitterIds.includes(operation.id)) active.transmitterIds.push(operation.id);
          active.sourcePreferences[operation.id] = { ...(active.sourcePreferences[operation.id] || { order: 0, interruption: 'Ambient only' }), stage: operation.value };
          if (active.receiverV2Tuning[operation.id]) active.receiverV2Tuning[operation.id].muted = operation.value === 'Mute';
        }
        if (operation.type === 'strength') active.strength = operation.value;
        if (operation.type === 'time') active.time.preset = operation.value;
        if (operation.type === 'topic' && !active.topics.includes(operation.value)) active.topics.push(operation.value);
      });
    }, { receiverCommand: '', receiverProposal: null });
    announce('The reviewed Receiver changes were applied locally. Undo is available in Summary.');
    return;
  }
  if (action === 'receiver-create-profile') {
    const name = (document.getElementById('receiver-profile-name')?.value || state.receiverProfileDraft).trim();
    if (!name) { announce('Name the Reception Profile before creating it.'); return; }
    const profile = normalizeReceiverV2Profile({ id: uniqueProfileId(name), name, createdAt: new Date().toISOString(), transmitterIds: [], themes: [], foci: [], topics: [], sourcePreferences: {}, vibeRanges: { participation: [0, 100], stewardship: [0, 100], belonging: [0, 100], legibility: [0, 100] }, strength: 50, time: { preset: 'Right now', start: '', end: '', timezone: 'America/New_York', includeCurrent: true, includeHistory: false } });
    update({ receiverProfiles: [...state.receiverProfiles, profile], activeReceiverProfileId: profile.id, receiverProfileDraft: '', receiverUndo: { profiles: clone(state.receiverProfiles), activeReceiverProfileId: state.activeReceiverProfileId, label: 'Create profile' }, recentReceiverChanges: [{ label: `Created ${name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    announce(`${name} was created and is now active.`);
    return;
  }
  if (action === 'receiver-add-topic') {
    const name = (document.getElementById('receiver-topic-input')?.value || state.receiverTopicDraft).trim();
    if (!name) { announce('Enter a topic first.'); return; }
    if (activeReceiverProfile().topics.some(item => item.toLowerCase() === name.toLowerCase())) { announce(`${name} is already a topic in this profile.`); return; }
    receiverChange(`Added topic ${name}`, active => { active.topics.push(name); }, { receiverTopicDraft: '' });
    return;
  }
  if (action === 'receiver-save-rename') {
    const name = document.getElementById('receiver-rename-input')?.value.trim();
    const id = state.receiverRenameId;
    if (!name || !id) return;
    const profiles = clone(state.receiverProfiles);
    const profile = profiles.find(item => item.id === id);
    const oldName = profile?.name;
    if (!profile) return;
    profile.name = name;
    update({ receiverProfiles: profiles, receiverRenameId: null, receiverUndo: { profiles: clone(state.receiverProfiles), activeReceiverProfileId: state.activeReceiverProfileId, label: 'Rename profile' }, recentReceiverChanges: [{ label: `Renamed ${oldName} to ${name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    return;
  }
  if (action === 'receiver-cancel-rename') { update({ receiverRenameId: null }); return; }
  if (action === 'receiver-cancel-delete') { update({ receiverConfirmDelete: null }); return; }
  if (action === 'receiver-restore-profile') {
    if (!state.deletedReceiverProfile) return;
    const restored = state.deletedReceiverProfile;
    update({ receiverProfiles: [...state.receiverProfiles, restored], deletedReceiverProfile: null, recentReceiverChanges: [{ label: `Restored ${restored.name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    announce(`${restored.name} was restored.`);
    return;
  }
  if (action === 'receiver-duplicate-profile') {
    const source = activeReceiverProfile();
    const copy = { ...clone(source), id: uniqueProfileId(`${source.name} copy`), name: `${source.name} copy`, createdAt: new Date().toISOString() };
    update({ receiverProfiles: [...state.receiverProfiles, copy], activeReceiverProfileId: copy.id, receiverView: 'profiles', receiverUndo: { profiles: clone(state.receiverProfiles), activeReceiverProfileId: state.activeReceiverProfileId, label: 'Duplicate profile' }, recentReceiverChanges: [{ label: `Duplicated ${source.name}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    return;
  }
  if (action === 'receiver-reset-profile') {
    const current = activeReceiverProfile();
    const baseline = normalizeReceiverV2Profile(clone(defaultReceptionProfiles.find(item => item.id === current.id) || { ...defaultReceptionProfiles[0], id: current.id, name: current.name, transmitterIds: [], themes: [], foci: [], topics: [], sourcePreferences: {}, strength: 50 }));
    receiverChange(`Reset ${current.name}`, (active, profiles) => { profiles.splice(profiles.findIndex(item => item.id === active.id), 1, baseline); });
    announce(`${current.name} was reset. Undo is available.`);
    return;
  }
  if (action === 'receiver-undo') {
    if (!state.receiverUndo) return;
    const prior = state.receiverUndo;
    update({ receiverProfiles: clone(prior.profiles), activeReceiverProfileId: prior.activeReceiverProfileId, receiverUndo: null, recentReceiverChanges: [{ label: `Undid: ${prior.label}`, time: 'Just now' }, ...state.recentReceiverChanges] });
    announce(`Undid ${prior.label}.`);
    return;
  }
  if (action === 'receiver-ask-why') { announce('Why: eligible visible Signals are staged by this profile’s relationships, time, Vibes, preferences, and capacity. No private exclusions are revealed.'); return; }
  if (action === 'receiver-review-held') { update({ receiverView: 'transmitters', receiverTransmitterSort: 'Priority' }); return; }

  if (action === 'send-ki') sendToKi();
  if (action === 'open-ki' || action === 'focus-composer') update({}, { focus: '#universal-ki-input' });
  if (action === 'composer-context') update({ composerDraft: draftForCurrentContext('Work with') }, { focus: '#ki-input' });
  if (action === 'selection-to-ki') update({ composerDraft: draftForCurrentContext('Help me work with') }, { focus: '#ki-input' });
  if (action === 'panel-to-ki') update({ openPanel: null, composerDraft: draftForCurrentContext('Help me work with') }, { focus: '#ki-input' });
  if (action === 'inspector-to-ki') update({ inspector: null, composerDraft: 'Explain this record, its authority, and what changed.' }, { focus: '#ki-input' });
  if (action === 'inspect-selection') update({ inspector: state.selectedObject });
  if (action === 'inspect-jeya') update({ inspector: 'h3' });
  if (action === 'inspect-governance') update({ inspector: 'h2' });
  if (action === 'inspect-vault') update({ inspector: 'h4' });
  if (action === 'create-with-ki') update({ openPanel: null, composerDraft: 'I want to create something that ' }, { focus: '#ki-input' });
  if (action === 'save-transmit') {
    state.transmitDraft = document.getElementById('transmit-message')?.value || '';
    persist();
    announce('Transmit draft saved locally. Nothing was sent.');
  }
  if (action === 'review-transmit') {
    state.transmitDraft = document.getElementById('transmit-message')?.value || '';
    persist();
    announce('Draft moved into local review. No invitation, message, or publication was sent.');
  }
  if (action === 'package-begin') announce('Royals & Rogues rehearsal began locally. Play remains inside Field.');
  if (action === 'switch-avatar') announce('Avatar switcher is ready; Moto remains the active Source.');
  if (action === 'edit-avatar') announce('Avatar editing opened as a local interaction boundary. No identity data changed.');
  if (action === 'configure-connection') announce('Connection configuration is staged locally; no account or permission was changed.');
  if (action === 'review-connection') announce('Permission review opened locally; no connection was authorized.');
  if (action === 'composed-service' || action === 'composed-look') update({ selectedObject: 'service-alliance', composerDraft: 'Show me what’s already moving in Service Alliance.' }, { focus: '#ki-input' });
  if (action === 'go-home') { setRoute(null); update({ type: 'composed', openPanel: null, routeLabel: 'Field', activeExpressionId: null, selectedObject: null, inspector: null }, { focus: '#field-stage' }); }
  if (action === 'receiver-v2-dictate') announce('Dictate is placed for the next voice connection; this prototype is not recording.');
  if (action === 'receiver-v2-voice') announce('Voice is placed for a future real-time connection; this prototype is not listening.');
  if (action === 'composed-enter') {
    update({ selectedObject: 'service-alliance' });
    announce('Alice’s invitation is open · nothing committed yet.');
  }
  if (action === 'map-home') selectLayoutType('composed');
  if (action === 'show-build-kiduna') { setRoute(null); update({ type: 'setting', openPanel: null, routeLabel: 'Field', selectedObject: 'build-kiduna' }); }
  if (action === 'show-service-alliance') { setRoute(null); update({ type: 'composed', openPanel: null, routeLabel: 'Field', selectedObject: 'service-alliance' }); }
  if (action === 'reset-layout') {
    localStorage.removeItem(storageKey);
    state = { ...defaults, notifications: clone(initialNotifications), receiverProfiles: clone(defaultReceptionProfiles).map(normalizeReceiverV2Profile) };
    setRoute(null, { replace: true });
    render();
    announce('Local Layout state reset to Composed.');
  }
});

app.addEventListener('input', event => {
  if (event.target.id === 'realm-search') {
    state.receiverRealmQuery = event.target.value;
    persist();
    window.clearTimeout(receiverV2SearchTimer);
    receiverV2SearchTimer = window.setTimeout(() => render({ focus: '#realm-search' }), 120);
    return;
  }
  if (event.target.id === 'topic-search') {
    state.receiverTopicQuery = event.target.value;
    window.clearTimeout(receiverV2SearchTimer);
    receiverV2SearchTimer = window.setTimeout(() => render({ focus: '#topic-search' }), 120);
    return;
  }
  if (event.target.id === 'universal-ki-input') { state.kiDraft = event.target.value; persist(); }
  if (event.target.id === 'ki-revision-input') state.kiRevisionDraft = event.target.value;
  if (event.target.id === 'creator-name') { state.creatorDraftName = event.target.value; persist(); }
  if (event.target.id === 'creator-purpose') { state.creatorDraftPurpose = event.target.value; persist(); }
  if (event.target.id === 'expression-search') { state.expressionQuery = event.target.value; persist(); window.clearTimeout(receiverV2SearchTimer); receiverV2SearchTimer = window.setTimeout(() => render({ focus: '#expression-search' }), 120); return; }
  if (event.target.id === 'inspector-workspace-search') { state.inspectorWorkspaceQuery = event.target.value; persist(); render({ focus: '#inspector-workspace-search' }); return; }
  if (event.target.dataset.sentinelRange) {
    const id = event.target.dataset.sentinelRange; state.sentinelBoundaries = { ...state.sentinelBoundaries, [id]: Number(event.target.value) }; state.sentinelPreset = 'Custom';
    event.target.closest('label')?.querySelector('output')?.replaceChildren(event.target.value); persist(); return;
  }
  if (event.target.id === 'ki-input') state.composerDraft = event.target.value;
  if (event.target.id === 'transmit-message') state.transmitDraft = event.target.value;
  if (event.target.id === 'tx-message') { state.transmitterV2Message = event.target.value; state.transmitterV2Prepared = false; persist(); }
  if (event.target.id === 'tx-payload-name') { state.transmitterV2PayloadName = event.target.value; state.transmitterV2Prepared = false; persist(); }
  if (event.target.id === 'tx-ki-input') state.transmitterV2KiDraft = event.target.value;
  if (event.target.id === 'tx-destination-search') { state.transmitterV2DestinationQuery = event.target.value; persist(); render({ focus: '#tx-destination-search' }); return; }
  if (event.target.id === 'tx-search') {
    state.transmitterV2Query = event.target.value;
    persist();
    window.clearTimeout(receiverV2SearchTimer);
    receiverV2SearchTimer = window.setTimeout(() => render({ focus: '#tx-search' }), 120);
    return;
  }
  if (event.target.id === 'receiver-command') state.receiverCommand = event.target.value;
  if (event.target.id === 'receiver-profile-name') state.receiverProfileDraft = event.target.value;
  if (event.target.id === 'receiver-topic-input') state.receiverTopicDraft = event.target.value;
  if (event.target.id === 'receiver-v2-ki-input') state.receiverV2KiDraft = event.target.value;
  if (event.target.id === 'receiver-v2-search') {
    state.receiverV2Query = event.target.value;
    state.receiverV2Limit = 9;
    persist();
    window.clearTimeout(receiverV2SearchTimer);
    receiverV2SearchTimer = window.setTimeout(() => render({ focus: '#receiver-v2-search' }), 120);
    return;
  }
  const v2Intensity = event.target.dataset.v2Intensity;
  const v2Range = event.target.dataset.v2Range;
  if (v2Intensity || v2Range) {
    if (!state.receiverV2SliderBefore) state.receiverV2SliderBefore = clone(state.receiverProfiles);
    const id = v2Intensity || v2Range;
    const profile = activeReceiverProfile();
    const item = receiverV2Catalog.find(candidate => candidate.id === id);
    profile.receiverV2Tuning[id] = { ...(profile.receiverV2Tuning[id] || { intensity: 34, range: 32, muted: false }) };
    const value = Number(event.target.value);
    if (v2Intensity) profile.receiverV2Tuning[id].intensity = value;
    if (v2Range) profile.receiverV2Tuning[id].range = value;
    const box = event.target.closest('[data-receiver-v2-box]');
    const output = box?.querySelector(v2Intensity ? `[data-v2-intensity-output="${id}"]` : `[data-v2-range-output="${id}"]`);
    const help = box?.querySelector(v2Intensity ? `#v2-intensity-help-${id}` : `#v2-range-help-${id}`);
    output?.replaceChildren(String(value));
    if (help) help.textContent = v2Intensity ? (value === 0 ? 'Minimal eligible reception; not muted' : value >= 75 ? 'More of this exact object' : value >= 40 ? 'Balanced reception' : 'Light reception') : (value === 0 ? 'This object only' : value >= 75 ? 'Wider visibility-safe Field' : value >= 40 ? 'Close relations' : 'Immediate neighbors');
    persist();
    return;
  }
  if (event.target.id === 'receiver-transmitter-search') {
    state.receiverTransmitterQuery = event.target.value;
    persist();
    render({ focus: '#receiver-transmitter-search' });
  }
  if (event.target.id === 'receiver-strength') {
    const profile = activeReceiverProfile();
    profile.strength = Number(event.target.value);
    event.target.closest('label')?.querySelector('output')?.replaceChildren(`${profile.strength}%`);
    event.target.closest('.receiver-card')?.querySelector('.receiver-preview-copy')?.replaceChildren(`${profile.strength}% — a custom volume between Trickle and Firehose.`);
    persist();
  }
  const vibeMin = event.target.dataset.vibeMin;
  const vibeMax = event.target.dataset.vibeMax;
  if (vibeMin || vibeMax) {
    const id = vibeMin || vibeMax;
    const profile = activeReceiverProfile();
    const range = [...(profile.vibeRanges[id] || [0, 100])];
    if (vibeMin) range[0] = Math.min(Number(event.target.value), range[1]);
    if (vibeMax) range[1] = Math.max(Number(event.target.value), range[0]);
    profile.vibeRanges[id] = range;
    const card = event.target.closest('.vibe-card');
    card?.style.setProperty('--vibe-low', `${range[0]}%`);
    card?.style.setProperty('--vibe-high', `${range[1]}%`);
    card?.querySelector('header strong')?.replaceChildren(`${range[0]}–${range[1]}`);
    persist();
  }
  if (event.target.id === 'history-search') {
    state.historyQuery = event.target.value;
    persist();
    render({ focus: '#history-search' });
  }
});

app.addEventListener('change', event => {
  if (event.target.id === 'source-selector-top') {
    const source = sourceOptions.find(item => item.id === event.target.value);
    if (!source?.allowed) {
      event.target.value = state.selectedSource;
      announce('That Source view requires an explicit Permission. No work or counts were revealed.');
      return;
    }
    update({ selectedSource: source.id, fieldWhyIds: [], fieldOpenClusters: [] });
    announce(`${source.name}’s permitted Source-relative Field is now selected. This prototype Permission grants viewing only.`);
    return;
  }
  if (event.target.id === 'realm-sort') {
    const sort = event.target.value;
    update({ receiverRealmSort: sort, receiverSortDirection: receiverSortDefaults[sort] || 'desc' });
    return;
  }
  if (event.target.id === 'field-realm-type') { update({ fieldRealmType: event.target.value }); return; }
  if (event.target.id === 'field-realm') { update({ fieldRealm: event.target.value }); return; }
  if (event.target.id === 'field-project') { update({ fieldProject: event.target.value }); return; }
  if (event.target.id === 'field-topic') { update({ fieldTopic: event.target.value }); return; }
  if (event.target.id === 'field-activity') { update({ fieldActivity: event.target.value }); return; }
  if (event.target.id === 'field-force') {
    const before = composeField(state).eligible.map(item => item.id).sort().join('|');
    const afterState = { ...state, fieldForce: event.target.value };
    const after = composeField(afterState).eligible.map(item => item.id).sort().join('|');
    update({ fieldForce: event.target.value, fieldWhyIds: [] });
    announce(`${event.target.value} recomposed ${composeField(afterState).eligible.length} eligible items. ${before === after ? 'The candidate set stayed the same.' : 'The visible filters changed the candidate set.'}`);
    return;
  }
  if (event.target.dataset.kiActionCheck) {
    const id = event.target.dataset.kiActionCheck;
    update({ kiSelectedActions: event.target.checked ? [...new Set([...state.kiSelectedActions, id])] : state.kiSelectedActions.filter(item => item !== id) }); return;
  }
  if (event.target.id === 'expression-layout') { update({ expressionLayout: event.target.value }); return; }
  if (event.target.id === 'expression-realm') { update({ expressionRealm: event.target.value }); return; }
  if (event.target.id === 'expression-source') { update({ expressionSource: event.target.value }); return; }
  if (event.target.id === 'expression-seed') { update({ expressionSeed: event.target.value }); return; }
  if (event.target.id === 'expression-sort') { update({ expressionSort: event.target.value }); return; }
  if (event.target.id === 'metrics-scope') { update({ metricsScope: event.target.value }); return; }
  if (event.target.id === 'tx-sort') { update({ transmitterV2Sort: event.target.value }); return; }
  if (event.target.id === 'tx-message-privacy') { update({ transmitterV2MessagePrivacy: event.target.value, transmitterV2Prepared: false }); return; }
  if (event.target.id === 'tx-sender') { update({ transmitterV2SenderId: event.target.value, transmitterV2Prepared: false }); return; }
  if (event.target.id === 'default-type') update({ defaultType: event.target.value });
  if (event.target.id === 'calm-motion') update({ calmMotion: event.target.checked });
  if (event.target.id === 'ambient-messages') update({ ambientMessages: event.target.checked });
  if (event.target.id === 'receiver-profile-select') {
    const profile = state.receiverProfiles.find(item => item.id === event.target.value);
    if (profile) { update({ activeReceiverProfileId: profile.id, receiverUndo: null, receiverDetailId: null }); announce(`${profile.name} is now active.`); }
  }
  if (event.target.id === 'receiver-v2-profile-select') {
    const profile = state.receiverProfiles.find(item => item.id === event.target.value);
    if (profile) { update({ activeReceiverProfileId: profile.id, receiverUndo: null, receiverV2InspectorId: null, receiverV2ConfirmRemove: null }); announce(`${profile.name} is now active.`); }
    return;
  }
  if (event.target.id === 'receiver-v2-sort') { update({ receiverV2Sort: event.target.value, receiverV2Limit: 9 }); return; }
  if (event.target.dataset.v2Intensity || event.target.dataset.v2Range) {
    const id = event.target.dataset.v2Intensity || event.target.dataset.v2Range;
    const item = receiverV2Catalog.find(candidate => candidate.id === id);
    const before = state.receiverV2SliderBefore || clone(state.receiverProfiles);
    const label = `${item?.title || 'Receiver object'} ${event.target.dataset.v2Intensity ? 'Intensity' : 'Range'} set to ${event.target.value}`;
    update({ receiverProfiles: clone(state.receiverProfiles), receiverUndo: { profiles: before, activeReceiverProfileId: state.activeReceiverProfileId, label }, receiverV2SliderBefore: null, recentReceiverChanges: [{ label, time: 'Just now' }, ...(state.recentReceiverChanges || [])].slice(0, 12) });
    return;
  }
  if (event.target.id === 'receiver-transmitter-filter') update({ receiverTransmitterFilter: event.target.value });
  if (event.target.id === 'receiver-transmitter-sort') update({ receiverTransmitterSort: event.target.value });
  if (event.target.dataset.receiverStage) {
    const id = event.target.dataset.receiverStage;
    const item = transmitterCatalog.find(candidate => candidate.id === id);
    receiverChange(`${item?.name || 'Transmitter'}: ${event.target.value}`, active => {
      active.sourcePreferences[id] = { ...(active.sourcePreferences[id] || { order: 0, interruption: 'Ambient only' }), stage: event.target.value };
      if (active.receiverV2Tuning[id]) active.receiverV2Tuning[id].muted = event.target.value === 'Mute';
    });
  }
  if (event.target.dataset.receiverInterruption) {
    const id = event.target.dataset.receiverInterruption;
    const item = transmitterCatalog.find(candidate => candidate.id === id);
    receiverChange(`${item?.name || 'Transmitter'} interruption: ${event.target.value}`, active => { active.sourcePreferences[id] = { ...(active.sourcePreferences[id] || { stage: 'Normal', order: 0 }), interruption: event.target.value }; });
  }
  if (event.target.dataset.receiverOrder) {
    const id = event.target.dataset.receiverOrder;
    const value = Math.max(1, Number(event.target.value) || 1);
    receiverChange('Changed Bring closer order', active => { active.sourcePreferences[id] = { ...(active.sourcePreferences[id] || { stage: 'Bring closer', interruption: 'Ambient only' }), order: value }; });
  }
  if (event.target.id === 'receiver-strength') {
    const value = Number(event.target.value);
    const profiles = clone(state.receiverProfiles);
    const active = profiles.find(item => item.id === state.activeReceiverProfileId);
    active.strength = value;
    update({ receiverProfiles: profiles, receiverUndo: null, recentReceiverChanges: [{ label: `Signal Strength set to ${value}%`, time: 'Just now' }, ...state.recentReceiverChanges] });
  }
  if (event.target.dataset.vibeMin || event.target.dataset.vibeMax) {
    const id = event.target.dataset.vibeMin || event.target.dataset.vibeMax;
    const profiles = clone(state.receiverProfiles);
    const active = profiles.find(item => item.id === state.activeReceiverProfileId);
    update({ receiverProfiles: profiles, receiverUndo: null, recentReceiverChanges: [{ label: `Adjusted ${id} tolerance`, time: 'Just now' }, ...state.recentReceiverChanges] });
  }
  if (event.target.id === 'receiver-timezone') receiverChange(`Timezone set to ${event.target.value}`, active => { active.time.timezone = event.target.value; });
  if (event.target.id === 'receiver-time-start') receiverChange(`Custom range starts ${event.target.value}`, active => { active.time.start = event.target.value; });
  if (event.target.id === 'receiver-time-end') receiverChange(`Custom range ends ${event.target.value}`, active => { active.time.end = event.target.value; });
  if (event.target.id === 'receiver-include-current') receiverChange(`${event.target.checked ? 'Included' : 'Excluded'} current Signals`, active => { active.time.includeCurrent = event.target.checked; });
  if (event.target.id === 'receiver-include-history') receiverChange(`${event.target.checked ? 'Included' : 'Excluded'} history`, active => { active.time.includeHistory = event.target.checked; });
});

app.addEventListener('keydown', event => {
  const purposefulDialog = document.querySelector('.purposeful-dialog');
  if (purposefulDialog && event.key === 'Tab') {
    const focusable = [...purposefulDialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(element => !element.hidden && element.offsetParent !== null);
    if (!focusable.length) { event.preventDefault(); purposefulDialog.focus(); return; }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === purposefulDialog)) { event.preventDefault(); last.focus(); return; }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); return; }
  }
  if (event.key === 'Escape') {
    if (state.receiverTopicOpen) {
      setRoute('receive', { replace: true });
      update({ receiverTopicOpen: false, receiverTopicDraft: null, receiverTopicQuery: '' }, { focus: purposefulReturnSelector || '[data-action="open-topic-tuner"]' });
      return;
    }
    if (state.realmDetailId) {
      setRoute('receive', { replace: true });
      update({ realmDetailId: null }, { focus: purposefulReturnSelector || '[data-realm-details]' });
      return;
    }
    if (state.fieldDetailId) { update({ fieldDetailId: null }, { focus: purposefulReturnSelector || '[data-work-details]' }); return; }
    if (state.kiPlusOpen) { update({ kiPlusOpen: false }, { focus: '.ki-plus-button' }); return; }
    if (state.kiProposal) update({ kiProposal: null, kiSelectedActions: [], kiRevisionMode: false }, { focus: '#universal-ki-input' });
    else if (state.transmitterV2ReviewOpen) update({ transmitterV2ReviewOpen: false }, { focus: '.tx-review-button' });
    else if (state.transmitterV2InspectorId || state.transmitterV2DestinationInspectorId) update({ transmitterV2InspectorId: null, transmitterV2DestinationInspectorId: null }, { focus: state.transmitterV2InspectorId ? `[data-tx-inspect="${state.transmitterV2InspectorId}"]` : `[data-tx-inspect-destination="${state.transmitterV2DestinationInspectorId}"]` });
    else if (state.receiverV2ProfileManagerOpen) update({ receiverV2ProfileManagerOpen: false, receiverConfirmDelete: null, receiverRenameId: null }, { focus: '.receiver-v2-manage' });
    else if (state.receiverV2InspectorId) {
      const id = state.receiverV2InspectorId;
      update({ receiverV2InspectorId: null }, { focus: `[data-v2-inspect="${id}"]` });
    }
    else if (state.expressionInspectId) update({ expressionInspectId: null }, { focus: '[data-expression-inspect]' });
    else if (state.inspector) update({ inspector: null });
    else if (state.openPanel) {
      const wasReceiver = state.openPanel === 'receive';
      const wasTransmitter = state.openPanel === 'transmit';
      setRoute(null);
      update({ openPanel: null, routeLabel: 'Field', receiverProposal: null, receiverV2Proposal: null, receiverV2ConfirmRemove: null, receiverTopicOpen: false, realmDetailId: null, transmitterV2Proposal: null }, { focus: wasReceiver ? '[data-panel="receive"]' : wasTransmitter ? '[data-panel="transmit"]' : '[data-action="go-field"]', restoreFieldScroll: wasReceiver ? state.receiverReturnScroll : wasTransmitter ? state.transmitterReturnScroll : undefined });
    }
    else if (state.selectedObject) update({ selectedObject: null });
    return;
  }
  if (event.target.id === 'ki-input' && event.key === 'Enter') {
    event.preventDefault();
    sendToKi(event.target.value);
    return;
  }
  if (event.target.id === 'receiver-command' && event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    update({ receiverCommand: event.target.value, receiverProposal: interpretReceiverCommand(event.target.value) });
    return;
  }
  if (event.target.id === 'receiver-v2-ki-input' && event.key === 'Enter') {
    event.preventDefault();
    update({ receiverV2KiDraft: event.target.value, receiverV2Proposal: interpretReceiverV2Command(event.target.value) });
    return;
  }
  if (event.target.id === 'tx-ki-input' && event.key === 'Enter') {
    event.preventDefault();
    update({ transmitterV2KiDraft: event.target.value, transmitterV2Proposal: interpretTransmitterCommand(event.target.value) });
    return;
  }
  if (event.target.id === 'universal-ki-input' && event.key === 'Enter') {
    event.preventDefault(); const proposal = proposeKiActions(state); update({ kiProposal: proposal, kiSelectedActions: proposal.actions.map(item => item.id), kiRevisionMode: false }); return;
  }
  if ((event.target.id === 'receiver-profile-name' || event.target.id === 'receiver-topic-input') && event.key === 'Enter') {
    event.preventDefault();
    document.querySelector(`[data-action="${event.target.id === 'receiver-profile-name' ? 'receiver-create-profile' : 'receiver-add-topic'}"]`)?.click();
    return;
  }
  const object = event.target.closest?.('[data-object]');
  if (object && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    update({ selectedObject: state.selectedObject === object.dataset.object ? null : object.dataset.object });
  }
});

window.__layoutKit = {
  getState: () => ({ ...state }),
  layoutTypes: layoutTypes.map(type => type.id),
  composeField: () => composeField(state),
  version: '0.9.0'
};

function applyLocation() {
  const panel = routeFromLocation();
  update({ openPanel: panel, routeLabel: routeLabels[panel || 'field'], activeExpressionId: null, kiProposal: null, receiverTopicOpen: false, receiverTopicDraft: null, realmDetailId: null, fieldDetailId: null, ...fragmentPatch(panel) }, { scrollHash: true });
}

window.addEventListener('popstate', applyLocation);
window.addEventListener('hashchange', applyLocation);

if (location.pathname === '/' || !location.pathname.split('/').filter(Boolean).length) setRoute(state.openPanel, { replace: true });
render();

import { defaultReceptionProfiles, initialNotifications, instruments, layoutTypes, railItems, transmitterCatalog } from './data.js';
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
  statusInstrument,
  toast
} from './components.js';
import { icon } from './icons.js';

const storageKey = 'kiduna-layout-kit-v0.2';
const clone = value => JSON.parse(JSON.stringify(value));

const defaults = {
  type: 'composed',
  defaultType: 'composed',
  openPanel: null,
  selectedObject: null,
  inspector: null,
  avatarState: 'open',
  notifications: initialNotifications,
  receiverProfiles: clone(defaultReceptionProfiles),
  activeReceiverProfileId: 'working-horizon',
  receiverView: 'summary',
  receiverCommand: '',
  receiverProposal: null,
  receiverProfileDraft: '',
  receiverTopicDraft: '',
  receiverTransmitterQuery: '',
  receiverTransmitterFilter: 'All',
  receiverTransmitterSort: 'Name',
  receiverDetailId: null,
  receiverConfirmDelete: null,
  receiverRenameId: null,
  deletedReceiverProfile: null,
  receiverUndo: null,
  recentReceiverChanges: [],
  pulseFilter: 'All signals',
  connectTab: 'People',
  signalStrength: 72,
  historyQuery: '',
  historyFilter: 'All',
  composerDraft: '',
  transmitDraft: '',
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
    next.receiverProfiles = next.receiverProfiles.map(profile => ({
      ...clone(defaultReceptionProfiles.find(item => item.id === profile.id) || defaultReceptionProfiles[0]),
      ...profile,
      sourcePreferences: { ...(profile.sourcePreferences || {}) },
      vibeRanges: { ...(profile.vibeRanges || {}) },
      time: { ...(profile.time || {}) }
    }));
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
const app = document.getElementById('app');

function persistentState() {
  const { toastMessage, composerDraft, receiverProposal, receiverCommand, receiverConfirmDelete, receiverRenameId, receiverUndo, ...saved } = state;
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
  return `<header class="titlebar">
    <div class="window-controls" aria-label="Window controls"><i></i><i></i><i></i><span>Kiduna</span></div>
    <div class="title-identity"><img src="assets/design-system/assets/kiduna-mark.svg" alt=""><span>Layout Kit</span><i>/</i><strong>Moto’s Field</strong><i>/</i><b>${layoutType}</b></div>
    <div class="title-state"><span><i></i>Development</span><button type="button" data-action="open-ki">Ki is present</button></div>
  </header>`;
}

function toolRail() {
  return `<nav class="toolrail" aria-label="Layout Kit tools">
    <button class="vault-entry ${state.openPanel === 'vault' ? 'active' : ''}" type="button" data-panel="vault" aria-label="Open Moto’s Vault">
      <img src="assets/design-system/assets/kiduna-mark.svg" alt="Sun / Moon — Moto’s Vault"><span>Vault</span>
    </button>
    <div class="rail-divider" aria-hidden="true"></div>
    <div class="rail-primary">${railItems.map(item => railAction(item, state.openPanel === item.id)).join('')}</div>
    <div class="rail-spacer"></div>
    <button class="rail-action ${state.openPanel === 'settings' ? 'active' : ''}" type="button" data-panel="settings" aria-label="Settings">${icon('settings', 21)}<span class="rail-tooltip"><b>Settings</b><small>Preferences, teams, privacy, connections</small></span></button>
    <button class="avatar-entry ${state.openPanel === 'avatar' ? 'active' : ''}" type="button" data-panel="avatar" aria-label="Active Avatar — Moto, ${state.avatarState}">
      <img src="assets/avatars/moto-${state.avatarState}.png" alt="Moto"><i></i><span class="rail-tooltip"><b>Moto</b><small>Active Avatar · ${state.avatarState}</small></span>
    </button>
  </nav>`;
}

function topInstruments() {
  return `<header class="instrument-bar"><div class="field-orientation"><span>Layout</span><strong>Moto’s Field</strong></div><nav aria-label="Field instruments">${instruments.map(item => statusInstrument(item, state)).join('')}</nav><div class="system-presence"><span><i></i>Ki</span><small>context continuous</small></div></header>`;
}

function render(options = {}) {
  document.documentElement.classList.toggle('calm-motion', state.calmMotion);
  document.documentElement.dataset.currentLayoutType = state.type;
  app.innerHTML = `<div class="desktop-app">
    ${titlebar()}
    <div class="app-body">
      ${toolRail()}
      <section class="workspace" aria-label="Moto’s Layout">
        ${topInstruments()}
        <section class="field-shell" id="field-stage" tabindex="-1">
          ${fieldStage(state)}
          ${state.ambientMessages && state.type !== 'composed' ? notificationStack(state.notifications) : ''}
          ${selectionBar(state)}
          ${kiComposer(state)}
          ${panelFor(state)}
          ${inspector(state)}
          ${toast(state.toastMessage)}
        </section>
      </section>
    </div>
  </div>`;

  if (options.focus) {
    requestAnimationFrame(() => {
      const target = document.querySelector(options.focus);
      target?.focus();
      if (target && 'selectionStart' in target) target.selectionStart = target.selectionEnd = target.value.length;
    });
  }
}

function selectLayoutType(type) {
  if (!layoutTypes.some(item => item.id === type)) return;
  update({ type, selectedObject: null, inspector: null, openPanel: null });
  announce(`${layoutTypes.find(item => item.id === type).name} is now arranging the Field.`);
}

function openPanel(id) {
  const closing = state.openPanel === id;
  update({ openPanel: closing ? null : id }, { focus: !closing && id === 'receive' ? '.receiver-panel [data-close-panel]' : undefined });
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
    update({ openPanel: null, receiverProposal: null }, { focus: wasReceiver ? '[data-panel="receive"]' : undefined });
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
        }
        if (operation.type === 'remove') {
          active.transmitterIds = active.transmitterIds.filter(id => id !== operation.id);
          delete active.sourcePreferences[operation.id];
        }
        if (operation.type === 'stage') {
          if (!active.transmitterIds.includes(operation.id)) active.transmitterIds.push(operation.id);
          active.sourcePreferences[operation.id] = { ...(active.sourcePreferences[operation.id] || { order: 0, interruption: 'Ambient only' }), stage: operation.value };
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
    const profile = { id: uniqueProfileId(name), name, createdAt: new Date().toISOString(), transmitterIds: [], themes: [], foci: [], topics: [], sourcePreferences: {}, vibeRanges: { participation: [0, 100], stewardship: [0, 100], belonging: [0, 100], legibility: [0, 100] }, strength: 50, time: { preset: 'Right now', start: '', end: '', timezone: 'America/New_York', includeCurrent: true, includeHistory: false } };
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
    const baseline = clone(defaultReceptionProfiles.find(item => item.id === current.id) || { ...defaultReceptionProfiles[0], id: current.id, name: current.name, transmitterIds: [], themes: [], foci: [], topics: [], sourcePreferences: {}, strength: 50 });
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
  if (action === 'open-ki' || action === 'focus-composer') update({ openPanel: null }, { focus: '#ki-input' });
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
  if (action === 'composed-enter') {
    update({ selectedObject: 'service-alliance' });
    announce('Alice’s invitation is open · nothing committed yet.');
  }
  if (action === 'map-home') selectLayoutType('composed');
  if (action === 'show-build-kiduna') update({ type: 'setting', openPanel: null, selectedObject: 'build-kiduna' });
  if (action === 'show-service-alliance') update({ type: 'composed', openPanel: null, selectedObject: 'service-alliance' });
  if (action === 'reset-layout') {
    localStorage.removeItem(storageKey);
    state = { ...defaults, notifications: clone(initialNotifications), receiverProfiles: clone(defaultReceptionProfiles) };
    render();
    announce('Local Layout state reset to Composed.');
  }
});

app.addEventListener('input', event => {
  if (event.target.id === 'ki-input') state.composerDraft = event.target.value;
  if (event.target.id === 'transmit-message') state.transmitDraft = event.target.value;
  if (event.target.id === 'receiver-command') state.receiverCommand = event.target.value;
  if (event.target.id === 'receiver-profile-name') state.receiverProfileDraft = event.target.value;
  if (event.target.id === 'receiver-topic-input') state.receiverTopicDraft = event.target.value;
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
  if (event.target.id === 'default-type') update({ defaultType: event.target.value });
  if (event.target.id === 'calm-motion') update({ calmMotion: event.target.checked });
  if (event.target.id === 'ambient-messages') update({ ambientMessages: event.target.checked });
  if (event.target.id === 'receiver-profile-select') {
    const profile = state.receiverProfiles.find(item => item.id === event.target.value);
    if (profile) { update({ activeReceiverProfileId: profile.id, receiverUndo: null, receiverDetailId: null }); announce(`${profile.name} is now active.`); }
  }
  if (event.target.id === 'receiver-transmitter-filter') update({ receiverTransmitterFilter: event.target.value });
  if (event.target.id === 'receiver-transmitter-sort') update({ receiverTransmitterSort: event.target.value });
  if (event.target.dataset.receiverStage) {
    const id = event.target.dataset.receiverStage;
    const item = transmitterCatalog.find(candidate => candidate.id === id);
    receiverChange(`${item?.name || 'Transmitter'}: ${event.target.value}`, active => { active.sourcePreferences[id] = { ...(active.sourcePreferences[id] || { order: 0, interruption: 'Ambient only' }), stage: event.target.value }; });
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
  if (event.key === 'Escape') {
    if (state.inspector) update({ inspector: null });
    else if (state.openPanel) update({ openPanel: null, receiverProposal: null }, { focus: state.openPanel === 'receive' ? '[data-panel="receive"]' : undefined });
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
  version: '0.3.0'
};

render();

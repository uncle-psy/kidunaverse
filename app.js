import { initialNotifications, instruments, layoutTypes, railItems } from './data.js';
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

const defaults = {
  type: 'composed',
  defaultType: 'composed',
  openPanel: null,
  selectedObject: null,
  inspector: null,
  avatarState: 'open',
  notifications: initialNotifications,
  receiveTopics: ['Kiduna', 'AI agents', 'Community power'],
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
  const { toastMessage, composerDraft, ...saved } = state;
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
  update({ openPanel: state.openPanel === id ? null : id });
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

  const topic = event.target.closest('[data-receive-topic]');
  if (topic) {
    const name = topic.dataset.receiveTopic;
    const receiveTopics = state.receiveTopics.includes(name) ? state.receiveTopics.filter(item => item !== name) : [...state.receiveTopics, name];
    update({ receiveTopics });
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
    update({ openPanel: null });
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
    state = { ...defaults, notifications: initialNotifications };
    render();
    announce('Local Layout state reset to Composed.');
  }
});

app.addEventListener('input', event => {
  if (event.target.id === 'ki-input') state.composerDraft = event.target.value;
  if (event.target.id === 'transmit-message') state.transmitDraft = event.target.value;
  if (event.target.id === 'signal-strength') {
    state.signalStrength = Number(event.target.value);
    event.target.closest('label')?.querySelector('output')?.replaceChildren(`${state.signalStrength}%`);
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
});

app.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (state.inspector) update({ inspector: null });
    else if (state.openPanel) update({ openPanel: null });
    else if (state.selectedObject) update({ selectedObject: null });
    return;
  }
  if (event.target.id === 'ki-input' && event.key === 'Enter') {
    event.preventDefault();
    sendToKi(event.target.value);
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
  version: '0.2.1'
};

render();

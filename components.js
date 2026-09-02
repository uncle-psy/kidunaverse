import { coherenceDimensions, fieldObjects, historyEntries, layoutTypes, packages, receiverThemes, transmitterCatalog } from './data.js';
import { icon } from './icons.js';

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[character]));

export function railAction(item, active) {
  return `<button class="rail-action ${active ? 'active' : ''}" type="button" data-panel="${item.id}" aria-label="${item.label}" aria-pressed="${active}">
    <span class="rail-role-icon role-icon-${item.roleIcon}" aria-hidden="true"></span>
    <span class="rail-tooltip"><b>${item.label}</b></span>
  </button>`;
}

export function statusInstrument(item, state) {
  const status = item.id === 'type' ? layoutTypes.find(type => type.id === state.type)?.name : item.status;
  return `<button class="instrument ${state.openPanel === item.id ? 'active' : ''} ${item.attention ? 'needs-attention' : ''}" type="button" data-panel="${item.id}" aria-expanded="${state.openPanel === item.id}">
    <span>${item.label}</span><strong>${status}</strong>${item.attention ? '<i aria-label="Attention required">2</i>' : ''}
  </button>`;
}

function composedWorld(objects, selectedObject) {
  const selected = id => selectedObject === id ? 'selected' : '';
  return `<div class="composed-world mode-world" aria-label="Composed Layout Type — Moto enters Alice’s Field">
    <svg class="composed-backdrop" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="composedFieldGlow" cx="50%" cy="42%" r="62%"><stop stop-color="#5E3F94" stop-opacity=".23"/><stop offset=".55" stop-color="#1c1429" stop-opacity=".14"/><stop offset="1" stop-color="#090512" stop-opacity="0"/></radialGradient>
        <linearGradient id="composedPath" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#A98BD6" stop-opacity=".18"/><stop offset=".5" stop-color="#EAAA00" stop-opacity=".58"/><stop offset="1" stop-color="#03CCD9" stop-opacity=".22"/></linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#composedFieldGlow)"/>
      <ellipse cx="600" cy="564" rx="512" ry="208" fill="none" stroke="#A98BD6" stroke-opacity=".09"/>
      <ellipse cx="600" cy="564" rx="372" ry="145" fill="none" stroke="#A98BD6" stroke-opacity=".07" stroke-dasharray="4 10"/>
      <path d="M90 568 Q245 490 392 530 T705 520 T1110 568" fill="none" stroke="#FFF6D5" stroke-opacity=".08"/>
      <path class="composed-connection" d="M268 367 C342 344 358 282 430 270"/>
      <path class="composed-connection" d="M770 272 C845 302 852 365 924 383"/>
      <path class="composed-connection secondary" d="M270 448 C405 500 776 505 930 458"/>
      <circle cx="268" cy="367" r="4" fill="#A98BD6" fill-opacity=".58"/>
      <circle cx="430" cy="270" r="4" fill="#EAAA00" fill-opacity=".72"/>
      <circle cx="770" cy="272" r="4" fill="#EAAA00" fill-opacity=".72"/>
      <circle cx="924" cy="383" r="4" fill="#03CCD9" fill-opacity=".58"/>
      <circle cx="104" cy="166" r="2" fill="#FFF6D5" fill-opacity=".5"/>
      <circle cx="1097" cy="139" r="2" fill="#EAAA00" fill-opacity=".48"/>
      <circle cx="1028" cy="545" r="2" fill="#FFF6D5" fill-opacity=".36"/>
      <circle cx="214" cy="530" r="2" fill="#EAAA00" fill-opacity=".4"/>
    </svg>

    <div class="composed-orientation"><span>Field Canvas</span><h2>Anything can enter here.</h2><p>Alice has placed three beginnings in Moto’s Field.</p></div>
    <div class="composed-context"><i></i>Invitation context · Alice → Moto</div>

    <article class="composed-card composed-alliance ${selected('service-alliance')}" tabindex="0" role="button" aria-pressed="${selectedObject === 'service-alliance'}" data-object="service-alliance" data-ki-address="field:service-alliance">
      <div class="composed-sigil"><img src="assets/sigils/alliance.png" alt="Alliance Sigil — centers held together"></div>
      <span class="composed-kicker sky"><i></i>Already in motion</span>
      <h3>Service Alliance</h3>
      <p>People are shaping a welcome path so new members find a real place to contribute.</p>
      <div class="composed-motion"><i></i>Conversation active now</div>
      <button class="secondary-button" type="button" data-action="composed-service">See what’s moving</button>
    </article>

    <article class="composed-card composed-invitation ${selected('alice-invitation')}" tabindex="0" role="button" aria-pressed="${selectedObject === 'alice-invitation'}" data-object="alice-invitation" data-ki-address="field:alice-invitation">
      <div class="composed-invitation-head">
        <div class="composed-sigil"><img src="assets/sigils/invitation.png" alt="Invitation Sigil — something given with trust"></div>
        <div><span class="composed-kicker gold">Personal invitation · from Alice</span><h2>There’s a place for the way you work.</h2><p>Alice has opened a way into Service Alliance—not a blank account, but living work you can see before choosing where to stand.</p></div>
      </div>
      <div class="composed-alice-note"><span class="composed-alice">A</span><div><strong>Alice · to Moto</strong><p>“After the coalition meeting, I kept thinking about how you fed the room and made space before asking it to decide. We’re building the welcome path now. I’d like you in the room.”</p></div></div>
      <div class="composed-actions"><button class="primary-button" type="button" data-action="composed-enter">Step into the Field</button><button class="secondary-button" type="button" data-action="composed-look">Look around first</button><button class="composed-text-button" type="button" data-fill-draft="Alice, what made you think of me for this?">Ask Alice</button></div>
    </article>

    <article class="composed-card composed-contribution ${selected('place-to-contribute')}" tabindex="0" role="button" aria-pressed="${selectedObject === 'place-to-contribute'}" data-object="place-to-contribute" data-ki-address="field:place-to-contribute">
      <div class="composed-sigil"><img src="assets/sigils/organizer.png" alt="Organizer Sigil — gather people into power"></div>
      <span class="composed-kicker gold">A thread Alice pointed to</span>
      <h3>A place to contribute</h3>
      <p>Help someone joining after you find the useful edge of their power.</p>
      <div class="composed-choices">
        <button type="button" data-fill-draft="I want to help someone new find their place."><span>Welcome someone new</span><b>→</b></button>
        <button type="button" data-fill-draft="Show me the conversation that needs a host."><span>Host a conversation</span><b>→</b></button>
        <button type="button" data-fill-draft="Where are people getting stuck right now?"><span>Find where people are stuck</span><b>→</b></button>
      </div>
    </article>

    <div class="mode-caption"><span>Composed</span><strong>Connected WIMP interface</strong><small>Windows · icons · menus · pointer · Development</small></div>
  </div>`;
}

function fieldObject(object, selected) {
  return `<article class="field-object object-${object.accent} ${selected ? 'selected' : ''}" style="--x:${object.x}%;--y:${object.y}%" tabindex="0" role="button" aria-pressed="${selected}" data-object="${object.id}" data-ki-address="field:${object.id}">
    <span class="object-orbit" aria-hidden="true"></span>
    <span class="object-kicker">${object.eyebrow}</span>
    <h3>${object.title}</h3>
    <p>${object.body}</p>
    <small>${object.type} · ${object.meta}</small>
  </article>`;
}

function settingWorld(objects, selectedObject) {
  return `<div class="setting-world mode-world" aria-label="Setting Layout Type — Moto’s working environment">
    <svg class="world-grid" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="groundFade" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5E3F94" stop-opacity=".16"/><stop offset="1" stop-color="#03CCD9" stop-opacity=".035"/></linearGradient></defs>
      <path d="M80 505 600 205l520 300-520 300Z" fill="url(#groundFade)" stroke="#A98BD6" stroke-opacity=".16"/>
      <path d="m200 505 400-230 400 230-400 230Z" fill="none" stroke="#A98BD6" stroke-opacity=".12"/>
      <path d="M600 205v600M80 505h1040" stroke="#A98BD6" stroke-opacity=".08"/>
      <path d="m300 378 300 174 300-174M300 632l300-174 300 174" fill="none" stroke="#A98BD6" stroke-opacity=".07"/>
    </svg>
    <div class="setting-structure structure-left" aria-hidden="true"><i></i><b></b></div>
    <div class="setting-structure structure-right" aria-hidden="true"><i></i><b></b></div>
    <div class="setting-beacon" aria-hidden="true"><i></i><b></b><span></span></div>
    ${objects.map(object => fieldObject(object, selectedObject === object.id)).join('')}
    <div class="mode-caption"><span>Setting</span><strong>Moto’s working room</strong><small>2.5D · Development · private</small></div>
  </div>`;
}

function pulseWorld(objects, state) {
  const filteredObjects = objects.filter(object => {
    if (state.pulseFilter === 'People') return object.type === 'Person';
    if (state.pulseFilter === 'Decisions') return ['Question', 'Opportunity'].includes(object.type);
    if (state.pulseFilter === 'Resources') return ['Resource', 'Record'].includes(object.type);
    return true;
  });
  const filters = ['All signals', 'People', 'Decisions', 'Resources'];
  return `<div class="pulse-world mode-world" aria-label="Pulse Layout Type — spatial information field">
    <div class="pulse-radar" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
    <div class="pulse-filters" role="group" aria-label="Pulse filters">${filters.map(filter => `<button class="chip ${state.pulseFilter === filter ? 'active' : ''}" type="button" data-pulse-filter="${filter}">${filter}</button>`).join('')}</div>
    ${filteredObjects.map(object => fieldObject(object, state.selectedObject === object.id)).join('')}
    <div class="mode-caption"><span>Pulse</span><strong>What has gravity now</strong><small>11 signals · 3 near · tuned for Moto</small></div>
  </div>`;
}

function graphWorld(objects, selectedObject) {
  const lines = [[48,42,23,26],[48,42,73,24],[48,42,77,65],[48,42,22,67],[23,26,22,67],[73,24,77,65]];
  return `<div class="graph-world mode-world" aria-label="Graph Layout Type — Build Kiduna relationships">
    <svg class="graph-lines" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">${lines.map(line => `<path d="M${line[0] * 10} ${line[1] * 7} C${(line[0] * 10 + line[2] * 10) / 2} ${line[1] * 7}, ${(line[0] * 10 + line[2] * 10) / 2} ${line[3] * 7}, ${line[2] * 10} ${line[3] * 7}"/>`).join('')}</svg>
    <div class="graph-legend"><span><i class="dot-gold"></i>Purpose</span><span><i class="dot-sky"></i>Activity</span><span><i class="dot-mint"></i>Exchange</span></div>
    ${objects.map(object => fieldObject(object, selectedObject === object.id)).join('')}
    <div class="mode-caption"><span>Graph</span><strong>Build Kiduna</strong><small>5 visible nodes · 6 typed relationships</small></div>
  </div>`;
}

function theaterWorld(state) {
  const launched = packages.find(item => item.id === state.launchedPackage);
  return `<div class="theater-world mode-world" aria-label="Theater Layout Type — focused stage">
    <div class="theater-halo" aria-hidden="true"></div>
    ${launched?.image ? `<img class="theater-sigil" src="${launched.image}" alt="${launched.title} Sigil">` : `<div class="theater-ki">${icon('ki', 46)}</div>`}
    <span class="theater-kicker">${launched ? 'Package in Rehearsal' : 'Focused with Ki'}</span>
    <h2>${launched?.title || 'What wants your full attention?'}</h2>
    <p>${launched?.description || 'The Field is quiet. Bring one object, question, conversation, presentation, or simulation here.'}</p>
    <div class="theater-actions">
      ${launched ? '<button class="primary-button" type="button" data-action="package-begin">Begin rehearsal</button>' : '<button class="primary-button" type="button" data-action="focus-composer">Ask Ki to stage something</button>'}
      <button class="secondary-button" type="button" data-layout-type="setting">Return to Setting</button>
    </div>
    <div class="mode-caption"><span>Theater</span><strong>${launched ? launched.title : 'Quiet stage'}</strong><small>Minimal environment · focused interaction</small></div>
  </div>`;
}

export function fieldStage(state) {
  const objects = fieldObjects[state.type] || [];
  if (state.type === 'composed') return composedWorld(objects, state.selectedObject);
  if (state.type === 'pulse') return pulseWorld(objects, state);
  if (state.type === 'graph') return graphWorld(objects, state.selectedObject);
  if (state.type === 'theater') return theaterWorld(state);
  return settingWorld(objects, state.selectedObject);
}

export function notificationStack(notifications) {
  if (!notifications.length) return '';
  return `<section class="notification-stack" aria-label="Field messages">${notifications.slice(0, 3).map(notification => `<article class="field-message tone-${notification.tone}">
    <span class="message-kind">${notification.kind}</span><button type="button" data-dismiss-notification="${notification.id}" aria-label="Dismiss ${escapeHtml(notification.title)}">${icon('close', 13)}</button>
    <strong>${escapeHtml(notification.title)}</strong><p>${escapeHtml(notification.body)}</p>
    ${notification.persistent ? '<small>Action remains visible until resolved</small>' : ''}
  </article>`).join('')}</section>`;
}

export function kiComposer(state) {
  const selected = findObject(state.type, state.selectedObject);
  const context = selected ? `Selected · ${selected.title}` : state.openPanel ? `Open · ${panelTitle(state.openPanel)}` : `${layoutTypes.find(type => type.id === state.type)?.name} Type`;
  return `<section class="ki-composer" aria-label="Work with Ki">
    <img src="assets/design-system/assets/ki-avatar-glyph.png" alt="Ki">
    <div class="composer-copy"><span><i></i>${escapeHtml(context)}</span><input id="ki-input" aria-label="Tell Ki what to do" autocomplete="off" placeholder="Ask Ki to inspect, arrange, open, create, or change this Layout…" value="${escapeHtml(state.composerDraft)}"></div>
    <button class="composer-context" type="button" data-action="composer-context" aria-label="Use current selection">${icon('pin', 17)}</button>
    <button class="composer-send" type="button" data-action="send-ki" aria-label="Send to Ki">${icon('arrow', 18)}</button>
  </section>`;
}

function panelShell(id, title, eyebrow, content) {
  return `<aside class="expandable-panel" aria-label="${title}" data-open-panel="${id}">
    <header><div><span>${eyebrow}</span><h2>${title}</h2></div><button type="button" data-close-panel aria-label="Close ${title}">${icon('close', 18)}</button></header>
    <div class="panel-scroll">${content}</div>
  </aside>`;
}

function actionRow(label = 'Send this panel to Ki') {
  return `<button class="ki-action" type="button" data-action="panel-to-ki">${icon('ki', 16)}<span>${label}</span>${icon('arrow', 14)}</button>`;
}

function vaultPanel() {
  return panelShell('vault', 'Moto’s Vault', 'Resources under your control', `
    <div class="vault-balance"><span>Available Compute</span><strong>31,840</strong><small>−3,200 this week · inside boundary</small></div>
    <div class="metric-grid"><article><span>Themecoins</span><strong>4,820</strong><small>+120 this month</small></article><article><span>USD treasury</span><strong>$12.4k</strong><small>2 connected wallets</small></article></div>
    <section class="panel-section"><div class="section-heading"><span>Current allocation</span><button type="button" data-action="inspect-vault">Inspect</button></div>
      <div class="allocation"><span style="--amount:58%">Build &amp; Design <b>58%</b></span><span style="--amount:27%">Research <b>27%</b></span><span style="--amount:15%">Reserve <b>15%</b></span></div>
    </section>
    <section class="panel-section"><h3>Recent movement</h3><ul class="plain-list"><li><span>Compute allocation</span><b>−3,200</b><small>Budget Actor · permitted</small></li><li><span>Themecoin reward</span><b>+120</b><small>Build Kiduna · receipt</small></li></ul></section>
    ${actionRow('Ask Ki about these resources')}`);
}

function activeReceptionProfile(state) {
  return state.receiverProfiles.find(profile => profile.id === state.activeReceiverProfileId) || state.receiverProfiles[0];
}

function receiverFreeform(state) {
  const proposal = state.receiverProposal;
  return `<section class="receiver-command" aria-labelledby="receiver-command-title">
    <div><span>Natural-language tuning</span><h3 id="receiver-command-title">Tell the Receiver what to change</h3><p>Add or remove transmitters, change distance, quiet interruptions, strength, or time. Nothing changes until you apply the preview.</p></div>
    <label for="receiver-command" class="sr-only">Receiver change request</label>
    <textarea id="receiver-command" rows="3" placeholder="Try: Bring Alice closer, remove Systems Oracle, use a steady stream for the last month…">${escapeHtml(state.receiverCommand)}</textarea>
    <div class="receiver-command-actions"><button class="primary-button" type="button" data-action="receiver-interpret">Preview changes</button><button class="text-button" type="button" data-action="receiver-command-clear">Clear</button></div>
    ${proposal ? `<div class="receiver-proposal" role="status" aria-live="polite"><span>Proposed change · review before applying</span><ul>${proposal.summary.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>${proposal.unresolved?.length ? `<p><b>Needs revision:</b> ${proposal.unresolved.map(escapeHtml).join(', ')}</p>` : ''}<div><button class="primary-button" type="button" data-action="receiver-apply-proposal" ${proposal.operations.length ? '' : 'disabled'}>Apply</button><button class="secondary-button" type="button" data-action="receiver-revise-proposal">Revise</button><button class="text-button" type="button" data-action="receiver-cancel-proposal">Cancel</button></div></div>` : ''}
  </section>`;
}

function receiverSummary(state, profile) {
  const transmitters = profile.transmitterIds.map(id => transmitterCatalog.find(item => item.id === id)).filter(Boolean);
  const close = transmitters.filter(item => profile.sourcePreferences[item.id]?.stage === 'Bring closer');
  const muted = transmitters.filter(item => profile.sourcePreferences[item.id]?.stage === 'Mute');
  const held = transmitters.filter(item => profile.sourcePreferences[item.id]?.stage === 'Hold');
  const likely = transmitters.filter(item => !['Mute', 'Hold', 'Send farther'].includes(profile.sourcePreferences[item.id]?.stage)).slice(0, 4);
  return `<div class="receiver-view receiver-summary" data-receiver-screen="summary">
    <div class="receiver-metrics" aria-label="Profile overview">
      <article><span>Transmitters</span><strong>${transmitters.length}</strong><small>${close.length} brought closer</small></article>
      <article><span>Strength</span><strong>${profile.strength}%</strong><small>${profile.strength === 0 ? 'Trickle' : profile.strength === 100 ? 'Firehose' : profile.strength === 50 ? 'Steady stream' : 'Custom flow'}</small></article>
      <article><span>Time window</span><strong>${escapeHtml(profile.time.preset)}</strong><small>${profile.time.timezone}</small></article>
    </div>
    <section class="receiver-card"><div class="section-heading"><h3>What this profile receives</h3><button type="button" data-receiver-view="topics">Edit</button></div>
      <div class="receiver-label-group"><span>Themes</span><div class="chip-cloud">${profile.themes.map(item => `<span class="summary-chip">${escapeHtml(item)}</span>`).join('') || '<small>None selected</small>'}</div></div>
      <div class="receiver-label-group"><span>Foci</span><div class="chip-cloud">${profile.foci.map(item => `<span class="summary-chip">${escapeHtml(item)}</span>`).join('') || '<small>None selected</small>'}</div></div>
      <div class="receiver-label-group"><span>Topics</span><div class="chip-cloud">${profile.topics.map(item => `<span class="summary-chip">${escapeHtml(item)}</span>`).join('') || '<small>None selected</small>'}</div></div>
    </section>
    <div class="receiver-summary-grid">
      <section class="receiver-card"><div class="section-heading"><h3>Priorities</h3><button type="button" data-receiver-view="transmitters">Edit</button></div>${close.length ? `<ol class="receiver-compact-list">${close.sort((a,b) => (profile.sourcePreferences[a.id]?.order || 99) - (profile.sourcePreferences[b.id]?.order || 99)).map(item => `<li><b>${escapeHtml(item.name)}</b><span>Bring closer · ${profile.sourcePreferences[item.id]?.interruption}</span></li>`).join('')}</ol>` : '<p class="receiver-empty">Nothing has been brought closer.</p>'}</section>
      <section class="receiver-card"><div class="section-heading"><h3>Vibe dimensions</h3><button type="button" data-receiver-view="vibes">Edit</button></div><ul class="receiver-compact-list">${coherenceDimensions.map(item => `<li><b>${item.label}</b><span>${profile.vibeRanges[item.id]?.[0] ?? 0}–${profile.vibeRanges[item.id]?.[1] ?? 100} · ${item.status.replace('Published · ', '')}</span></li>`).join('')}</ul></section>
    </div>
    <section class="receiver-card"><div class="section-heading"><h3>Likely to reach the composition</h3><button type="button" data-action="receiver-ask-why">Ask why</button></div><p class="receiver-help">A preview of eligible, visible material—not a promise, ranking, or universal importance score.</p><ul class="receiver-preview-list">${likely.map(item => `<li><span class="receiver-type">${item.type}</span><b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.why)}</small></li>`).join('') || '<li><b>No transmitter is currently near.</b><small>Muted and held material stays preserved.</small></li>'}</ul></section>
    <div class="receiver-summary-grid"><section class="receiver-card"><div class="section-heading"><h3>Held issues</h3><button type="button" data-action="receiver-review-held">Review held</button></div><p>${held.length} held · ${muted.length} muted</p><small>Held and muted material is preserved and can be restored.</small></section><section class="receiver-card"><h3>Interruptions</h3><p>${transmitters.filter(item => !['Do not interrupt', 'Ambient only'].includes(profile.sourcePreferences[item.id]?.interruption)).length} sources may claim attention under their stated conditions.</p><small>Urgency never authorizes interruption by itself.</small></section></div>
    <section class="receiver-card"><div class="section-heading"><h3>Recent changes</h3>${state.receiverUndo ? '<button type="button" data-action="receiver-undo">Undo last change</button>' : ''}</div><ul class="receiver-compact-list">${(state.recentReceiverChanges || []).slice(0, 5).map(item => `<li><b>${escapeHtml(item.label)}</b><span>${escapeHtml(item.time)}</span></li>`).join('') || '<li><span>No local changes yet.</span></li>'}</ul></section>
    <div class="receiver-footer-actions"><button class="secondary-button" type="button" data-action="receiver-duplicate-profile">Duplicate profile</button><button class="secondary-button" type="button" data-action="receiver-reset-profile">Reset profile</button></div>
  </div>`;
}

function receiverProfilesView(state, active) {
  return `<div class="receiver-view" data-receiver-screen="profiles">
    <section class="receiver-card receiver-profile-create"><h3>Create a Reception Profile</h3><p>Profiles keep different Source-relative reception choices separate.</p><div><input id="receiver-profile-name" type="text" value="${escapeHtml(state.receiverProfileDraft)}" placeholder="Profile name"><button class="primary-button" type="button" data-action="receiver-create-profile">Create</button></div></section>
    <div class="receiver-profile-list">${state.receiverProfiles.map(profile => `<article class="receiver-profile-row ${profile.id === active.id ? 'active' : ''}"><div><span>${profile.id === active.id ? 'Active profile' : 'Reception profile'}</span><b>${escapeHtml(profile.name)}</b><small>${profile.transmitterIds.length} transmitters · ${profile.strength}% strength</small></div><div><button type="button" data-receiver-activate="${profile.id}" ${profile.id === active.id ? 'disabled' : ''}>${profile.id === active.id ? 'Active' : 'Activate'}</button><button type="button" data-receiver-rename="${profile.id}">Rename</button><button type="button" data-receiver-duplicate="${profile.id}">Duplicate</button><button class="danger-text" type="button" data-receiver-delete="${profile.id}" ${state.receiverProfiles.length === 1 ? 'disabled' : ''}>Delete</button></div>${state.receiverConfirmDelete === profile.id ? `<div class="receiver-confirm" role="alert"><span>Delete “${escapeHtml(profile.name)}”? You can restore it during this session.</span><button type="button" data-receiver-delete-confirm="${profile.id}">Delete</button><button type="button" data-action="receiver-cancel-delete">Cancel</button></div>` : ''}${state.receiverRenameId === profile.id ? `<div class="receiver-inline-edit"><input id="receiver-rename-input" type="text" value="${escapeHtml(profile.name)}"><button type="button" data-action="receiver-save-rename">Save</button><button type="button" data-action="receiver-cancel-rename">Cancel</button></div>` : ''}</article>`).join('')}</div>
    ${state.deletedReceiverProfile ? `<button class="receiver-restore" type="button" data-action="receiver-restore-profile">Restore deleted profile “${escapeHtml(state.deletedReceiverProfile.name)}”</button>` : ''}
  </div>`;
}

function receiverTransmittersView(state, profile) {
  const query = state.receiverTransmitterQuery.toLowerCase();
  const filter = state.receiverTransmitterFilter;
  const present = transmitterCatalog.filter(item => profile.transmitterIds.includes(item.id));
  const filtered = present.filter(item => (!query || Object.values(item).flat().join(' ').toLowerCase().includes(query)) && (filter === 'All' || item.type === filter));
  const sorted = [...filtered].sort((a, b) => state.receiverTransmitterSort === 'Type' ? a.type.localeCompare(b.type) || a.name.localeCompare(b.name) : state.receiverTransmitterSort === 'Priority' ? (profile.sourcePreferences[a.id]?.order || 99) - (profile.sourcePreferences[b.id]?.order || 99) : a.name.localeCompare(b.name));
  const missing = transmitterCatalog.filter(item => !profile.transmitterIds.includes(item.id) && (!query || Object.values(item).flat().join(' ').toLowerCase().includes(query)) && (filter === 'All' || item.type === filter));
  const types = ['All', ...new Set(transmitterCatalog.map(item => item.type))];
  return `<div class="receiver-view" data-receiver-screen="transmitters">
    <div class="receiver-tools"><label class="receiver-search">${icon('search', 16)}<input id="receiver-transmitter-search" type="search" value="${escapeHtml(state.receiverTransmitterQuery)}" placeholder="Search Realms, Avatars, Allies, Actors, maps…"></label><select id="receiver-transmitter-filter" aria-label="Filter transmitters by type">${types.map(type => `<option ${filter === type ? 'selected' : ''}>${type}</option>`).join('')}</select><select id="receiver-transmitter-sort" aria-label="Sort transmitters"><option ${state.receiverTransmitterSort === 'Name' ? 'selected' : ''}>Name</option><option ${state.receiverTransmitterSort === 'Type' ? 'selected' : ''}>Type</option><option ${state.receiverTransmitterSort === 'Priority' ? 'selected' : ''}>Priority</option></select></div>
    <section class="receiver-section"><div class="section-heading"><h3>In this profile</h3><span>${sorted.length}</span></div><div class="transmitter-list">${sorted.map(item => {
      const pref = profile.sourcePreferences[item.id] || { stage: 'Normal', order: 0, interruption: 'Ambient only' };
      return `<article class="transmitter-row"><div class="transmitter-main"><span class="receiver-type">${item.type}</span><b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.context)} · ${item.signalKinds.join(', ')}</small></div><label>Distance<select data-receiver-stage="${item.id}">${['Bring closer', 'Normal', 'Send farther', 'Hold', 'Mute'].map(choice => `<option ${pref.stage === choice ? 'selected' : ''}>${choice}</option>`).join('')}</select></label>${pref.stage === 'Bring closer' ? `<label>Order<input data-receiver-order="${item.id}" type="number" min="1" max="99" value="${pref.order || 1}"></label>` : ''}<label>Interruption<select data-receiver-interruption="${item.id}">${['Do not interrupt', 'Ambient only', 'When available', 'Threshold only', 'Interrupt now'].map(choice => `<option ${pref.interruption === choice ? 'selected' : ''}>${choice}</option>`).join('')}</select></label><div class="transmitter-actions"><button type="button" data-receiver-details="${item.id}">${state.receiverDetailId === item.id ? 'Hide details' : 'Details'}</button><button class="danger-text" type="button" data-receiver-remove="${item.id}">Remove</button></div>${state.receiverDetailId === item.id ? `<div class="transmitter-detail"><dl><div><dt>Why included</dt><dd>${escapeHtml(item.why)}</dd></div><div><dt>Added</dt><dd>${item.addedAt}</dd></div><div><dt>What it does not establish</dt><dd>Truth, membership, permission, authority, consent, or universal importance.</dd></div></dl></div>` : ''}</article>`;
    }).join('') || '<p class="receiver-empty">No transmitters match this view.</p>'}</div></section>
    <section class="receiver-section"><div class="section-heading"><h3>Available to add</h3><span>${missing.length}</span></div><div class="receiver-add-grid">${missing.map(item => `<article><span class="receiver-type">${item.type}</span><b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.context)}</small><button type="button" data-add-receiver="${item.id}">Add to Receiver</button></article>`).join('') || '<p class="receiver-empty">Everything matching this view is already in the active profile.</p>'}</div></section>
  </div>`;
}

function receiverTopicsView(state, profile) {
  return `<div class="receiver-view" data-receiver-screen="topics"><p class="receiver-help">Themes and Foci use the canonical taxonomy. Topics are open-ended labels for extra specificity.</p><section class="receiver-card"><h3>Themes</h3><div class="receiver-choice-grid">${receiverThemes.map(theme => `<button class="receiver-choice ${profile.themes.includes(theme.name) ? 'active' : ''}" type="button" data-receiver-theme="${escapeHtml(theme.name)}" aria-pressed="${profile.themes.includes(theme.name)}"><b>${theme.name}</b><small>${theme.foci.length} canonical Foci</small></button>`).join('')}</div></section><section class="receiver-card"><h3>Foci</h3>${receiverThemes.map(theme => `<details ${theme.foci.some(focus => profile.foci.includes(focus)) ? 'open' : ''}><summary>${theme.name}</summary><div class="receiver-focus-list">${theme.foci.map(focus => `<button class="chip ${profile.foci.includes(focus) ? 'active' : ''}" type="button" data-receiver-focus="${escapeHtml(focus)}" aria-pressed="${profile.foci.includes(focus)}">${focus}</button>`).join('')}</div></details>`).join('')}</section><section class="receiver-card"><h3>Topics</h3><div class="receiver-topic-entry"><input id="receiver-topic-input" type="text" value="${escapeHtml(state.receiverTopicDraft)}" placeholder="Add any topic"><button class="primary-button" type="button" data-action="receiver-add-topic">Add topic</button></div><div class="chip-cloud">${profile.topics.map(topic => `<button class="summary-chip removable" type="button" data-receiver-remove-topic="${escapeHtml(topic)}">${escapeHtml(topic)} <span aria-hidden="true">×</span><span class="sr-only">Remove</span></button>`).join('') || '<small>No open-ended topics.</small>'}</div></section></div>`;
}

function receiverVibesView(profile) {
  return `<div class="receiver-view" data-receiver-screen="vibes"><div class="receiver-boundary"><b>Vibes are tolerance ranges, not a universal score.</b><p>Each dimension is published by its named Power Map or Realm. Missing, disputed, and stale measurements remain explicit.</p></div>${coherenceDimensions.map(dimension => { const range = profile.vibeRanges[dimension.id] || [0, 100]; return `<section class="vibe-card"><header><div><span>${dimension.map}</span><h3>${dimension.label}</h3></div><strong>${range[0]}–${range[1]}</strong></header><p>${dimension.explanation}</p><div class="vibe-range" style="--vibe-low:${range[0]}%;--vibe-high:${range[1]}%"><i></i><input aria-label="${dimension.label} minimum" data-vibe-min="${dimension.id}" type="range" min="0" max="100" value="${range[0]}"><input aria-label="${dimension.label} maximum" data-vibe-max="${dimension.id}" type="range" min="0" max="100" value="${range[1]}"></div><div class="vibe-poles"><span>${dimension.low}</span><span>${dimension.high}</span></div><footer><span>Visible Valence: ${dimension.valence}</span><b>${dimension.status}</b></footer></section>`; }).join('')}</div>`;
}

function receiverTimeView(profile) {
  const presets = ['Right now', 'Last 24 hours', 'Last 7 days', 'Last 30 days', 'Custom range'];
  const flow = profile.strength === 0 ? 'Trickle — minimal eligible flow; nothing is muted.' : profile.strength === 50 ? 'Steady stream — balanced volume while preserving Source-relative staging.' : profile.strength === 100 ? 'Firehose — the broadest eligible flow; visibility and permission still apply.' : `${profile.strength}% — a custom volume between Trickle and Firehose.`;
  return `<div class="receiver-view" data-receiver-screen="time"><section class="receiver-card"><h3>Signal strength</h3><p class="receiver-help">Controls volume after eligibility—not truth, worth, relevance, or permission. Use Mute on an individual transmitter to stop it.</p><label class="receiver-strength" for="receiver-strength"><output>${profile.strength}%</output><input id="receiver-strength" type="range" min="0" max="100" value="${profile.strength}"><div><span>Trickle <b>0%</b></span><span>Steady stream <b>50%</b></span><span>Firehose <b>100%</b></span></div></label><div class="receiver-preview-copy">${flow}</div></section><section class="receiver-card"><h3>Date range</h3><div class="receiver-preset-grid">${presets.map(preset => `<button class="receiver-choice ${profile.time.preset === preset ? 'active' : ''}" type="button" data-receiver-time-preset="${preset}" aria-pressed="${profile.time.preset === preset}">${preset}</button>`).join('')}</div>${profile.time.preset === 'Custom range' ? `<div class="receiver-date-grid"><label>Starts<input id="receiver-time-start" type="date" value="${profile.time.start}"></label><label>Ends<input id="receiver-time-end" type="date" value="${profile.time.end}"></label></div>` : ''}<label class="field-label">Timezone<select id="receiver-timezone"><option ${profile.time.timezone === 'America/New_York' ? 'selected' : ''}>America/New_York</option><option ${profile.time.timezone === 'America/Denver' ? 'selected' : ''}>America/Denver</option><option ${profile.time.timezone === 'UTC' ? 'selected' : ''}>UTC</option></select></label><div class="toggle-list"><label><span>Current signals<small>Signals active at the present Locus</small></span><input id="receiver-include-current" type="checkbox" ${profile.time.includeCurrent ? 'checked' : ''}></label><label><span>History<small>Eligible Landings from the selected time window</small></span><input id="receiver-include-history" type="checkbox" ${profile.time.includeHistory ? 'checked' : ''}></label></div></section></div>`;
}

function receivePanel(state) {
  const profile = activeReceptionProfile(state);
  const views = [['summary', 'Summary'], ['profiles', 'Profiles'], ['transmitters', 'Transmitters'], ['topics', 'Topics & Foci'], ['vibes', 'Vibes'], ['time', 'Time & Strength']];
  const content = state.receiverView === 'profiles' ? receiverProfilesView(state, profile) : state.receiverView === 'transmitters' ? receiverTransmittersView(state, profile) : state.receiverView === 'topics' ? receiverTopicsView(state, profile) : state.receiverView === 'vibes' ? receiverVibesView(profile) : state.receiverView === 'time' ? receiverTimeView(profile) : receiverSummary(state, profile);
  return `<aside class="expandable-panel receiver-panel" aria-label="Receiver" data-open-panel="receive">
    <header><div class="receiver-title"><span class="rail-role-icon role-icon-receiver" aria-hidden="true"></span><div><span>Source-relative signal reception</span><h2>Receiver</h2></div></div><button type="button" data-close-panel aria-label="Close Receiver">${icon('close', 18)}</button></header>
    <div class="receiver-shell"><div class="receiver-sticky"><div class="receiver-profile-bar"><label>Active profile<select id="receiver-profile-select">${state.receiverProfiles.map(item => `<option value="${item.id}" ${item.id === profile.id ? 'selected' : ''}>${escapeHtml(item.name)}</option>`).join('')}</select></label><span class="state-live">Active</span></div>${receiverFreeform(state)}<nav class="receiver-tabs" aria-label="Receiver views">${views.map(([id, label]) => `<button class="${state.receiverView === id ? 'active' : ''}" type="button" data-receiver-view="${id}" aria-current="${state.receiverView === id ? 'page' : 'false'}">${label}</button>`).join('')}</nav></div><div class="receiver-scroll">${content}</div></div>
  </aside>`;
}

function transmitPanel(state) {
  return panelShell('transmit', 'Transmit', 'Beacon · send my signal', `
    <p class="panel-lede">Compose here, then choose a relationship or channel. Nothing leaves the Field without an explicit send action.</p>
    <label class="field-label">Signal type<select id="transmit-type"><option>Invitation</option><option>Message</option><option>Offer</option><option>Publication</option><option>Call for participation</option></select></label>
    <label class="field-label">Audience<select id="transmit-audience"><option>Founding people</option><option>Build Kiduna Realm</option><option>One person…</option><option>Public channels…</option></select></label>
    <label class="field-label">Message<textarea id="transmit-message" rows="6" placeholder="What do you want to send outward?">${escapeHtml(state.transmitDraft)}</textarea></label>
    <div class="panel-actions"><button class="secondary-button" type="button" data-action="save-transmit">Save draft</button><button class="primary-button" type="button" data-action="review-transmit">Review before sending</button></div>
    <div class="boundary-note"><b>Boundary</b><span>Review does not send, publish, invite, grant access, or move Resources.</span></div>
    ${actionRow('Compose this with Ki')}`);
}

function connectPanel(state) {
  const tabs = ['People', 'Systems', 'Realms'];
  const content = {
    People: `<section class="panel-section"><div class="section-heading"><h3>Pending</h3><span>1</span></div><ul class="connection-list"><li><span class="mini-avatar">J</span><div><b>Jeya</b><small>Invitation proposal · unsent</small></div><button type="button" data-action="inspect-jeya">Inspect</button></li></ul></section><section class="panel-section"><h3>Connected people</h3><ul class="plain-list"><li><span>Alice</span><b>Connected</b><small>Service Alliance · Host context</small></li><li><span>Aashik</span><b>Near</b><small>Proposal only</small></li></ul></section>`,
    Systems: `<section class="panel-section"><div class="section-heading"><h3>Available systems</h3><span>3</span></div><ul class="connection-list"><li><span class="connection-glyph">B</span><div><b>Bluesky</b><small>Connection available</small></div><button type="button" data-action="configure-connection">Configure</button></li><li><span class="connection-glyph">T</span><div><b>Telegram</b><small>Needs permission review</small></div><button type="button" data-action="review-connection">Review</button></li></ul></section><section class="panel-section"><h3>Connected</h3><ul class="plain-list"><li><span>Google Drive</span><b>Connected</b><small>Files · read on request</small></li></ul></section>`,
    Realms: `<section class="panel-section"><h3>Realm relationships</h3><ul class="connection-list"><li><span class="connection-glyph">K</span><div><b>Build Kiduna</b><small>Member · Catalyst</small></div><button type="button" data-action="show-build-kiduna">Show</button></li><li><span class="connection-glyph">S</span><div><b>Service Alliance</b><small>Relationship field</small></div><button type="button" data-action="show-service-alliance">Show</button></li></ul></section>`
  }[state.connectTab];
  return panelShell('connect', 'Connect', 'Dock · bring things into relationship', `
    <div class="segmented">${tabs.map(tab => `<button class="${state.connectTab === tab ? 'active' : ''}" type="button" data-connect-tab="${tab}">${tab}</button>`).join('')}</div>
    ${content}
    ${actionRow('Ask Ki what should connect next')}`);
}

function createPanel() {
  const groups = [
    ['Meaning', ['Power Map', 'Realm', 'Node', 'Wisdom']],
    ['Intelligence', ['Ally', 'Actor', 'Automation', 'Source']],
    ['Experience', ['Scene', 'Setting', 'Layout', 'Package']],
    ['Exchange', ['Offer', 'Resource', 'Action', 'Organization']]
  ];
  return panelShell('create', 'Create', 'Spark · make something exist', `
    <p class="panel-lede">Begin with what you want to bring into the world. Ki can help choose the structure.</p>
    <button class="create-with-ki" type="button" data-action="create-with-ki">${icon('ki', 22)}<span><b>Create with Ki</b><small>Describe the outcome before choosing an object type.</small></span>${icon('arrow', 16)}</button>
    <div class="creation-groups">${groups.map(([group, items]) => `<section><h3>${group}</h3><div>${items.map(item => `<button type="button" data-create="${item}"><i></i>${item}</button>`).join('')}</div></section>`).join('')}</div>`);
}

function packagesPanel(state) {
  return panelShell('packages', 'Packages', 'Cartridge · load a complete system', `
    <p class="panel-lede">Packages are bounded software experiences. Load one into Theater without losing your place in the Field.</p>
    <div class="package-list">${packages.map(item => `<article class="package-card ${state.launchedPackage === item.id ? 'loaded' : ''}">
      <div class="package-art art-${item.accent}">${item.image ? `<img src="${item.image}" alt="${item.title} Sigil">` : `<span>${item.title.split(' ').map(word => word[0]).join('').slice(0, 2)}</span>`}</div>
      <div><span>${item.kind}</span><h3>${item.title}</h3><p>${item.description}</p><small>${item.status}</small></div>
      <div class="package-actions"><button class="secondary-button" type="button" data-add-receiver="${item.id === 'royals-rogues' ? 'package-royals' : item.id === 'systems-oracle' ? 'map-systems' : 'package-build-kiduna'}">Add to Receiver</button><button class="primary-button" type="button" data-launch-package="${item.id}">${state.launchedPackage === item.id ? 'Return to package' : 'Load in Theater'}</button></div>
    </article>`).join('')}</div>
    ${actionRow('Ask Ki to recommend a Package')}`);
}

function historyPanel(state) {
  const query = state.historyQuery.toLowerCase();
  const entries = historyEntries.filter(entry => (!query || Object.values(entry).join(' ').toLowerCase().includes(query)) && (state.historyFilter === 'All' || entry.kind === state.historyFilter));
  const filters = ['All', 'Governance', 'Economic', 'Connection', 'Creation'];
  return panelShell('history', 'History', 'Trail · everything leaves a record', `
    <label class="history-search">${icon('search', 16)}<input id="history-search" type="search" autocomplete="off" placeholder="Search events, actors, records…" value="${escapeHtml(state.historyQuery)}"></label>
    <div class="chip-cloud history-filters">${filters.map(filter => `<button class="chip ${state.historyFilter === filter ? 'active' : ''}" type="button" data-history-filter="${filter}">${filter}</button>`).join('')}</div>
    <div class="history-list" aria-live="polite">${entries.length ? entries.map(entry => `<button type="button" data-history="${entry.id}"><time>${entry.time}</time><span><i>${entry.kind}</i><b>${entry.title}</b><small>${entry.actor}</small></span>${icon('chevron', 15)}</button>`).join('') : '<p class="empty-state">No events match this view.</p>'}</div>`);
}

function settingsPanel(state) {
  return panelShell('settings', 'Settings', 'Layout Kit preferences', `
    <section class="panel-section"><h3>Default Layout Type</h3><select id="default-type">${layoutTypes.map(type => `<option value="${type.id}" ${state.defaultType === type.id ? 'selected' : ''}>${type.name}</option>`).join('')}</select></section>
    <section class="panel-section"><h3>Interface</h3><div class="toggle-list"><label><span>Calm motion<small>Honor reduced-motion preference</small></span><input id="calm-motion" type="checkbox" ${state.calmMotion ? 'checked' : ''}></label><label><span>Ambient Field messages<small>Show contextual system conditions</small></span><input id="ambient-messages" type="checkbox" ${state.ambientMessages ? 'checked' : ''}></label></div></section>
    <section class="panel-section"><h3>Context &amp; authority</h3><ul class="plain-list"><li><span>Active Source</span><b>Moto</b><small>Human authority</small></li><li><span>Active Avatar</span><b>Moto · ${state.avatarState}</b><small>Representation in this Scene</small></li><li><span>Operational Mode</span><b>Development</b><small>Canonical Mode; distinct from Layout Type</small></li></ul></section>
    <div class="panel-actions"><button class="secondary-button" type="button" data-action="reset-layout">Reset local Layout state</button></div>
    ${actionRow('Ask Ki about these settings')}`);
}

function avatarPanel(state) {
  const states = ['open', 'engaged', 'focused', 'dreaming'];
  return panelShell('avatar', 'Active Avatar', 'Moto · representation in this Scene', `
    <div class="avatar-hero"><img src="assets/avatars/moto-${state.avatarState}.png" alt="Moto Avatar — ${state.avatarState}"><div><span>Active in Moto’s Field</span><h3>Moto</h3><p>The Avatar represents Moto here. It is not a separate Source, Ally, or Actor.</p></div></div>
    <section class="panel-section"><h3>Presentation state</h3><div class="avatar-states">${states.map(item => `<button class="${state.avatarState === item ? 'active' : ''}" type="button" data-avatar-state="${item}"><img src="assets/avatars/moto-${item}.png" alt=""><span>${item}</span></button>`).join('')}</div></section>
    <section class="panel-section"><h3>Context</h3><ul class="plain-list"><li><span>Realm</span><b>Moto’s Field</b><small>Private working context</small></li><li><span>Role</span><b>Catalyst</b><small>Build Kiduna</small></li><li><span>Delegated identities</span><b>2</b><small>1 Ally · 1 Actor</small></li></ul></section>
    <div class="panel-actions"><button class="secondary-button" type="button" data-action="edit-avatar">Edit Avatar</button><button class="primary-button" type="button" data-action="switch-avatar">Switch Avatar</button></div>
    ${actionRow('Ask Ki about this Avatar context')}`);
}

function layoutTypePanel(state) {
  return panelShell('type', 'Layout Type', 'Change how the Field is represented', `
    <p class="panel-lede">Layout Types change representation only. Development remains the current canonical operational Mode.</p>
    <div class="mode-options">${layoutTypes.map(type => `<button class="${state.type === type.id ? 'active' : ''}" type="button" data-layout-type="${type.id}"><span>${type.name}</span><small>${type.meta}</small><p>${type.description}</p>${icon('arrow', 15)}</button>`).join('')}</div>`);
}

function mapPanel(state) {
  return panelShell('map', 'Map', 'Where am I and where can I go?', `
    <nav class="breadcrumbs" aria-label="Current location">${icon('home', 14)}<button type="button" data-layout-type="composed">Field</button><i>/</i><button type="button" data-action="map-home">Moto</button><i>/</i><strong>${layoutTypes.find(type => type.id === state.type)?.name}</strong></nav>
    <div class="map-mini"><span class="map-you">You are here</span><i class="map-path one"></i><i class="map-path two"></i><button type="button" data-layout-type="composed">Composed</button><button type="button" data-layout-type="setting">Setting</button><button type="button" data-layout-type="pulse">Pulse</button><button type="button" data-layout-type="graph">Graph</button><button type="button" data-layout-type="theater">Theater</button></div>
    <section class="panel-section"><h3>Favorites</h3><ul class="jump-list"><li><button type="button" data-layout-type="composed"><span>⌂</span><div><b>Moto’s connected desktop</b><small>Home · Composed</small></div>${icon('chevron', 14)}</button></li><li><button type="button" data-layout-type="graph"><span>◇</span><div><b>Build Kiduna graph</b><small>Power Map · recent</small></div>${icon('chevron', 14)}</button></li><li><button type="button" data-panel="packages"><span>▣</span><div><b>Packages</b><small>6 complete systems</small></div>${icon('chevron', 14)}</button></li></ul></section>
    ${actionRow('Ask Ki to take me somewhere')}`);
}

function economicsPanel() {
  return panelShell('economics', 'Economics', 'What is happening with my resources?', `
    <div class="economics-ring"><div><strong>31.8k</strong><span>Compute available</span></div><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52"/><circle class="value" cx="60" cy="60" r="52"/></svg></div>
    <div class="metric-grid"><article><span>7-day inflow</span><strong>+8.2%</strong><small>Rewards + deposits</small></article><article><span>7-day outflow</span><strong>−4.7%</strong><small>Compute + tools</small></article></div>
    <section class="panel-section"><h3>Flows now</h3><ul class="flow-list"><li><i class="in"></i><span><b>Build contribution</b><small>Themecoins · today</small></span><strong>+120</strong></li><li><i class="out"></i><span><b>Design &amp; Build</b><small>Compute · this week</small></span><strong>−3,200</strong></li><li><i class="hold"></i><span><b>Foundation reserve</b><small>USD · held</small></span><strong>$7.2k</strong></li></ul></section>
    <button class="primary-button wide" type="button" data-panel="vault">Open full Vault</button>${actionRow('Ask Ki to explain these flows')}`);
}

function governancePanel() {
  return panelShell('governance', 'Governance', 'What decisions need me?', `
    <div class="attention-summary"><strong>2</strong><span>decisions need Moto across 2 Realms</span></div>
    <section class="decision-card urgent"><span>Build Kiduna · closes tomorrow</span><h3>Contribution recognition</h3><p>Choose whether the next rehearsal includes a public attribution ledger.</p><div><small>Authority: Catalyst</small><button type="button" data-action="inspect-governance">Inspect</button></div></section>
    <section class="decision-card"><span>Service Alliance · boundary requested</span><h3>Guest access to welcome path</h3><p>Define what invited Guests can inspect before becoming Members.</p><div><small>Authority: Council request</small><button type="button" data-action="inspect-governance">Inspect</button></div></section>
    <section class="panel-section"><h3>Delegations</h3><ul class="plain-list"><li><span>Budget Actor</span><b>Active</b><small>Weekly compute · revocable</small></li><li><span>Research Ally</span><b>Advisory</b><small>No execution Authority</small></li></ul></section>
    ${actionRow('Ask Ki to compare these decisions')}`);
}

function culturePanel() {
  return panelShell('culture', 'Culture', 'What does this mean and how does it connect?', `
    <div class="culture-constellation" aria-hidden="true"><i></i><i></i><i></i><i></i><span></span></div>
    <section class="pattern-card"><span>Emerging pattern</span><h3>Invitation as orientation</h3><p>Across three current threads, invitations work best when they reveal living work before asking for commitment.</p><small>Kinship · Service Alliance · Build Kiduna</small></section>
    <section class="panel-section"><h3>Signals of meaning</h3><ul class="plain-list"><li><span>Belonging before role</span><b>Strengthening</b><small>4 related moments</small></li><li><span>Visibility of authority</span><b>Unresolved</b><small>2 governance requests</small></li><li><span>Contribution as learning</span><b>Emerging</b><small>Cross-Realm connection</small></li></ul></section>
    <button class="secondary-button wide" type="button" data-layout-type="graph">Show these connections in Graph</button>${actionRow('Ask Ki what this pattern could become')}`);
}

export function panelFor(state) {
  switch (state.openPanel) {
    case 'vault': return vaultPanel();
    case 'receive': return receivePanel(state);
    case 'transmit': return transmitPanel(state);
    case 'connect': return connectPanel(state);
    case 'create': return createPanel();
    case 'packages': return packagesPanel(state);
    case 'history': return historyPanel(state);
    case 'settings': return settingsPanel(state);
    case 'avatar': return avatarPanel(state);
    case 'type': return layoutTypePanel(state);
    case 'map': return mapPanel(state);
    case 'economics': return economicsPanel();
    case 'governance': return governancePanel();
    case 'culture': return culturePanel();
    default: return '';
  }
}

export function selectionBar(state) {
  const object = findObject(state.type, state.selectedObject);
  if (!object) return '';
  const transmitter = transmitterCatalog.find(item => item.name === object.title || (object.title === 'Layout Kit' && item.id === 'package-layout'));
  return `<div class="selection-bar" role="toolbar" aria-label="Actions for ${escapeHtml(object.title)}"><span><i class="dot-${object.accent}"></i><small>${object.type}</small><strong>${object.title}</strong></span>${transmitter ? `<button type="button" data-add-receiver="${transmitter.id}">+ Receiver</button>` : ''}<button type="button" data-action="inspect-selection">${icon('inspect', 15)} Inspect</button><button type="button" data-action="selection-to-ki">${icon('ki', 15)} Send to Ki</button><button type="button" data-clear-selection aria-label="Clear selection">${icon('close', 15)}</button></div>`;
}

export function inspector(state) {
  if (!state.inspector) return '';
  const history = historyEntries.find(entry => entry.id === state.inspector);
  const object = findObject(state.type, state.inspector) || Object.values(fieldObjects).flat().find(item => item.id === state.inspector);
  const item = history || object;
  if (!item) return '';
  const title = item.title;
  const kind = item.kind || item.type;
  const detail = item.detail || item.body;
  const actor = item.actor || 'Moto’s Field';
  const authority = item.authority || 'Read and arrange in this Layout';
  const source = item.source || `${layoutTypes.find(type => type.id === state.type)?.name} composition`;
  return `<aside class="inspector" aria-label="Inspect ${escapeHtml(title)}">
    <header><div><span>Inspector · ${escapeHtml(kind)}</span><h2>${escapeHtml(title)}</h2></div><button type="button" data-close-inspector aria-label="Close inspector">${icon('close', 18)}</button></header>
    <div class="inspector-body"><p>${escapeHtml(detail)}</p><dl><div><dt>Initiated by</dt><dd>${escapeHtml(actor)}</dd></div><div><dt>Authority</dt><dd>${escapeHtml(authority)}</dd></div><div><dt>Source / record</dt><dd>${escapeHtml(source)}</dd></div><div><dt>Current effect</dt><dd>${history ? 'Recorded; underlying state remains inspectable.' : 'Selected in the current Layout; no external Action taken.'}</dd></div></dl>
      <button class="ki-action" type="button" data-action="inspector-to-ki">${icon('ki', 16)}<span>Ask Ki about this</span>${icon('arrow', 14)}</button>
    </div>
  </aside>`;
}

export function toast(message) {
  return message ? `<div class="toast visible" role="status"><i>${icon('ki', 14)}</i><span>${escapeHtml(message)}</span></div>` : '';
}

export function findObject(type, id) {
  return (fieldObjects[type] || []).find(object => object.id === id);
}

export function panelTitle(id) {
  return ({ vault: 'Moto’s Vault', receive: 'Receive', transmit: 'Transmit', connect: 'Connect', create: 'Create', packages: 'Packages', history: 'History', settings: 'Settings', avatar: 'Active Avatar', type: 'Layout Type', map: 'Map', economics: 'Economics', governance: 'Governance', culture: 'Culture' })[id] || id;
}

const paths = {
  vault: '<circle cx="9" cy="8" r="3.5"/><path d="M9 1v2M9 13v2M2 8h2M14 8h2M4 3l1.4 1.4M12.6 11.6 14 13M14 3l-1.4 1.4M5.4 11.6 4 13"/><path d="M16 7.5a6.5 6.5 0 1 0 0 13 7.4 7.4 0 0 1 0-13Z"/>',
  receive: '<path d="M5 16.5a9 9 0 0 0 11.5-11.5L5 16.5Z"/><path d="m8.3 13.2-2.8 4.3M6.7 17.5h5"/><path d="M16 9a4 4 0 0 0-4-4M19.5 9A7.5 7.5 0 0 0 12 1.5"/>',
  transmit: '<path d="M12 9v12M8.5 21h7M9 12l3-5 3 5M12 7V3"/><path d="M7 6.5a7 7 0 0 0 0 9M17 6.5a7 7 0 0 1 0 9M4 3.5a11 11 0 0 0 0 15M20 3.5a11 11 0 0 1 0 15"/>',
  connect: '<circle cx="6" cy="12" r="3.5"/><circle cx="18" cy="12" r="3.5"/><path d="M9.5 10h5M9.5 14h5M6 8.5V6h4M18 15.5V18h-4"/>',
  create: '<circle cx="12" cy="12" r="2.6"/><path d="M12 1.5V6M12 18v4.5M1.5 12H6M18 12h4.5M4.6 4.6l3.2 3.2M16.2 16.2l3.2 3.2M19.4 4.6l-3.2 3.2M7.8 16.2l-3.2 3.2"/>',
  packages: '<path d="M5 4.5h14v14H5zM8 4.5V2h8v2.5M8 18.5V22M12 18.5V22M16 18.5V22"/><path d="M8 8h8v6H8z"/>',
  history: '<path d="M20 17c-2.8 2.5-6.7 3-10 1.2-3.3-1.8-5-5.6-4-9.2"/><path d="m3 11 3-2 2.8 2.3"/><circle cx="11" cy="6" r="1.3"/><circle cx="16" cy="8.5" r="1.3"/><circle cx="19" cy="13" r="1.3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.6v.2h-4V21A1.8 1.8 0 0 0 8.8 19.4a1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2A1.8 1.8 0 0 0 2.8 14h-.2v-4h.2a1.8 1.8 0 0 0 1.6-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1L6.7 4l.1.1a1.8 1.8 0 0 0 2 .4A1.8 1.8 0 0 0 10 2.8v-.2h4v.2a1.8 1.8 0 0 0 1.1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1L20 6.7l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1.1h.2v4h-.2a1.8 1.8 0 0 0-1.7 1.1Z"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  ki: '<path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2L12 3Z"/>',
  inspect: '<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"/><circle cx="12" cy="12" r="2.5"/>',
  pin: '<path d="m14 4 6 6-3 1-4 4-1 5-2-2-4 4-1-1 4-4-2-2 5-1 4-4 1-3Z"/>',
  home: '<path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
};

export function icon(name, size = 20, className = '') {
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.ki}</svg>`;
}

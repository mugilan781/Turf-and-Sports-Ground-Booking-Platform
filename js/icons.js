/**
 * SPORTIFY ICONS — Ultra-Premium Realistic Vector Icon System
 * Authentic, high-fidelity sports equipment and UI vectors with multi-path depth.
 */
(function(window) {
  'use strict';

  const SVG_DEFS = {
    // ── Sports Equipment & Grounds (Realistic Vectors) ──
    football: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke-width="1.8"/><polygon points="12,7 15.8,9.8 14.3,14.5 9.7,14.5 8.2,9.8" fill="currentColor" stroke-width="1.4"/><line x1="12" y1="7" x2="12" y2="2"/><line x1="15.8" y1="9.8" x2="21.5" y2="7.8"/><line x1="14.3" y1="14.5" x2="18.2" y2="20.2"/><line x1="9.7" y1="14.5" x2="5.8" y2="20.2"/><line x1="8.2" y1="9.8" x2="2.5" y2="7.8"/><path d="M7 2.8c1.5 1.5 2.5 1.5 5 0M17 2.8c-1.5 1.5-2.5 1.5-5 0" stroke-width="1.2" opacity="0.6"/><path d="M21.8 11.5c-1.8 1-2.5 2.2-2.8 4.2M2.2 11.5c1.8 1 2.5 2.2 2.8 4.2" stroke-width="1.2" opacity="0.6"/><path d="M9.5 21.8c1.2-1.5 3.8-1.5 5 0" stroke-width="1.2" opacity="0.6"/></svg>`,
    
    cricket: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 14.5l5.2-5.2c.4-.4 1-.4 1.4 0l2.6 2.6c.4.4.4 1 0 1.4L8.5 18.5c-1.1 1.1-2.9 1.1-4 0l0 0c-1.1-1.1-1.1-2.9 0-4z" fill="currentColor" fill-opacity="0.3" stroke-width="1.8"/><line x1="6.8" y1="16.8" x2="11.8" y2="11.8" stroke-width="1.2" opacity="0.7"/><path d="M12.3 9.3l4.5-4.5c.6-.6 1.5-.6 2.1 0l.6.6c.6.6.6 1.5 0 2.1l-4.5 4.5" stroke-width="1.8"/><line x1="14.2" y1="7.4" x2="16.2" y2="9.4" stroke-width="1.2"/><line x1="15.7" y1="5.9" x2="17.7" y2="7.9" stroke-width="1.2"/><circle cx="18.5" cy="17.5" r="3.5" stroke-width="1.8" fill="currentColor" fill-opacity="0.25"/><path d="M16 15.5c1.2 1.2 1.8 2.8 1.2 4.5" stroke-width="1.4"/><line x1="16.8" y1="16.5" x2="17.8" y2="16.2" stroke-width="1"/><line x1="17.2" y1="18" x2="18.2" y2="17.7" stroke-width="1"/><line x1="17" y1="19.5" x2="18" y2="19.2" stroke-width="1"/></svg>`,
    
    badminton: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="15.8" cy="8.2" rx="5.2" ry="6.2" fill="currentColor" fill-opacity="0.12" stroke-width="1.8" transform="rotate(-35 15.8 8.2)"/><line x1="12.5" y1="5.5" x2="17.5" y2="12.5" stroke-width="0.9" opacity="0.6"/><line x1="14.2" y1="3.8" x2="19.2" y2="10.8" stroke-width="0.9" opacity="0.6"/><line x1="11.5" y1="8.5" x2="18.5" y2="4.5" stroke-width="0.9" opacity="0.6"/><line x1="13.2" y1="11.5" x2="20.2" y2="7.5" stroke-width="0.9" opacity="0.6"/><path d="M11.5 12.8L4.2 20.1c-.6.6-.6 1.5 0 2.1l0 0c.6.6 1.5.6 2.1 0l7.3-7.3" stroke-width="1.8"/><path d="M3.8 20.5l1.7 1.7" stroke-width="2.2"/><path d="M3.5 8l3.2 1.2.8-3.4-4 2.2z" fill="currentColor" fill-opacity="0.35" stroke-width="1.4"/><circle cx="2.5" cy="8.5" r="1.2" fill="currentColor"/><path d="M4.5 6.8l2 2M5.5 5.8l2 2" stroke-width="0.9" opacity="0.6"/></svg>`,
    
    stadium: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="1.8" fill="currentColor" fill-opacity="0.12"/><line x1="3" y1="12" x2="21" y2="12" stroke-width="1.4"/><circle cx="12" cy="12" r="3.5" stroke-width="1.4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><path d="M7.5 3v4h9V3" stroke-width="1.4"/><path d="M7.5 21v-4h9v4" stroke-width="1.4"/><path d="M9.5 3v1.5h5V3" stroke-width="1.2" opacity="0.7"/><path d="M9.5 21v-1.5h5V21" stroke-width="1.2" opacity="0.7"/></svg>`,
    
    logoMark: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3.5 5.5v6.5c0 5.5 3.6 10.3 8.5 11.8 4.9-1.5 8.5-6.3 8.5-11.8V5.5L12 2z" fill="currentColor" fill-opacity="0.15" stroke-width="1.8"/><circle cx="12" cy="11.5" r="4.8" stroke-width="1.5"/><polygon points="12,9 14,10.5 13.2,13 10.8,13 10,10.5" fill="currentColor" stroke-width="1"/><line x1="12" y1="9" x2="12" y2="6.7" stroke-width="1"/><line x1="14" y1="10.5" x2="16.5" y2="9.8" stroke-width="1"/><line x1="13.2" y1="13" x2="15.2" y2="15.5" stroke-width="1"/><line x1="10.8" y1="13" x2="8.8" y2="15.5" stroke-width="1"/><line x1="10" y1="10.5" x2="7.5" y2="9.8" stroke-width="1"/><path d="M7 19.5c3 1.2 7 1.2 10 0" stroke-width="1.4" opacity="0.7"/></svg>`,

    // ── Navigation & Common ──
    home: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    
    about: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    
    services: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    
    blog: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>`,
    
    contact: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

    map: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
    
    // ── Theme & Controls ──
    sun: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    
    moon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    
    search: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    
    calendar: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.1"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="7" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor"/><rect x="11" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor"/><rect x="15" y="13" width="2.5" height="2.5" rx="0.5" fill="currentColor"/><rect x="7" y="17" width="2.5" height="2.5" rx="0.5" fill="currentColor"/><rect x="11" y="17" width="2.5" height="2.5" rx="0.5" fill="currentColor"/></svg>`,
    
    clock: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14.5"/></svg>`,
    
    pin: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor" fill-opacity="0.15"/><circle cx="12" cy="10" r="3.5" fill="currentColor"/></svg>`,
    
    mail: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" fill-opacity="0.1"/><polyline points="22,6 12,13 2,6"/></svg>`,
    
    phone: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

    // ── Trust, Rewards & Stats ──
    trophy: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z" fill="currentColor" fill-opacity="0.2" stroke-width="1.8"/><path d="M6 5H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h0" stroke-width="1.8"/><path d="M18 5h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h0" stroke-width="1.8"/><path d="M12 16v3M8 22h8M9 19h6" stroke-width="1.8"/><polygon points="12,6.5 13.2,9 15.8,9.3 13.8,11.2 14.3,13.8 12,12.5 9.7,13.8 10.2,11.2 8.2,9.3 10.8,9" fill="currentColor" stroke-width="0.8"/></svg>`,
    
    star: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    starOutline: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,

    shield: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fill-opacity="0.15"/><polyline points="9 12 11 14 15 10" stroke-width="1.8"/></svg>`,
    
    lock: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" fill-opacity="0.15"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/></svg>`,
    
    zap: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fill-opacity="0.35"/></svg>`,
    
    sparkles: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 5.6L20 10l-4.4 4.3 1 6.1L12 17.6l-4.6 2.8 1-6.1L4 10l5.6-2.4L12 2z" fill="currentColor" fill-opacity="0.25"/></svg>`,

    target: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" fill="currentColor" fill-opacity="0.08"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>`,

    gift: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12" fill="currentColor" fill-opacity="0.12"/><rect x="2" y="7" width="20" height="5" rx="1" fill="currentColor" fill-opacity="0.2"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,

    // ── Dashboard & System ──
    user: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    
    users: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="currentColor" fill-opacity="0.1"/><circle cx="9" cy="7" r="4" fill="currentColor" fill-opacity="0.2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    
    settings: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.25"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    
    bell: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" fill-opacity="0.15"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    
    creditCard: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" stroke-width="1.8" fill="currentColor" fill-opacity="0.15"/><line x1="2" y1="9" x2="22" y2="9" stroke-width="1.8"/><rect x="5" y="13" width="4" height="3" rx="0.5" fill="currentColor" fill-opacity="0.8" stroke-width="1"/><line x1="12" y1="15" x2="18" y2="15" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    
    chart: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    
    history: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/></svg>`,
    
    logout: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,

    check: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    
    cross: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    
    info: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    
    alert: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" fill-opacity="0.15"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,

    eye: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.3"/></svg>`,
    
    eyeOff: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,

    // ── Amenities & Features ──
    light: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3m0 14v3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M2 12h3m14 0h3M4.9 19.1l2.1-2.1m10-10l2.1-2.1"/><circle cx="12" cy="12" r="5" fill="currentColor" fill-opacity="0.25"/></svg>`,

    parking: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fill-opacity="0.15" stroke-width="1.8"/><path d="M9 17V7h4.5a3.5 3.5 0 0 1 0 7H9" stroke-width="2"/></svg>`,

    shower: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7a4 4 0 0 1 4 4v2"/><path d="M11 10h8l2 3H9l2-3z" fill="currentColor" fill-opacity="0.2"/><path d="M11 16v1M15 16v1M19 16v1M9 19v1M13 19v1M17 19v1"/></svg>`,

    camera: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="currentColor" fill-opacity="0.15"/><circle cx="12" cy="13" r="4"/><circle cx="12" cy="13" r="1.5" fill="currentColor"/></svg>`,

    ac: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" fill-opacity="0.12"/><line x1="6" y1="14" x2="18" y2="14"/><path d="M6 18c1.5 2 4.5 2 6 0s4.5-2 6 0" stroke-width="1.2"/><circle cx="6" cy="10" r="1" fill="currentColor"/><circle cx="9" cy="10" r="1" fill="currentColor"/></svg>`,

    fitness: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11M3 9l3-3 4 4-3 3-4-4zM14 20l3-3 4 4-3 3-4-4z" fill="currentColor" fill-opacity="0.2"/><path d="M2 13l2-2M13 2l-2 2M22 11l-2 2M11 22l2-2"/></svg>`,

    quote: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>`,

    // ── Social & Brands ──
    facebook: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><g transform="translate(2.04 2.04) scale(0.83)"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></g></svg>`,

    instagram: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,

    twitter: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

    youtube: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

    linkedin: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,

    apple: `<svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.6 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>`
  };

  const SportifyIcons = {
    get: function(name, options = {}) {
      const svg = SVG_DEFS[name];
      if (!svg) return '';
      
      const className = options.className || '';
      const size = options.size ? `width="${options.size}" height="${options.size}"` : '';
      
      if (!className && !size) return svg;

      let result = svg;
      if (className) {
        result = result.replace('<svg ', `<svg class="${className}" `);
      }
      if (options.size) {
        result = result.replace(/width="[^"]*"/, `width="${options.size}"`);
        result = result.replace(/height="[^"]*"/, `height="${options.size}"`);
      }
      return result;
    },

    renderRating: function(rating, max = 5) {
      let stars = '';
      const full = Math.floor(rating);
      for (let i = 0; i < max; i++) {
        if (i < full) {
          stars += this.get('star', { className: 'icon-star active' });
        } else {
          stars += this.get('starOutline', { className: 'icon-star' });
        }
      }
      return `<div class="stars-vector">${stars}</div>`;
    },

    replaceIcons: function(root = document) {
      root.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        const className = el.getAttribute('data-icon-class') || el.className;
        const size = el.getAttribute('data-icon-size');
        const svg = this.get(iconName, { className, size });
        if (svg) {
          el.outerHTML = svg;
        }
      });
    }
  };

  window.SportifyIcons = SportifyIcons;

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SportifyIcons.replaceIcons());
  } else {
    SportifyIcons.replaceIcons();
  }
})(window);

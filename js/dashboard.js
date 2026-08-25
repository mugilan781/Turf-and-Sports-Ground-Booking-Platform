/* ============================================================
   DASHBOARD.JS — Customer Dashboard Application Logic
   ============================================================ */

'use strict';

// ── Mock User Data ─────────────────────────────────────────
const USER = {
  name: 'Arjun Ramesh',
  email: 'arjun.ramesh@gmail.com',
  phone: '+91 98765 43210',
  location: 'Anna Nagar, Chennai',
  avatar: 'AR',
  memberSince: 'January 2025',
  sport: 'Football',
  totalBookings: 24,
  hoursPlayed: 48,
  points: 2400,
  level: 'Gold Member'
};

const BOOKINGS = [
  { id: 'BK001', turf: 'Premier Football Arena', sport: 'football', date: '2026-08-18', time: '07:00 PM', duration: '1hr', amount: 1200, status: 'confirmed' },
  { id: 'BK002', turf: 'Green Pitch Stadium', sport: 'football', date: '2026-08-15', time: '06:00 AM', duration: '1hr', amount: 900, status: 'confirmed' },
  { id: 'BK003', turf: 'Cricket Ground Pro', sport: 'cricket', date: '2026-08-12', time: '09:00 AM', duration: '2hr', amount: 3000, status: 'confirmed' },
  { id: 'BK004', turf: 'Elite Badminton Courts', sport: 'badminton', date: '2026-08-10', time: '06:00 PM', duration: '1hr', amount: 600, status: 'cancelled' },
  { id: 'BK005', turf: 'Premier Football Arena', sport: 'football', date: '2026-08-08', time: '08:00 PM', duration: '1hr', amount: 1200, status: 'confirmed' },
  { id: 'BK006', turf: 'Smash Zone Badminton', sport: 'badminton', date: '2026-08-25', time: '07:00 AM', duration: '1hr', amount: 500, status: 'pending' },
];

const NOTIFICATIONS = [
  { id: 1, type: 'confirm', title: 'Booking Confirmed!', msg: 'Your slot at Premier Football Arena on Aug 18 at 7:00 PM is confirmed.', time: '2 hours ago', unread: true },
  { id: 2, type: 'offer', title: 'Weekend Special Offer!', msg: 'Book any 2-hour slot this weekend and get 30 minutes FREE. Use code WEEKEND30.', time: '5 hours ago', unread: true },
  { id: 3, type: 'reminder', title: 'Booking Reminder', msg: 'Your cricket ground booking at 9:00 AM tomorrow is approaching.', time: '1 day ago', unread: false },
  { id: 4, type: 'payment', title: 'Payment Successful', msg: 'Payment of ₹1,200 processed successfully for BK001.', time: '2 days ago', unread: false },
  { id: 5, type: 'reward', title: 'Level Up!', msg: 'Congratulations! You\'ve reached Gold Member status. Enjoy exclusive benefits!', time: '3 days ago', unread: false },
];

// ── Dashboard Navigation ───────────────────────────────────
const activatePanel = (panelId) => {
  const navItems = document.querySelectorAll('.dashboard-nav-item[data-panel]');
  const panels = document.querySelectorAll('.dashboard-panel');

  navItems.forEach(item => item.classList.toggle('active', item.getAttribute('data-panel') === panelId));
  panels.forEach(panel => panel.classList.toggle('active', panel.getAttribute('id') === `panel-${panelId}`));
  // Update URL hash
  history.replaceState(null, '', `#${panelId}`);
};

const initDashboardNav = () => {
  const navItems = document.querySelectorAll('.dashboard-nav-item[data-panel]');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const panelId = item.getAttribute('data-panel');
      activatePanel(panelId);
    });
  });

  // Load from hash or default
  const hash = window.location.hash.replace('#', '');
  const validPanels = ['overview', 'book', 'history', 'team', 'payments', 'notifications', 'profile', 'settings'];
  activatePanel(validPanels.includes(hash) ? hash : 'overview');
};

const getSportIconHtml = (sport) => {
  if (!window.SportifyIcons) return '';
  const key = sport === 'cricket' ? 'cricket' : sport === 'badminton' ? 'badminton' : 'football';
  return window.SportifyIcons.get(key, { className: 'v-icon icon-xs v-icon-lime' });
};

const getNotificationIconHtml = (type) => {
  if (!window.SportifyIcons) return '';
  if (type === 'confirm') return window.SportifyIcons.get('check', { className: 'v-icon icon-sm v-icon-lime' });
  if (type === 'offer') return window.SportifyIcons.get('sparkles', { className: 'v-icon icon-sm v-icon-lime' });
  if (type === 'reminder') return window.SportifyIcons.get('clock', { className: 'v-icon icon-sm v-icon-lime' });
  if (type === 'payment') return window.SportifyIcons.get('creditCard', { className: 'v-icon icon-sm v-icon-lime' });
  if (type === 'reward') return window.SportifyIcons.get('trophy', { className: 'v-icon icon-sm v-icon-lime' });
  return window.SportifyIcons.get('bell', { className: 'v-icon icon-sm v-icon-lime' });
};

// ── Render Overview ────────────────────────────────────────
const renderOverview = () => {
  // Populate user info
  const elements = {
    'db-user-name': USER.name,
    'db-user-email': USER.email,
    'db-user-level': USER.level,
    'db-total-bookings': USER.totalBookings,
    'db-hours-played': USER.hoursPlayed,
    'db-points': USER.points.toLocaleString(),
  };

  Object.entries(elements).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Recent bookings (last 3)
  const recentContainer = document.getElementById('db-recent-bookings');
  if (recentContainer) {
    const recent = BOOKINGS.slice(0, 3);
    recentContainer.innerHTML = recent.map(b => `
      <tr>
        <td><strong>${b.id}</strong></td>
        <td><span style="display:inline-flex;align-items:center;gap:6px">${getSportIconHtml(b.sport)} ${b.turf}</span></td>
        <td>${new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} · ${b.time}</td>
        <td>₹${b.amount.toLocaleString()}</td>
        <td><span class="booking-status booking-status--${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span></td>
      </tr>
    `).join('');
  }
};

// ── Render Booking History ─────────────────────────────────
const renderBookingHistory = () => {
  const container = document.getElementById('db-full-history');
  if (!container) return;

  container.innerHTML = BOOKINGS.map(b => `
    <tr>
      <td><strong style="color:var(--electric-lime)">${b.id}</strong></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px">${getSportIconHtml(b.sport)} ${b.turf}</span></td>
      <td>${new Date(b.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</td>
      <td>${b.time}</td>
      <td>${b.duration}</td>
      <td><strong>₹${b.amount.toLocaleString()}</strong></td>
      <td><span class="booking-status booking-status--${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span></td>
      <td>
        ${b.status === 'confirmed' ? `<button class="btn btn-sm btn-secondary" onclick="window.SportifyApp.showToast('Booking ${b.id} cancelled.', 'info')">Cancel</button>` : ''}
        ${b.status === 'pending' ? `<button class="btn btn-sm btn-primary" onclick="window.SportifyApp.showToast('Redirecting to secure payment for ${b.id}...', 'info')">Pay Now</button>` : ''}
      </td>
    </tr>
  `).join('');
};

// ── Render Notifications ───────────────────────────────────
const renderNotifications = () => {
  const container = document.getElementById('db-notifications');
  if (!container) return;

  // Update badge
  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  const badge = document.querySelector('[data-panel="notifications"] .dashboard-nav-item__badge');
  if (badge) badge.textContent = unreadCount;

  const clockSvg = window.SportifyIcons ? window.SportifyIcons.get('clock', { className: 'v-icon icon-xs v-icon-muted' }) : '';

  container.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notification-item ${n.unread ? 'unread' : ''}">
      <div class="notification-icon">${getNotificationIconHtml(n.type)}</div>
      <div class="notification-body">
        <div class="notification-title">${n.title}</div>
        <p style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-2)">${n.msg}</p>
        <div class="notification-time">${clockSvg} ${n.time}</div>
      </div>
      ${n.unread ? '<div class="badge badge-lime" style="align-self:flex-start;flex-shrink:0">New</div>' : ''}
    </div>
  `).join('');
};

// ── Populate Profile Form ──────────────────────────────────
const populateProfile = () => {
  const fields = {
    'profile-name': USER.name,
    'profile-email': USER.email,
    'profile-phone': USER.phone,
    'profile-location': USER.location,
  };
  Object.entries(fields).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
};

// ── Profile Save ───────────────────────────────────────────
const initProfileSave = () => {
  const saveBtn = document.getElementById('save-profile-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.SportifyApp?.showToast('Profile updated successfully!', 'success');
    });
  }
};

// ── Mobile Sidebar Toggle ──────────────────────────────────
const initMobileSidebar = () => {
  const sidebar = document.querySelector('.dashboard-sidebar');
  const toggle = document.querySelector('.dashboard-sidebar-toggle');

  if (toggle && sidebar) {
    const closeSidebar = () => sidebar.classList.remove('open');

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        closeSidebar();
      }
    });

    // Close after selecting a section (mobile / tablet)
    sidebar.querySelectorAll('.dashboard-nav-item').forEach((item) => {
      item.addEventListener('click', closeSidebar);
    });

    // Reset state when viewport returns to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeSidebar();
    });
  }
};

// ── Add Booking from external module ──────────────────────
window.addBookingToHistory = (state) => {
  if (!state.selectedTurf || !state.selectedSlot) return;
  console.log('New booking added:', state);
};

// ── Deep-Link URL Query Parameter Handler for Direct Slot Booking ──
const checkBookingQueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const turfParam = urlParams.get('turf') || urlParams.get('venue');
  const slotParam = urlParams.get('slot');

  if (turfParam || slotParam) {
    // 1. Switch to Book panel
    activatePanel('book');

    // 2. Open booking modal with requested turf and slot
    const executeBookingOpen = () => {
      const turfsList = window.BookingSystem?.TURFS || [];
      let turf = null;

      if (turfParam) {
        turf = turfsList.find(t => t.id == turfParam || t.name.toLowerCase().includes(turfParam.toLowerCase()));
      }
      if (!turf && turfsList.length > 0) {
        turf = turfsList[0];
      }

      if (turf && window.BookingSystem?.openBookingModal) {
        window.BookingSystem.openBookingModal(turf);

        // 3. Select the specified slot
        if (slotParam) {
          setTimeout(() => {
            const slotContainer = document.getElementById('slot-container');
            if (slotContainer) {
              const cleanTarget = slotParam.trim().toLowerCase().replace(/^0/, '');
              const slotBtns = slotContainer.querySelectorAll('.slot-btn');
              for (const btn of slotBtns) {
                const btnClean = btn.textContent.trim().toLowerCase().replace(/^0/, '');
                if (btnClean === cleanTarget || btn.textContent.trim().toLowerCase() === slotParam.trim().toLowerCase()) {
                  if (!btn.disabled) {
                    btn.click();
                  }
                  break;
                }
              }
            }
          }, 120);
        }
      }
    };

    // Run after DOM and scripts ready
    setTimeout(executeBookingOpen, 250);
  }
};

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDashboardNav();
  renderOverview();
  renderBookingHistory();
  renderNotifications();
  populateProfile();
  initProfileSave();
  initMobileSidebar();
  checkBookingQueryParams();
});

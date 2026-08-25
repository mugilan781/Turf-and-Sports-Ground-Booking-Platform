/* ============================================================
   ADMIN-DASHBOARD.JS — Admin Dashboard Application Logic
   ============================================================ */

'use strict';

// ── Mock Admin & Platform Data ─────────────────────────────
const ADMIN_USER = {
  name: 'Vikram Kumar',
  role: 'Super Admin',
  initials: 'VK'
};

const INITIAL_DATA = {
  bookings: [
    { id: 'BK1247', customer: 'Arjun Ramesh', email: 'arjun.ramesh@gmail.com', turf: 'Premier Football Arena', sport: 'football', date: '2026-08-25', time: '07:00 PM', duration: '1hr', amount: 1200, status: 'pending' },
    { id: 'BK1246', customer: 'Karthik Selvam', email: 'karthik.s@gmail.com', turf: 'Cricket Ground Pro', sport: 'cricket', date: '2026-08-25', time: '06:00 AM', duration: '2hr', amount: 3000, status: 'confirmed' },
    { id: 'BK1245', customer: 'Meena Priya', email: 'meena.priya@gmail.com', turf: 'Elite Badminton Courts', sport: 'badminton', date: '2026-08-24', time: '06:00 PM', duration: '1hr', amount: 600, status: 'confirmed' },
    { id: 'BK1244', customer: 'Divya Prakash', email: 'divya.prakash@gmail.com', turf: 'Green Pitch Stadium', sport: 'football', date: '2026-08-24', time: '09:00 PM', duration: '1hr', amount: 900, status: 'confirmed' },
    { id: 'BK1243', customer: 'Rahul Krishna', email: 'rahul.k@gmail.com', turf: 'Smash Zone Badminton', sport: 'badminton', date: '2026-08-23', time: '07:00 AM', duration: '1hr', amount: 500, status: 'cancelled' },
    { id: 'BK1242', customer: 'Vinoth Kannan', email: 'vinoth.kannan@gmail.com', turf: 'Champions Cricket Oval', sport: 'cricket', date: '2026-08-23', time: '04:00 PM', duration: '3hr', amount: 4200, status: 'confirmed' },
    { id: 'BK1241', customer: 'Anitha Kumari', email: 'anitha.k@gmail.com', turf: 'Premier Football Arena', sport: 'football', date: '2026-08-22', time: '05:00 AM', duration: '1hr', amount: 1200, status: 'pending' },
    { id: 'BK1240', customer: 'Sanjay Gupta', email: 'sanjay.gupta@gmail.com', turf: 'Cricket Ground Pro', sport: 'cricket', date: '2026-08-21', time: '10:00 AM', duration: '2hr', amount: 3000, status: 'cancelled' },
    { id: 'BK1239', customer: 'Priya Darshini', email: 'priya.d@gmail.com', turf: 'Smash Zone Badminton', sport: 'badminton', date: '2026-08-20', time: '08:00 PM', duration: '1hr', amount: 500, status: 'confirmed' },
    { id: 'BK1238', customer: 'Mohan Raj', email: 'mohan.raj@gmail.com', turf: 'Green Pitch Stadium', sport: 'football', date: '2026-08-19', time: '07:00 PM', duration: '2hr', amount: 1800, status: 'confirmed' }
  ],
  turfs: [
    { id: 'T01', name: 'Premier Football Arena', sport: 'Football', location: 'Anna Nagar, Chennai', price: 1200, rating: 4.8, bookingsCount: 412, status: 'active' },
    { id: 'T02', name: 'Green Pitch Stadium', sport: 'Football', location: 'Adyar, Chennai', price: 900, rating: 4.6, bookingsCount: 356, status: 'active' },
    { id: 'T03', name: 'Cricket Ground Pro', sport: 'Cricket', location: 'Kilpauk, Chennai', price: 1500, rating: 4.9, bookingsCount: 298, status: 'active' },
    { id: 'T04', name: 'Elite Badminton Courts', sport: 'Badminton', location: 'Velachery, Chennai', price: 600, rating: 4.7, bookingsCount: 187, status: 'maintenance' },
    { id: 'T05', name: 'Smash Zone Badminton', sport: 'Badminton', location: 'T. Nagar, Chennai', price: 500, rating: 4.5, bookingsCount: 154, status: 'active' },
    { id: 'T06', name: 'Champions Cricket Oval', sport: 'Cricket', location: 'Porur, Chennai', price: 1400, rating: 4.4, bookingsCount: 121, status: 'active' }
  ],
  users: [
    { id: 'U001', name: 'Arjun Ramesh', email: 'arjun.ramesh@gmail.com', initials: 'AR', bookings: 24, spent: 28400, joined: 'Jan 2025', blocked: false },
    { id: 'U002', name: 'Karthik Selvam', email: 'karthik.s@gmail.com', initials: 'KS', bookings: 18, spent: 21600, joined: 'Mar 2025', blocked: false },
    { id: 'U003', name: 'Meena Priya', email: 'meena.priya@gmail.com', initials: 'MP', bookings: 15, spent: 9800, joined: 'Apr 2025', blocked: false },
    { id: 'U004', name: 'Divya Prakash', email: 'divya.prakash@gmail.com', initials: 'DP', bookings: 12, spent: 11400, joined: 'Jun 2025', blocked: false },
    { id: 'U005', name: 'Rahul Krishna', email: 'rahul.k@gmail.com', initials: 'RK', bookings: 9, spent: 6700, joined: 'Aug 2025', blocked: true },
    { id: 'U006', name: 'Vinoth Kannan', email: 'vinoth.kannan@gmail.com', initials: 'VK', bookings: 11, spent: 15200, joined: 'Sep 2025', blocked: false },
    { id: 'U007', name: 'Anitha Kumari', email: 'anitha.k@gmail.com', initials: 'AK', bookings: 7, spent: 5200, joined: 'Nov 2025', blocked: false },
    { id: 'U008', name: 'Sanjay Gupta', email: 'sanjay.gupta@gmail.com', initials: 'SG', bookings: 5, spent: 4800, joined: 'Jan 2026', blocked: false }
  ],
  transactions: [
    { id: 'TXN9021', date: '2026-08-25', desc: 'BK1247 — Premier Football Arena · 7 PM slot', method: 'UPI', amount: 1200, status: 'success' },
    { id: 'TXN9020', date: '2026-08-25', desc: 'BK1246 — Cricket Ground Pro · 6 AM slot', method: 'VISA', amount: 3000, status: 'success' },
    { id: 'TXN9019', date: '2026-08-24', desc: 'BK1245 — Elite Badminton Courts · 6 PM slot', method: 'UPI', amount: 600, status: 'success' },
    { id: 'TXN9018', date: '2026-08-24', desc: 'BK1244 — Green Pitch Stadium · 9 PM slot', method: 'Mastercard', amount: 900, status: 'pending' },
    { id: 'TXN9017', date: '2026-08-23', desc: 'BK1243 — Smash Zone Badminton · 7 AM slot', method: 'UPI', amount: 500, status: 'refunded' },
    { id: 'TXN9016', date: '2026-08-23', desc: 'BK1242 — Champions Cricket Oval · 4 PM slot', method: 'VISA', amount: 4200, status: 'success' },
    { id: 'TXN9015', date: '2026-08-22', desc: 'BK1240 — Cricket Ground Pro · 10 AM slot', method: 'UPI', amount: 3000, status: 'refunded' },
    { id: 'TXN9014', date: '2026-08-20', desc: 'BK1239 — Smash Zone Badminton · 8 PM slot', method: 'Mastercard', amount: 500, status: 'success' }
  ],
  notifications: [
    { id: 1, type: 'confirm', title: 'New Booking Received', msg: 'Arjun Ramesh booked Premier Football Arena for Aug 25, 7:00 PM.', time: '10 min ago', unread: true },
    { id: 2, type: 'alert', title: 'Payment Pending Review', msg: 'Transaction TXN9018 (₹900) requires manual verification.', time: '1 hour ago', unread: true },
    { id: 3, type: 'stadium', title: 'Maintenance Completed', msg: 'Elite Badminton Courts resurfacing is done. Re-enable when ready.', time: '3 hours ago', unread: true },
    { id: 4, type: 'user', title: 'New User Registered', msg: 'Sanjay Gupta just created an account via Google Sign-in.', time: 'Yesterday', unread: false },
    { id: 5, type: 'chart', title: 'Weekly Report Ready', msg: 'Your platform performance report for Aug 16–22 is ready to view.', time: '2 days ago', unread: false }
  ]
};

let DATA = JSON.parse(JSON.stringify(INITIAL_DATA));

const WEEK_REVENUE = [
  { day: 'Tue', value: 18400 }, { day: 'Wed', value: 14250 }, { day: 'Thu', value: 22800 },
  { day: 'Fri', value: 31500 }, { day: 'Sat', value: 46200 }, { day: 'Sun', value: 52400 }, { day: 'Today', value: 18900 }
];

const MONTHLY_REVENUE = [
  { month: 'Jan', value: 382000 }, { month: 'Feb', value: 401500 }, { month: 'Mar', value: 445200 },
  { month: 'Apr', value: 412800 }, { month: 'May', value: 489000 }, { month: 'Jun', value: 534400 },
  { month: 'Jul', value: 618700 }, { month: 'Aug', value: 589200 }, { month: 'Sep', value: 0 },
  { month: 'Oct', value: 0 }, { month: 'Nov', value: 0 }, { month: 'Dec', value: 0 }
];

const PEAK_HOURS = [
  { hour: '6–8 AM', pct: 42 }, { hour: '9–11 AM', pct: 68 }, { hour: '12–3 PM', pct: 35 },
  { hour: '4–6 PM', pct: 81 }, { hour: '7–9 PM', pct: 96 }, { hour: '10–11 PM', pct: 54 }
];

// ── Helpers ────────────────────────────────────────────────
const fmtINR = (n) => '₹' + Number(n).toLocaleString('en-IN');
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const getIconHtml = (name, className = 'v-icon icon-xs v-icon-lime') => {
  if (!window.SportifyIcons) return '';
  return window.SportifyIcons.get(name, { className });
};

const getSportIconKey = (sport) => {
  const key = String(sport).toLowerCase();
  return key === 'cricket' ? 'cricket' : key === 'badminton' ? 'badminton' : 'football';
};

const showToastSafe = (msg, type) => {
  if (window.SportifyApp?.showToast) window.SportifyApp.showToast(msg, type);
};

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const statusBadge = (status) => `<span class="booking-status booking-status--${status}">${cap(status)}</span>`;

// ── Sidebar Navigation ─────────────────────────────────────
const VALID_PANELS = ['overview', 'bookings', 'turfs', 'users', 'payments', 'reports', 'notifications', 'settings'];

const activatePanel = (panelId) => {
  document.querySelectorAll('.dashboard-nav-item[data-panel]').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-panel') === panelId);
  });
  document.querySelectorAll('.dashboard-panel').forEach(panel => {
    panel.classList.toggle('active', panel.getAttribute('id') === `panel-${panelId}`);
  });
  history.replaceState(null, '', `#${panelId}`);
};

const initAdminNav = () => {
  document.querySelectorAll('.dashboard-nav-item[data-panel]').forEach(item => {
    item.addEventListener('click', () => activatePanel(item.getAttribute('data-panel')));
  });
  const hash = window.location.hash.replace('#', '');
  activatePanel(VALID_PANELS.includes(hash) ? hash : 'overview');
};

// ── Modal System ───────────────────────────────────────────
const openModal = (id) => document.getElementById(id)?.classList.add('open');
const closeModal = (id) => document.getElementById(id)?.classList.remove('open');

const initModals = () => {
  // Close buttons + overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('[data-close-modal]')) overlay.classList.remove('open');
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
  });
};

// Confirm modal
let confirmCallback = null;

const showConfirm = ({ title = 'Are you sure?', message = '', okText = 'Confirm', danger = true, onOk }) => {
  const overlay = document.getElementById('confirm-modal-overlay');
  const titleEl = document.getElementById('confirm-modal-title');
  const msgEl = document.getElementById('confirm-modal-message');
  const okBtn = document.getElementById('confirm-modal-ok');
  if (!overlay || !okBtn) return;

  titleEl.textContent = title;
  msgEl.textContent = message;
  okBtn.textContent = okText;
  okBtn.style.background = danger ? 'var(--error)' : '';
  okBtn.style.borderColor = danger ? 'var(--error)' : '';

  confirmCallback = onOk || null;
  openModal('confirm-modal-overlay');
};

const initConfirmModal = () => {
  document.getElementById('confirm-modal-ok')?.addEventListener('click', () => {
    closeModal('confirm-modal-overlay');
    if (typeof confirmCallback === 'function') confirmCallback();
    confirmCallback = null;
  });
};

// ── Render: Overview ───────────────────────────────────────
const renderOverviewStats = () => {
  const revenue = DATA.transactions.filter(t => t.status === 'success').reduce((sum, t) => sum + t.amount, 0);
  const activeUsers = DATA.users.filter(u => !u.blocked).length;
  const activeTurfs = DATA.turfs.filter(t => t.status === 'active').length;

  const els = {
    'stat-total-revenue': fmtINR(revenue),
    'stat-total-bookings': DATA.bookings.length,
    'stat-active-users': activeUsers,
    'stat-active-turfs': activeTurfs,
    'admin-user-name': ADMIN_USER.name
  };
  Object.entries(els).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Weekly revenue bar chart
  const chartEl = document.getElementById('admin-revenue-chart');
  if (chartEl) {
    const max = Math.max(...WEEK_REVENUE.map(d => d.value));
    chartEl.innerHTML = WEEK_REVENUE.map(d => {
      const h = Math.max((d.value / max) * 100, 6);
      const isToday = d.day === 'Today';
      return `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">
          <span style="font-size:10px;font-weight:700;color:var(--text-muted)">${(d.value / 1000).toFixed(1)}k</span>
          <div title="${d.day}: ${fmtINR(d.value)}" style="width:100%;max-width:44px;height:${h}%;background:${isToday ? 'linear-gradient(180deg,var(--electric-lime),var(--stadium-green))' : 'rgba(184,230,46,0.25)'};border-radius:8px 8px 2px 2px"></div>
          <span style="font-size:var(--text-xs);font-weight:${isToday ? '700' : '500'};color:${isToday ? 'var(--electric-lime)' : 'var(--text-muted)'}">${d.day}</span>
        </div>`;
    }).join('');
  }

  // Bookings by sport split
  const splitEl = document.getElementById('admin-sport-split');
  if (splitEl) {
    const sports = ['football', 'cricket', 'badminton'];
    const total = DATA.bookings.length || 1;
    const colors = { football: 'var(--electric-lime)', cricket: '#F59E0B', badminton: '#3B82F6' };
    splitEl.innerHTML = sports.map(sport => {
      const count = DATA.bookings.filter(b => b.sport === sport).length;
      const pct = Math.round((count / total) * 100);
      return `
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:var(--text-sm)">
            <span style="display:inline-flex;align-items:center;gap:6px;font-weight:600">
              ${getIconHtml(getSportIconKey(sport))} ${cap(sport)}
            </span>
            <span style="color:var(--text-muted)">${count} bookings · ${pct}%</span>
          </div>
          <div style="height:10px;background:var(--bg-card-hover);border-radius:999px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${colors[sport]};border-radius:999px;transition:width .4s ease"></div>
          </div>
        </div>`;
    }).join('');
  }

  // Recent bookings (top 5)
  const recentEl = document.getElementById('admin-recent-bookings');
  if (recentEl) {
    recentEl.innerHTML = DATA.bookings.slice(0, 5).map(b => `
      <tr>
        <td><strong>${b.id}</strong></td>
        <td>${b.customer}</td>
        <td><span style="display:inline-flex;align-items:center;gap:6px">${getIconHtml(getSportIconKey(b.sport))} ${b.turf}</span></td>
        <td>${formatDate(b.date)} · ${b.time}</td>
        <td><strong>${fmtINR(b.amount)}</strong></td>
        <td>${statusBadge(b.status)}</td>
      </tr>`).join('');
  }
};

// ── Render: Bookings ───────────────────────────────────────
const bookingFilter = { status: 'all', query: '' };

const renderBookings = () => {
  // Sidebar pending badge
  const pending = DATA.bookings.filter(b => b.status === 'pending').length;
  const badge = document.getElementById('badge-pending-bookings');
  if (badge) {
    badge.textContent = pending;
    badge.style.display = pending > 0 ? 'flex' : 'none';
  }

  const tbody = document.getElementById('admin-all-bookings');
  if (!tbody) return;

  const q = bookingFilter.query.trim().toLowerCase();
  const filtered = DATA.bookings.filter(b =>
    (bookingFilter.status === 'all' || b.status === bookingFilter.status) &&
    (!q || b.id.toLowerCase().includes(q) || b.customer.toLowerCase().includes(q) || b.turf.toLowerCase().includes(q))
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:var(--space-8);color:var(--text-muted)">No bookings match your filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td><strong style="color:var(--electric-lime)">${b.id}</strong></td>
      <td>
        <div style="font-weight:600">${b.customer}</div>
        <div style="font-size:var(--text-xs);color:var(--text-muted)">${b.email}</div>
      </td>
      <td><span style="display:inline-flex;align-items:center;gap:6px">${getIconHtml(getSportIconKey(b.sport))} ${b.turf}</span></td>
      <td>${formatDate(b.date)}<br><span style="font-size:var(--text-xs);color:var(--text-muted)">${b.time} · ${b.duration}</span></td>
      <td><strong>${fmtINR(b.amount)}</strong></td>
      <td>${statusBadge(b.status)}</td>
      <td>
        <div style="display:flex;gap:var(--space-2);flex-wrap:wrap">
          ${b.status === 'pending' ? `<button class="btn btn-sm btn-primary" data-action="confirm" data-id="${b.id}" title="Confirm booking">Confirm</button>` : ''}
          ${b.status === 'confirmed' ? `<button class="btn btn-sm btn-secondary" data-action="cancel" data-id="${b.id}" title="Cancel booking">Cancel</button>` : ''}
          <button class="btn btn-sm btn-outline" data-action="delete-booking" data-id="${b.id}" title="Delete record" style="color:var(--error);border-color:rgba(239,68,68,0.4)">Delete</button>
        </div>
      </td>
    </tr>`).join('');
};

const initBookingFilters = () => {
  document.querySelectorAll('[data-status-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-status-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bookingFilter.status = btn.getAttribute('data-status-filter');
      renderBookings();
    });
  });

  document.getElementById('booking-search')?.addEventListener('input', (e) => {
    bookingFilter.query = e.target.value;
    renderBookings();
  });
};

// ── Render: Turfs ──────────────────────────────────────────
const renderTurfs = () => {
  const grid = document.getElementById('admin-turf-grid');
  if (!grid) return;

  grid.innerHTML = DATA.turfs.map(t => `
    <div class="payment-card" style="padding:var(--space-5)">
      <div style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,var(--electric-lime),var(--stadium-green));border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;flex-shrink:0">
          ${getIconHtml(getSportIconKey(t.sport), 'v-icon icon-md v-icon-navy')}
        </div>
        <div style="flex:1;min-width:0">
          <h3 style="font-size:var(--text-base);font-weight:700;line-height:1.3">${t.name}</h3>
          <p style="font-size:var(--text-xs);color:var(--text-muted);margin-top:2px">${t.location}</p>
        </div>
        ${t.status === 'active'
          ? '<span class="badge badge-lime">Active</span>'
          : '<span class="booking-status booking-status--pending">Maintenance</span>'}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:var(--space-3) var(--space-5);margin-bottom:var(--space-4);font-size:var(--text-sm)">
        <div><span style="color:var(--text-muted)">Price:</span> <strong>${fmtINR(t.price)}/hr</strong></div>
        <div><span style="color:var(--text-muted)">Rating:</span> <strong style="color:var(--electric-lime)">★ ${t.rating}</strong></div>
        <div><span style="color:var(--text-muted)">Bookings:</span> <strong>${t.bookingsCount}</strong></div>
      </div>
      <div style="display:flex;gap:var(--space-2);flex-wrap:wrap">
        <button class="btn btn-secondary btn-sm" data-action="toggle-turf" data-id="${t.id}">
          ${t.status === 'active' ? 'Set Maintenance' : 'Activate Turf'}
        </button>
        <button class="btn btn-primary btn-sm" data-action="edit-turf" data-id="${t.id}">Edit</button>
        <button class="btn btn-outline btn-sm" data-action="delete-turf" data-id="${t.id}" style="color:var(--error);border-color:rgba(239,68,68,0.4)">Delete</button>
      </div>
    </div>`).join('');
};

// ── Turf Add / Edit Modal ──────────────────────────────────
const openTurfModal = (turf = null) => {
  const form = document.getElementById('turf-form');
  if (!form) return;
  form.reset();

  document.getElementById('turf-id').value = turf ? turf.id : '';
  document.getElementById('turf-modal-title').textContent = turf ? 'Edit Turf' : 'Add New Turf';
  document.getElementById('save-turf-btn').textContent = turf ? 'Update Turf' : 'Save Turf';

  if (turf) {
    document.getElementById('turf-name').value = turf.name;
    document.getElementById('turf-sport-select').value = turf.sport;
    document.getElementById('turf-price').value = turf.price;
    document.getElementById('turf-location').value = turf.location;
    document.getElementById('turf-status-select').value = turf.status;
  }
  openModal('turf-modal-overlay');
};

const initTurfForm = () => {
  document.getElementById('add-turf-btn')?.addEventListener('click', () => openTurfModal());

  document.getElementById('turf-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('turf-id').value;
    const name = document.getElementById('turf-name').value.trim();
    const price = parseInt(document.getElementById('turf-price').value, 10);
    const location = document.getElementById('turf-location').value.trim();

    if (!name || !price || !location) {
      showToastSafe('Please fill in all required fields.', 'error');
      return;
    }

    const payload = {
      name,
      sport: document.getElementById('turf-sport-select').value,
      price,
      location,
      status: document.getElementById('turf-status-select').value
    };

    if (id) {
      const turf = DATA.turfs.find(t => t.id === id);
      if (turf) Object.assign(turf, payload);
      showToastSafe(`"${name}" updated successfully!`, 'success');
    } else {
      const nextNum = DATA.turfs.length + 1;
      DATA.turfs.push({
        id: 'T' + String(nextNum).padStart(2, '0'),
        ...payload,
        rating: 4.5,
        bookingsCount: 0
      });
      showToastSafe(`"${name}" added to the platform!`, 'success');
    }

    closeModal('turf-modal-overlay');
    renderTurfs();
    renderOverviewStats();
  });
};

// ── Render: Users ──────────────────────────────────────────
const userFilterQuery = { q: '' };

const renderUsers = () => {
  const tbody = document.getElementById('admin-users-tbody');
  if (!tbody) return;

  const q = userFilterQuery.q.trim().toLowerCase();
  const filtered = DATA.users.filter(u => !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:var(--space-8);color:var(--text-muted)">No users found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(u => `
    <tr>
      <td>
        <div style="display:inline-flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--electric-lime),var(--stadium-green));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--midnight-navy)">${u.initials}</div>
          <strong>${u.name}</strong>
        </div>
      </td>
      <td>${u.email}</td>
      <td>${u.bookings}</td>
      <td><strong>${fmtINR(u.spent)}</strong></td>
      <td>${u.joined}</td>
      <td>${u.blocked
        ? '<span class="booking-status booking-status--cancelled">Blocked</span>'
        : '<span class="booking-status booking-status--confirmed">Active</span>'}</td>
      <td>
        <button class="btn btn-sm ${u.blocked ? 'btn-primary' : 'btn-outline'}"
          data-action="${u.blocked ? 'unblock-user' : 'block-user'}" data-id="${u.id}"
          style="${u.blocked ? '' : 'color:var(--warning);border-color:rgba(245,158,11,0.4)'}">
          ${u.blocked ? 'Unblock' : 'Block'}
        </button>
      </td>
    </tr>`).join('');
};

const initUserSearch = () => {
  document.getElementById('user-search')?.addEventListener('input', (e) => {
    userFilterQuery.q = e.target.value;
    renderUsers();
  });
};

// ── Render: Payments ───────────────────────────────────────
const renderPayments = () => {
  const txns = DATA.transactions;
  const revenue = txns.filter(t => t.status === 'success').reduce((s, t) => s + t.amount, 0);
  const pendingAmt = txns.filter(t => t.status === 'pending').reduce((s, t) => s + t.amount, 0);
  const refunded = txns.filter(t => t.status === 'refunded').reduce((s, t) => s + t.amount, 0);
  const resolved = txns.filter(t => t.status !== 'pending').length;
  const successRate = txns.length ? Math.round((resolved / txns.length) * 100) : 0;

  const els = {
    'pay-revenue': fmtINR(revenue),
    'pay-pending': fmtINR(pendingAmt),
    'pay-refunded': fmtINR(refunded),
    'pay-success-rate': successRate + '%'
  };
  Object.entries(els).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  const tbody = document.getElementById('admin-transactions');
  if (!tbody) return;

  tbody.innerHTML = txns.map(t => `
    <tr>
      <td><strong style="color:var(--electric-lime)">${t.id}</strong></td>
      <td>${formatDate(t.date)}</td>
      <td>${t.desc}</td>
      <td>${t.method}</td>
      <td><strong>${fmtINR(t.amount)}</strong></td>
      <td>${statusBadge(t.status)}</td>
      <td>
        ${t.status === 'success'
          ? `<button class="btn btn-sm btn-outline" data-action="refund" data-id="${t.id}" style="color:var(--error);border-color:rgba(239,68,68,0.4)">Refund</button>`
          : t.status === 'pending'
            ? `<button class="btn btn-sm btn-primary" data-action="verify-payment" data-id="${t.id}">Verify</button>`
            : '<span style="font-size:var(--text-xs);color:var(--text-muted)">—</span>'}
      </td>
    </tr>`).join('');
};

// ── Render: Reports ────────────────────────────────────────
const renderReports = () => {
  // Monthly revenue chart
  const monthlyEl = document.getElementById('admin-monthly-chart');
  if (monthlyEl) {
    const max = Math.max(...MONTHLY_REVENUE.map(m => m.value));
    monthlyEl.innerHTML = MONTHLY_REVENUE.map((m, i) => {
      const hasData = m.value > 0;
      const h = hasData ? Math.max((m.value / max) * 100, 4) : 2;
      const isCurrent = m.month === 'Aug';
      return `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">
          ${hasData ? `<span style="font-size:10px;font-weight:700;color:var(--text-muted)">${Math.round(m.value / 1000)}k</span>` : ''}
          <div title="${m.month}: ${hasData ? fmtINR(m.value) : 'Upcoming'}" style="width:100%;max-width:52px;height:${h}%;background:${isCurrent ? 'linear-gradient(180deg,var(--electric-lime),var(--stadium-green))' : hasData ? 'rgba(184,230,46,0.28)' : 'var(--bg-card-hover)'};border-radius:8px 8px 2px 2px"></div>
          <span style="font-size:var(--text-xs);font-weight:${isCurrent ? '700' : '500'};color:${isCurrent ? 'var(--electric-lime)' : 'var(--text-muted)'}">${m.month}</span>
        </div>`;
    }).join('');
  }

  // Top performing turfs
  const topEl = document.getElementById('admin-top-turfs');
  if (topEl) {
    const sorted = [...DATA.turfs].sort((a, b) => b.bookingsCount - a.bookingsCount);
    const maxCount = Math.max(...sorted.map(t => t.bookingsCount), 1);
    topEl.innerHTML = sorted.slice(0, 5).map((t, i) => `
      <div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:var(--text-sm)">
          <span style="display:inline-flex;align-items:center;gap:8px;font-weight:600">
            <span style="width:22px;height:22px;border-radius:6px;background:rgba(184,230,46,0.15);color:var(--electric-lime);display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800">#${i + 1}</span>
            ${t.name}
          </span>
          <span style="color:var(--text-muted)">${t.bookingsCount} bookings · ${fmtINR(t.bookingsCount * t.price)}</span>
        </div>
        <div style="height:10px;background:var(--bg-card-hover);border-radius:999px;overflow:hidden">
          <div style="height:100%;width:${Math.round((t.bookingsCount / maxCount) * 100)}%;background:linear-gradient(90deg,var(--stadium-green),var(--electric-lime));border-radius:999px"></div>
        </div>
      </div>`).join('');
  }

  // Peak hours
  const peakEl = document.getElementById('admin-peak-hours');
  if (peakEl) {
    peakEl.innerHTML = PEAK_HOURS.map(p => `
      <div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:var(--text-sm)">
          <span style="font-weight:600;display:inline-flex;align-items:center;gap:6px">${getIconHtml('clock')} ${p.hour}</span>
          <span style="color:var(--text-muted)">${p.pct}% utilization</span>
        </div>
        <div style="height:10px;background:var(--bg-card-hover);border-radius:999px;overflow:hidden">
          <div style="height:100%;width:${p.pct}%;background:${p.pct >= 80 ? 'linear-gradient(90deg,#F59E0B,#EF4444)' : 'linear-gradient(90deg,var(--stadium-green),#3B82F6)'};border-radius:999px"></div>
        </div>
      </div>`).join('');
  }
};

// ── Render: Notifications ──────────────────────────────────
const getAdminNotificationIcon = (type) => {
  const map = { confirm: 'check', alert: 'alert', stadium: 'stadium', user: 'users', chart: 'chart', offer: 'sparkles' };
  return getIconHtml(map[type] || 'bell', 'v-icon icon-sm v-icon-lime');
};

const renderNotifications = () => {
  const unread = DATA.notifications.filter(n => n.unread).length;
  const badge = document.getElementById('badge-admin-notifications');
  if (badge) {
    badge.textContent = unread;
    badge.style.display = unread > 0 ? 'flex' : 'none';
  }

  const list = document.getElementById('admin-notifications-list');
  if (!list) return;

  const clockSvg = getIconHtml('clock', 'v-icon icon-xs v-icon-muted');

  list.innerHTML = DATA.notifications.length === 0
    ? '<p style="color:var(--text-muted);padding:var(--space-6);text-align:center">You\'re all caught up! No notifications.</p>'
    : DATA.notifications.map(n => `
      <div class="notification-item ${n.unread ? 'unread' : ''}" data-action="read-notification" data-id="${n.id}" role="button" tabindex="0" aria-label="Mark notification as read">
        <div class="notification-icon">${getAdminNotificationIcon(n.type)}</div>
        <div class="notification-body">
          <div class="notification-title">${n.title}</div>
          <p style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-2)">${n.msg}</p>
          <div class="notification-time">${clockSvg} ${n.time}${n.unread ? ' · Click to mark as read' : ''}</div>
        </div>
        ${n.unread ? '<div class="badge badge-lime" style="align-self:flex-start;flex-shrink:0">New</div>' : ''}
      </div>`).join('');
};

// ── Global Action Handler (Event Delegation) ───────────────
const ACTIONS = {
  'confirm': (id) => {
    const b = DATA.bookings.find(x => x.id === id);
    if (b) {
      b.status = 'confirmed';
      renderBookings(); renderOverviewStats(); renderPayments();
      showToastSafe(`Booking ${b.id} confirmed successfully!`, 'success');
    }
  },
  'cancel': (id) => {
    showConfirm({
      title: 'Cancel this booking?',
      message: `The slot will be released back into inventory and the customer will be notified.`,
      okText: 'Yes, Cancel Booking',
      onOk: () => {
        const b = DATA.bookings.find(x => x.id === id);
        if (b) {
          b.status = 'cancelled';
          renderBookings(); renderOverviewStats();
          showToastSafe(`Booking ${b.id} has been cancelled.`, 'info');
        }
      }
    });
  },
  'delete-booking': (id) => {
    showConfirm({
      title: 'Delete booking record?',
      message: `This permanently removes booking ${id} from the system. This action cannot be undone.`,
      okText: 'Delete Permanently',
      onOk: () => {
        DATA.bookings = DATA.bookings.filter(x => x.id !== id);
        renderBookings(); renderOverviewStats();
        showToastSafe(`Booking ${id} deleted.`, 'info');
      }
    });
  },
  'toggle-turf': (id) => {
    const t = DATA.turfs.find(x => x.id === id);
    if (t) {
      t.status = t.status === 'active' ? 'maintenance' : 'active';
      renderTurfs(); renderOverviewStats();
      showToastSafe(
        t.status === 'active' ? `${t.name} is now live and accepting bookings.` : `${t.name} moved to maintenance mode.`,
        t.status === 'active' ? 'success' : 'info'
      );
    }
  },
  'edit-turf': (id) => {
    const t = DATA.turfs.find(x => x.id === id);
    if (t) openTurfModal(t);
  },
  'delete-turf': (id) => {
    const t = DATA.turfs.find(x => x.id === id);
    showConfirm({
      title: 'Delete this turf?',
      message: `"${t?.name}" and its availability calendar will be permanently removed from the platform.`,
      okText: 'Delete Turf',
      onOk: () => {
        DATA.turfs = DATA.turfs.filter(x => x.id !== id);
        renderTurfs(); renderOverviewStats();
        showToastSafe('Turf removed from platform.', 'info');
      }
    });
  },
  'block-user': (id) => {
    showConfirm({
      title: 'Block this user?',
      message: 'They will not be able to log in or make new bookings until unblocked.',
      okText: 'Block User',
      onOk: () => {
        const u = DATA.users.find(x => x.id === id);
        if (u) {
          u.blocked = true;
          renderUsers(); renderOverviewStats();
          showToastSafe(`${u.name} has been blocked.`, 'info');
        }
      }
    });
  },
  'unblock-user': (id) => {
    const u = DATA.users.find(x => x.id === id);
    if (u) {
      u.blocked = false;
      renderUsers(); renderOverviewStats();
      showToastSafe(`${u.name} can access the platform again.`, 'success');
    }
  },
  'refund': (id) => {
    showConfirm({
      title: 'Process this refund?',
      message: 'The amount will be returned to the customer\'s original payment method within 5–7 business days.',
      okText: 'Process Refund',
      onOk: () => {
        const t = DATA.transactions.find(x => x.id === id);
        if (t) {
          t.status = 'refunded';
          renderPayments(); renderOverviewStats();
          showToastSafe(`Refund of ${fmtINR(t.amount)} processed for ${t.id}.`, 'success');
        }
      }
    });
  },
  'verify-payment': (id) => {
    const t = DATA.transactions.find(x => x.id === id);
    if (t) {
      t.status = 'success';
      renderPayments(); renderOverviewStats();
      showToastSafe(`Payment ${t.id} verified and marked successful.`, 'success');
    }
  },
  'read-notification': (id) => {
    const n = DATA.notifications.find(x => String(x.id) === String(id));
    if (n && n.unread) {
      n.unread = false;
      renderNotifications();
      showToastSafe('Notification marked as read.', 'info');
    }
  }
};

const initActionDelegation = () => {
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const id = btn.getAttribute('data-id');
    if (ACTIONS[action]) ACTIONS[action](id);
  });

  // Keyboard support (Enter / Space) for notification rows
  document.body.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('[data-action="read-notification"]');
    if (!item) return;
    e.preventDefault();
    ACTIONS['read-notification'](item.getAttribute('data-id'));
  });
};

// ── Notifications: Mark All Read ───────────────────────────
const initMarkAllRead = () => {
  document.getElementById('admin-mark-read-btn')?.addEventListener('click', () => {
    const hadUnread = DATA.notifications.some(n => n.unread);
    DATA.notifications.forEach(n => { n.unread = false; });
    renderNotifications();
    showToastSafe(hadUnread ? 'All notifications marked as read.' : 'You\'re all caught up!', 'success');
  });
};

// ── Reports: Downloads ─────────────────────────────────────
const triggerDownload = (content, filename, mime) => {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const exportBookingsCsv = () => {
  const rows = [['Booking ID', 'Customer', 'Email', 'Turf', 'Date', 'Time', 'Duration', 'Amount (INR)', 'Status']];
  DATA.bookings.forEach(b => {
    rows.push([b.id, b.customer, b.email, b.turf, b.date, b.time, b.duration, b.amount, b.status]);
  });
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\r\n');
  triggerDownload('\uFEFF' + csv, `sportifyturf-bookings-${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv;charset=utf-8;');
  showToastSafe(`${DATA.bookings.length} bookings exported as CSV!`, 'success');
};

const downloadFullReport = () => {
  const revenue = DATA.transactions.filter(t => t.status === 'success').reduce((s, t) => s + t.amount, 0);
  const lines = [
    '============================================',
    '  SPORTIFYTURF — PLATFORM PERFORMANCE REPORT',
    `  Generated: ${new Date().toLocaleString('en-IN')}`,
    '============================================',
    '',
    '── SUMMARY ──',
    `Total Bookings     : ${DATA.bookings.length}`,
    `Active Users       : ${DATA.users.filter(u => !u.blocked).length}`,
    `Blocked Users      : ${DATA.users.filter(u => u.blocked).length}`,
    `Active Turfs       : ${DATA.turfs.filter(t => t.status === 'active').length}`,
    `Total Revenue      : ${fmtINR(revenue)}`,
    '',
    '── TOP TURFS BY BOOKINGS ──',
    ...[...DATA.turfs].sort((a, b) => b.bookingsCount - a.bookingsCount)
      .map((t, i) => `${i + 1}. ${t.name} — ${t.bookingsCount} bookings (${fmtINR(t.bookingsCount * t.price)})`),
    '',
    '── RECENT TRANSACTIONS ──',
    ...DATA.transactions.map(t => `${t.id} | ${t.date} | ${t.desc} | ${t.method} | ${fmtINR(t.amount)} | ${t.status}`),
    '',
    '── MONTHLY REVENUE (2026) ──',
    ...MONTHLY_REVENUE.filter(m => m.value > 0).map(m => `${m.month}: ${fmtINR(m.value)}`),
    '',
    '— End of Report —'
  ];
  triggerDownload(lines.join('\n'), `sportifyturf-report-${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain;charset=utf-8;');
  showToastSafe('Full platform report downloaded!', 'success');
};

const initReportDownloads = () => {
  document.getElementById('download-report-btn')?.addEventListener('click', downloadFullReport);
};

// ── Settings ───────────────────────────────────────────────
const initSettings = () => {
  document.getElementById('save-settings-btn')?.addEventListener('click', () => {
    const win = document.getElementById('setting-max-window')?.value;
    const policy = document.getElementById('setting-cancel-policy')?.value;
    const fee = document.getElementById('setting-platform-fee')?.value;
    const email = document.getElementById('setting-support-email')?.value;
    showToastSafe(`Settings saved! Window: ${win}, Cutoff: ${policy}, Fee: ${fee}%, Support: ${email}`, 'success');
  });

  document.getElementById('reset-data-btn')?.addEventListener('click', () => {
    showConfirm({
      title: 'Reset all platform data?',
      message: 'Every change you made in this session (bookings, turfs, users, payments) will be reverted to defaults.',
      okText: 'Reset Everything',
      onOk: () => {
        DATA = JSON.parse(JSON.stringify(INITIAL_DATA));
        bookingFilter.status = 'all';
        bookingFilter.query = '';
        userFilterQuery.q = '';
        const bs = document.getElementById('booking-search');
        const us = document.getElementById('user-search');
        if (bs) bs.value = '';
        if (us) us.value = '';
        document.querySelectorAll('[data-status-filter]').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-status-filter') === 'all');
        });
        renderAll();
        showToastSafe('Platform data restored to defaults.', 'success');
      }
    });
  });
};

// ── Mobile Sidebar Toggle ──────────────────────────────────
const initMobileSidebar = () => {
  const sidebar = document.querySelector('.dashboard-sidebar');
  const toggle = document.querySelector('.dashboard-sidebar-toggle');
  if (!toggle || !sidebar) return;

  const closeSidebar = () => sidebar.classList.remove('open');

  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) closeSidebar();
  });

  // Close after selecting a section (mobile / tablet)
  sidebar.querySelectorAll('.dashboard-nav-item').forEach((item) => {
    item.addEventListener('click', closeSidebar);
  });

  // Reset state when viewport returns to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeSidebar();
  });
};

// ── Render Everything ──────────────────────────────────────
const renderAll = () => {
  renderOverviewStats();
  renderBookings();
  renderTurfs();
  renderUsers();
  renderPayments();
  renderReports();
  renderNotifications();
};

// ── Export Public API ──────────────────────────────────────
window.AdminApp = { exportBookingsCsv };

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAdminNav();
  initModals();
  initConfirmModal();
  initBookingFilters();
  initTurfForm();
  initUserSearch();
  initMarkAllRead();
  initReportDownloads();
  initSettings();
  initActionDelegation();
  initMobileSidebar();
  renderAll();
});

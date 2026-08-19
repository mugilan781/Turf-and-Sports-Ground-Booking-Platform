/* ============================================================
   BOOKING.JS — Real-Time Slot Booking Logic
   ============================================================ */

'use strict';

// ── Mock Data ──────────────────────────────────────────────
const TURFS = [
  {
    id: 1,
    name: 'Premier Football Arena',
    sport: 'football',
    location: 'Anna Nagar, Chennai',
    rating: 4.9,
    reviews: 284,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80',
    facilities: ['Floodlights', 'Parking', 'Cafeteria', 'Showers'],
    badge: 'Featured',
    available: true
  },
  {
    id: 2,
    name: 'Green Pitch Stadium',
    sport: 'football',
    location: 'T. Nagar, Chennai',
    rating: 4.7,
    reviews: 196,
    price: 900,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80',
    facilities: ['Floodlights', 'Parking', 'Changing Rooms'],
    badge: 'Popular',
    available: true
  },
  {
    id: 3,
    name: 'Cricket Ground Pro',
    sport: 'cricket',
    location: 'Adyar, Chennai',
    rating: 4.8,
    reviews: 312,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b573d?w=600&q=80',
    facilities: ['Practice Nets', 'Scoreboard', 'Pavilion', 'Parking'],
    badge: 'Premium',
    available: true
  },
  {
    id: 4,
    name: 'Elite Badminton Courts',
    sport: 'badminton',
    location: 'OMR, Chennai',
    rating: 4.6,
    reviews: 178,
    price: 600,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80',
    facilities: ['AC Courts', 'Racket Rental', 'Showers', 'Cafe'],
    badge: 'New',
    available: true
  },
  {
    id: 5,
    name: 'Champions Cricket Club',
    sport: 'cricket',
    location: 'Velachery, Chennai',
    rating: 4.5,
    reviews: 142,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80',
    facilities: ['Coaching', 'Practice Nets', 'Cafeteria'],
    badge: null,
    available: false
  },
  {
    id: 6,
    name: 'Smash Zone Badminton',
    sport: 'badminton',
    location: 'Porur, Chennai',
    rating: 4.7,
    reviews: 89,
    price: 500,
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&q=80',
    facilities: ['4 Courts', 'Shuttle Service', 'Locker Rooms'],
    badge: null,
    available: true
  }
];

const TIME_SLOTS = [
  { id: 's1', time: '05:00 AM', available: true },
  { id: 's2', time: '06:00 AM', available: true },
  { id: 's3', time: '07:00 AM', available: false },
  { id: 's4', time: '08:00 AM', available: false },
  { id: 's5', time: '09:00 AM', available: true },
  { id: 's6', time: '10:00 AM', available: true },
  { id: 's7', time: '11:00 AM', available: false },
  { id: 's8', time: '12:00 PM', available: true },
  { id: 's9', time: '01:00 PM', available: true },
  { id: 's10', time: '02:00 PM', available: true },
  { id: 's11', time: '03:00 PM', available: false },
  { id: 's12', time: '04:00 PM', available: true },
  { id: 's13', time: '05:00 PM', available: false },
  { id: 's14', time: '06:00 PM', available: false },
  { id: 's15', time: '07:00 PM', available: true },
  { id: 's16', time: '08:00 PM', available: true },
  { id: 's17', time: '09:00 PM', available: true },
  { id: 's18', time: '10:00 PM', available: true },
];

// ── Booking State ──────────────────────────────────────────
const bookingState = {
  selectedTurf: null,
  selectedSlot: null,
  selectedDate: null,
  activeSport: 'all'
};

// ── Render Turf Cards ──────────────────────────────────────
const renderTurfCards = (container, turfs) => {
  if (!container) return;

  const getSportSvg = (sport) => {
    if (window.SportifyIcons) {
      return window.SportifyIcons.get(sport, { className: 'v-icon icon-sm' });
    }
    return '';
  };

  const getPinSvg = () => {
    if (window.SportifyIcons) {
      return window.SportifyIcons.get('pin', { className: 'v-icon icon-xs v-icon-lime' });
    }
    return '';
  };

  container.innerHTML = turfs.map(turf => `
    <div class="turf-card card reveal" data-sport="${turf.sport}" data-id="${turf.id}">
      <div class="turf-card__image">
        <img src="${turf.image}" alt="${turf.name}" loading="lazy">
        ${turf.badge ? `<span class="turf-card__badge badge badge-lime">${turf.badge}</span>` : ''}
        <div class="turf-card__sport-icon sport-icon sport-icon--${turf.sport}">
          ${getSportSvg(turf.sport)}
        </div>
        <div class="turf-card__status ${turf.available ? 'available' : 'unavailable'}">
          <span class="status-dot"></span>
          ${turf.available ? 'Available' : 'Booked'}
        </div>
      </div>
      <div class="turf-card__body card-body">
        <div class="turf-card__header">
          <h3 class="turf-card__name">${turf.name}</h3>
          <div class="turf-card__price">
            <span class="price-amount">₹${turf.price.toLocaleString()}</span>
            <span class="price-unit">/hr</span>
          </div>
        </div>
        <div class="turf-card__location">
          ${getPinSvg()} ${turf.location}
        </div>
        <div class="turf-card__rating">
          ${window.SportifyIcons ? window.SportifyIcons.renderRating(turf.rating) : '<div class="stars">★★★★★</div>'}
          <span class="rating-value">${turf.rating}</span>
          <span class="rating-count">(${turf.reviews} reviews)</span>
        </div>
        <div class="turf-card__facilities">
          ${turf.facilities.map(f => `<span class="chip">${f}</span>`).slice(0, 3).join('')}
          ${turf.facilities.length > 3 ? `<span class="chip">+${turf.facilities.length - 3}</span>` : ''}
        </div>
        <div class="turf-card__actions">
          <button class="btn btn-primary btn-sm book-slot-btn" 
            data-turf="${turf.id}" 
            ${!turf.available ? 'disabled' : ''}>
            ${turf.available ? 'Book Now →' : 'Fully Booked'}
          </button>
          <button class="btn btn-secondary btn-sm view-turf-btn" data-turf="${turf.id}">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join('');


  // Attach event listeners
  container.querySelectorAll('.book-slot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const turfId = parseInt(btn.getAttribute('data-turf'));
      const turf = TURFS.find(t => t.id === turfId);
      if (turf) openBookingModal(turf);
    });
  });

  // Re-trigger scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.transitionDelay = '0ms';
    });
    if (window.SportifyApp) {
      // Re-observe new cards
      document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
        el.classList.add('revealed');
      });
    }
  }, 100);
};

// ── Sport Filter ───────────────────────────────────────────
const initSportFilter = () => {
  const filterBtns = document.querySelectorAll('[data-sport-filter]');
  const turfGrid = document.getElementById('turf-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sport = btn.getAttribute('data-sport-filter');
      bookingState.activeSport = sport;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filtered = sport === 'all' ? TURFS : TURFS.filter(t => t.sport === sport);
      if (turfGrid) renderTurfCards(turfGrid, filtered);
    });
  });

  // Initial render
  if (turfGrid) renderTurfCards(turfGrid, TURFS);
};

// ── Slot Grid ──────────────────────────────────────────────
const renderSlotGrid = (container) => {
  if (!container) return;

  container.innerHTML = `
    <div class="slot-legend">
      <div class="slot-legend-item"><span class="slot-dot slot-dot--available"></span> Available</div>
      <div class="slot-legend-item"><span class="slot-dot slot-dot--booked"></span> Booked</div>
      <div class="slot-legend-item"><span class="slot-dot slot-dot--selected"></span> Selected</div>
    </div>
    <div class="slot-grid">
      ${TIME_SLOTS.map(slot => `
        <button class="slot-btn ${slot.available ? 'slot-available' : 'slot-booked'}" 
          data-slot="${slot.id}"
          ${!slot.available ? 'disabled' : ''}>
          ${slot.time}
        </button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.slot-btn:not(:disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('slot-selected'));
      btn.classList.add('slot-selected');
      bookingState.selectedSlot = btn.getAttribute('data-slot');
      updateBookingSummary();
    });
  });
};

// ── Booking Modal ──────────────────────────────────────────
const openBookingModal = (turf) => {
  bookingState.selectedTurf = turf;

  let modal = document.getElementById('booking-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'booking-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal booking-modal-content">
        <button class="modal-close" id="close-booking-modal">✕</button>
        <div class="booking-modal__header">
          <div class="booking-modal__turf-img">
            <img id="modal-turf-img" src="" alt="">
          </div>
          <div class="booking-modal__turf-info">
            <h2 id="modal-turf-name"></h2>
            <p id="modal-turf-location" class="text-muted"></p>
            <div id="modal-turf-price" class="booking-modal__price"></div>
          </div>
        </div>

        <div class="booking-modal__body">
          <div class="form-group">
            <label class="form-label">Select Date</label>
            <input type="date" id="booking-date" class="form-input" min="${new Date().toISOString().split('T')[0]}">
          </div>

          <div class="form-group">
            <label class="form-label">Select Time Slot</label>
            <div id="slot-container"></div>
          </div>

          <div id="booking-summary" class="booking-summary" style="display:none">
            <h4>Booking Summary</h4>
            <div class="summary-rows">
              <div class="summary-row"><span>Turf</span><span id="sum-turf">-</span></div>
              <div class="summary-row"><span>Date</span><span id="sum-date">-</span></div>
              <div class="summary-row"><span>Time</span><span id="sum-time">-</span></div>
              <div class="summary-row"><span>Duration</span><span>1 Hour</span></div>
              <div class="summary-row summary-total"><span>Total</span><span id="sum-total">-</span></div>
            </div>
          </div>
        </div>

        <div class="booking-modal__footer">
          <button class="btn btn-secondary" id="cancel-booking">Cancel</button>
          <button class="btn btn-primary" id="confirm-booking">Confirm Booking →</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Events
    document.getElementById('close-booking-modal').addEventListener('click', closeBookingModal);
    document.getElementById('cancel-booking').addEventListener('click', closeBookingModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeBookingModal(); });

    document.getElementById('booking-date').addEventListener('change', (e) => {
      bookingState.selectedDate = e.target.value;
      updateBookingSummary();
    });

    document.getElementById('confirm-booking').addEventListener('click', confirmBooking);
  }

  // Populate modal
  document.getElementById('modal-turf-img').src = turf.image;
  document.getElementById('modal-turf-name').textContent = turf.name;
  document.getElementById('modal-turf-location').textContent = turf.location;
  document.getElementById('modal-turf-price').innerHTML = `<span class="price-amount">₹${turf.price.toLocaleString()}</span>/hr`;

  // Set today's date
  const dateInput = document.getElementById('booking-date');
  dateInput.value = new Date().toISOString().split('T')[0];
  bookingState.selectedDate = dateInput.value;

  // Render slot grid
  renderSlotGrid(document.getElementById('slot-container'));

  // Open modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeBookingModal = () => {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  bookingState.selectedSlot = null;
};

const updateBookingSummary = () => {
  const summary = document.getElementById('booking-summary');
  if (!summary) return;

  if (bookingState.selectedSlot && bookingState.selectedDate) {
    const slot = TIME_SLOTS.find(s => s.id === bookingState.selectedSlot);
    document.getElementById('sum-turf').textContent = bookingState.selectedTurf?.name || '-';
    document.getElementById('sum-date').textContent = new Date(bookingState.selectedDate).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById('sum-time').textContent = slot?.time || '-';
    document.getElementById('sum-total').textContent = `₹${(bookingState.selectedTurf?.price || 0).toLocaleString()}`;
    summary.style.display = 'block';
  }
};

const confirmBooking = () => {
  if (!bookingState.selectedSlot) {
    window.SportifyApp?.showToast('Please select a time slot.', 'error');
    return;
  }

  // Simulate booking success
  closeBookingModal();

  setTimeout(() => {
    window.SportifyApp?.showToast(`Booking confirmed for ${bookingState.selectedTurf?.name}!`, 'success', 5000);
  }, 300);


  // Add to history if on dashboard
  if (window.addBookingToHistory) {
    window.addBookingToHistory(bookingState);
  }
};

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSportFilter();
});

// Export
window.BookingSystem = {
  TURFS,
  TIME_SLOTS,
  renderTurfCards,
  openBookingModal
};

/**
 * HOME2.JS — Interactive Pro Arena, Matchmaker, & Split-Bill Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. Split-Bill Turf Cost Calculator ────────────────────
  const sportSelect = document.getElementById('calc-sport');
  const durationSlider = document.getElementById('calc-duration');
  const durationVal = document.getElementById('calc-duration-val');
  const playersSlider = document.getElementById('calc-players');
  const playersVal = document.getElementById('calc-players-val');
  const floodlightsCheck = document.getElementById('calc-floodlights');
  const videoCheck = document.getElementById('calc-video');
  const umpireCheck = document.getElementById('calc-umpire');
  const totalAmountEl = document.getElementById('calc-total-amount');
  const perPlayerAmountEl = document.getElementById('calc-per-player');
  const splitSummaryEl = document.getElementById('calc-split-summary');

  const sportRates = {
    football: 1200,
    cricket: 1500,
    badminton: 600
  };

  const calculateTurfCost = () => {
    if (!sportSelect || !durationSlider || !playersSlider) return;

    const sport = sportSelect.value || 'football';
    const rate = sportRates[sport] || 1200;
    const duration = parseFloat(durationSlider.value) || 2;
    const players = parseInt(playersSlider.value, 10) || 10;

    let total = rate * duration;

    if (floodlightsCheck && floodlightsCheck.checked) total += 200 * duration;
    if (videoCheck && videoCheck.checked) total += 300;
    if (umpireCheck && umpireCheck.checked) total += 400 * duration;

    const perPlayer = Math.ceil(total / players);

    if (durationVal) durationVal.textContent = `${duration} Hours`;
    if (playersVal) playersVal.textContent = `${players} Players`;
    if (totalAmountEl) totalAmountEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (perPlayerAmountEl) perPlayerAmountEl.textContent = `₹${perPlayer.toLocaleString('en-IN')}`;
    if (splitSummaryEl) {
      splitSummaryEl.textContent = `Split equally among ${players} players for a ${duration}h session`;
    }
  };

  if (sportSelect) sportSelect.addEventListener('change', calculateTurfCost);
  if (durationSlider) durationSlider.addEventListener('input', calculateTurfCost);
  if (playersSlider) playersSlider.addEventListener('input', calculateTurfCost);
  if (floodlightsCheck) floodlightsCheck.addEventListener('change', calculateTurfCost);
  if (videoCheck) videoCheck.addEventListener('change', calculateTurfCost);
  if (umpireCheck) umpireCheck.addEventListener('change', calculateTurfCost);

  calculateTurfCost();

  // ── 2. Interactive Zone Filter on Radar ───────────────────
  const zoneTabs = document.querySelectorAll('.h2-zone-tab');
  const radarCards = document.querySelectorAll('.h2-radar-card');

  zoneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      zoneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const zone = tab.getAttribute('data-zone');
      radarCards.forEach(card => {
        const cardZone = card.getAttribute('data-zone');
        if (zone === 'all' || cardZone === zone) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── 3. Quick-Slot Selection on Radar Cards ─────────────────
  document.querySelectorAll('.h2-radar-card').forEach(card => {
    const slots = card.querySelectorAll('.h2-slot-chip');
    const bookBtn = card.querySelector('.h2-radar-book-btn');
    const turfId = card.getAttribute('data-turf-id') || '1';
    const turfName = card.querySelector('h3')?.textContent?.trim() || '';

    const updateBookBtnHref = (slotText) => {
      if (bookBtn) {
        bookBtn.textContent = `Book Slot: ${slotText} →`;
        bookBtn.href = `dashboard.html?turf=${encodeURIComponent(turfId)}&venue=${encodeURIComponent(turfName)}&slot=${encodeURIComponent(slotText)}#book`;
      }
    };

    // Initial setup with selected slot
    const initialSelected = card.querySelector('.h2-slot-chip.selected');
    if (initialSelected) {
      updateBookBtnHref(initialSelected.textContent.trim());
    }

    slots.forEach(slot => {
      slot.addEventListener('click', () => {
        slots.forEach(s => s.classList.remove('selected'));
        slot.classList.add('selected');
        updateBookBtnHref(slot.textContent.trim());
      });
    });
  });

  // ── 4. Open Challenge & Squad Matchmaker Actions ───────────
  document.querySelectorAll('.h2-join-match-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const squadName = this.getAttribute('data-squad') || 'this squad';
      if (window.SportifyApp?.showToast) {
        window.SportifyApp.showToast(`Request sent to ${squadName}! The captain will confirm your slot.`, 'success');
      } else {
        alert(`Match Request Sent to ${squadName}! Captain notified.`);
      }
      this.textContent = 'Request Sent ✓';
      this.classList.remove('btn-primary');
      this.classList.add('btn-secondary');
      this.disabled = true;
    });
  });

  // ── 5. VIP Pass Billing Cycle Switcher ────────────────────
  const billingMonthlyBtn = document.getElementById('h2-bill-monthly');
  const billingAnnualBtn = document.getElementById('h2-bill-annual');
  const prices = document.querySelectorAll('.h2-vip-price-num');

  const updateVipPricing = (isAnnual) => {
    prices.forEach(el => {
      const monthly = el.getAttribute('data-monthly');
      const annual = el.getAttribute('data-annual');
      if (isAnnual && annual) {
        el.textContent = `₹${parseInt(annual, 10).toLocaleString('en-IN')}`;
      } else if (monthly) {
        el.textContent = `₹${parseInt(monthly, 10).toLocaleString('en-IN')}`;
      }
    });
  };

  if (billingMonthlyBtn && billingAnnualBtn) {
    billingMonthlyBtn.addEventListener('click', () => {
      billingMonthlyBtn.classList.add('active');
      billingAnnualBtn.classList.remove('active');
      updateVipPricing(false);
    });

    billingAnnualBtn.addEventListener('click', () => {
      billingAnnualBtn.classList.add('active');
      billingMonthlyBtn.classList.remove('active');
      updateVipPricing(true);
    });
  }
});

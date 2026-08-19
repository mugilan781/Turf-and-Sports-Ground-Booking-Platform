/* ============================================================
   MAIN.JS — Core Application Logic
   Navbar, Theme Toggle, RTL/LTR, Scroll Reveal, Preloader
   ============================================================ */

'use strict';

// ── Preloader ──────────────────────────────────────────────
const initPreloader = () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1800);
  });
};

// ── Theme Toggle ──────────────────────────────────────────
const initTheme = () => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('sportify-theme') || 'dark';

  root.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('sportify-theme', next);
      updateThemeIcon(next);
    });
  }

  // Also handle mobile theme toggle
  const mobileThemeBtn = document.getElementById('theme-toggle-mobile');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('sportify-theme', next);
      updateThemeIcon(next);
    });
  }
};

const updateThemeIcon = (theme) => {
  const icons = document.querySelectorAll('.theme-icon');
  const sunSvg = window.SportifyIcons ? window.SportifyIcons.get('sun', { className: 'v-icon icon-sm' }) : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moonSvg = window.SportifyIcons ? window.SportifyIcons.get('moon', { className: 'v-icon icon-sm' }) : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  
  icons.forEach(icon => {
    icon.innerHTML = theme === 'dark' ? sunSvg : moonSvg;
  });
};


// ── RTL/LTR Toggle ────────────────────────────────────────
const initRTL = () => {
  const root = document.documentElement;
  const rtlBtn = document.getElementById('rtl-toggle');
  const savedDir = localStorage.getItem('sportify-dir') || 'ltr';

  root.setAttribute('dir', savedDir);
  updateRTLIcon(savedDir);

  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      const current = root.getAttribute('dir');
      const next = current === 'ltr' ? 'rtl' : 'ltr';
      root.setAttribute('dir', next);
      localStorage.setItem('sportify-dir', next);
      updateRTLIcon(next);
    });
  }
};

const updateRTLIcon = (dir) => {
  const icons = document.querySelectorAll('.rtl-icon');
  icons.forEach(icon => {
    icon.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
  });
};

// ── Sticky Navbar ──────────────────────────────────────────
const initNavbar = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const updateNavbar = () => {
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar--transparent');
      navbar.classList.add('navbar--solid');
    } else {
      navbar.classList.add('navbar--transparent');
      navbar.classList.remove('navbar--solid');
    }
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  // ── Active Link ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.replace('.html', '') === currentPath.replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  // ── Hamburger Toggle ──
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
};

// ── Scroll Progress Bar ────────────────────────────────────
const initScrollProgress = () => {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = Math.round((scrollTop / height) * 100);
    bar.style.width = pct + '%';
  }, { passive: true });
};

// ── Scroll Reveal ──────────────────────────────────────────
const initScrollReveal = () => {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
};

// ── Counter Animation ──────────────────────────────────────
const initCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;

        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current.toLocaleString() + suffix;
          if (current >= target) clearInterval(timer);
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
};

// ── FAQ Accordion ──────────────────────────────────────────
const initFAQ = () => {
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      faqs.forEach(f => {
        f.classList.remove('open');
        const b = f.querySelector('.faq-body');
        if (b) b.style.maxHeight = '0';
      });
      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
};

// ── Toast Notification ─────────────────────────────────────
const showToast = (message, type = 'success', duration = 3500) => {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  const icons = {
    success: window.SportifyIcons ? window.SportifyIcons.get('check', { className: 'v-icon icon-sm v-icon-lime' }) : '✓',
    error: window.SportifyIcons ? window.SportifyIcons.get('cross', { className: 'v-icon icon-sm' }) : '✕',
    info: window.SportifyIcons ? window.SportifyIcons.get('info', { className: 'v-icon icon-sm' }) : 'ℹ',
    warning: window.SportifyIcons ? window.SportifyIcons.get('alert', { className: 'v-icon icon-sm' }) : '⚠'
  };
  
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.success}</div>
    <div>${message}</div>
  `;

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), duration);
};


// ── Newsletter Form ────────────────────────────────────────
const initNewsletterForms = () => {
  document.querySelectorAll('.newsletter-form, .footer__newsletter').forEach(form => {
    const input = form.querySelector('input[type="email"], .footer__newsletter-input');
    const btn = form.querySelector('button, .footer__newsletter-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!input || !input.value.trim()) {
        showToast('Please enter your email address.', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }
      showToast('You\'ve subscribed successfully!', 'success');
      input.value = '';
    });
  });
};

// ── Smooth Anchor Scroll ───────────────────────────────────
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height'), 10) || 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
};

// ── Intersection Observer for Animations ──────────────────
const initAnimationObservers = () => {
  // Progress bars
  const progressBars = document.querySelectorAll('.progress-bar__fill[data-width]');
  const progressObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-width');
        progressObs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(b => progressObs.observe(b));
};

// ── Keyboard Navigation ────────────────────────────────────
const initAccessibility = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close modals
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      // Close mobile menu
      const hamburger = document.querySelector('.navbar__hamburger.open');
      const mobileMenu = document.querySelector('.navbar__mobile.open');
      if (hamburger) hamburger.classList.remove('open');
      if (mobileMenu) mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
};

// ── Tab Switcher (generic) ─────────────────────────────────
const initTabs = () => {
  document.querySelectorAll('[data-tabs]').forEach(tabContainer => {
    const triggers = tabContainer.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll('[data-panel]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const target = trigger.getAttribute('data-tab');
        triggers.forEach(t => t.classList.remove('active'));
        trigger.classList.add('active');

        panels.forEach(panel => {
          if (panel.getAttribute('data-panel') === target) {
            panel.classList.add('active');
            panel.style.display = 'block';
          } else {
            panel.classList.remove('active');
            panel.style.display = 'none';
          }
        });
      });
    });
  });
};

// ── Init All ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initRTL();
  initNavbar();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initFAQ();
  initNewsletterForms();
  initSmoothScroll();
  initAnimationObservers();
  initAccessibility();
  initTabs();
});

// Export utilities for other modules
window.SportifyApp = {
  showToast
};

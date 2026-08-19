/* ============================================================
   AUTH.JS — Login, Signup Form Validation & Logic
   ============================================================ */

'use strict';

// ── Validation Helpers ─────────────────────────────────────
const validators = {
  required: (val) => val.trim() !== '',
  email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
  phone: (val) => /^[6-9]\d{9}$/.test(val.replace(/\s/g, '')),
  minLength: (min) => (val) => val.length >= min,
  match: (otherId) => (val) => val === document.getElementById(otherId)?.value,
};

const showFieldError = (fieldId, msg) => {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  if (field) field.classList.add('error');
  if (error) { error.textContent = msg; error.classList.add('show'); }
};

const clearFieldError = (fieldId) => {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  if (field) field.classList.remove('error');
  if (error) error.classList.remove('show');
};

const validateField = (fieldId, rules) => {
  const field = document.getElementById(fieldId);
  if (!field) return true;
  const val = field.value;

  for (const [ruleFn, msg] of rules) {
    if (!ruleFn(val)) {
      showFieldError(fieldId, msg);
      return false;
    }
  }
  clearFieldError(fieldId);
  return true;
};

// ── Login Form ─────────────────────────────────────────────
const initLoginForm = () => {
  const form = document.getElementById('login-form');
  if (!form) return;

  // Real-time validation
  ['login-email', 'login-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => clearFieldError(id));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    valid &= validateField('login-email', [
      [validators.required, 'Email address is required.'],
      [validators.email, 'Please enter a valid email address.'],
    ]);

    valid &= validateField('login-password', [
      [validators.required, 'Password is required.'],
      [validators.minLength(6), 'Password must be at least 6 characters.'],
    ]);

    if (valid) {
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Signing In...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    }
  });

  // Password toggle
  initPasswordToggle('login-password', 'toggle-login-password');
};

// ── Signup Form ────────────────────────────────────────────
const initSignupForm = () => {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const clearOnInput = () => {
    ['signup-fullname', 'signup-email', 'signup-phone', 'signup-password', 'signup-confirm-password'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => clearFieldError(id));
    });
    document.getElementById('signup-terms')?.addEventListener('change', () => clearFieldError('signup-terms'));
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    valid &= validateField('signup-fullname', [
      [validators.required, 'Full name is required.'],
    ]);
    valid &= validateField('signup-email', [
      [validators.required, 'Email is required.'],
      [validators.email, 'Enter a valid email address.'],
    ]);
    valid &= validateField('signup-phone', [
      [validators.required, 'Phone number is required.'],
      [validators.phone, 'Enter a valid 10-digit mobile number.'],
    ]);
    valid &= validateField('signup-password', [
      [validators.required, 'Password is required.'],
      [validators.minLength(8), 'Password must be at least 8 characters.'],
    ]);
    valid &= validateField('signup-confirm-password', [
      [validators.required, 'Please confirm your password.'],
      [validators.match('signup-password'), 'Passwords do not match.'],
    ]);
    valid &= validateField('signup-terms', [
      [() => document.getElementById('signup-terms')?.checked, 'Please accept the Terms & Conditions and Privacy Policy.'],
    ]);

    if (valid) {
      const btn = document.getElementById('signup-submit');
      if (btn) { btn.textContent = 'Creating Account...'; btn.disabled = true; }
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 1800);
    }
  });

  clearOnInput();

  // Password toggles
  initPasswordToggle('signup-password', 'toggle-signup-password');
  initPasswordToggle('signup-confirm-password', 'toggle-confirm-password');
};

// ── Password Toggle Helper ─────────────────────────────────
const initPasswordToggle = (inputId, toggleId) => {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  if (!input || !toggle) return;

  const eyeSvg = window.SportifyIcons ? window.SportifyIcons.get('eye', { className: 'v-icon icon-xs' }) : '👁';
  const eyeOffSvg = window.SportifyIcons ? window.SportifyIcons.get('eyeOff', { className: 'v-icon icon-xs' }) : '✕';

  toggle.innerHTML = eyeSvg;

  toggle.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggle.innerHTML = isPassword ? eyeOffSvg : eyeSvg;
  });
};


// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoginForm();
  initSignupForm();
});

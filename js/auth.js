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

// ── Signup Form (Multi-Step) ───────────────────────────────
const initSignupForm = () => {
  const form = document.getElementById('signup-form');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 3;

  const updateStepUI = () => {
    document.querySelectorAll('.signup-step').forEach((step, i) => {
      step.classList.toggle('active', i + 1 === currentStep);
      step.classList.toggle('done', i + 1 < currentStep);
    });
    document.querySelectorAll('.signup-step-panel').forEach((panel, i) => {
      panel.classList.toggle('active', i + 1 === currentStep);
    });
    // Update buttons
    const prevBtn = document.getElementById('signup-prev');
    const nextBtn = document.getElementById('signup-next');
    const submitBtn = document.getElementById('signup-submit');
    if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'flex';
    if (nextBtn) nextBtn.style.display = currentStep === totalSteps ? 'none' : 'flex';
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'flex' : 'none';
  };

  const validateStep = (step) => {
    if (step === 1) {
      let valid = true;
      valid &= validateField('signup-firstname', [[validators.required, 'First name is required.']]);
      valid &= validateField('signup-lastname', [[validators.required, 'Last name is required.']]);
      valid &= validateField('signup-email', [
        [validators.required, 'Email is required.'],
        [validators.email, 'Enter a valid email address.'],
      ]);
      valid &= validateField('signup-phone', [
        [validators.required, 'Phone number is required.'],
        [validators.phone, 'Enter a valid 10-digit mobile number.'],
      ]);
      return valid;
    }
    if (step === 2) {
      let valid = true;
      valid &= validateField('signup-password', [
        [validators.required, 'Password is required.'],
        [validators.minLength(8), 'Password must be at least 8 characters.'],
      ]);
      valid &= validateField('signup-confirm-password', [
        [validators.required, 'Please confirm your password.'],
        [validators.match('signup-password'), 'Passwords do not match.'],
      ]);
      return valid;
    }
    return true; // Step 3 (sport preferences) is optional
  };

  document.getElementById('signup-next')?.addEventListener('click', () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      currentStep++;
      updateStepUI();
    }
  });

  document.getElementById('signup-prev')?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepUI();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('signup-submit');
    if (btn) { btn.textContent = 'Creating Account...'; btn.disabled = true; }
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 1800);
  });

  // Sport preference selection
  document.querySelectorAll('.sport-pref-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('selected'));
  });

  // Password toggles
  initPasswordToggle('signup-password', 'toggle-signup-password');
  initPasswordToggle('signup-confirm-password', 'toggle-confirm-password');

  // Init UI
  updateStepUI();
};

// ── Password Toggle Helper ─────────────────────────────────
const initPasswordToggle = (inputId, toggleId) => {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  if (!input || !toggle) return;

  toggle.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggle.textContent = isPassword ? '🙈' : '👁️';
  });
};

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoginForm();
  initSignupForm();
});

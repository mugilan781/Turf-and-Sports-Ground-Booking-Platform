/* ============================================================
   HERO-SLIDER.JS — Premium Hero Slider Component
   ============================================================ */

'use strict';

class HeroSlider {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.hero-slide');
    this.dots = container.querySelectorAll('.hero-dot');
    this.current = 0;
    this.total = this.slides.length;
    this.autoplayDelay = 5000;
    this.timer = null;
    this.isTransitioning = false;

    if (this.total < 2) return;
    this.init();
  }

  init() {
    // Initial state
    this.slides[0].classList.add('active');

    // Dot navigation
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    // Arrow navigation
    const prevArrow = this.container.querySelector('.hero-arrow--prev');
    const nextArrow = this.container.querySelector('.hero-arrow--next');

    if (prevArrow) prevArrow.addEventListener('click', () => this.prev());
    if (nextArrow) nextArrow.addEventListener('click', () => this.next());

    // Touch/swipe support
    this.initSwipe();

    // Start autoplay
    this.startAutoplay();

    // Pause on hover
    this.container.addEventListener('mouseenter', () => this.stopAutoplay());
    this.container.addEventListener('mouseleave', () => this.startAutoplay());

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  goTo(index) {
    if (this.isTransitioning || index === this.current) return;
    this.isTransitioning = true;

    const prevIndex = this.current;
    this.current = ((index % this.total) + this.total) % this.total;

    // Update slides
    this.slides[prevIndex].classList.remove('active');
    this.slides[prevIndex].classList.add('prev');
    this.slides[this.current].classList.add('active');

    setTimeout(() => {
      this.slides[prevIndex].classList.remove('prev');
      this.isTransitioning = false;
    }, 1200);

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.current);
    });

    // Restart progress
    this.resetProgress();
  }

  next() { this.goTo(this.current + 1); }
  prev() { this.goTo(this.current - 1); }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetProgress() {
    const bar = this.container.querySelector('.hero-progress');
    if (!bar) return;
    bar.style.animation = 'none';
    bar.offsetHeight; // reflow
    bar.style.animation = `progress-slide ${this.autoplayDelay}ms linear`;
  }

  initSwipe() {
    let startX = 0;
    let startY = 0;

    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx > 0) this.prev();
        else this.next();
      }
    }, { passive: true });
  }
}

// ── Initialize all sliders on page ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-slider').forEach(slider => {
    new HeroSlider(slider);
  });
});

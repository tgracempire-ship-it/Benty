// ============================================
//   DAVID ENGINEERING & CONSULTING
//   Main JavaScript — Interactions & Animations
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ── Smooth scroll for nav links ────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Animated counter on metrics ────────────────────────────────────
  function animateCounter(el, target, suffix, duration) {
    const start = 0;
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ── Intersection Observer for counter trigger ──────────────────────
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseInt(el.dataset.counter, 10);
            const suffix = el.dataset.suffix || '';
            animateCounter(el, target, suffix, 1800);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { observer.observe(el); });
  }

  // ── Navbar shadow on scroll ────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
      } else {
        navbar.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
      }
    }, { passive: true });
  }

  // ── Service card hover lift ────────────────────────────────────────
  document.querySelectorAll('.service-card, .right-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px)';
      this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // ── Mobile nav toggle (optional burger) ───────────────────────────
  const burger = document.querySelector('.nav-burger');
  const navMenu = document.querySelector('.navbar-nav');
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      navMenu.classList.toggle('nav-open');
      burger.classList.toggle('open');
    });
  }

  // ── CTA button ripple effect ───────────────────────────────────────
  document.querySelectorAll('.btn-primary, .btn-cta-gold').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.35);
        width: 100px; height: 100px;
        left: ${e.offsetX - 50}px;
        top: ${e.offsetY - 50}px;
        animation: ripple 0.5s linear;
        pointer-events: none;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });

  // Inject ripple keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      from { transform: scale(0); opacity: 1; }
      to   { transform: scale(2.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

});

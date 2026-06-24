// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  if (localStorage.getItem('rtl') === 'true') {
    document.body.classList.add('rtl');
  }

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const rtlToggle = document.getElementById('rtl-toggle');
  
  if(darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
  }
  
  if(rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      document.body.classList.toggle('rtl');
      localStorage.setItem('rtl', document.body.classList.contains('rtl'));
    });
  }
  
  // Active Navigation Link Logic
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Intersection Observer for sensory animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('anim-sensory');
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sensory-element').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Back to top functionality
  const backToTop = document.getElementById('back-to-top');
  if(backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const navWrapper = document.getElementById('nav-wrapper');
  const overlay = document.getElementById('mobile-menu-overlay');

  if(mobileMenuBtn && navWrapper) {
    mobileMenuBtn.addEventListener('click', () => {
      navWrapper.classList.add('open');
      if(overlay) overlay.classList.add('open');
    });
    mobileMenuClose.addEventListener('click', () => {
      navWrapper.classList.remove('open');
      if(overlay) overlay.classList.remove('open');
    });
    if(overlay) {
      overlay.addEventListener('click', () => {
        navWrapper.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
  }
});

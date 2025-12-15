// Main JavaScript - Scroll Progress and Animations

(function() {
  // Scroll Progress Bar
  const scrollProgress = document.querySelector('.scroll-progress');

  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = `${scrollPercent}%`;
    });
  }

  // Intersection Observer for animations
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Add specific animation classes based on element
        if (entry.target.classList.contains('section-header')) {
          entry.target.classList.add('animate-fade-in');
        }
        if (entry.target.classList.contains('about-portrait-container')) {
          entry.target.classList.add('animate-fade-in-up');
        }
        if (entry.target.classList.contains('about-text')) {
          entry.target.classList.add('animate-fade-in-left');
        }
        if (entry.target.classList.contains('bento-grid')) {
          entry.target.classList.add('animate-fade-in-up');
        }
        if (entry.target.classList.contains('timeline-container')) {
          entry.target.classList.add('animate-fade-in-right');
        }
        if (entry.target.classList.contains('contact-info')) {
          entry.target.classList.add('animate-fade-in-left');
        }
        if (entry.target.classList.contains('contact-form-container')) {
          entry.target.classList.add('animate-fade-in-right');
        }
        if (entry.target.classList.contains('portfolio-cta')) {
          entry.target.classList.add('animate-fade-in');
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px'
  });

  // Observe elements for animation
  const elementsToAnimate = [
    '.section-header',
    '.about-portrait-container',
    '.about-text',
    '.bento-grid',
    '.timeline-container',
    '.timeline-item',
    '.contact-info',
    '.contact-form-container',
    '.portfolio-cta',
    '.blog-card'
  ];

  elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      animationObserver.observe(el);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
})();

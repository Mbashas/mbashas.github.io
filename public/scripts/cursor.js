// Custom Cursor Implementation
(function() {
  // Check if device supports hover (not touch-only)
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!supportsHover || prefersReducedMotion) {
    return;
  }

  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  if (!cursorDot || !cursorOutline) return;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  // Make cursors visible
  cursorDot.classList.add('cursor-visible');
  cursorOutline.classList.add('cursor-visible');

  // Add cursor-none class to body for hiding default cursor
  document.body.classList.add('cursor-none');

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Update dot position immediately
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Smooth outline following with requestAnimationFrame
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

    requestAnimationFrame(animateOutline);
  }

  animateOutline();

  // Interactive elements
  const interactiveSelectors = [
    'a',
    'button',
    '.portfolio-item',
    '.timeline-marker',
    '.timeline-content',
    'input',
    'textarea',
    '.skill-category',
    '.bento-item',
    '.filter-btn',
    '.social-link',
    '.blog-card'
  ];

  function addInteractiveListeners(element) {
    element.addEventListener('mouseenter', () => {
      cursorDot.classList.add('cursor-interactive');
      cursorOutline.classList.add('cursor-interactive');
    });

    element.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('cursor-interactive');
      cursorOutline.classList.remove('cursor-interactive');
    });
  }

  // Add listeners to all interactive elements
  interactiveSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(addInteractiveListeners);
  });

  // Mouse down/up states
  document.addEventListener('mousedown', () => {
    cursorDot.classList.add('cursor-active');
    cursorOutline.classList.add('cursor-active');
  });

  document.addEventListener('mouseup', () => {
    cursorDot.classList.remove('cursor-active');
    cursorOutline.classList.remove('cursor-active');
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursorDot.classList.remove('cursor-visible');
    cursorOutline.classList.remove('cursor-visible');
  });

  document.addEventListener('mouseenter', () => {
    cursorDot.classList.add('cursor-visible');
    cursorOutline.classList.add('cursor-visible');
  });

  // Observe DOM for new elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          interactiveSelectors.forEach(selector => {
            if (node.matches && node.matches(selector)) {
              addInteractiveListeners(node);
            }
            node.querySelectorAll && node.querySelectorAll(selector).forEach(addInteractiveListeners);
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();

import { useEffect, useState } from 'react';

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment (to prevent SSR errors)
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    console.log("Custom cursor hook initialized"); // Debug log

    // Check if cursor elements already exist to prevent duplicates
    let cursorDot = document.getElementById('cursor-dot');
    let cursorOutline = document.getElementById('cursor-outline');

    // Only create elements if they don't exist
    if (!cursorDot) {
      console.log("Creating cursor dot element"); // Debug log
      cursorDot = document.createElement('div');
      cursorDot.id = 'cursor-dot';
      cursorDot.className = 'cursor-element';
      document.body.appendChild(cursorDot);
    }

    if (!cursorOutline) {
      console.log("Creating cursor outline element"); // Debug log
      cursorOutline = document.createElement('div');
      cursorOutline.id = 'cursor-outline';
      cursorOutline.className = 'cursor-element';
      document.body.appendChild(cursorOutline);
    }

    // Make sure the elements are visible
    setTimeout(() => {
      if (cursorDot && cursorOutline) {
        cursorDot.classList.add('cursor-visible');
        cursorOutline.classList.add('cursor-visible');
        console.log("Cursor elements set to visible"); // Debug log
      }
    }, 500);

    // Mouse movement handler
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update cursor element positions directly with translate3d for better performance
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Add subtle delay to outline for smoother effect
      if (cursorOutline) {
        setTimeout(() => {
          cursorOutline.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }, 50);
      }
      
      if (!isVisible) {
        setIsVisible(true);
        if (cursorDot) cursorDot.classList.add('cursor-visible');
        if (cursorOutline) cursorOutline.classList.add('cursor-visible');
      }
    };

    // Mouse down/up handlers
    const onMouseDown = () => {
      setIsActive(true);
      if (cursorDot) cursorDot.classList.add('cursor-active');
      if (cursorOutline) cursorOutline.classList.add('cursor-active');
    };

    const onMouseUp = () => {
      setIsActive(false);
      if (cursorDot) cursorDot.classList.remove('cursor-active');
      if (cursorOutline) cursorOutline.classList.remove('cursor-active');
    };

    // Handle interactive elements
    const handleInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .portfolio-item, .timeline-marker, .timeline-content, input, textarea, .skill-category, .bento-item, .filter-btn, .social-link'
      );
      
      interactiveElements.forEach((el) => {
        if (!el.dataset.cursorListener) {
          el.dataset.cursorListener = 'true';
          
          el.addEventListener('mouseenter', () => {
            setIsInteractive(true);
            if (cursorDot) cursorDot.classList.add('cursor-interactive');
            if (cursorOutline) cursorOutline.classList.add('cursor-interactive');
          });
          
          el.addEventListener('mouseleave', () => {
            setIsInteractive(false);
            if (cursorDot) cursorDot.classList.remove('cursor-interactive');
            if (cursorOutline) cursorOutline.classList.remove('cursor-interactive');
          });
        }
      });
    };

    // Hide cursor when leaving window
    const onMouseLeave = () => {
      setIsVisible(false);
      if (cursorDot) cursorDot.classList.remove('cursor-visible');
      if (cursorOutline) cursorOutline.classList.remove('cursor-visible');
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Initialize interactive elements tracking
    handleInteractiveElements();
    
    // Add cursor-none class to body
    document.body.classList.add('cursor-none');

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      // Clean up DOM elements when component unmounts
      if (cursorDot && cursorDot.parentNode) {
        cursorDot.parentNode.removeChild(cursorDot);
      }
      if (cursorOutline && cursorOutline.parentNode) {
        cursorOutline.parentNode.removeChild(cursorOutline);
      }
      document.body.classList.remove('cursor-none');
    };
  }, [isVisible]);

  // Update interactive elements when DOM changes
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Use a MutationObserver to detect DOM changes
    const observer = new MutationObserver(() => {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');
      
      if (cursorDot && cursorOutline) {
        const interactiveElements = document.querySelectorAll(
          'a, button, .portfolio-item, .timeline-marker, .timeline-content, input, textarea, .skill-category, .bento-item, .filter-btn, .social-link'
        );
        
        interactiveElements.forEach((el) => {
          if (!el.dataset.cursorListener) {
            el.dataset.cursorListener = 'true';
            
            el.addEventListener('mouseenter', () => {
              cursorDot.classList.add('cursor-interactive');
              cursorOutline.classList.add('cursor-interactive');
            });
            
            el.addEventListener('mouseleave', () => {
              cursorDot.classList.remove('cursor-interactive');
              cursorOutline.classList.remove('cursor-interactive');
            });
          }
        });
      }
    });

    // Start observing document body for DOM changes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => observer.disconnect();
  }, []);

  return { position, isVisible, isActive, isInteractive };
};

export default useCustomCursor;

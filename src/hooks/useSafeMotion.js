import { useState, useEffect } from 'react';

/**
 * A custom hook that provides safe cursor interaction props
 * based on the site's custom cursor implementation
 */
export const useSafeMotion = () => {
  // Return empty objects during server-side rendering
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return {
      div: 'div',
      button: 'button',
      a: 'a',
      nav: 'nav',
      section: 'section',
      header: 'header',
      h1: 'h1',
      p: 'p',
      span: 'span',
    };
  }

  // Return simple component mappings
  return {
    div: 'div',
    button: 'button',
    a: 'a',
    nav: 'nav',
    section: 'section',
    header: 'header',
    h1: 'h1',
    p: 'p',
    span: 'span',
  };
};

/**
 * A helper function that provides props for cursor interaction
 * This is the correct implementation of withCursorInteraction
 */
export const withCursorInteraction = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return {};
  }

  // Return props that will work with the custom cursor
  return {
    className: "cursor-interactive",
    onMouseEnter: () => {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');
      
      if (cursorDot) cursorDot.classList.add('cursor-interactive');
      if (cursorOutline) cursorOutline.classList.add('cursor-interactive');
    },
    onMouseLeave: () => {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');
      
      if (cursorDot) cursorDot.classList.remove('cursor-interactive');
      if (cursorOutline) cursorOutline.classList.remove('cursor-interactive');
    }
  };
};

/**
 * Safe animation presets that avoid problematic properties
 */
export const safeAnimationPresets = {
  // Fade in animation
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  
  // Fade in and slide up
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  
  // Safe spring transition that avoids compatibility issues
  safeSpring: {
    type: "spring",
    stiffness: 400,
    damping: 25
  }
};

export default useSafeMotion;

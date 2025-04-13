/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Split the name into individual letters
  const renderAnimatedName = () => {
    // Remove any spaces from name for array processing
    const fullName = name.toUpperCase();
    const firstNameEndIndex = fullName.indexOf(' ');
    
    return fullName.split('').map((letter, index) => {
      // Determine letter color based on position (before or after space)
      const isFirstName = index < firstNameEndIndex || letter === ' ';
      const letterColor = isFirstName ? 'var(--color-terracotta)' : 'var(--color-parchment)';
      
      // Apply different styling to space
      if (letter === ' ') {
        return <span key={index} style={{ width: '0.3em', display: 'inline-block' }}>&nbsp;</span>;
      }
      
      return (
        <span 
          key={index}
          className="hero-letter"
          style={{ 
            color: letterColor,
            animationDelay: `${index * 0.07}s`
          }}
        >
          {letter}
        </span>
      );
    });
  };

  useEffect(() => {
    // Init animation for title and subtitle
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    
    if (titleElement && subtitleElement) {
      setTimeout(() => {
        titleElement.style.opacity = "1";
        titleElement.style.transform = "translateY(0)";
      }, 800);
      
      setTimeout(() => {
        subtitleElement.style.opacity = "1";
        subtitleElement.style.transform = "translateY(0)";
      }, 1300);
    }
    
    // Add mouse move event for 3D parallax effect
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="container">
        <div 
          className="hero-content" 
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.015}deg) rotateY(${-mousePosition.x * 0.015}deg)`,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 ref={nameRef} className="hero-name">
            {renderAnimatedName()}
          </h1>
          
          <p ref={titleRef} className="hero-title">
            {title}
          </p>
          
          <p ref={subtitleRef} className="hero-subtitle">
          Building innovative solutions for tomorrow's greteast challenges. 🏛️✨
          </p>
          
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              <span className="btn-text">View My Work</span>
              <span className="btn-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span className="btn-text">Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

import React from "react";
import PropTypes from "prop-types";

const Footer = ({ name = "Seth Mbasha" }) => {
  const currentYear = new Date().getFullYear();

  // Helper function to add interactive class for custom cursor
  const interactiveProps = {
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Seth Mbasha</h3>
            <p>
              Computer Science student passionate about embedded systems, machine learning, and using technology to solve real-world problems.
            </p>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm9 15H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1z" />
                  </svg>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/mbashas" target="_blank" rel="noopener noreferrer" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mbashaseth" target="_blank" rel="noopener noreferrer" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dearmbasha" target="_blank" rel="noopener noreferrer" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a href="https://instagram.com/onlymbasha" target="_blank" rel="noopener noreferrer" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <div className="footer-contact-item" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M12 11.5a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                  </svg>
                  <span>Kampala, Uganda</span>
                </div>
              </li>
              <li>
                <a href="mailto:hello@sethmbasha.com" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  hello@sethmbasha.com
                </a>
              </li>
              <li>
                <a href="tel:+256778123456" {...interactiveProps}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-icon">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +256 778 123 456
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Seth<span>Mbasha</span></span>
            </div>
            <p className="footer-tagline">Building systems that empower people</p>
            <div className="footer-copyright">
              &copy; {currentYear} {name}. All Rights Reserved.
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Designed & Developed with <span className="heart">&#10084;</span> by Mbashas</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;

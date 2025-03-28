/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" }
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="navbar">
          <a href="#home" className="logo">
            Seth<span>Mbasha</span>
          </a>
          
          <div className="hamburger" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

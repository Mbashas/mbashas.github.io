import React, { useState, useEffect } from 'react';

const Navbar = ({ isHomePage = true }) => {
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

  // Define links based on whether we're on the homepage or not
  const links = isHomePage
    ? [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Portfolio', path: '#portfolio' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' },
      ]
    : [
        { name: 'Home', path: './index.html' },
        { name: 'Projects', path: './projects.html' },
        { name: 'Blog', path: './blog.html' },
      ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="navbar">
          <a href={isHomePage ? '#home' : './index.html'} className="logo">
            Seth<span>Mbasha</span>
          </a>

          <div className="hamburger" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path} onClick={() => setIsMenuOpen(false)}>
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

export default Navbar;

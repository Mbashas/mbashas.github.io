/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none' }}>
          <li style={{ marginRight: '20px' }}><a href="#home">Home</a></li>
          <li style={{ marginRight: '20px' }}><a href="#about">About</a></li>
          <li style={{ marginRight: '20px' }}><a href="#portfolio">Portfolio</a></li>
          <li style={{ marginRight: '20px' }}><a href="article.html">Article</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

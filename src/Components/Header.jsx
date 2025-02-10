/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const links = [
  {
    name: "Home",
    to: "#home"
  },
  {
    name: "About",
    to: "#about"
  },
  {
    name: "Portfolio",
    to: "#portfolio"
  },
  {
    name: "Projects",
    to: "#projects"
  }
];

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none' }}>
          {links.map((link, index) => (
            <li key={index} style={{ marginRight: '20px' }}>
              <a href={link.to}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

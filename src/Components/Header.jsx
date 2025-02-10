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
    to: "#home",
    external: false
  },
  {
    name: "About",
    to: "#about",
    external: false
  },
  {
    name: "Portfolio",
    to: "#portfolio",
    external: false
  },
  {
    name: "Projects",
    to: "./projects.html",
    external: false
  }
];

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none' }}>
          {links.map((link, index) => (
            <li key={index} style={{ marginRight: '20px' }}>
              <a 
                href={link.to}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

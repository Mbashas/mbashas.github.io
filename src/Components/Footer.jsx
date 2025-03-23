import React from "react";
import PropTypes from "prop-types";

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
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
          
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/mbashas" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/mbashaseth" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/dearmbasha" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com/onlymbasha" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>Mukono, Uganda</li>
              <li>+256 781 347 647</li>
              <li>sethmbasha@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} {name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string
};

Footer.defaultProps = {
  name: "Seth Mbasha"
};

export default Footer;

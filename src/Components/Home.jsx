/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero">
      <div 
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1974&auto=format&fit=crop)`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1
        }}
      />
      
      <div className="container">
        <div className="hero-content">
          <h1>{name}</h1>
          <p className="lead">
            {title}
          </p>
          <p>
            Combining ancient African wisdom with modern technology to build innovative solutions for tomorrow's challenges.
          </p>
          <div className="flex" style={{ gap: "1rem", marginTop: "2rem" }}>
            <a href="#portfolio" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
      
      <div 
        style={{ 
          position: "absolute", 
          bottom: "2rem", 
          left: "50%", 
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite"
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Home.defaultProps = {
  name: "Seth Mbasha",
  title: "Computer Science Student & Embedded Systems Enthusiast"
};

export default Home;

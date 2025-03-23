/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const About = () => {
  const skills = [
    "Embedded Systems",
    "Machine Learning",
    "Data Analysis",
    "Leadership",
    "Project Management",
    "Backend Development",
    "IoT Development",
    "Hardware Interfacing"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h2>About Me</h2>
            <p className="lead">
              Results-oriented Computer Science student with a strong ability to tackle challenges and excel in various domains.
            </p>
            
            <p>
              I'm experienced in software engineering, embedded systems, microcontroller programming, and machine learning. 
              I draw inspiration from ancient African wisdom, particularly the Kongo civilization, applying their principles
              of community and harmony to modern technology development.
            </p>
            
            <p>
              I believe in the ancient Kongo philosophy of 'muntu' - we're connected to one another through our shared humanity. 
              This influences how I approach technology: not just as tools, but as bridges between people and possibilities. 
              Innovation thrives at the intersection of technical expertise and visionary leadership, where ancient wisdom meets modern solutions.
            </p>
            
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            
            <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
          
          <div className="flex-center">
            <img 
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
              alt="Seth Mbasha" 
              className="about-img"
            />
          </div>
        </div>
      </div>
      
      <div className="kongo-divider"></div>
      
      <div className="container">
        <h3 className="text-center" style={{ marginBottom: "3rem" }}>My Expertise</h3>
        
        <div className="grid-3">
          <div className="card">
            <div className="card-body">
              <h3>Embedded Systems</h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>Microcontroller Programming</li>
                <li>Real-time Systems</li>
                <li>IoT Development</li>
                <li>Hardware Interfacing</li>
                <li>Firmware Development</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h3>Machine Learning</h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>Neural Networks</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>TensorFlow/PyTorch</li>
                <li>Model Deployment</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h3>Data Analysis</h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>Python/Pandas</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Data Processing</li>
                <li>Predictive Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

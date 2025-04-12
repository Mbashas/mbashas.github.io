/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const skills = [
    { category: "Programming", items: ["C/C++", "Python", "JavaScript", "Java"] },
    { category: "Embedded Systems", items: ["Arduino", "Raspberry Pi", "ESP32", "Microcontrollers"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Data Analysis", "NLP"] },
    { category: "Web Development", items: ["React", "Node.js", "HTML/CSS", "RESTful APIs"] }
  ];
  
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Makerere University",
      period: "2020 - 2024",
      description: "Focused on embedded systems, artificial intelligence, and software engineering."
    }
  ];

  return (
    <section id="about" className="section-about" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${inView ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className={`about-text morphism-card ${inView ? 'animate-fade-in-left' : ''}`}>
            <p className="about-description">
              I'm a Computer Science student with a passion for embedded systems and machine learning. 
              My journey bridges traditional wisdom with modern technology, creating innovative solutions 
              for real-world challenges.
            </p>
            <p className="about-quote">
              "Technology should be a tool for empowerment, connecting communities and solving problems 
              that matter. My goal is to build systems that make a meaningful difference in people's lives."
            </p>
          </div>
          
          <div className={`bento-grid ${inView ? 'animate-fade-in-right' : ''}`}>
            {/* Education Card */}
            <div className="bento-item education-card">
              <h3>Education</h3>
              {education.map((item, index) => (
                <div className="education-item" key={index}>
                  <div className="education-period">{item.period}</div>
                  <h4 className="education-degree">{item.degree}</h4>
                  <div className="education-institution">{item.institution}</div>
                  <p className="education-description">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Skills Card */}
            <div className="bento-item skills-card">
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div className="skill-category" key={index}>
                    <h4 className="skill-category-title">{skillGroup.category}</h4>
                    <ul className="skill-list">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="skill-item">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

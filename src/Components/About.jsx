/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React, { useState, memo } from "react";
import { useInView } from "react-intersection-observer";
import portraitImage from "../images/portrait.jpg"; // Import your portrait image

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

// Memoized SkillCategory component
const SkillCategory = memo(({ skillGroup, index, activeSkill, onHover, onLeave }) => {
  return (
    <div 
      className={`skill-category ${activeSkill === index ? 'active' : ''}`} 
      key={index}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      <h4 className="skill-category-title">
        <span className="skill-icon"></span>
        {skillGroup.category}
      </h4>
      <ul className={`skill-list ${activeSkill === index ? 'expanded' : ''}`}>
        {skillGroup.items.map((skill, skillIndex) => (
          <li key={skillIndex} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
});

// Memoized TimelineItem component
const TimelineItem = memo(({ item, index }) => {
  const { ref, inView: isItemVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 100
  });
  
  return (
    <div 
      ref={ref}
      key={index} 
      className={`timeline-item ${item.type} ${item.isFuture ? 'future' : ''} ${isItemVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="timeline-marker">
        <div className="marker-inner">
          {item.type === 'education' ? (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          ) : item.type === 'project' ? (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5 11 5.67 11 6.5 10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          )}
        </div>
      </div>
      
      <div className="timeline-content">
        <div className="timeline-year">{item.year}</div>
        <h4 className="timeline-item-title">{item.title}</h4>
        <div className="timeline-institution">{item.institution}</div>
        <p className="timeline-description">{item.description}</p>
      </div>
    </div>
  );
});

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeSkill, setActiveSkill] = useState(null);
  
  const skills = [
    { category: "Programming", items: ["C/C++", "Python", "JavaScript", "Java"] },
    { category: "Embedded Systems", items: ["Arduino", "Raspberry Pi", "ESP32", "Microcontrollers"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Data Analysis", "NLP"] },
    { category: "Web Development", items: ["React", "Node.js", "HTML/CSS", "RESTful APIs"] }
  ];
  
  // Timeline data - expanded from education data to include more journey points
  const timelineData = [
    {
      year: "2022",
      title: "Started Computer Science Journey",
      institution: "Uganda Christian University",
      description: "Began Bachelor of Science in Computer Science with a focus on embedded systems & robotics.",
      type: "education"
    },
    {
      year: "2023",
      title: "First Embedded Systems Project",
      institution: "Campus Innovation Lab",
      description: "Built my first Arduino-based smart home prototype with sensors for temperature, motion, and light control.",
      type: "project"
    },
    {
      year: "2024",
      title: "Machine Learning Research",
      institution: "University Research Program",
      description: "Started research on NLP applications for local languages, focusing on Luganda text processing.",
      type: "research"
    },
    {
      year: "2026",
      title: "Expected Graduation",
      institution: "Uganda Christian University",
      description: "Anticipated completion of Bachelor's degree in Computer Science.",
      type: "education",
      isFuture: true
    }
  ];

  const handleSkillHover = (index) => {
    setActiveSkill(index);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section id="about" className="section-about" ref={sectionRef}>
      <div className="about-pattern"></div>
      <div className="about-glow"></div>
      
      <div className="container">
        <div className={`section-header ${inView ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
        </div>
        
        {/* New 3-row vertical layout structure */}
        <div className="about-content">
          {/* Row 1: Portrait and About text side-by-side */}
          <div className="about-intro-row">
            {/* Portrait Column */}
            <div className={`about-portrait-container ${inView ? 'animate-fade-in-up' : ''}`}>
              <div className="portrait-frame">
                <img 
                  src={portraitImage} 
                  alt="Seth Mbasha" 
                  className="about-portrait-image" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            {/* About Text Column */}
            <div 
              className={`about-text morphism-card ${inView ? 'animate-fade-in-left' : ''}`}
              style={{
                transform: inView ? 'rotateY(0deg)' : 'rotateY(-5deg)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="card-content">
                <p className="about-description">
                  I'm a Computer Science student and my passion lies at the intersection of software, hardware, automation and natural language processing. 
                  Currently exploring ways to embed real-time applications (APIs) into AI-driven solutions. Always eager to learn, build, and collaborate! 🧠⚙️
                </p>
                <p className="fun-fact">🥑 Fun Fact: Avocados are technically large berries!</p>
                
                {/* Spotify Player Embed */}
                        <iframe 
                          style={{ borderRadius: '12px' }} 
                          src="https://open.spotify.com/embed/track/7xHWNBFm6ObGEQPaUxHuKO?utm_source=generator" 
                          width="100%" 
                          height="152" 
                          frameBorder="0" 
                          allowFullScreen="" 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                          loading="lazy"
                          title="Spotify Embed"
                        ></iframe>
                        
                        <p className="about-quote">
                          "Technology should be a tool for empowerment, connecting communities and solving problems 
                          that matter. My goal is to build systems that make a meaningful difference in people's lives."
                        </p>
                        </div>
                        <div className="morphism-shine"></div>
                      </div>
                      </div>
                      
                      {/* Row 2: Skills section (full width) */}
          <div className={`bento-grid ${inView ? 'animate-fade-in-up' : ''}`}>
            <div className="bento-item skills-card">
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <SkillCategory
                    key={index}
                    skillGroup={skillGroup}
                    index={index}
                    activeSkill={activeSkill}
                    onHover={handleSkillHover}
                    onLeave={handleSkillLeave}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Row 3: Timeline section (full width) */}
          <div className={`timeline-container ${inView ? 'animate-fade-in-right' : ''}`}>
            <h3 className="timeline-title">My Journey</h3>
            <div className="timeline-title-divider"></div>
            <div className="timeline">
              <div className="timeline-track"></div>
              <div className="timeline-cap-top"></div>
              <div className="timeline-cap-bottom"></div>
              
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

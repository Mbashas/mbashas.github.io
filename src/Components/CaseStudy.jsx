import React from 'react';

const CaseStudy = ({ project }) => {
  if (!project) return null;

  return (
    <div className="case-study">
      <div className="case-study-header">
        <span className="case-study-badge">{project.category}</span>
        <h2 className="case-study-title">{project.title}</h2>
      </div>

      <div className="case-study-overview">
        <h3>Overview</h3>
        <p>{project.extendedDescription?.overview || "A comprehensive project leveraging technology to solve real-world problems."}</p>
      </div>

      <div className="case-study-challenge">
        <h3>The Challenge</h3>
        <div className="case-study-separator"></div>
        <p>{project.extendedDescription?.challenge || "We faced unique challenges that required innovative solutions and strategic thinking."}</p>
      </div>

      <div className="case-study-visual">
        <div className="casestudy-visual-placeholder">
          <div className="blueprint-design"></div>
          <div className="placeholder-text">Project Visualization</div>
        </div>
      </div>

      <div className="case-study-approach">
        <h3>My Approach</h3>
        <div className="case-study-separator"></div>
        <p>{project.extendedDescription?.approach || "I approached this problem systematically, breaking it down into manageable components and addressing each with targeted solutions."}</p>
      </div>

      <div className="case-study-solution">
        <h3>The Solution</h3>
        <div className="case-study-separator"></div>
        <p>{project.extendedDescription?.solution || "The final implementation successfully addressed all key requirements while maintaining optimal performance and usability."}</p>
        
        <div className="case-study-features">
          <h4>Key Features</h4>
          <ul>
            {project.extendedDescription?.features ? (
              project.extendedDescription.features.map((feature, index) => (
                <li key={index}><span className="feature-bullet"></span>{feature}</li>
              ))
            ) : (
              <>
                <li><span className="feature-bullet"></span>Core functionality implementation</li>
                <li><span className="feature-bullet"></span>Performance optimization</li>
                <li><span className="feature-bullet"></span>User-centered design</li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="case-study-tech">
        <h3>Technologies Used</h3>
        <div className="case-study-separator"></div>
        <div className="tech-stack">
          {project.extendedDescription?.technologies ? (
            project.extendedDescription.technologies.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))
          ) : (
            <>
              <span className="tech-item">{project.category}</span>
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">Python</span>
            </>
          )}
        </div>
      </div>

      <div className="case-study-links">
        {project.link && (
          <a href={project.link} className="case-study-btn primary-btn" target="_blank" rel="noopener noreferrer">
            View Project
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
        {project.codeLink && (
          <a href={project.codeLink} className="case-study-btn secondary-btn" target="_blank" rel="noopener noreferrer">
            View Code
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;

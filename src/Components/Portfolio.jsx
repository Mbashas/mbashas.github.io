/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 */

import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const filterLineRef = useRef(null);
  const filterBtnsRef = useRef([]);
  
  const projects = [
    {
      title: "Smart Home Security System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1558959356-2d5b3b3b2b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/smart-home-security",
      description: "IoT-based security system using sensors and real-time monitoring 🛡️"
    },
    {
      title: "Fake News Detection in Luganda",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/luganda-fake-news-detection",
      description: "NLP model for detecting misinformation in local language content"
    },
    {
      title: "Campus Food Management System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/campus-food-management",
      description: "Automated inventory and ordering system for campus dining 🍲"
    },
    {
      title: "Urban Heat Island Prediction",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/urban-heat-island",
      description: "Predictive model for urban temperature patterns using satellite data"
    },
    {
      title: "Big Data Analytics & Mining",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      description: "Processing large datasets to extract meaningful insights"
    },
    {
      title: "IoT Weather Station",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      description: "Solar-powered weather monitoring using distributed sensors ☁️"
    }
  ];
  
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle category change and animated filter indicator
  useEffect(() => {
    if (filterLineRef.current && filterBtnsRef.current.length > 0) {
      const activeBtn = filterBtnsRef.current.find(btn => 
        btn && btn.textContent === activeCategory
      );
      
      if (activeBtn) {
        const { offsetLeft, offsetWidth } = activeBtn;
        filterLineRef.current.style.width = `${offsetWidth}px`;
        filterLineRef.current.style.left = `${offsetLeft}px`;
      }
    }
  }, [activeCategory]);

  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <div className="lightning-background">
        <div className="lightning-glow"></div>
        <div className="lightning-glow secondary"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="container">
        <div className={`section-header ${inView ? 'animate-fade-in' : ''}`}>
          <h2 className="section-title">My Artifacts</h2>
          <div className="section-title-underline"></div>
          <p className="section-subtitle">
            Explore my latest work spanning embedded systems, machine learning, and more
          </p>
        </div>
        
        <div className={`portfolio-filter ${inView ? 'animate-fade-in' : ''}`}>
          <div className="filter-container">
            {categories.map((category, index) => (
              <button 
                key={index}
                ref={el => filterBtnsRef.current[index] = el}
                className={`filter-btn ${category === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
            <div className="filter-active-indicator" ref={filterLineRef}></div>
          </div>
        </div>
        
        <div className="portfolio-bento">
          {filteredProjects.map((project, index) => (
            <div 
              className={`portfolio-item ${inView ? 'animate-in' : ''}`} 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="portfolio-item-inner"
                style={{
                  transform: hoveredProject === index ? 'scale(1.03) translateY(-10px)' : 'scale(1) translateY(0)'
                }}
              >
                <div className="portfolio-img-container">
                  <div className="card-shine"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-img" 
                  />
                  <div 
                    className={`portfolio-overlay ${hoveredProject === index ? 'active' : ''}`}
                  >
                    <div className="portfolio-category">{project.category}</div>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <a 
                      href={project.link} 
                      className="portfolio-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Artifact
                      <svg 
                        className="link-arrow" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`portfolio-cta ${inView ? 'animate-fade-in' : ''}`}>
          <a href="/projects.html" className="btn-view-all">
            <span>Explore the Archives</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

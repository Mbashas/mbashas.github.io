/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 */
import React, { useState, useRef, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import CaseStudy from "./CaseStudy";

// Import our case study styles
import "../styles/casestudy.css";

// Memoized PortfolioItem component
const PortfolioItem = memo(({ 
  project, 
  index, 
  inView, 
  hoveredProject, 
  onMouseEnter, 
  onMouseLeave, 
  openCaseStudy 
}) => {
  return (
    <div
      className={`portfolio-item ${inView ? 'animate-in' : ''}`}
      key={index}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(null)}
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
            loading="lazy"
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
              View Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="link-arrow"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            
            {project.isCaseStudy && (
              <div 
                className="view-details-btn" 
                onClick={(e) => {
                  e.preventDefault();
                  openCaseStudy(project);
                }}
              >
                View Case Study
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="details-icon"
                >
                  <path
                    d="M12 4V20M20 12L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filterLineRef = useRef(null);
  const filterBtnsRef = useRef([]);
  
  const projects = [
    {
      title: "Smart Home Security System",
      category: "Embedded Systems",
      image: "https://plus.unsplash.com/premium_photo-1661297461253-ae1968b5d46c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/mbashas/smart-home-security",
      description: "Arduino-based security system with motion detection and alerts 🔒",
      extendedDescription: {
        overview: "This project implements a comprehensive home security solution using Arduino microcontrollers, ultrasonic and LDR sensors to detect intruders, automatically lock doors, and alert homeowners.",
        challenge: "Traditional security systems are expensive and often require professional installation. The challenge was to create an affordable, DIY security system that homeowners could install themselves while maintaining reliability and effectiveness in detecting potential intruders.",
        approach: "I approached this by first analyzing security vulnerabilities in typical homes and identifying key points that needed monitoring. After selecting appropriate sensors for different scenarios (motion, light changes), I designed a system architecture that would enable reliable communication between components.",
        solution: "The resulting system uses an Arduino microcontroller as its brain, connected to ultrasonic sensors for motion detection and Light Dependent Resistors (LDRs) to detect sudden light changes. When suspicious activity is detected, the system automatically locks doors via servo motors and sends alerts to the homeowner's mobile device.",
        features: [
          "Motion detection using ultrasonic sensors with adjustable sensitivity",
          "Light change detection for identifying flashlight use or sudden illumination",
          "Automatic door locking mechanism during security breaches",
          "Mobile alert system with real-time notifications",
          "Battery backup to ensure operation during power outages",
          "Web interface for monitoring and controlling the system remotely"
        ],
        technologies: [
          "Arduino", "C++", "Ultrasonic Sensors", "LDR Sensors", "Servo Motors", 
          "ESP8266 WiFi", "Mobile Notifications", "Real-time Monitoring"
        ]
      },
      isCaseStudy: true
    },
    {
      title: "Weather Monitoring System",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/weather-monitoring",
      description: "Solar-powered weather monitoring using distributed sensors ☁️"
    },
    {
      title: "Fake News Detection in Luganda",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/luganda-fake-news-detection",
      description: "NLP model for identifying misinformation in local languages 👾",
      extendedDescription: {
        overview: "This research project develops machine learning models to detect misinformation in content written in Luganda, one of Uganda's major languages, addressing a critical gap in content moderation tools for African languages.",
        challenge: "While fake news detection models exist for major world languages like English, local African languages like Luganda lack such tools. This creates vulnerability to misinformation campaigns in these language communities. Additionally, Luganda has unique linguistic features that make standard NLP approaches less effective.",
        approach: "The project began with collecting a diverse dataset of verified Luganda news articles and known misinformation. I then developed custom preprocessing steps specific to Luganda's morphological structure. Multiple model architectures were tested, including traditional machine learning classifiers with TF-IDF and more advanced deep learning approaches.",
        solution: "The final system implements a hybrid architecture combining BERT-based embeddings fine-tuned for Luganda with ensemble learning techniques. The model achieves over 87% accuracy in detecting misinformation, with particular strength in identifying emotionally manipulative language patterns common in fake news.",
        features: [
          "Custom tokenization and preprocessing pipeline for Luganda language",
          "Transfer learning using modified BERT architecture with Luganda adaptations",
          "Ensemble model combining textual and contextual features",
          "Web API for real-time classification of news content",
          "Browser extension for end-users to verify article credibility",
          "Explainable AI components to highlight suspicious text segments"
        ],
        technologies: [
          "Python", "TensorFlow", "BERT", "NLP", "FastAPI", "Scikit-learn",
          "Text Analysis", "Sentiment Analysis", "Deep Learning"
        ]
      },
      isCaseStudy: true
    },
    {
      title: "Campus Food Management System",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/campus-food-management",
      description: "Streamlined ordering system for university dining services 🍔"
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

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
  };

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
            <PortfolioItem
              key={index}
              project={project}
              index={index}
              inView={inView}
              hoveredProject={hoveredProject}
              onMouseEnter={setHoveredProject}
              onMouseLeave={setHoveredProject}
              openCaseStudy={openCaseStudy}
            />
          ))}
        </div>
        
        <div className={`portfolio-cta ${inView ? 'animate-fade-in' : ''}`}>
          <a href="./projects.html" className="btn-view-all">
            Browse All Projects
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal for Case Study */}
      <Modal isOpen={isModalOpen} onClose={closeCaseStudy}>
        <CaseStudy project={selectedProject} />
      </Modal>
    </section>
  );
};

export default Portfolio;

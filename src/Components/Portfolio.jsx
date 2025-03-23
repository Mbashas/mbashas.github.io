/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Home Security System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1558959356-2d5b3b3b2b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/smart-home-security"
    },
    {
      title: "Fake News Detection in Luganda",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/luganda-fake-news-detection"
    },
    {
      title: "Campus Food Management System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/campus-food-management"
    },
    {
      title: "Urban Heat Island Prediction",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/mbashas/urban-heat-island"
    },
    {
      title: "Big Data Analytics & Mining",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    },
    {
      title: "IoT Weather Station",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="section section-dark">
      <div className="container">
        <h2 className="text-center">My Portfolio</h2>
        <p className="lead text-center" style={{ marginBottom: "3rem" }}>
          Here are some of my recent projects that showcase my skills and experience
        </p>
        
        <div className="grid-3">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{project.title}</h3>
                <div className="portfolio-category">{project.category}</div>
                <a href={project.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: "3rem" }}>
          <a href="/projects.html" className="btn">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

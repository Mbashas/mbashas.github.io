import React from 'react';
import Layout from '../Components/Layout';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Smart Home Security System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1558959356-2d5b3b3b2b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Built an embedded system prototype integrating ultrasonic and LDR sensors with an Arduino microcontroller to detect intruders. The system automatically locks doors and alerts residents through a mobile buzzer system when unauthorized access is detected.",
      technologies: ["Arduino", "C++", "IoT", "Security"],
      demoLink: "#",
      codeLink: "https://github.com/mbashas/smart-home-security"
    },
    {
      title: "Fake News Detection in Luganda",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Implementing a machine learning model to detect and classify misinformation in the Luganda language. Exploring approaches for model optimization to achieve higher accuracy and better handling of local language nuances.",
      technologies: ["Python", "NLP", "Machine Learning", "Research"],
      demoLink: "#",
      codeLink: "https://github.com/mbashas/luganda-fake-news-detection"
    },
    {
      title: "Campus Food Management System",
      category: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Collaborated on an embedded-systems project to streamline campus restaurant operations. Designed microcontroller logic to automate order placements and inventory tracking, improving efficiency and reducing wait times.",
      technologies: ["Embedded Systems", "Arduino", "Database", "UI Design"],
      demoLink: "#",
      codeLink: "https://github.com/mbashas/campus-food-management"
    },
    {
      title: "Urban Heat Island Prediction",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Designing a machine learning model to pinpoint urban heat island hotspots, leveraging geospatial data and analytics. This helps city planners evaluate risk factors related to rising temperatures and develop targeted mitigation strategies.",
      technologies: ["Python", "Geospatial Analysis", "Climate Science", "Data Visualization"],
      demoLink: "#",
      codeLink: "https://github.com/mbashas/urban-heat-island"
    }
  ];

  return (
    <Layout>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          <h1 className="text-center">My Projects</h1>
          <p className="lead text-center">A showcase of my technical work and research projects</p>
          
          <div className="grid" style={{ marginTop: "3rem", rowGap: "3rem" }}>
            {projects.map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt={project.title} className="card-img" />
                <div className="card-body">
                  <span className="badge">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                    <h4>Technologies Used:</h4>
                    <div className="tag-container">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-actions">
                    <a href={project.demoLink} className="btn">View Demo</a>
                    <a href={project.codeLink} className="btn btn-outline">View Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

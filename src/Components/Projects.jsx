import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const Projects = () => {
  return (
    <section className="padding" id="projects">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>My Projects</h2>
        <p className="large">
          Here are some of my recent projects and achievements.
        </p>
        {/* Add your project content here */}
      </div>
    </section>
  );
};

export default Projects;

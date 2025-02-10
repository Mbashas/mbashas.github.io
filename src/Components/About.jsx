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

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Curious and resourceful computer science student with leadership experience in AIESEC. Skilled in embedded systems, microcontroller programming, and machine learning projects. Passionate about leveraging tech for research and innovation, while mentoring peers and spearheading initiatives that drive positive change. Eager to learn, grow, and contribute.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Embedded Systems", 
  "Machine Learning", 
  "Data Analysis", 
  "Leadership Skills", 
  "Project Management Skills", 
  "Back End Software Dev Skills"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Innovation thrives at the intersection of technical expertise and visionary leadership. Embrace every challenge as a pathway to success.";

const About = () => {
  return (
    <section className="padding" id="about">
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
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <div style={{ backgroundColor: "white", padding: "2rem", margin: "2rem auto", maxWidth: "900px" }}>
        <h2 style={{ textAlign: "center", color: "#4E567E", marginBottom: "1.5rem" }}>Skills</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem"
        }}>
          <div style={{
            flex: "1 1 300px",
            background: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#4E567E" }}>Embedded Systems</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Microcontroller Programming</li>
              <li>Real-time Systems</li>
              <li>IoT Development</li>
              <li>Hardware Interfacing</li>
              <li>Firmware Development</li>
            </ul>
          </div>
          <div style={{
            flex: "1 1 300px",
            background: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#4E567E" }}>Machine Learning</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Neural Networks</li>
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>TensorFlow/PyTorch</li>
              <li>Model Deployment</li>
            </ul>
          </div>
          <div style={{
            flex: "1 1 300px",
            background: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#4E567E" }}>Data Analysis</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Python/Pandas</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Data Processing</li>
              <li>Predictive Modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

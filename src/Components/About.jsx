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
  "Results-oriented Computer Science student with a strong ability to tackle challenges and excel in various domains. Experienced in software engineering, embedded systems, microcontroller programming, and machine learning. I draw inspiration from ancient African wisdom, particularly the Kongo civilization, applying their principles of community and harmony to modern technology.";

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
  "I believe in the ancient Kongo philosophy of 'muntu' - we're connected to one another through our shared humanity. This influences how I approach technology: not just as tools, but as bridges between people and possibilities. Innovation thrives at the intersection of technical expertise and visionary leadership, where ancient wisdom meets modern solutions.";

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
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          border: "1px solid #e0e0e0"
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
      <div style={{ backgroundColor: "white", padding: "2rem", margin: "2rem auto", maxWidth: "900px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", color: "#3a5a40", marginBottom: "1.5rem" }}>Skills</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem"
        }}>
          <div style={{
            flex: "1 1 300px",
            background: "#f9f9f0",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center",
            border: "1px solid #e0e0e0"
          }}>
            <h3 style={{ color: "#3a5a40" }}>Embedded Systems</h3>
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
            background: "#f9f9f0",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center",
            border: "1px solid #e0e0e0"
          }}>
            <h3 style={{ color: "#3a5a40" }}>Machine Learning</h3>
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
            background: "#f9f9f0",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            textAlign: "center",
            border: "1px solid #e0e0e0"
          }}>
            <h3 style={{ color: "#3a5a40" }}>Data Analysis</h3>
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

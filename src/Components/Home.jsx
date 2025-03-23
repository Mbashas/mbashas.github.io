/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/csme.jpg";

const imageAltText = "A photo of me seating in a garden";
const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ 
        position: "absolute", 
        top: "5rem", 
        left: "2rem", 
        width: "20rem",
        backgroundColor: "rgba(245, 245, 240, 0.8)",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
          Combining ancient African wisdom with modern technology to build innovative solutions
        </p>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Seth Mbasha",
  title: "Software & Hardware Engineer",
  email: "sethmbasha@gmail.com",
  gitHub: "mbashas",
  instagram: "onlymbasha",
  linkedIn: "mbashaseth",
  medium: "",
  twitter: "dearmbasha",
  youTube: "mbashaseth",
};

// Avocado-inspired color palette with Kongo influence
const primaryColor = "#3a5a40"; // Dark avocado green
const secondaryColor = "#a3b18a"; // Light avocado green

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name="Seth Mbasha" title="Computer Science Student & Embedded Systems Enthusiast" />
      <About />
      <Portfolio />
      <Blog />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

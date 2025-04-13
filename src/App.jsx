/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import BlogPage from "./Pages/BlogPage";
import CaseStudy from "./Components/CaseStudy.jsx"; // Corrected import path

// Import custom cursor hook
import useCustomCursor from "./hooks/useCustomCursor";

// Import styles
import "./styles/global.css";

const App = () => {
  // Initialize custom cursor
  useCustomCursor();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case/:id" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
};

export default App;

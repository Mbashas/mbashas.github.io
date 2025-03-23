/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import HomePage from "./Pages/HomePage";
import "./styles.css";
import "./styles/global.css";

const App = () => {
  return (
    <div id="main">
      <HomePage />
    </div>
  );
};

export default App;

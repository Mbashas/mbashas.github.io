/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import { createRoot } from 'react-dom/client';
import React from "react";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

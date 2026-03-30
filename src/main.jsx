
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initGA4 } from "./analytics";

// Initialize Google Analytics 4 (only activates if VITE_GA_MEASUREMENT_ID is set)
initGA4();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


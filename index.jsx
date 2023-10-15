// external imports
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// internal imports
import App from "./App";
import "./public/styles/global.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

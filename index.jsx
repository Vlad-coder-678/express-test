// external imports
import React from "react";
import ReactDOM from "react-dom/client";

// internal imports
// public
import "./public/styles/global.scss";
// components
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

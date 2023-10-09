// external imports
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// internal imports
import App from './App';
import reportWebVitals from './utilities/reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();

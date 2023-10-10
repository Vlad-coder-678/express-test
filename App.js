// external imports
import React, { useState } from "react";

// internal imports
import state from "./public/data/state.json";
import './App.css';

function App() {
  const [activeBudges, setActiveBudges] = useState([]);
  const { pickPoints } = state;

  const handleClick = () => {
    setActiveBudges(activeBudges);
  };

  return (
    <div className="container">
      <div className="cards-container">
        {pickPoints.map(({
          address,
          budgets,
          latitude,
          longitude,
        }) => (
          <div className="card-container">
            <h2>
              {address}
            </h2>
            {budgets.map(budge => (
              <button
                type="button"
                className="button"
                onClick={handleClick}
              >
                {budge}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="map-container">

      </div>
    </div>
  );
}

export default App;

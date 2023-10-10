// external imports
import React, { useState } from "react";

// internal imports
import state from "./public/data/state.json";

const App = () => {
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
        }) => (
          <div className="card-container">
            <h2>
              {address}
            </h2>
            {budgets.map((budge) => (
              <button
                type="button"
                className="button"
                onClick={() => handleClick(address)}
              >
                {budge}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="map-container">
        asdsad
      </div>
    </div>
  );
};

export default App;

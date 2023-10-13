// external imports
import React, { useState } from "react";

// internal imports
import state from "./public/data/state.json";

const App = () => {
  const [activeBudges, setActiveBudges] = useState([]);

  const handleClick = () => {
    setActiveBudges(activeBudges);
  };

  return (
    <div className="container">
      <div className="cards-container">
        {state.pickPoints.map(({
          address,
          budgets,
        }) => (
          <div key={address} className="card-container">
            <h2>
              {address}
            </h2>
            {budgets.map((budge) => (
              <button
                key={`${address} ${budge}`}
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

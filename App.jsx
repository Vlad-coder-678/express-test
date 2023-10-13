// external imports
import React, { useState } from "react";

// internal imports
// components
import BudgeComponent from "components/BudgeComponent";
import MapComponent from "components/MapComponent";
// public
import state from "public/data/state.json";

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
              <BudgeComponent
                budge={budge}
                key={`${address} ${budge}`}
                onClick={() => handleClick(address)}
              />
            ))}
          </div>
        ))}
      </div>
      <MapComponent />
    </div>
  );
};

export default App;

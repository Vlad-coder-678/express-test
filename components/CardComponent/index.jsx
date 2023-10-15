// external imports
import React from "react";

// internal imports
// styles
import "./styles.scss";

const CardComponent = ({
  point: {
    address,
    budgets,
    latitude,
    longitude,
  },
  togglePoint,
}) => {
  const handleTogglePoint = (budget) => {
    togglePoint({
      address,
      budget,
      latitude,
      longitude,
    });
  };

  return (
    <div className="card">
      <p className="card-title">
        {address}
      </p>
      <div className="card-button-container">
        {budgets.map((budget) => (
          <button
            className="card-button"
            key={`${address} ${budget}`}
            onClick={() => handleTogglePoint(budget)}
            type="button"
          >
            {budget}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

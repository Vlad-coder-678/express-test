// external imports
import React from "react";

// internal imports
// styles
import "./styles.scss";

const CardComponent = ({
  activePoints,
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
    <div className={activePoints.some((point) => point.address === address) ? "card card-active" : "card"}>
      <p className="card-title">
        {address}
      </p>
      <div className="card-buttons-container">
        {budgets.map((budget) => (
          <button
            className={activePoints.some((point) => (point.address === address && point.budgets.includes(budget)))
              ? "card-button card-button-active" : "card-button"}
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

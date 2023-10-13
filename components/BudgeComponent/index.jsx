import React from "react";

const BudgeComponent = ({ onClick, budge }) => (
  <button
    className="button"
    onClick={onClick}
    type="button"
  >
    {budge}
  </button>
);

export default BudgeComponent;

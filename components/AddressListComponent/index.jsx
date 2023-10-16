// external imports
import React from "react";

// internal imports
// components
import CardComponent from "../CardComponent";
// styles
import "./styles.scss";

const AddressListComponent = ({
  activePoints,
  points,
  togglePoint,
}) => (
  <div className="cards-container">
    {points.map((point) => (
      <CardComponent
        activePoints={activePoints}
        key={point.address}
        point={point}
        togglePoint={togglePoint}
      />
    ))}
  </div>
);

export default AddressListComponent;

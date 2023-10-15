// external imports
import React from "react";

// internal imports
// styles
import "./styles.scss";

const MapComponent = ({ activePickPoints }) => (
  <div className="map-container">
    {activePickPoints}
  </div>
);

export default MapComponent;

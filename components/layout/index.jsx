// external imports
import React from "react";

// internal imports
// hooks
import useActivePoints from "../../hooks/useActivePoints";
// components
import MapComponent from "../MapComponent";
import AddressListComponent from "../AddressListComponent";
// styles
import "./styles.scss";

const LayoutComponent = () => {
  const {
    activePoints,
    points,
    togglePoint,
  } = useActivePoints();

  return (
    <div className="container">
      <AddressListComponent
        points={points}
        togglePoint={togglePoint}
      />
      <MapComponent
        activePoints={activePoints}
      />
    </div>
  );
};

export default LayoutComponent;

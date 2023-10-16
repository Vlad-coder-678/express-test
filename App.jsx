// external imports
import React from "react";

// internal imports
// hooks
import useActivePoints from "./hooks/useActivePoints";
// components
import MapComponent from "./components/MapComponent";
import AddressListComponent from "./components/AddressListComponent";

const App = () => {
  const {
    activePoints,
    points,
    togglePoint,
  } = useActivePoints();

  return (
    <div className="container">
      <AddressListComponent
        activePoints={activePoints}
        points={points}
        togglePoint={togglePoint}
      />
      <MapComponent
        activePoints={activePoints}
        points={points}
      />
    </div>
  );
};

export default App;

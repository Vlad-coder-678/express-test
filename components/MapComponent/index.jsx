// external imports
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// internal imports
// utilities
import {
  getCenterPointData,
  getZoom,
} from "../../utilities/map-helpers";
// styles
import "./styles.scss";

const MapComponent = ({ activePoints, points }) => {
  const defaultState = {
    center: [points[0].latitude, points[0].longitude],
    zoom: 10,
  };

  const [center, setCenter] = useState(defaultState.center);

  useEffect(() => {
    if (activePoints.length) setCenter(getCenterPointData(activePoints));
    else setCenter(defaultState.center);
  }, [activePoints]);

  return (
    <div className="map-container">
      <YMaps>
        <Map
          state={{
            center,
            zoom: getZoom(activePoints)
          }}
          defaultState={defaultState}
          height={470}
          width={505}
        >
          {activePoints?.map(({ latitude, longitude }) => (
            <Placemark
              key={`${latitude} ${longitude}`}
              geometry={[latitude, longitude]}
              options={{
                iconLayout: "default#image",
                iconImageSize: [50, 50],
                iconImageHref: "images/pointer.svg"
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;

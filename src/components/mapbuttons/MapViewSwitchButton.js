import React from "react";
import "./mapviewswitchbutton.css";

export default function MapViewSwitchButton(props) {
  const getIconUrl = () => {
    return props.mapView ? props.assets["Map"].src : props.assets["List"].src;
  };
  return (
    <img
      draggable="false"
      className="MapViewSwitchButton"
      src={getIconUrl()}
      alt="MapToggle"
      onClick={props.toggleMapView}
    />
  );
}

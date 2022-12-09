import React from "react";
import SideSwitchButton from "./SideSwitchButton";
import NadeSelectionButtons from "./NadeSelectionButtons";
import MapViewSwitchButton from "./MapViewSwitchButton";
import "./mapbuttons.css";
import BackButton from "./BackButton";
import SubmitNadeButton from "./SubmitNadeButton";

export default function MapButtons(props) {
  return (
    <div className="MapButtons">
      <MapViewSwitchButton
        toggleMapView={props.toggleMapView}
        mapView={props.mapView}
        assets={props.assets}
      />
      <SubmitNadeButton
        nadeView={props.nadeView}
        submitNade={props.submitNade}
        startSubmit={props.startSubmit}
      />
      {props.nadeView === "NadeGroup" ? (
        <>
          <NadeSelectionButtons
            assets={props.assets}
            selectedNade={props.selectedNade}
            changeNade={props.changeNade}
          />
          <SideSwitchButton
            assets={props.assets}
            changeSide={props.changeSide}
            selectedSide={props.selectedSide}
          />{" "}
        </>
      ) : (
        <BackButton changeNadeView={props.changeNadeView} />
      )}
    </div>
  );
}

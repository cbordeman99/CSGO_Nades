import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Map from "./Map";
import MapButtons from "../mapbuttons/MapButtons";
import MapList from "../maplist/MapList";
import "./mapoverview.css";
import { testData } from "../../constants/TestData";
import NadeDialog from "../dialog/NadeDialog";
import { AllNades } from "../../models/allnades.model";

export default function MapOverview(props) {
  const [dialogStyle, setDialogStyle] = useState({});
  const [dialogNade, setDialogNade] = useState({});
  const [mapName, setMapName] = useState("");
  const [mapView, setMapView] = useState(false);
  const [selectedNade, setSelectedNade] = useState("Smoke");
  const [selectedSide, setSelectedSide] = useState("CT");
  const [allNades, setAllNades] = useState([]);
  const [nadeGroupList, setNadeGroupList] = useState([]);
  const [selectedNadeGroup, setSelectedNadeGroup] = useState([]);
  const [nadeView, setNadeView] = useState("NadeGroup");
  const [submitNade, setSubmitNade] = useState(false);
  const [newNadeGroup, setNewNadeGroup] = useState([]);
  const [newNade, setNewNade] = useState([]);

  const sortNades = (testData) => {
    let result = [];
    for (let i = 0; i < testData.length; i++) {
      if (
        testData[i].map === mapName &&
        testData[i].type === selectedNade &&
        testData[i].team === selectedSide
      ) {
        result.push(testData[i]);
      }
    }
    setNadeGroupList(result);
  };

  const changeMap = (newMapName) => {
    setMapName(newMapName);
    sortNades(allNades);
    setNadeView("NadeGroup");
  };

  const toggleMapView = () => {
    setMapView(!mapView);
    sortNades(allNades);
  };

  const changeNade = (nade) => {
    setSelectedNade(nade);
    sortNades(allNades);
  };

  const changeSide = () => {
    const newSide = selectedSide === "CT" ? "T" : "CT";
    setSelectedSide(newSide);
    sortNades(allNades);
  };

  const getNades = () => {
    setAllNades(testData); // TODO - Set to all nades
    sortNades(testData);
  };

  const changeNadeView = (newNadeView, nadeGroup) => {
    setNadeView(newNadeView);
    setSelectedNadeGroup(nadeGroup);
  };

  const openNadeDialog = (nade) => {
    setDialogStyle({ display: "block" });
    setDialogNade(nade);
  };

  const closeNadeDialog = () => {
    setDialogStyle({});
    setDialogNade({});
  };

  const startSubmit = () => {
    setSubmitNade(true);
  };

  const cancelSubmit = () => {
    setSubmitNade(false);
  };

  // TODOs - Add nade functionality: New nade group, select existing nade group, add nade to nade group
  // Add nade dialog also needed
  // Position nadegroup coordingates by middle of div

  useEffect(() => {
    // Loads assets exactly once
    getNades();
  }, []);

  useEffect(() => {
    setMapName(mapName);
    sortNades(allNades);
  }, [mapName]);

  useEffect(() => {
    sortNades(allNades);
  }, [selectedNade, selectedSide]);

  return (
    <div className="MapOverview">
      {mapName ? (
        <>
          <NadeDialog
            dialogStyle={dialogStyle}
            nade={dialogNade}
            closeNadeDialog={closeNadeDialog}
          />
          <MapList assets={props.assets} changeMap={changeMap} />
          <MapButtons
            mapView={mapView}
            nadeView={nadeView}
            toggleMapView={toggleMapView}
            changeNade={changeNade}
            selectedNade={selectedNade}
            changeSide={changeSide}
            selectedSide={selectedSide}
            changeNadeView={changeNadeView}
            assets={props.assets}
            submitNade={submitNade}
            startSubmit={startSubmit}
          />
          <Map
            submitNade={submitNade}
            openNadeDialog={openNadeDialog}
            mapName={mapName}
            assets={props.assets}
            nadeGroupList={nadeGroupList}
            changeNadeView={changeNadeView}
            nadeView={nadeView}
            selectedNadeGroup={selectedNadeGroup}
            sortNades={sortNades}
            allNades={allNades}
          />
        </>
      ) : (
        <MapList assets={props.assets} changeMap={changeMap} />
      )}
    </div>
  );
}

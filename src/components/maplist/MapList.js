import React from "react";
import MapListItem from "./MapListItem";
import { mapNames } from "../../constants/Constants";
import "./maplist.css";

export default function MapList(props) {
  return (
    <div className="MapList">
      {mapNames.map((mapName) => (
        <MapListItem
          key={mapName}
          mapName={mapName}
          changeMap={props.changeMap}
          src={props.assets[mapName]["Icon"].src}
        />
      ))}
    </div>
  );
}

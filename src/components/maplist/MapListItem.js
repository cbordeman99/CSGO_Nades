import React from "react";
import "./maplistitem.css";

export default function MapListItem(props) {
  return (
    <div
      className="MapListItem"
      onClick={() => {
        props.changeMap(props.mapName);
      }}
    >
      <img
        draggable="false"
        className="MapIcon"
        alt="Map Icon"
        src={props.src}
      />
      {props.mapName}
    </div>
  );
}

import React from "react";
import "./nadegroup.css";

export default function NadeGroup(props) {
  const position = {
    left: props.nadeGroup.destination.x - 22.5,
    top: props.nadeGroup.destination.y - 22.5
  };
  if (props.nadeView === "NadeList") {
    position.opacity = 1;
  }
  return (
    <div className="NadeGroupContainer" style={position}>
      <div
        className="NadeImageContainer"
        onClick={() => {
          if (props.changeNadeView)
            props.changeNadeView("NadeList", props.nadeGroup);
        }}
      >
        <img
          src={props.assets[props.nadeName].src}
          alt="NadeGroup"
          width="45px"
          height="45px"
        />
        {props.nadeGroup.nades.length > 1 && props.nadeView !== "NadeList" ? (
          <div className="NadeGroupText">{props.nadeGroup.nades.length}</div>
        ) : null}
      </div>
    </div>
  );
}

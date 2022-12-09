import React from "react";
import "./nade.css";

export default function Nade(props) {
  return (
    <g className="Nade" onClick={() => props.openNadeDialog(props.nade)}>
      <line
        className="Line"
        x1={props.nade.origin.x}
        y1={props.nade.origin.y}
        x2={props.destination.x}
        y2={props.destination.y}
      />
      <circle
        className="Circle"
        cx={props.nade.origin.x}
        cy={props.nade.origin.y}
        r="12.5"
        fill="#909494"
      />
    </g>
  );
}

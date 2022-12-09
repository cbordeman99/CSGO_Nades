import React from "react";
import "./sideswitchbutton.css";

export default function SideSwitchButton(props) {
  return (
    <img
      draggable="false"
      className="SideSwitchButton"
      src={props.assets[props.selectedSide].src}
      alt="Side Switch Button"
      onClick={props.changeSide}
    />
  );
}

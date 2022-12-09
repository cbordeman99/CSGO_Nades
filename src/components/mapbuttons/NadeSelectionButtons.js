import React from "react";
import "./nadeselectionbutton.css";
import { nadeNames } from "../../constants/Constants";

export default function NadeSelectionButton(props) {
  return (
    <>
      {nadeNames.map((nadeName) => (
        <img
          draggable="false"
          className="NadeSelectionButton"
          alt={nadeName}
          key={nadeName}
          src={props.assets[nadeName].src}
          onClick={() => {
            props.changeNade(nadeName);
          }}
        />
      ))}
    </>
  );
}

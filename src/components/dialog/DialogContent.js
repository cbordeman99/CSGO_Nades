import React from "react";
import "./dialogcontent.css";
import Gfycat from "./Gfycat";

export default function DialogContent(props) {
  return (
    <div className="modal-content">
      <span className="close" onClick={props.closeNadeDialog}>
        &times;
      </span>
      {props.nade ? (
        <>
          <p style={{ color: "white" }}>
            {props.nade.description}{" "}
            <span>Movement: {props.nade.movement} </span>
            <span>Technique: {props.nade.technique} </span>
            <span>Mouse Click: {props.nade.mouseclick} </span>
          </p>
          <Gfycat nade={props.nade} />{" "}
        </>
      ) : null}
    </div>
  );
}

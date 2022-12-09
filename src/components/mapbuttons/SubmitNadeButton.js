import React from "react";
import "./submitnadebutton.css";

export default function SubmitNadeButton(props) {
  return (
    <>
      {!props.submitNade ? (
        <button className="SubmitNadeButton" onClick={props.startSubmit}>
          Submit Nade
        </button>
      ) : props.nadeView === "NadeGroup" ? (
        <button className="SubmitNadeButton">Nade Group</button>
      ) : (
        <button className="SubmitNadeButton">Nade List</button>
      )}
    </>
  );
}

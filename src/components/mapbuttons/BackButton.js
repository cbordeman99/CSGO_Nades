import React from "react";
import "./backbutton.css";

export default function BackButton(props) {
  return (
    <span
      className="BackButton"
      onClick={() => {
        props.changeNadeView("NadeGroup", {});
      }}
    >
      &lt;
    </span>
  );
}

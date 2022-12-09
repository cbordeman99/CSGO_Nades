import React from "react";
import Nade from "./Nade";
import NadeGroup from "./NadeGroup";
import "./nadelist.css";

export default function NadeList(props) {
  return (
    <>
      <NadeGroup
        assets={props.assets}
        nadeView={props.nadeView}
        nadeGroup={props.selectedNadeGroup}
        nadeName={props.selectedNadeGroup.type}
      />
      <svg className="NadeList">
        {props.selectedNadeGroup.nades.map((nade) => (
          <Nade
            openNadeDialog={props.openNadeDialog}
            nade={nade}
            assets={props.assets}
            destination={props.selectedNadeGroup.destination}
            nadeName={props.selectedNadeGroup.type}
          />
        ))}
      </svg>
    </>
  );
}

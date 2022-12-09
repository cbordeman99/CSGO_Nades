import React from "react";
import NadeGroup from "./NadeGroup";

export default function NadeGroupList(props) {
  return (
    <>
      {props.nadeGroupList.map((nadeGroup) => (
        <NadeGroup
          nadeGroup={nadeGroup}
          assets={props.assets}
          nadeName={nadeGroup.type}
          changeNadeView={props.changeNadeView}
        />
      ))}
    </>
  );
}

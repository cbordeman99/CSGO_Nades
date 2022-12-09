import React from "react";
import "./map.css";
import NadeGroupList from "../nade/NadeGroupList";
import NadeList from "../nade/NadeList";
import { Nade } from "../../models/nade.model";
import { NadeGroup } from "../../models/nadegroup.model";

export default function Map(props) {
  const getMapSrc = () => {
    if (props.assets) {
      return props.assets[props.mapName]["Radar"].src;
    }
  };
  return (
    <div
      className="Container"
      onClick={(e) => {
        e.persist();
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        // props.addNadeGroup(x, y)
        console.log(x, y);
        const destination = {
          x: x,
          y: y
        };
        const newNade = new NadeGroup(
          "Mirage",
          "A",
          "CT",
          "Smoke",
          [],
          destination
        );
        props.allNades.push(newNade);
        props.sortNades(props.allNades);
      }}
    >
      <img draggable="false" className="Map" src={getMapSrc()} alt="Map XD" />
      {props.nadeView === "NadeGroup" ? (
        <NadeGroupList
          nadeGroupList={props.nadeGroupList}
          assets={props.assets}
          changeNadeView={props.changeNadeView}
        />
      ) : (
        <NadeList
          openNadeDialog={props.openNadeDialog}
          assets={props.assets}
          nadeView={props.nadeView}
          selectedNadeGroup={props.selectedNadeGroup}
        />
      )}
    </div>
  );
}

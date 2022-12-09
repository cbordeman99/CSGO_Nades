import React from "react";
import "./nadedialog.css";
import DialogContent from "./DialogContent";

export default function NadeDialog(props) {
  return (
    <div id="myModal" className="modal" style={props.dialogStyle}>
      <DialogContent
        closeNadeDialog={props.closeNadeDialog}
        nade={props.nade}
      />
    </div>
  );
}

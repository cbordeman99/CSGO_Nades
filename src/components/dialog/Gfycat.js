import React from "react";

export default function NadeGroup(props) {
  return (
    <video
      width="80%"
      height="80%"
      margin="auto"
      loop={true}
      autoPlay={true}
      controls
      playsInline=""
      src={props.nade.link}
      type="video/mp4"
    ></video>
  );
}

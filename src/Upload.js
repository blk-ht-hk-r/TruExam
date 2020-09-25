import React from "react";
import "./upload.css";
export default function Upload() {
  return (
    <div className="upload_con">
      <div className="img_con"></div>
      <input type="file"></input>
      <input type="text" placeholder="Editing details"></input>
      <input type="text" placeholder="task Name"></input>
    </div>
  );
}

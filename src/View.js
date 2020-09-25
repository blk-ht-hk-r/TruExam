import React from "react";
import "./view.css";
export default function View(props) {
  return (
    <div className="cont">
      <input type="text" placeholder="Search Image"></input>
      <div>
        <img id="view" src={props.schema.urls} alt="searched result"></img>
        <div>{props.schema.detail}</div>
        <div>{props.schema.taskName}</div>
        <input type="text" maxLength="2" size="2" placeholder="Points"></input>
        <div>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
}

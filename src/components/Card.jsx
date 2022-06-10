import React from "react";
import Avatar from "./Avatar.jsx";
export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

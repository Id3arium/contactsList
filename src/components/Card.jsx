import React from "react";
import Avatar from "./Avatar";
export default function Card() {
  return (
    <div className="card">
      <div className="top">
        <h2>Beyonce</h2>
        <Avatar />
      </div>
      <div className="bottom">
        <p>+123 456 789</p>
        <p>b@beyonce.com</p>
      </div>
    </div>
  );
}

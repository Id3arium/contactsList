import React from "react";
import "../../public/styles.css";

export default function Avatar(props) {
  return <img className="circle-img" src={props.src} alt="avatar_img" />;
}

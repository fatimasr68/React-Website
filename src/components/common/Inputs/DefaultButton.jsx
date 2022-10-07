import React from "react";
import "./DefaultButton.css"

const DefaultButton = (props) => {
  return (
    <div>
      <button className="default-btn" {...props} >{props.text}</button>
    </div>
  );
};

export default DefaultButton;

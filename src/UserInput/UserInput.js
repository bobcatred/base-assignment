import React from "react";
import "./UserInput.css";

const userinput = props => {
  return (
    <div className="UserInput">
      Enter Name:{" "}
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
};

export default userinput;

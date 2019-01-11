import React from "react";
import "./UserOutput.css";

const useroutput = props => {
  return (
    <div className="UserOutput">
      <p>Hello, World</p>
      <p>My Name is {props.username}</p>
    </div>
  );
};

export default useroutput;

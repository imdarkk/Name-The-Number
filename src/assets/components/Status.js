import React from "react";
import "../scss/Status.scss";

function Status(props) {
  return (
    <div className="wrapperStatus">
      <p className="generalStyle" id={props.classID}>
        {props.text}
      </p>
    </div>
  );
}

export default Status;

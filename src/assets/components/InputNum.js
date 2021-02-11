import React, { useState } from "react";

import "../scss/InputNum.scss";

import sendIcon from "../images/sendImage.svg";

function InputNum(props) {
  const [fly, setFly] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="wrapperInput">
      <input
        type="number"
        id="userInput"
        name="userInput"
        value={props.num}
        onChange={(e) => props.setNum(e.target.valueAsNumber)}
        required
      />
      <label for="userInput" id="labelInput">
        Guess the number
      </label>
      {errorShow && (
        <p id="errorText">
          <span id="errorTag">Error:</span> {error}
        </p>
      )}
      <div
        id="sendBtn"
        onClick={() => {
          if (props.num != undefined) {
            setErrorShow(false);
            setError("");
            setFly(true);
            setTimeout(() => {
              setFly(false);
            }, 600);
            props.setCompare(props.num);

            if (props.num != props.compareNum) {
              props.setTries(props.tries-1)
            }
          }

          if (props.num == undefined || isNaN(props.num) || props.num == "") {
            setErrorShow(true);
            setError("Please enter a number");
          }

          if (props.num < 0) {
            setErrorShow(true);
            setError("Please enter a number higher than or equal to 0");
          }

          if (props.num > 100) {
            setErrorShow(true);
            setError("Please enter a number lower than or equal to 100");
          }
        }}
      >
        <img src={sendIcon} alt="" id={fly ? "sendImgAnimation" : "sendImg"} />
      </div>
    </div>
  );
}

export default InputNum;

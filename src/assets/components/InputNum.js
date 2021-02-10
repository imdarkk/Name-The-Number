import React, { useState } from "react";

import "../scss/InputNum.scss";

import sendIcon from "../images/sendImage.svg";

function InputNum(props) {
  const [fly, setFly] = useState(false);

  return (
    <div className="wrapperInput">
      <input
        type="number"
        id="userInput"
        name="userInput"
        value={props.num}
        onChange={(e) => props.setNum(e.target.valueAsNumber)}
        min={0}
        required
      />
      <label for="userInput" id="labelInput">
        Guess the number
      </label>
      <div
        id="sendBtn"
        onClick={() => {
          setFly(true);
          setTimeout(() => {
            setFly(false);
          }, 600);
          props.setCompare(props.num);
        }}
      >
        <img src={sendIcon} alt="" id={fly ? "sendImgAnimation" : "sendImg"} />
      </div>
    </div>
  );
}

export default InputNum;
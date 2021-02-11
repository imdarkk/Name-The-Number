import React from "react";
import "../scss/Congrats.scss";

function Fail() {
  return (
    <div className="wrapperCongrats">
      <p id="foundText">Failed! You didn't find the number. 👎👎👎</p>
      <p id="againText" onClick={() => window.location.reload()}>
        Play Again? 🔄
      </p>
    </div>
  );
}

export default Fail;

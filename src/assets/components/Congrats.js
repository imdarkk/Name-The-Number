import React from "react";
import "../scss/Congrats.scss";

function Congrats() {
  return (
    <div className="wrapperCongrats">
      <p id="foundText">Congratulations! You found the number. 🎉🎉🎉</p>
      <p id="againText" onClick={() => window.location.reload()}>Play Again? 🔄</p>
    </div>
  );
}

export default Congrats;

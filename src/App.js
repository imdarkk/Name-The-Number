//General
import React, { useState, useEffect } from "react";

//Styling
import "./assets/scss/App.scss";

//Components
import Status from "./assets/components/Status";
import InputNum from "./assets/components/InputNum";
import Congrats from "./assets/components/Congrats";
import Fail from "./assets/components/Fail";
import InfoIcon from "./assets/components/InfoIcon";
import InfoCard from "./assets/components/InfoCard";

function App() {
  //Numbers for game
  const [userInput, setUserInput] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [compareNum, setCompareNum] = useState();
  const [tries, setTries] = useState(5);

  //Info Card Props
  const [isHidden, setStatus] = useState(true);

  let min = 1,
    max = 100;
  let number = min + Math.random() * (max - min);

  useEffect(() => {
    setRandomNumber(Math.floor(number));
  }, []);

  console.log(randomNumber);
  console.log(compareNum);

  return (
    <div className="App">
      <div id="infoWrapper">
        <InfoIcon setStats={setStatus} />
      </div>
      <InputNum
        num={userInput}
        setNum={setUserInput}
        setCompare={setCompareNum}
        compareNum={compareNum}
        setTries={setTries}
        tries={tries}
      />
      <p id="triesText">
        <span id="tries">Tries Left: </span>
        {tries}
      </p>
      <div id="wrapperActions">
        {!(compareNum < 0) && compareNum < randomNumber && (
          <Status classID="higherText" text="Higher" />
        )}
        {!(compareNum > 100) && compareNum > randomNumber && (
          <Status classID="lowerText" text="Lower" />
        )}
        {compareNum == randomNumber && <Congrats />}
        {tries == 0 && <Fail />}
      </div>

      {!isHidden && (
        <div id="cardWrapper">
          <InfoCard setStats={setStatus} />
        </div>
      )}
    </div>
  );
}

export default App;

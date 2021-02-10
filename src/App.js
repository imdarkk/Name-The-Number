//General
import React, { useState, useEffect } from "react";

//Styling
import "./assets/scss/App.scss";

//Components
import Lower from "./assets/components/Lower";
import Higher from "./assets/components/Higher";
import InputNum from "./assets/components/InputNum";
import Congrats from "./assets/components/Congrats";
import InfoIcon from "./assets/components/InfoIcon";
import InfoCard from "./assets/components/InfoCard";

function App() {
  //Numbers for game
  const [userInput, setUserInput] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [compareNum, setCompareNum] = useState();

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
      />
      <div id="wrapperActions">
        {compareNum == randomNumber && <Congrats />}

        {compareNum < randomNumber && <Higher />}

        {compareNum > randomNumber && <Lower />}
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

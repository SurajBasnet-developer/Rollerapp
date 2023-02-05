import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [diceNum, setDiceNum] = useState(3);
  const reDice = () => {
    const Randno = Math.floor(Math.random() * 6) + 1;
    setDiceNum(Randno);
  };
  return (
    <div>
      <center>
        <img
          width={300}
          height={300}
          src={require(`./assets/${diceNum}.png`)}
        ></img>
        <br></br>
        <button onClick={() => reDice()} className="button">
          Roll
        </button>
      </center>
    </div>
  );
};

export default App;

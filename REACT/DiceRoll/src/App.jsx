import Die from "./components/Die.jsx"
import { numberGenerator } from "./helper.js"
import {useState} from 'react';

const App = () => {
  let [die1, setNum1] = useState(numberGenerator());
  let [die2, setNum2] = useState(numberGenerator());

  let button = document.getElementById("roll-button");

  let rollAgain = () => {
    setNum1(numberGenerator());
    setNum2(numberGenerator());
  }
  
  return (
    <div id="app">
      <div id="header-row">
        <h1>Simple Die Roller</h1>
      </div>
      <div id="dice-row">
        <Die side={die1} />
        <Die side={die2} />
      </div>
      <div id="total-row">
        <h1>Total: {(die1 + 1)  + (die2 + 1)}</h1>
      </div>
      <div id="button-row">
        <button id="roll-button" onClick={rollAgain}>Roll Again</button>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  let randomNumber = () => Math.floor(Math.random() * 10 + 1);
  let [number, setNumber] = useState(randomNumber());
  let [won, setWon] = useState(false);

  let handleClick = () => {
    let newNumber = randomNumber(); // Needed to use a new variable to check if the winCon was met.
    setNumber(newNumber);
    
    if (newNumber === 7) {
      setWon(true);
    } else {
      setWon(false);
    }
  }
 
  return (
    <>
      <h1>Welcome to the Casino</h1>
      <h1 id='number'>{number}</h1>
      <button style={{ visibility: won ? 'hidden' : 'visible' }} id='button' onClick={handleClick}>Click</button>
      <h1 style={{ visibility: won ? 'visible' : 'hidden' }} id='youWon'>You Won!!!</h1>
    </>
  )
}

export default App

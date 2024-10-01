import { useState } from 'react'
import './App.css'

const App = () => {
  // Consuming an api
  // http request
  // Click a button
  // Get a random dog image
  const handleClick = () => {
    console.log("Clicked");  
  }

  return (
    <>
      <h1>Random Dog Image Generator</h1>
      <button onClick={handleClick}>Click Me</button>
      <img src="" alt="" />
    </>
  )
}

export default App

import { useState } from 'react'
import doggy from "./assets/dream-analysis.webp"
import './App.css'

function App() {

  return (
    <>
      <h1>My Image Demo</h1>
      <img src={doggy} alt="dream analysis" />
      <img src="./public/images/guided-journey.webp" />
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import BackgroundButtons from "./components/BackgroundButtons.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);
  // setCount(count + 1);

  useEffect(()=>{
    if (count < 5) {
      setCount(count + 1)
    }
  }, [count])

  return (
    <>
      <h1>My Counter Demo with Use Effect</h1>
      COUNT: {count}
      <BackgroundButtons/>
        <Counter/>
    </>
  )
}

export default App

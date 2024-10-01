import { useState } from 'react'
import './App.css'

function App() {
  const [days, setDays] = useState(303);

  const handleClick = () => setDays((doggy) => doggy -1);

  return (
    <div className="App">
      <h1>Birthday countdown</h1>
      <div className="card">
        <button onClick={handleClick}>
          Days remaining until birthday: {days}
        </button>
      </div>
    </div>
  )
}

export default App

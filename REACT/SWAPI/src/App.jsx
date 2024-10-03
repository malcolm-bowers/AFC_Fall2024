import './App.css'
import Table from './components/Table'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showTable = () => {
    setIsVisible(true);
  }

  const resetTable = () => {
    setIsVisible(false);
  }

  return (
    <div>
      <h1>SWAPI APP</h1>
      <Stack 
        justifyContent="center" 
        spacing={2} 
        direction="row"
        padding={2}
        >
        <Button id='showButton' variant='contained' onClick={showTable}>SHOW</Button>
        <Button id='resetButton' variant='contained' onClick={resetTable}>RESET</Button>
      </Stack> 
      {isVisible && <Table />}
    </div>
  )
}

export default App

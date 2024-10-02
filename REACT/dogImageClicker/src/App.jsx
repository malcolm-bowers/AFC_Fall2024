import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import DogImageCard from './components/DogImageCard';

const App = () => {
  // Consuming an api
  // http request
  // Click a button
  // Get a random dog image


  // 1) Utilize an endpoint
  // fetch(endpoint)
  // 2) Get response
  // .then(response)
  // 3) Parse if good, else throw error
  // .then(parsedData) do something with data
  // .catch(error) handle errors

  // skeleton or scaffolding
  // axios.method(endpoint)
  // .then(response)
  // .catch(error)

  const [dogImage, setDogImage] = useState("");
  const endpoint = `https://dog.ceo/api/breeds/image/random`;

  const handleClick = () => {
    console.log("Clicked"); 
    axios
    .get(endpoint)
    .then(response => setDogImage(response.data.message))
    .catch((error) => {
      console.error("Error: ", error.message);
    }); 
  }

  useEffect(()=>{
    axios
    .get(endpoint)
    .then(response => setDogImage(response.data.message))
    .catch((error) => {
      console.error("Error: ", error.message);
    });
  },[])

  return (
    <>
      <h1>Random Dog Image Generator</h1>
      <div><button onClick={handleClick}>Click Me</button></div>
      <DogImageCard imagePath={ dogImage } />
    </>
  )
}

export default App

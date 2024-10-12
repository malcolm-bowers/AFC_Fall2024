import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './components/HomeComponent'
import Contact from './components/ContactComponent'
import About from './components/AboutComponent'
import Button from '@mui/material/Button'
import axios from 'axios';
import MovieCard from './components/MovieCard'
import {useState} from "react"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

function App() {
  const [movies, setMovies] = useState([])

  const {VITE_TMDB_API_TOKEN} = process.env;
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleClick = () => {
    console.log("Clicked");
    // scaffolding from axios
    axios(options)
    .then(response => {
      console.log(response);
      // response.data.results => array of movie objects
      let movieArray = response.data.results.map((movie) => {
        return <MovieCard movie={movie} />
      })
      setMovies(movieArray);
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Router>
        <div className='App'>
          <div className='container'>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <hr/>
            {
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            }
          </div>
        </div>
      </Router>
      <Button variant="contained" onClick={handleClick}>Button</Button>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {movies.length > 0 && movies.slice(0, 12).map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>{movie}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default App

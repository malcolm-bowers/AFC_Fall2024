import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {experimentalStyled as styled, Grid, Paper} from '@mui/material'
import MovieCard from "./MovieCard.jsx";

export default function Results() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const {VITE_TMDB_API_TOKEN} = process.env;

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
            }
        };

        axios(options)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(err => {
                navigate("../Error");
                console.log(err)
            });
    }, []); // Empty dependency array to run only once when the component mounts

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        textAlign: 'center',
        maxWidth: '400px',
        color: theme.palette.text.secondary,
    }));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
            <h1 style={{textAlign: 'center', color: 'white', fontSize: '72px'}}>Now Playing:</h1>
            <Grid container spacing={3} justifyContent="center" alignItems="center" paddingX={10}>
                {movies.length > 0 && movies.slice(0, 12).map((movie, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Item>
                            <MovieCard movie={movie}/>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

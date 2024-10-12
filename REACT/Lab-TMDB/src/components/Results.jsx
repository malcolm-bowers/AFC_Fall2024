import axios from 'axios';
import {useEffect, useState} from "react";
import {Box, Grid, Paper, experimentalStyled as styled} from '@mui/material'
import MovieCard from "./MovieCard.jsx";

export default function Results() {
    const [movies, setMovies] = useState([]);

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
                let movieArray = response.data.results.map((movie) => {
                    return <MovieCard movie={movie} />;
                });
                setMovies(movieArray);
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array to run only once when the component mounts

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{flexGrow: 1}}>
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

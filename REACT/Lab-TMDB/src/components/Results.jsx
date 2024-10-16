import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Grid, Paper, styled, Typography} from '@mui/material';
import MovieCard from "./MovieCard.jsx";
import NavBar from "./NavBar.jsx";

export default function Results() {
    const navigate = useNavigate();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const searchData = location.state?.searchData || '';
    const {VITE_TMDB_API_TOKEN} = process.env;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const endpoint = searchData
                    ? `https://api.themoviedb.org/3/search/movie`
                    : `https://api.themoviedb.org/3/movie/now_playing`;

                const params = searchData
                    ? {query: searchData, include_adult: 'false', language: 'en-US', page: 1}
                    : {};

                const response = await axios.get(endpoint, {
                    params,
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`,
                    },
                });

                setMovies(response.data.results);
            } catch (err) {
                console.log('Error fetching movies:', err);
                navigate('/error');
            }
        };

        fetchMovies();
    }, [searchData, VITE_TMDB_API_TOKEN, navigate]);

    // Styled Paper component for the movie cards
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "transparent",
        boxShadow: '0px 4px 10px 2px rgba(255, 0, 0, 0.8)',
        ...theme.typography.body2,
        textAlign: 'center',
        maxWidth: '400px',
        borderRadius: "15px",
        color: theme.palette.text.secondary,
    }));

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
            <NavBar/>
            <h1 style={{textAlign: 'center', color: 'red', fontSize: '72px'}}>
                {searchData ? `Search Results for "${searchData}"` : 'Now Playing'}
            </h1>

            {movies.length === 0 ? (
                <Typography variant="h6" align="center" color="error">
                    No movies found
                </Typography>
            ) : (
                <Grid container spacing={3} justifyContent="center">
                    {movies.slice(0, 12).map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <Item>
                                <MovieCard movie={movie}/>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}


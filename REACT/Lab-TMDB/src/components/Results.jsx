import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import axios from 'axios';
import MovieCard from './MovieCard.jsx';

export default function Results() {
    const navigate = useNavigate();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const searchData = location.state?.searchData || '';
    const {VITE_TMDB_API_TOKEN} = process.env;

    const fetchMovies = useCallback(async () => {
        try {
            const endpoint = searchData
                ? 'https://api.themoviedb.org/3/search/movie'
                : 'https://api.themoviedb.org/3/movie/now_playing';

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
            console.error('Error fetching movies:', err);
            navigate('/error');
        }
    }, [searchData, VITE_TMDB_API_TOKEN, navigate]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
            <h1 style={{textAlign: 'center', color: 'red', fontSize: '72px'}}>
                {searchData ? `Search Results for "${searchData}"` : 'Now Playing'}
            </h1>

            {movies.length === 0 ? (
                <Typography variant="h6" align="center" color="error">
                    No movies found
                </Typography>
            ) : (
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    wrap="wrap"
                >
                    {movies.slice(0, 12).map((movie) => (
                        <Grid
                            item
                            xs={12} sm={6} md={4} lg={3}
                            key={movie.id}
                            sx={{minWidth: 300}} // Ensure minimum width
                        >
                            <MovieCard movie={movie}/>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}

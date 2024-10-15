import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { experimentalStyled as styled, Grid, Paper, Typography } from '@mui/material';
import MovieCard from "./MovieCard.jsx";
import NavBar from "./NavBar.jsx";

export default function Results() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const { VITE_TMDB_API_TOKEN } = process.env;

    // Fetch "Now Playing" movies when not searching
    useEffect(() => {
        if (!isSearching) {
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
                    console.log(err);
                });
        }
    }, [isSearching, VITE_TMDB_API_TOKEN]);

    // Handle search results from NavBar
    const handleSearchResults = (results) => {
        setSearchResults(results);
        setIsSearching(true);
    };

    // Styled Paper component for the movie cards
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "transparent",
        boxShadow: "none",
        ...theme.typography.body2,
        textAlign: 'center',
        maxWidth: '400px',
        color: theme.palette.text.secondary,
    }));

    // Determine whether to show "Now Playing" or search results
    const moviesToShow = isSearching ? searchResults : movies;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <NavBar onSearchResults={handleSearchResults} />
            <h1 style={{ textAlign: 'center', color: 'red', fontSize: '72px' }}>
                {isSearching ? "Search Results" : "Now Playing"}
            </h1>

            {/* Handle case where there are no results */}
            {moviesToShow.length === 0 ? (
                <Typography variant="h6" align="center" color="error">
                    {isSearching ? "No results found" : "No movies available"}
                </Typography>
            ) : (
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {moviesToShow.slice(0, 12).map((movie, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <Item>
                                <MovieCard movie={movie} />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}


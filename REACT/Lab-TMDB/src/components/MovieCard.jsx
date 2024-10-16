import * as React from 'react';
import {Card, CardContent, CardMedia, Rating, Typography} from '@mui/material';
import ThemedPaper from "./ui/Theme.jsx";

export default function MovieCard({movie}) {
    const defaultImgPath = 'src/assets/no-signal.webp';
    const baseImgPath = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    const [imgSrc, setImgSrc] = React.useState(baseImgPath);

    const handleImgError = () => {
        setImgSrc(defaultImgPath); // Use default image if loading fails
    };

    return (
        <Card
            sx={{
                width: 300, // Fixed width for consistency
                height: 700, // Fixed height for all cards
                display: 'flex',
                flexDirection: 'column',
                border: '3px solid red',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0px 4px 10px 2px rgba(255, 0, 0, 0.8)',
            }}
        >
            <CardMedia
                component="img"
                image={imgSrc}
                alt={movie.title}
                onError={handleImgError}
                sx={{
                    width: '100%',
                    height: 500,
                    objectPosition: 'center top',
                }}
            />
            <ThemedPaper>
                <CardContent
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                        maxHeight: 200,
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary', marginBottom: '0.5rem'}}>
                        {movie.overview || 'No description available.'}
                    </Typography>
                    <Rating
                        name="read-only"
                        value={movie.vote_average / 2}
                        precision={0.1}
                        readOnly
                    />
                </CardContent>
            </ThemedPaper>
        </Card>
    )
        ;
}

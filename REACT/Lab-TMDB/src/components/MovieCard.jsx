import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

export default function MovieCard({movie}) {
    const baseImgPath = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return (
        <Card sx={{ maxWidth: "400px", height: "650px", overflow: "scroll" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={baseImgPath}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
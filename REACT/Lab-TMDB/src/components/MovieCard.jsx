import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

export default function MovieCard({movie}) {
    const baseImgPath = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return (
        <Card sx={{
            maxWidth: "400px",
            height: "600px",
            display: 'flex',
            flexDirection: 'column',
            border: `3px solid red`,
            borderRadius: '15px',
        }}>
            <CardActionArea sx={{
                height: "100%",
                m: 0,
                p: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardMedia
                    component="img"
                    image={baseImgPath}
                    alt={movie.title}
                    sx={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        margin: 0,
                        padding: 0
                    }}
                />
                <CardContent sx={{
                    flex: '1 1 auto',
                    height: "100px",
                    overflowY: 'auto',
                    padding: '16px'
                }}>
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
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MovieCard({movie}) {
    const baseImgPath = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <Card sx={{ maxWidth: 345, height: "500px", overflow: "scroll" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
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
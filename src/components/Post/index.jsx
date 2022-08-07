import React from 'react'
import {
  Button, Card,
  CardActions, CardContent,
  CardMedia, Typography
} from '@mui/material'

const url = 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='

export function Post() {
  return (
    <Card sx={{ mb: 5 }}>
      <CardMedia
        sx={{ height: { xs: '120px', md: '250px' } }}
        component="img"
        alt="green iguana"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except AntarcticaLizards are
          a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except AntarcticaLizards are a
          widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  )
}

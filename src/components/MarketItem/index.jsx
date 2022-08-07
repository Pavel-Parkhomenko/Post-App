import React from 'react'
import {
  Card, CardContent, CardMedia, ListItem, Typography,
  CardActions, Button, Rating,
} from '@mui/material'

export function MarketItem({
  id,
  title,
  description,
  image,
  price,
  rating
}) {
  return (
    <ListItem>
      <Card
        sx={{ height: '100%' }}
      >
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={image}
        />
        <CardContent>
          <Typography>
            { title }
          </Typography>
          <Typography>
            { description }
          </Typography>
        </CardContent>
        <CardActions>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <Button
            size="small"
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  )
}

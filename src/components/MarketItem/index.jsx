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
    <ListItem sx={
      { justifyContent: 'center' }
    }
    >
      <Card
        sx={{ width: 600 }}
      >
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={image}
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            { title }
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 3, color: 'gray' }}
          >
            { description }
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
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

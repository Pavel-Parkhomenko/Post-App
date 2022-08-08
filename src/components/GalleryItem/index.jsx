import * as React from 'react'
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Avatar, IconButton,
  Typography, ListItem
} from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

export function GalleryItem({
  id,
  url,
  photographer,
  src,
  alt
}) {
  return (
    <ListItem sx={
      { justifyContent: 'center' }
    }
    >
      <Card sx={{ width: 600 }}>
        <CardHeader
          avatar={(
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          )}
          title={photographer}
        />
        <CardMedia
          component="img"
          height="200"
          image={src}
          alt={alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            { alt }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  )
}

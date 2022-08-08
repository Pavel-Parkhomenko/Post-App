import React, { useState } from 'react'
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Avatar, IconButton,
  Typography, ListItem, Badge, Button
} from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

export function GalleryItem({
  id,
  url,
  photographer,
  src,
  alt,
  photographerId,
  likes = 0
}) {
  const [cntLikes, setCntLikes] = useState(likes)
  const [colorLike, setColorLike] = useState('secondary')
  const handleLike = () => {
    setCntLikes(prev => prev + 1)
    setColorLike(prev => (prev === 'secondary' ? 'error' : 'secondary'))
  }

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
          subheader={`id ${photographerId}`}
          action={<Button>Details</Button>}
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
          <IconButton
            aria-label="add to favorites"
            onClick={handleLike}
          >
            <Badge color={colorLike} badgeContent={cntLikes} max={10}>
              <FavoriteIcon color={colorLike} />
            </Badge>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  )
}

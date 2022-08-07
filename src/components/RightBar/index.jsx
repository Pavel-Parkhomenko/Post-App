import React from 'react'
import {
  Avatar, AvatarGroup,
  Container, Typography, ImageList,
  ImageListItem
} from '@mui/material'
import { galleryData } from '../../mocks/galleryData'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export function RightBar() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography gutterBottom>Online Friends</Typography>
      <AvatarGroup max={6} sx={{ justifyContent: 'left', mb: 2 }}>
        <Avatar alt="Remy Sharp" src="" />
        <Avatar alt="Travis Howard" src="" />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Trevor Henderson" src="" />
        <Avatar alt="Trevor Henderson" src="" />
        <Avatar alt="Trevor Henderson" src="" />
        <Avatar alt="Trevor Henderson" src="" />
      </AvatarGroup>
      <Typography gutterBottom>Gallery</Typography>
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {galleryData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

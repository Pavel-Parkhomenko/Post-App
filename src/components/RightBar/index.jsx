import React from 'react'
import {
  Avatar, AvatarGroup,
  Container, Typography
} from '@mui/material'

export function RightBar() {
  return (
    <Container sx={{ justifyContent: 'center' }}>
      <Typography gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="" />
        <Avatar alt="Travis Howard" src="" />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Trevor Henderson" src="" />
      </AvatarGroup>
      <Typography gutterBottom>Gallery</Typography>
      {/*<ImageList*/}
      {/*  sx={{ width: 500, height: 450 }}*/}
      {/*  variant="quilted"*/}
      {/*  cols={4}*/}
      {/*  rowHeight={121}*/}
      {/*>*/}
      {/*  {itemData.map((item) => (*/}
      {/*    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>*/}
      {/*      <img*/}
      {/*        {...srcset(item.img, 121, item.rows, item.cols)}*/}
      {/*        alt={item.title}*/}
      {/*        loading="lazy"*/}
      {/*      />*/}
      {/*    </ImageListItem>*/}
      {/*  ))}*/}
      {/*</ImageList>*/}
    </Container>
  )
}

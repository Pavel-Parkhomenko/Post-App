import React from 'react'
import { List } from '@mui/material'
import { GalleryItem } from '../GalleryItem'

export function GalleryList({ galleryItems = [] }) {
  return (
    <List>
      {galleryItems.map(({
        id,
        url,
        photographer,
        src,
        alt
      }) => (
        <GalleryItem
          id={id}
          key={id}
          url={url}
          photographer={photographer}
          src={src.large2x}
          alt={alt}
        />
      ))}
    </List>
  )
}

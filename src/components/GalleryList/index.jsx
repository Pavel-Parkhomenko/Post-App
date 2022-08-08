import React from 'react'
import { List } from '@mui/material'
import { GalleryItem } from '../GalleryItem'

export function GalleryList({ galleryItems = [] }) {
  function random() {
    const min = 1
    const max = 15
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  return (
    <List>
      {galleryItems.map(({
        id,
        url,
        photographer,
        src,
        alt,
        photographer_id
      }) => (
        <GalleryItem
          id={id}
          key={id}
          url={url}
          photographer={photographer}
          src={src.large2x}
          alt={alt}
          photographerId={photographer_id}
          likes={random()}
        />
      ))}
    </List>
  )
}

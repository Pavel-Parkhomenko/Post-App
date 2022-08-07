import React from 'react'
import { List } from '@mui/material'
import { MarketItem } from '../MarketItem'

export function Market({ products = [] }) {
  return (
    <List>
      {products.map(({
        id,
        title,
        description,
        images,
        price,
        rating
      }) => (
        <MarketItem
          id={id}
          key={id}
          title={title}
          description={description}
          image={images[0]}
          price={price}
          rating={rating}
        />
      ))}
    </List>
  )
}

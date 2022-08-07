import React from 'react'
import { Container } from '@mui/material'
import { Post } from '../Post'

export function Feed() {
  return (
    <Container sx={{ mt: 2 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  )
}

import React, { useEffect } from 'react'
import { Container, Grid, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { NavBar } from '../components/NavBar'
import { LeftBar } from '../components/LeftBar'
import { Feed } from '../components/Feed'
import { RightBar } from '../components/RightBar'
import { Add } from '../components/Add'
import { fetchGallery } from '../store/gallerySlice'

export function Home() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.gallery)
  useEffect(() => {
    // dispatch(fetchGallery())
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
          <Divider
            orientation="vertical"
          />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Divider, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { LeftBar } from '../components/LeftBar'
import { RightBar } from '../components/RightBar'
import { GalleryList } from '../components/GalleryList'
import { fetchGallery } from '../store/gallerySlice'

export function Gallery() {
  const dispatch = useDispatch()
  const { gallery } = useSelector(state => state.gallery)

  useEffect(() => {
    dispatch(fetchGallery())
  }, [dispatch])

  return (
    <div>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
          <Divider
            orientation="vertical"
          />
        </Grid>
        <Grid item sm={6} xs={10}>
          <GalleryList galleryItems={gallery} />
        </Grid>
        <Grid item sm={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  )
}

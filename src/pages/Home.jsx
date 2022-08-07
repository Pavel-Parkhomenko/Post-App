import React from 'react'
import { Container, Grid } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { LeftBar } from '../components/LeftBar'
import { Feed } from '../components/Feed'
import { RightBar } from '../components/RightBar'
import { Add } from '../components/Add'

export function Home() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  )
}

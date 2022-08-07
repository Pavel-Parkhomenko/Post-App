import React from 'react'
import { Grid, Divider } from '@mui/material'
import { LeftBar } from '../components/LeftBar'
import { Feed } from '../components/Feed'
import { RightBar } from '../components/RightBar'

export function Home() {
  return (
    <div>
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

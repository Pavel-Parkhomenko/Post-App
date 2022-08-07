import React from 'react'
import { Divider, Grid } from '@mui/material'
import { LeftBar } from '../components/LeftBar'
import { RightBar } from '../components/RightBar'

export function MarketPlace() {
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
          <h1>Market Place</h1>
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  )
}

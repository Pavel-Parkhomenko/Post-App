import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, Grid } from '@mui/material'
import { LeftBar } from '../components/LeftBar'
import { RightBar } from '../components/RightBar'
import { Market } from '../components/Market'
import { fetchProducts } from '../store/productSlice'

export function MarketPlace() {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
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
        <Grid item sm={7} xs={10}>
          <Market products={products} />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  )
}

import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './gallerySlice'
import productReducer from './productSlice'

export default configureStore({
  reducer: {
    gallery: galleryReducer,
    product: productReducer
  }
})

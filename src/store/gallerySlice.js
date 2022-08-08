import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.pexels.com/v1/search?query=people',
        {
          headers: {
            Authorization: '563492ad6f91700001000001a8504c39cce04fef9c400152f3e0a235'
          }
        }
      )
      return await response.json()
    } catch (err) {
      return rejectWithValue('Error: can not to load photos')
    }
  }
)

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    loading: false,
    gallery: [],
    error: null
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload.data]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.gallery = action.payload.photos
        state.loading = false
        state.error = null
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

// export const { addToBasket } = gallerySlice.actions

export default gallerySlice.reducer

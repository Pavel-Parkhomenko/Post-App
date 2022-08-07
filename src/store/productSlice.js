import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      return await response.json()
    } catch (err) {
      return rejectWithValue('Custom Error')
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    products: [],
    basket: [],
    error: null
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload.data]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products
        state.loading = false
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { addToBasket } = productsSlice.actions

export default productsSlice.reducer

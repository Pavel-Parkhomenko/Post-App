import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { theme } from './theme'
import store from './store/store'
import { NavBar } from './components/NavBar'
import { MarketPlace } from './pages/MarketPlace'
import { Gallery } from './pages/Gallery'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="market" element={<MarketPlace />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

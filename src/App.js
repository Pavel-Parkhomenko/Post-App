import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Home } from './pages/Home'
import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

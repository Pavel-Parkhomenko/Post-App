import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { Home } from './pages/Home'
import { theme } from './theme'
import store from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

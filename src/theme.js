import { createTheme } from '@mui/material/styles'
import {
  green, orange, red, purple
} from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    secondary: {
      main: purple[500],
      darker: '#053e85',
    },
    primary: {
      main: green[500],
      darker: '#053e85',
    },
    error: {
      main: red[500],
    },
    neutral: {
      main: '#de0ed8',
      contrastText: '#3ce019',
    },
  },
})

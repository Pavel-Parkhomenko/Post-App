import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Container } from '@mui/material'
import { menuItem } from '../../mocks/menuItem'

export function LeftBar() {
  const theme = useTheme()

  return (
    <List sx={
      {
        height: '100vh',
        position: 'fixed',
        bgcolor: { xs: 'primary.main', md: 'inherit' },
        pl: 0,
        pr: {
          xs: 0, sm: 2, md: 3, lg: 4, xl: 5
        },
      }
    }
    >
      {menuItem.map(({ title, icon, id }) => (
        <ListItemButton
          key={id}
          sx={{
            justifyContent: 'center',
            pd: 3,
            pl: 0,
            pr: 0,
          }}
        >
          <ListItemIcon
            sx={
            {
              justifyContent: 'center',
              color: { xs: 'white', md: 'black' },
              pl: { xs: 0, md: 2 },
              pr: { xs: 0, md: 2 },
            }
          }
          >
            { icon }
          </ListItemIcon>
          <ListItemText primary={title} sx={{ display: { xs: 'none', sm: 'block' } }} />
        </ListItemButton>
      ))}
    </List>
  )
}

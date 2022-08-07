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
        borderRight: 1,
        position: 'fixed',
        bgcolor: { xs: 'blue', md: 'inherit' },
        pl: { xs: 0, md: 2 },
        pr: { xs: 0, md: 2 }
      }
    }
    >
      {menuItem.map(({ title, icon, id }) => (
        <ListItemButton
          key={id}
          sx={{
            justifyContent: 'center',
            pd: 3,
          }}
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            { icon }
          </ListItemIcon>
          <ListItemText primary={title} sx={{ display: { xs: 'none', sm: 'block' } }} />
        </ListItemButton>
      ))}
    </List>
  )
}

import React from 'react'
import {
  List, ListItem, ListItemButton,
  ListItemIcon, ListItemText
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { menuItem } from '../../mocks/menuItem'

export function LeftBar() {
  const { pathname } = useLocation()

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
      {menuItem.map(({
        title, icon, id, to
      }) => (
        <ListItem
          key={id}
          sx={{
            justifyContent: 'center',
            px: {
              xs: 0,
              md: 3,
            }
          }}
        >
          <ListItemButton
            components={Link}
            to={to}
            sx={{ pl: 0, pr: { xs: 0 } }}
          >
            <ListItemIcon
              sx={
                {
                  justifyContent: 'center',
                  color: { xs: 'white', md: 'black' },
                  pl: 0,
                  pr: 0,
                }
              }
            >
              { icon }
            </ListItemIcon>
            <ListItemText primary={title} sx={{ display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

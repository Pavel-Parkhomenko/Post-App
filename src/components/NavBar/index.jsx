import React, { useState } from 'react'
import {
  Toolbar,
  AppBar, Typography, Box, Badge, Avatar,
  IconButton
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Mail, Notifications } from '@mui/icons-material'
import {
  Search, SearchIconWrapper, StyledInputBase,
} from './styled'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppBar
      sx={{ position: 'sticky', top: 0 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            }
          }}
        >
          Logo My App
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            display: {
              xs: 'block',
              sm: 'none'
            }
          }}
        >
          Logo
        </Typography>
        <Search open={isOpen}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{
              'aria-label': 'search'
            }}
          />
        </Search>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={
            {
              display: { xs: 'block', sm: 'none' },
              mr: 2,
            }
          }
          >
            <SearchIcon />
          </IconButton>
          <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="" />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import CollectionsIcon from '@mui/icons-material/Collections'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import AppsIcon from '@mui/icons-material/Apps'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

export const menuItem = [
  {
    id: 1,
    title: 'Homepage',
    icon: <HomeIcon />,
    to: '/'
  },
  {
    id: 2,
    title: 'Friends',
    icon: <GroupIcon />,
    to: 'friends'
  },
  {
    id: 4,
    title: 'Gallery',
    icon: <CollectionsIcon />,
    to: 'gallery'
  },
  {
    id: 5,
    title: 'Videos',
    icon: <OndemandVideoIcon />,
    to: 'videos'
  },
  {
    id: 6,
    title: 'Apps',
    icon: <AppsIcon />,
    to: 'apps'
  },
  {
    id: 8,
    title: 'Market Place',
    icon: <LocalGroceryStoreIcon />,
    to: 'market'
  },
  {
    id: 9,
    title: 'Settings',
    icon: <SettingsIcon />,
    to: 'settings'
  },
  {
    id: 10,
    title: 'Logout',
    icon: <LogoutIcon />,
    to: 'logout'
  },
]

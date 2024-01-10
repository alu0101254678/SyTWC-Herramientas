import React from 'react'
import { Dashboard, Settings, Security, Lock } from '@mui/icons-material'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  {
    icon: <Settings />,
    text: 'NavBar.Settings',
    name: 'Settings',
    children: [
      { icon: <Security />, text: 'NavBar.Security', path: '/settings/security', name: 'Security' },
      {
        icon: <Lock />,
        text: 'NavBar.Privacy',
        path: '/settings/privacy',
        name: 'Privacy'
      }
    ]
  }
]

export default menuItems

'use client'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { NavButton } from './NavButton'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          gap: (theme) => theme.spacing(1.5),
          pr: 3,
        }}
      >
        <NavButton
          name="Sponsor"
          href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor?p=sponsor"
        />
        <NavButton
          name="Tickets"
          href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/tix?p=individual"
        />
        <NavButton
          name="Donate"
          href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/donate?p=donation"
        />
        <NavButton
          name="SAFE"
          href="https://www.safeaustin.org/"
          target="_blank"
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

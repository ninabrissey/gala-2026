'use client'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          gap: '12px',
          paddingRight: '24px',
        }}
      >
        <Button
          color="inherit"
          component={Link}
          href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor"
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '1rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(255,255,255,0.3)',
            p: '8px 16px',
            '&:hover': {
              color: '#19B8CD',
              backgroundColor: 'transparent',
              textDecoration: 'none',
            },
          }}
        >
          Attend or Sponsor
        </Button>
        <Button
          color="inherit"
          target="_blank"
          component={Link}
          href="https://www.safeaustin.org/"
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '1rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(255,255,255,0.3)',
            p: '8px 16px',
            '&:hover': {
              color: '#19B8CD',
              backgroundColor: 'transparent',
              textDecoration: 'none',
            },
          }}
        >
          SAFE Alliance
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

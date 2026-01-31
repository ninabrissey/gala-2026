'use client'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import Image from 'next/image'
import { NavButton } from './NavButton'

type NavLink = {
  name: string;
  href: string;
  target?: string;
}

const navLinks: NavLink[] = [
  {
    name: 'Sponsor',
    href: 'https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor?p=sponsor',
  },
  {
    name: 'Tickets',
    href: 'https://hellofund.io/app/public/bidapp/safegala2026/tickets/tix?p=individual',
  },
  {
    name: 'Donate',
    href: 'https://hellofund.io/app/public/bidapp/safegala2026/tickets/donate?p=donation',
  },
  {
    name: 'Invitation',
    href: '#invitation',
  },
  {
    name: 'Sponsors List',
    href: '#sponsorsList',
  },
]

const mobileNavLinks: NavLink[] = [
  ...navLinks,
  {
    name: 'SAFE',
    href: 'https://www.safeaustin.org/',
    target: '_blank',
  },
]

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: { xs: 'transparent', md: '#000000' },
          backgroundImage: { xs: 'none', md: 'none' },
          boxShadow: { xs: 'none', md: 2 },
          top: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: { xs: 'transparent', md: '#000000' },
            display: 'flex',
            justifyContent: { xs: 'start', md: 'space-between' },
            alignItems: 'center',
            gap: (theme) => theme.spacing(1.5),
            pr: 3,
            pl: { xs: 2, md: 3 },
            minHeight: { xs: 56, md: 64 },
          }}
        >
          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              backgroundColor: (theme) => theme.palette.background.default,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.background.paper,
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop SAFE Logo */}
          <Link
            href="https://www.safeaustin.org/"
            target="_blank"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                height: 40,
                position: 'relative',
                width: 200,
                '&:hover': {
                  opacity: 0.8,
                },
                transition: 'opacity 0.3s',
              }}
            >
              <Image
                src="/safe-logo.svg"
                alt="SAFE Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: (theme) => theme.spacing(1.5) }}>
            {navLinks.map((link) => (
              <NavButton
                key={link.name}
                name={link.name}
                href={link.href}
                target={link.target}
              />
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: (theme) => theme.palette.background.default,
            height: '100%',
            color: 'white',
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
            }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {mobileNavLinks.map((link) => (
              <ListItem
                key={link.name}
                sx={{ justifyContent: 'center' }}
                onClick={link.href.startsWith('#') ? toggleDrawer(false) : undefined}
              >
                <NavButton
                  name={link.name}
                  href={link.href}
                  target={link.target}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar

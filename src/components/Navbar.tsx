'use client';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: 'black', 
      position: 'sticky',
      top: 0,
      zIndex: 100 }}>
      <Toolbar sx={{ 
        backgroundColor: 'black', 
        display: 'flex', 
        justifyContent: 'end', 
        alignItems: 'center',
        gap: '12px',
        paddingRight: '24px'
      }}>
        <Button 
          color="inherit" 
          component={Link} 
          href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transition: 'background-color 0.3s',
              borderRadius: '4px',
              padding: '6px 6px'
            }
          }}
        >
          Gala Sponsor
        </Button>
        <Button 
          color="inherit" 
          target="_blank" 
          component={Link} 
          href="https://www.safeaustin.org/"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transition: 'background-color 0.3s',
              borderRadius: '4px',
              padding: '6px 6px'
            }
          }}
        >
          SAFE Alliance
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

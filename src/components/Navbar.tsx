'use client';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: 'black', 
      position: 'sticky',
      top: 0,
      zIndex: 100 }}>
      <Toolbar sx={{ backgroundColor: 'black'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        </Typography>
        <Button color="inherit" component={Link} href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor">
          Sponsor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

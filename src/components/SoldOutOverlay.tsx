import { Box } from "@mui/material";

export const SoldOutOverlay = () => (
  <Box
    sx={{
      position: 'absolute',
      top: '20px',
      right: '-60px',
      transform: 'rotate(15deg)',
      backgroundColor: '#EB1D7E',
      color: 'white',
      fontWeight: 'bold',
      padding: '8px 80px',
      fontSize: '1.2rem',
      zIndex: 2,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      textAlign: 'center',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    SOLD OUT
  </Box>
);
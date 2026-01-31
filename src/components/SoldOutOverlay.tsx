import { Box } from "@mui/material";

export const SoldOutOverlay = () => (
  <Box
    sx={{
      position: 'absolute',
      top: (theme) => theme.spacing(2.5),
      right: '-60px',
      transform: 'rotate(15deg)',
      backgroundColor: (theme) => theme.palette.highlight.main,
      color: 'white',
      fontWeight: 'bold',
      padding: (theme) => `${theme.spacing(1)} ${theme.spacing(10)}`,
      fontSize: '1.2rem',
      zIndex: 2,
      boxShadow: (theme) => theme.shadows[2],
      textAlign: 'center',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    SOLD OUT
  </Box>
);
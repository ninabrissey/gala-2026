'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

// TypeScript module augmentation for custom theme properties
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    highlight: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
  }
  interface Theme {
    gradients: {
      cardBackground: string;
      title: string;
      price: string;
      buttonPrimary: string;
      buttonHover: string;
      bulletPoint: string;
      rainbow: string;
    };
    customShadows: {
      textWhite: string;
      textCyan: string;
      hoverGlow: string;
    };
  }
  interface ThemeOptions {
    gradients?: {
      cardBackground?: string;
      title?: string;
      price?: string;
      buttonPrimary?: string;
      buttonHover?: string;
      bulletPoint?: string;
      rainbow?: string;
    };
    customShadows?: {
      textWhite?: string;
      textCyan?: string;
      hoverGlow?: string;
    };
  }
  interface BreakpointOverrides {
    xxl: true;
  }
  interface TypographyVariants {
    sectionHeading: React.CSSProperties;
    highlightedText: React.CSSProperties;
    cardTitle: React.CSSProperties;
    cardPrice: React.CSSProperties;
    cardDescription: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    sectionHeading?: React.CSSProperties;
    highlightedText?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardPrice?: React.CSSProperties;
    cardDescription?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionHeading: true;
    highlightedText: true;
    cardTitle: true;
    cardPrice: true;
    cardDescription: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#19B8CD',      // Cyan - main brand color
      light: '#4CD4E3',
      dark: '#0fa4b8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A427F9',      // Purple - accent color
      light: '#B84FFF',
      dark: '#743EB5',
      contrastText: '#fff',
    },
    accent: {
      main: '#1db6ce',      // Cyan accent (team names, highlights)
      light: '#3DC4DB',
      dark: '#1699B0',
      contrastText: '#fff',
    },
    highlight: {
      main: '#EB1D7E',      // Pink (sold out badge)
      light: '#FF4B9B',
      dark: '#C71065',
      contrastText: '#fff',
    },
    background: {
      default: '#000000',
      paper: '#1A1A1A',
      // @ts-expect-error - custom background variant
      elevated: '#2A2A2A',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    grey: {
      800: '#1A1A1A',
      700: '#2A2A2A',
      600: '#444444',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h5: {
      fontWeight: 500,
    },
    // Custom typography variants for repeated text styles
    sectionHeading: {
      fontSize: '1.8rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(255,255,255,0.3)',
    },
    highlightedText: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#1db6ce',
      textShadow: '0 0 10px rgba(29, 182, 206, 0.3)',
    },
    cardTitle: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    cardPrice: {
      fontWeight: 900,
    },
    cardDescription: {
      lineHeight: 1.6,
      fontWeight: 300,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1440,  // Custom breakpoint for card grid
    },
  },
  spacing: 8,  // Default: theme.spacing(1) = 8px, spacing(2) = 16px, etc.
  shadows: [
    'none',  // 0
    '0 2px 4px rgba(0,0,0,0.2)',  // 1 - default
    '0 2px 10px rgba(0,0,0,0.3)',  // 2 - overlay
    '0 4px 8px rgba(0,0,0,0.2)',  // 3 - button
    '0 6px 12px rgba(0,0,0,0.25)',  // 4 - button hover
    '0 10px 20px rgba(0,0,0,0.2)',  // 5 - image
    '0 20px 50px rgba(0, 0, 0, 0.5)',  // 6 - card
    '0 25px 60px rgba(75, 192, 235, 0.4)',  // 7 - card hover (cyan glow)
    '0 8px 15px rgba(164, 39, 249, 0.4)',  // 8 - button shadow (purple)
    '0 10px 20px rgba(132, 24, 213, 0.6)',  // 9 - button hover (purple)
    '0 4px 6px rgba(0,0,0,0.1)',  // 10
    '0 5px 15px rgba(0,0,0,0.15)',  // 11
    '0 10px 25px rgba(0,0,0,0.2)',  // 12
    '0 15px 35px rgba(0,0,0,0.25)',  // 13
    '0 20px 40px rgba(0,0,0,0.3)',  // 14
    '0 25px 50px rgba(0,0,0,0.35)',  // 15
    '0 30px 60px rgba(0,0,0,0.4)',  // 16
    '0 35px 70px rgba(0,0,0,0.45)',  // 17
    '0 40px 80px rgba(0,0,0,0.5)',  // 18
    '0 45px 90px rgba(0,0,0,0.55)',  // 19
    '0 50px 100px rgba(0,0,0,0.6)',  // 20
    '0 55px 110px rgba(0,0,0,0.65)',  // 21
    '0 60px 120px rgba(0,0,0,0.7)',  // 22
    '0 65px 130px rgba(0,0,0,0.75)',  // 23
    '0 70px 140px rgba(0,0,0,0.8)',  // 24
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',  // Override uppercase default
          borderRadius: 50,       // Pill-shaped buttons
          fontWeight: 'bold',
        },
        contained: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 48,  // 6 * 8px
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        },
      },
    },
  },
  // Custom theme extensions
  gradients: {
    cardBackground: 'linear-gradient(225deg, #1A1A1A 0%, #444444 50%, #1A1A1A 100%)',
    title: 'linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)',
    price: 'linear-gradient(to right, #F28E2B, #E15759, #F5A524)',
    buttonPrimary: 'linear-gradient(45deg, #A427F9 0%, #743EB5 100%)',
    buttonHover: 'linear-gradient(45deg, #8418D5 0%, #5C2B92 100%)',
    bulletPoint: 'linear-gradient(45deg, #EDC948, #F28E2B)',
    rainbow: 'linear-gradient(90deg, #ff8a00, #e52e71, #9b59b6, #3498db, #00d4ff, #ff8a00)',
  },
  customShadows: {
    textWhite: '0 2px 4px rgba(255,255,255,0.3)',
    textCyan: '0 0 10px rgba(29, 182, 206, 0.3)',
    hoverGlow: '0 0 10px rgba(255,255,255,0.5)',
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

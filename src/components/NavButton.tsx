import { Button } from '@mui/material'
import Link from 'next/link'

type NavButtonProps = {
  name: string
  href: string
  target?: string
}

export const NavButton = ({ name, href, target = '_self' }: NavButtonProps) => {
  return (
    <Button
      color="inherit"
      target={target}
      component={Link}
      href={href}
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
      {name}
    </Button>
  )
}

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
        textShadow: (theme) => theme.customShadows.textWhite,
        p: (theme) => `${theme.spacing(1)} ${theme.spacing(2)}`,
        '&:hover': {
          color: (theme) => theme.palette.primary.main,
          backgroundColor: 'transparent',
          textDecoration: 'none',
        },
      }}
    >
      {name}
    </Button>
  )
}

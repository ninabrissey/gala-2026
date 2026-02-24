import { Button } from '@mui/material'
import Link from 'next/link'

type NavButtonProps = {
  name: string
  href: string
  target?: string
  isActive?: boolean
}

export const NavButton = ({ name, href, target = '_self', isActive = false }: NavButtonProps) => {
  return (
    <Button
      color="inherit"
      target={target}
      component={Link}
      href={href}
      sx={{
        color: isActive ? (theme) => theme.palette.primary.main : 'white',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '1rem',
        fontWeight: 'bold',
        textShadow: (theme) => theme.customShadows.textWhite,
        p: (theme) => `${theme.spacing(1)} ${theme.spacing(2)}`,
        borderBottom: isActive ? '2px solid' : 'none',
        borderColor: isActive ? (theme) => theme.palette.primary.main : 'transparent',
        borderRadius: isActive ? 0 : 1,
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

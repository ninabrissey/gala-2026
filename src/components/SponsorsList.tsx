import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { sponsors } from '@/data/sponsors'

const SponsorsList: React.FC = () => {
  const sponsorsWithTitles = sponsors.map(
    ({ level, sponsors: sponsorList }) => ({
      level,
      title: `THE ${level.charAt(0) + level.slice(1).toLowerCase()} SPONSOR${
        sponsorList.length > 1 ? 'S' : ''
      }`,
      sponsors: sponsorList,
    }),
  )

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        mt: (theme) => theme.spacing(8),
      }}
    >
      <Box
        sx={{
          mb: (theme) => theme.spacing(8),
          mt: (theme) => theme.spacing(8),
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="sectionHeading"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 3,
              mt: 6,
            }}
          >
            Thank You To Our Generous Sponsors
          </Typography>
        </motion.div>
      </Box>
      {sponsorsWithTitles.map(({ level, title, sponsors }) => (
        <Box key={level} sx={{ mb: (theme) => theme.spacing(8) }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="sectionHeading"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 3,
                mt: 6,
              }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns:
                  sponsors.length === 1
                    ? '1fr'
                    : sponsors.length === 2
                      ? '1fr 1fr'
                      : { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 3,
                maxWidth:
                  sponsors.length === 1
                    ? '600px'
                    : sponsors.length === 2
                      ? '800px'
                      : '1200px',
                mx: 'auto',
              }}
            >
              {sponsors.map((sponsorName: string, index: number) => (
                <motion.div
                  key={`${level}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      background: (theme) => theme.gradients.rainbow,
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'var(--font-playfair), serif',
                      fontWeight: 600,
                      fontSize: '1.5rem',
                      fontStyle: 'italic',
                      letterSpacing: '0.03em',
                      animation: 'gradient 15s ease infinite',
                      '@keyframes gradient': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    }}
                  >
                    {sponsorName}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      ))}
    </Container>
  )
}

export default SponsorsList

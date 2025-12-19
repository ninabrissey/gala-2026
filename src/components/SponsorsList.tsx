import React from 'react'
import { Box, Typography, Container, keyframes } from '@mui/material'
import { motion } from 'framer-motion'
import { sponsors, SponsorLevel } from '@/data/sponsors'

const SponsorsList: React.FC = () => {
  const sponsorsWithTitles = sponsors.map(
    ({ level, sponsors: sponsorList }) => ({
      level,
      title: `THE ${level.charAt(0) + level.slice(1).toLowerCase()} SPONSOR${
        sponsorList.length > 1 ? 'S' : ''
      }`,
      sponsors: sponsorList,
    })
  )

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: 'black', mt: 8 }}>
      <Box sx={{ mb: 8, mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 3,
              mt: 6,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 2px 4px rgba(255,255,255,0.3)',
            }}
          >
            Thank You To Our Generous Sponsors
          </Typography>
        </motion.div>
      </Box>
      {sponsorsWithTitles.map(({ level, title, sponsors }) => (
        <Box key={level} sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 3,
                mt: 6,
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '1.8rem',
                textShadow: '0 2px 4px rgba(255,255,255,0.3)',
              }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
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
                    textShadow: '0 0 10px rgba(255,255,255,0.5)',
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
                      background:
                        'linear-gradient(90deg, #ff8a00, #e52e71, #9b59b6, #3498db, #00d4ff, #ff8a00)',
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

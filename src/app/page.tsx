'use client'

import Image from 'next/image'
import { Box, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { SponsorshipCard } from '@/components/SponsorshipCard'
import { sponsorshipLevels } from '@/data/sponsorship-levels'
import { ChairLetter } from '@/components/ChairLetter'
import SponsorsList from '@/components/SponsorsList'
import { teamMembers } from '@/data/team-members'
import styles from './page.module.css'
import { useState } from 'react'
import { Carousel } from '@/components/Carousel'

export default function Home() {
  const [chairLetterOpen, setChairLetterOpen] = useState(false)

  return (
    <Box
      color="inherit"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Navbar />

      <Stack alignItems="center" spacing={0} sx={{ width: '100%' }}>
        <Image
          src="/Gala-2026-logo-type-only-full-color.png"
          alt="Safe logo"
          width={750}
          height={375}
          className={styles.logo}
          priority
        />
        <Image
          src="/Gala-wave-of-colors.png"
          alt="Gala wave of colors"
          width={1000}
          height={400}
          sizes="(max-width: 768px) 100vw, 700px"
          style={{
            width: '100%',
          }}
        />
      </Stack>
      <Box>
        <Image
          src="/details.png"
          alt="Gala wave of colors"
          width={375}
          height={115}
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </Box>
      <Carousel />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '80%', textAlign: 'center' }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              mt: 6,
            }}
          >
            <Button
              variant="contained"
              onClick={() => setChairLetterOpen(!chairLetterOpen)}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '1.8rem',
                px: 8,
                py: 2,
                boxShadow: (theme) => theme.shadows[3],
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  boxShadow: (theme) => theme.shadows[4],
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {chairLetterOpen ? 'CLOSE CHAIR LETTER' : 'READ CHAIR LETTER'}
            </Button>
          </Box>

          {/* {!chairLetterOpen && <Image
            onClick={() => setChairLetterOpen(!chairLetterOpen)}
              src="/open-chair-letter.png"
              alt="chair letter"
              width={500}
              height={250}
              priority
            />} */}

          {chairLetterOpen && <ChairLetter />}
        </Box>
      </Box>

      <Stack sx={{ mt: 4 }} alignItems="center">
        <Typography
          variant="sectionHeading"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 5,
            mt: 6,
          }}
        >
          SPONSORSHIP LEVELS
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 4 },
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: '1800px',
            mx: 'auto',
            width: '90%',
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: { xs: 3, md: 4 },
              width: '100%',
              '& > *': {
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0, // Prevents flex items from overflowing
                '& > *': {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
              '@media (min-width: 900px) and (max-width: 1439px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
              '@media (min-width: 1440px)': {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
            }}
          >
            {sponsorshipLevels.map((item) => (
              <Box key={item.title}>
                <SponsorshipCard {...item} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Invitation Images Section */}
        <Box
          sx={{
            width: '100%',
            mt: 8,
            mb: 8,
          }}
        >
          <Stack spacing={4} alignItems="center">
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: (theme) => theme.spacing(1),
                  boxShadow: (theme) => theme.shadows[5],
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/safe-gala-invite-pg1.png"
                  alt="Gala Invitation Page 1"
                  width={1200}
                  height={1600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: (theme) => theme.spacing(1),
                  boxShadow: (theme) => theme.shadows[5],
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/safe-gala-invite-pg2.pdf.png"
                  alt="Gala Invitation Page 2"
                  width={1200}
                  height={1600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Box>

        <SponsorsList />
        <Typography
          variant="sectionHeading"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
            mt: 4,
          }}
        >
          GALA TEAM
        </Typography>

        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            mb: 8,
            display: 'flex',
            justifyContent: 'center',
            '& .team-names': {
              color: (theme) => theme.palette.accent.main,
              fontSize: '1.2rem',
              fontWeight: 500,
              lineHeight: 1.6,
              textAlign: 'center',
              width: '90%',
              textShadow: (theme) => theme.customShadows.textCyan,
            },
          }}
        >
          <div
            className="team-names"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontWeight: 600,
              fontStyle: 'italic',
            }}
            dangerouslySetInnerHTML={{
              __html: `• ${teamMembers.join(' • ')} •`
                .replace(/•/g, '<span style="color: white">•</span>')
                .replace(
                  /<span style="color: white"><\/span>\s*<span style="color: white">/g,
                  ' '
                ),
            }}
          />
        </Box>
      </Stack>
    </Box>
  )
}

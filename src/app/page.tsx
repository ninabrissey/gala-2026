'use client'

import Image from 'next/image'
import { Box, Button, Stack } from '@mui/material'
import Navbar from '@/components/Navbar'
import { SponsorshipCard } from '@/components/SponsorshipCard'
import { sponsorshipLevels } from '@/data/sponsorship-levels'
import { ChairLetter } from '@/components/ChairLetter'
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
            width: '100%'
          }}
        />
      </Stack>
      <Box >
        <Image
            src="/details.png"
            alt="Gala wave of colors"
            width={375}
            height={115}
            sizes="(max-width: 768px) 100vw, 700px"
          />
      </Box>
      <Carousel />
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{ width: '80%', textAlign: 'center' }}>
          <Button
          variant='contained'
          sx={{
            padding: '0 40px 0px 40px',
            borderRadius: '50px',
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: '#19B8CD',
              transition: 'background-color 0.3s',
            }
          }}
          >  <h2 
            onClick={() => setChairLetterOpen(!chairLetterOpen)}
            style={{ cursor: 'pointer', marginBottom: '20px' }}
          >
            {chairLetterOpen ? 'CLOSE CHAIR LETTER' : 'READ CHAIR LETTER'}
            </h2>

          </Button>
        
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
        <h2 style={{ marginBottom: '40px' }}>SPONSORSHIP LEVELS</h2>
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: '1800px',
          mx: 'auto',
          width: '90%',
          boxSizing: 'border-box',
        }}>
          <Box sx={{
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
          }}>
            {sponsorshipLevels.map((item) => (
              <Box key={item.title}>
                <SponsorshipCard {...item} />
              </Box>
            ))}
          </Box>
        </Box>

        <h2 style={{ marginTop: '50px' }}>GALA TEAM</h2>
        
        <Box sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          '& .team-names': {
            backgroundImage: 'linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: 1.6,
            textAlign: 'center',
            width: '90%',
          },
        }}>
          <div className="team-names" style={{ fontStyle: 'italic' }}>
            • {teamMembers.join(' • ')} •
          </div>
        </Box>
      </Stack>
    </Box>
  )
}

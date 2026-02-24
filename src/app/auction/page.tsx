'use client'

import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { AuctionItemCard } from '@/components/AuctionItemCard'
import { auctionItems } from '@/data/auction-items'

export default function AuctionPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              backgroundImage: (theme) => theme.gradients.title,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          >
            Live Auction
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              fontWeight: 300,
              color: 'gray.300',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Experience the extraordinary.
            Browse our curated collection of exclusive experiences and luxury packages.
          </Typography>
        </Box>

        {/* Auction Items Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
            },
            gap: 4,
            px: { xs: 2, md: 0 },
          }}
        >
          {auctionItems.map((item) => (
            <AuctionItemCard
              key={item.id}
              number={item.number}
              title={item.title}
              category={item.category}
              description={item.description}
              exceptions={item.exceptions}
              images={item.images}
            />
          ))}
        </Box>

        {/* Footer Note */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 10,
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'gray.400',
              fontStyle: 'italic',
            }}
          >
            All proceeds benefit SAFE (Stop Abuse For Everyone) and support survivors of abuse in our community.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

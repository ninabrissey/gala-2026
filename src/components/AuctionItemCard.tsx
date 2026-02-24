'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface AuctionItemCardProps {
  number: string
  title: string
  category: string
  description: string
  exceptions?: string
  images: string[]
}

export const AuctionItemCard: React.FC<AuctionItemCardProps> = ({
  number,
  title,
  category,
  description,
  exceptions,
  images,
}) => {
  const [expanded, setExpanded] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 6,
          p: { xs: 3, md: 5 },
          color: 'white',
          boxShadow: (theme) => theme.shadows[6],
          background: (theme) => theme.gradients.cardBackground,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: (theme) => theme.shadows[7],
          },
        }}
      >
        {/* Background Gradient Effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: 3,
          }}
        >
          {/* Title and Category Section */}
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 1,
              }}
            >
              {category}
            </Typography>
            <Typography
              variant="cardTitle"
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                pb: 1,
                backgroundImage: (theme) => theme.gradients.title,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.3,
              }}
            >
              {title}
            </Typography>
            {/* Divider line under title */}
            <Box
              sx={{
                width: '100%',
                height: '2px',
                mt: 2,
                background: (theme) => theme.gradients.buttonPrimary,
              }}
            />
          </Box>

          {/* Image Gallery Section */}
          {images.length > 0 && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '200px', sm: '250px', md: '300px' },
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <Box
                    onClick={prevImage}
                    sx={{
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                      },
                    }}
                  >
                    ‹
                  </Box>
                  <Box
                    onClick={nextImage}
                    sx={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                      },
                    }}
                  >
                    ›
                  </Box>

                  {/* Image Counter */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      padding: '4px 12px',
                      borderRadius: 2,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontSize: '0.875rem',
                    }}
                  >
                    {currentImageIndex + 1} / {images.length}
                  </Box>
                </>
              )}
            </Box>
          )}

          {/* Description Section */}
          <Typography
            variant="cardDescription"
            sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              color: 'gray.300',
              lineHeight: 1.6,
              display: expanded ? 'block' : '-webkit-box',
              WebkitLineClamp: expanded ? 'unset' : 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'pre-line',
            }}
          >
            {description}
          </Typography>

          {/* Exceptions/Terms Section */}
          {expanded && exceptions && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.875rem', md: '0.95rem' },
                  color: 'gray.400',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: 'white' }}>Terms & Conditions:</strong><br />
                {exceptions}
              </Typography>
            </Box>
          )}

          {/* Expand/Collapse Button */}
          <Typography
            onClick={() => setExpanded(!expanded)}
            sx={{
              textDecoration: 'underline',
              color: 'gray.300',
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'left',
              cursor: 'pointer',
              width: 'fit-content',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              },
            }}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  )
}

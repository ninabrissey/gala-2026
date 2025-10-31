import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { SoldOutOverlay } from './SoldOutOverlay';

interface SponsorshipCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  underwriting: string | null;
  soldOut?: boolean;
}

export const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ title, price, description, features, underwriting, soldOut }) => {
const [expanded, setExpanded] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          // Changed the background to a lighter, more vibrant gradient
          background: 'linear-gradient(225deg, #1A1A1A 0%, #444444 50%, #1A1A1A 100%)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 25px 60px rgba(75, 192, 235, 0.4)',
          },
        }}
      >
        {soldOut && <SoldOutOverlay />}
        {/* Background Gradient Effect - inspired by the provided image */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: 0.8
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', gap: 4 }}>
          {/* Title and Price Section */}
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                pb: 1,
                lineHeight: 1.1,
                backgroundImage: 'linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title.split(' ').map((word, index) => (
                <span key={index}>
                  {word}
                  {index < title.split(' ').length - 1 && <br />}
                </span>
              ))}
            </Typography>
            <Typography
              variant="h4"
              component="p"
              sx={{
                fontSize: { xs: '3rem', md: '4rem' },
                fontWeight: 900,
                mt: 1,
                color: 'white',
                backgroundImage: 'linear-gradient(to right, #F28E2B, #E15759, #F5A524)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {price}
            </Typography>
          </Box>

          {/* Description Section */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'gray.300',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            {description}
          </Typography>

          {/* Features Section */}
          <List 
            sx={{
              width: '100%', 
              p: 0, 
              m: 0,
              '& .MuiListItem-root': {
                justifyContent: 'flex-start',
                px: 1,
                '& .MuiListItemIcon-root': {
                  minWidth: 24,
                  mr: 1
                }
              }
            }}
          >
            {expanded ? features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            )) : features.slice(0, 2).map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </List>

          {/* Underwriting Option */}
          { expanded && underwriting && (
            <Typography variant="body2" sx={{ color: 'gray.400', fontWeight: 300, fontStyle: 'italic'}}>
              {underwriting}
            </Typography>
          )}
          <Typography
            onClick={() => setExpanded(!expanded)}
            sx={{
              textDecoration: 'underline',
              color: 'gray.300',
              fontSize: { xs: '1rem', md: '1.125rem' },
              textAlign: 'left',
              ml: 3,
              cursor: 'pointer',
              width: '100%',
              '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s'   
                }
            }}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Typography>
          <a href="https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor" style={{ textDecoration: 'none', width: '100%', display: 'block', marginTop: 'auto' }}>
          <Button
              variant="contained"
              sx={{
                width: '100%',
                py: 1,
                px: 2,
                borderRadius: 50,
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: 'white',
                // Updated the button gradient to a more vibrant purple
                background: 'linear-gradient(45deg, #A427F9 0%, #743EB5 100%)',
                boxShadow: '0 8px 15px rgba(164, 39, 249, 0.4)',
                transition: 'transform 0.3s',
                textTransform: 'none',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background: 'linear-gradient(45deg, #8418D5 0%, #5C2B92 100%)',
                  boxShadow: '0 10px 20px rgba(132, 24, 213, 0.6)'
                },
              }}
            >
              Secure Your Sponsorship
            </Button>
          </a>
        </Box>
      </Box>
    </motion.div>
  );
};

// Helper component for a single feature item
const FeatureItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
      <ListItemIcon sx={{ minWidth: 'auto', mr: 1, mt: 0.5 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.25rem',
            backgroundImage: 'linear-gradient(45deg, #EDC948, #F28E2B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          &#8226;
        </Typography>
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{
          '& .MuiTypography-root': {
            fontSize: { xs: '1rem', md: '1rem' },
            fontWeight: 300,
            color: 'gray.200',
          }
        }}
      />
    </ListItem>
  );
};

export default SponsorshipCard;

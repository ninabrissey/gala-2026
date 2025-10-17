import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// An array to hold your image sources
const galleryImages = [
  '/carousel-1.jpg',
  '/carousel-2.jpg',
  '/carousel-3.jpg',
  '/carousel-4.jpg',
  '/carousel-5.jpg',
  '/carousel-6.jpg',
];

export const Carousel = () => {
  return (
    <Box sx={{ position: 'relative', py: 4, width: '100%', mb: 4 }}>
      <Swiper
        // Add required modules
        modules={[Navigation]}
        // Core settings for the multi-image "peek-a-boo" effect
        slidesPerView={'auto'} // Tells Swiper to size slides based on their CSS width
        centeredSlides={true}  // Keeps the active slide centered
        spaceBetween={16}      // A small gap between images
        loop={true}            // Creates an infinite loop
        
        // Custom navigation elements
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        
        // Responsive settings
        breakpoints={{
          // When window width is >= 768px (Desktop view)
          768: {
            spaceBetween: 24, // A slightly larger gap for desktop
          },
        }}
        style={{
          // Padding allows the first and last slides to be centered properly
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <Box
              component="img"
              src={image}
              alt={`Gala event photo ${index + 1}`}
              sx={{
                height: { xs: '300px', md: '450px' }, // Responsive height
                width: 'auto',
                display: 'block',
                borderRadius: '8px', // Optional: adds slightly rounded corners
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <IconButton
        className="swiper-button-prev-custom"
        sx={{
          position: 'absolute',
          left: { xs: '5px', md: '20px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          color: 'black',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' },
          display: { xs: 'none', md: 'flex' }, // Hide on mobile
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        className="swiper-button-next-custom"
        sx={{
          position: 'absolute',
          right: { xs: '5px', md: '20px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          color: 'black',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' },
          display: { xs: 'none', md: 'flex' }, // Hide on mobile
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
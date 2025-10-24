import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Box, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import 'swiper/css'
import 'swiper/css/navigation'

const galleryImages = [
  '/carousel-1.jpg',
  '/carousel-2.jpg',
  '/carousel-3.jpg',
  '/carousel-4.jpg',
  '/carousel-5.jpg',
  '/carousel-6.jpg',
  '/carousel-7.jpg',
  '/carousel-8.jpg',
  '/carousel-9.jpg',
  '/carousel-10.jpg',
  '/carousel-11.jpg',
  '/carousel-12.jpg',
  '/carousel-13.jpg'
]

export const Carousel = () => (
  <Box sx={{ position: 'relative', py: 4, width: '100%', mb: 4 }}>
    <Swiper
      modules={[Navigation]}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={16}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      breakpoints={{ 768: { spaceBetween: 24 } }}
      style={{ paddingLeft: '20px', paddingRight: '20px' }}
    >
      {galleryImages.map((image, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
          <Box
            component="img"
            src={image}
            alt={`Gala event photo ${index + 1}`}
            sx={{
              height: { xs: '300px', md: '450px' },
              width: 'auto',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>

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
        display: { xs: 'none', md: 'flex' },
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
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </Box>
)

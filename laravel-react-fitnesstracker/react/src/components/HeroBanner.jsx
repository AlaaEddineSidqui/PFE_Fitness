import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';

import HeroBannerImage from '../assets/images/banner.png';

export default function HeroBanner() {
  const exercisesRef = useRef(null);

  const handleExploreExercises = () => {
    if (exercisesRef.current) {
      exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#203135" fontWeight="600" fontSize="26px">
        Fitness Tracker
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        mb="23px"
        mt="30px"
      >
        Track Your Fitness <br /> Goals and Workouts
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleExploreExercises} // Added onClick handler
        sx={{
          backgroundColor: '#203135',
          padding: '10px'
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#203135"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
        mt="70px"
      >
        Exercise
      </Typography>
      <div ref={exercisesRef} /> {/* Empty div as a marker for exercises section */}
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

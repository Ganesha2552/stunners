import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Carousel as RRCarousel } from 'react-responsive-carousel';

import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const centerSlidePercentage = isSmallScreen ? 100 : 50;

  return (
    <div className={styles['carousel-container']}>
      <RRCarousel
        autoPlay
        showStatus
        centerMode
        showIndicators
        infiniteLoop
        stopOnHover
        showThumbs={false}
        centerSlidePercentage={centerSlidePercentage}
      >
        {images.map((image, index) => (
          <div key={image}>
            <img src={image} alt={`pic ${index}`} />
          </div>
        ))}
      </RRCarousel>
    </div>
  );
};

export default Carousel;

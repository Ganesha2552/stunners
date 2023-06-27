import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Carousel as RRCarousel } from 'react-responsive-carousel';

interface CarouselProps {
  children: any;
  autoPlay?: boolean;
  showStatus?: boolean;
  centerMode?: boolean;
  showIndicators?: boolean;
  infiniteLoop?: boolean;
  stopOnHover?: boolean;
  showThumbs?: boolean;
  centerSlidePercentage?: number;
  centerSlidePercentageSmallScreen?: number;
  showArrows?: boolean;
}
const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  showStatus = true,
  centerMode = true,
  showIndicators = true,
  infiniteLoop = true,
  stopOnHover = true,
  showThumbs = false,
  centerSlidePercentage = 100,
  centerSlidePercentageSmallScreen = 50,
  showArrows = true,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const slidePercentage = isSmallScreen
    ? centerSlidePercentage
    : centerSlidePercentageSmallScreen;

  return (
    <RRCarousel
      autoPlay={autoPlay}
      showStatus={showStatus}
      centerMode={centerMode}
      showIndicators={showIndicators}
      infiniteLoop={infiniteLoop}
      stopOnHover={stopOnHover}
      showThumbs={showThumbs}
      centerSlidePercentage={slidePercentage}
      showArrows={showArrows}
    >
      {children}
    </RRCarousel>
  );
};

export default Carousel;

/* eslint-disable jsx-a11y/anchor-is-valid */
import HomeIcon from '@mui/icons-material/Home';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

type ISubBannerProps = {
  bgImageName?: string;
  breadCrumbPage: string;
};
const SubBanner = (props: ISubBannerProps) => {
  const router = useRouter();
  const imageBasepath = `${router.basePath}/assets/images/`;
  const backgroundImage = props.bgImageName
    ? `${imageBasepath}${props.bgImageName}`
    : `${imageBasepath}bat-ball-banner.jpeg`;
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Typography variant={isSmallScreen ? 'h6' : 'h4'} color="#fff">
        {props.breadCrumbPage.toUpperCase()}
      </Typography>
      <Breadcrumbs sx={{ marginTop: '20px', color: '#fff' }}>
        <Link
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            '&:hover': {
              color: '#ee1d36',
              textDecoration: 'none',
              borderColor: 'transparent',
            },
          }}
          href="/"
          underline="none"
        >
          <HomeIcon sx={{ marginRight: 0.5 }} />
          Home
        </Link>
        <Link
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#ee1d36',
            '&:hover': {
              color: '#fff',
              textDecoration: 'none',
              borderColor: 'transparent',
            },
          }}
          underline="none"
        >
          <SportsCricketIcon sx={{ marginRight: 0.5 }} />
          {props.breadCrumbPage}
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default SubBanner;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import TextButton from '../components/Buttons/TextButton';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (url: string) => {
    // Perform any necessary logic before navigating to the URL
    router.push(url);
  };

  const handleJoinNow = () => {
    // Handle button click logic here
  };

  return (
    <AppBar
      sx={{
        backgroundColor: '#000000',
        transition: 'transform 0.6s ease',
        transform: 'translateY(0)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src={`${router.basePath}/assets/images/stunnersLogo.webp`}
                  alt="Logo"
                  width={120} // Set the desired width
                  height={40}
                  onClick={() => handleButtonClick('/')}
                  style={{ cursor: 'pointer' }} // Add cursor style
                />
              </Typography>
              <IconButton
                edge="end"
                sx={{ color: 'white' }}
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleButtonClick('/matches')}>
                  Matches
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('/about')}>
                  The Club
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('/schedule')}>
                  Schedule
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('/news')}>
                  News
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('/players')}>
                  Players
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('/media')}>
                  Media
                </MenuItem>

                <MenuItem onClick={() => handleButtonClick('/contact')}>
                  Contact
                </MenuItem>
              </Menu>
              <PrimaryButton onClick={handleJoinNow}>join Now</PrimaryButton>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src={`${router.basePath}/assets/images/stunnersLogo.webp`}
                  alt="Logo"
                  width={120} // Set the desired width
                  height={40}
                  onClick={() => handleButtonClick('/')}
                  style={{ cursor: 'pointer' }}
                />
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <TextButton onClick={() => handleButtonClick('/matches')}>
                  Matches
                </TextButton>
                <TextButton onClick={() => handleButtonClick('/about')}>
                  The Club
                </TextButton>
                <TextButton onClick={() => handleButtonClick('/schedule')}>
                  Schedule
                </TextButton>
                <TextButton onClick={() => handleButtonClick('/news')}>
                  News
                </TextButton>
                <TextButton onClick={() => handleButtonClick('/players')}>
                  Players
                </TextButton>
                <TextButton onClick={() => handleButtonClick('/media')}>
                  Media
                </TextButton>

                <TextButton onClick={() => handleButtonClick('contact')}>
                  Contact
                </TextButton>
              </Box>
              <PrimaryButton onClick={handleJoinNow}>join Now</PrimaryButton>
              <IconButton sx={{ color: 'white' }} edge="end" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

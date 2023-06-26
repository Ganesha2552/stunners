import {
  Button,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import React from 'react';

// Create a custom theme
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: '#ee1d36 !important',
          padding: '5px 17px',
          color: '#fff',
          margin: '0 15px',
          transition: 'all 0.5s',
          border: 'solid 2px #ee1d36',
          '&:hover': {
            backgroundColor: '#c6132d !important',
          },
        },
      },
    },
  },
});

interface IPrimaryButtonProps {
  children: any;
  onClick: any;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  children,
  onClick,
}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const buttonStyle = {
    fontSize: isSmallScreen ? '0.6rem' : '1rem',
    padding: isSmallScreen ? '5px 10px' : '5px 17px',
    margin: isSmallScreen ? '0 10px' : '0 15px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={onClick} style={buttonStyle}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default PrimaryButton;

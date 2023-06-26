/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SendIcon from '@mui/icons-material/Send';
import {
  Container,
  createTheme,
  Grid,
  IconButton,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import Copyright from './Copyright';

const useStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: '#0B1A2C',
    color: '#8C95A1',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    bottom: 0,
    left: 0,
    width: '100%',
    position: 'sticky',
  },
  socialIcon: {
    marginRight: '0.5rem',
    backgroundColor: '#0B1A2C',
    padding: '0.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8C95A1',
  },
  footerTitle: {
    marginBottom: '1rem',
    color: '#fff',
  },
  footerLink: {
    marginRight: '1rem',
    color: '#8C95A1',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
    },
  },
  newsletterInput: {
    marginRight: '1rem',
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#0B1A2C',
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',

      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
  newsletterButton: {
    borderRadius: '20px',
    backgroundColor: '#EF1C36',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#EF1C36',
    },
  },
  copyText: {
    color: '#8C95A1',
    textAlign: 'center',
  },
}));

const theme = createTheme();

function Footer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <footer className={classes.footerContainer}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className="comon-footer">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.footerTitle}
                >
                  Contact Info
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={{ color: '#fff' }}
                >
                  We&apos;re a professional cricket club in Chennai, India,
                  founded in 2000. It is a long established fact.
                </Typography>
                <ul className="list-unstyled d-flex align-items-center mt-2">
                  <li>
                    <Link href="https://www.facebook.com/StunnersCC">
                      <div className={classes.socialIcon}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/stunners_cc/?hl=en">
                      <div className={classes.socialIcon}>
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/channel/UCEvHJiOXxUn0pJOqpiP2i2g/featured?view_as=subscriber">
                      <div className={classes.socialIcon}>
                        <FontAwesomeIcon icon={faYoutube} />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="comon-footer">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.footerTitle}
                >
                  Resources
                </Typography>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/match" className={classes.footerLink}>
                      Matches
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={classes.footerLink}>
                      The Club
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className={classes.footerLink}>
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="/players" className={classes.footerLink}>
                      Players
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" className={classes.footerLink}>
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={classes.footerLink}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="comon-footer">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.footerTitle}
                >
                  Newsletter
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={{ color: '#fff' }}
                >
                  We&apos;ll send updates straight to your Mail. Let&apos;s Do
                  stay connected!
                </Typography>
                <div className="d-flex align-items-center mt-3">
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Enter Email"
                    className={classes.newsletterInput}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          type="submit"
                          className={classes.newsletterButton}
                        >
                          <SendIcon style={{ width: '18px', height: '18px' }} />
                        </IconButton>
                      ),
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
          <hr />
          <Copyright />
        </Container>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;

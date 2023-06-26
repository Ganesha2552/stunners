/* eslint-disable no-nested-ternary */
import 'react-tabs/style/react-tabs.css';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import TextButton from '../components/Buttons/TextButton';
import SubBanner from '../layouts/SubBanner';

const useStyles = makeStyles({
  imageContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  bigImg: {
    width: '100%',
    height: '320px',
    borderRadius: '15px',
    display: 'inline-block',
    overflow: 'hidden',
    margin: 0,
  },
  smallImg: {
    width: '250px',
    height: '200px',
    borderRadius: '15px',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    top: 0,
    marginLeft: 'auto',
    left: '15px',
    marginTop: '-130px',
    marginBottom: '50px',
  },
});
const About = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const classes = useStyles();
  const imageBasepath = `${router.basePath}/assets/images/`;
  const aboutUsMainImage = `${imageBasepath}teamStunners.webp`;
  const stunnersFirstImage = `${imageBasepath}stunnerfirst.jpeg`;

  const smallImage = `${imageBasepath}cricketground.webp`;

  const handleHistory = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Main
      meta={
        <Meta
          title="Story of Stunners Cricket Club"
          description="Story of Stunners"
        />
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SubBanner bgImageName="banner-bg.jpeg" breadCrumbPage="The Club" />
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            spacing={2}
            margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
          >
            <Grid container spacing={2} item xs={12} md={6}>
              <div>
                <figure className={classes.bigImg}>
                  <img src={aboutUsMainImage} alt="pic" />
                </figure>
                <figure className={classes.smallImg}>
                  <img
                    style={{ borderRadius: '16px' }}
                    src={smallImage}
                    alt="pic2"
                  />
                </figure>
              </div>
            </Grid>
            <Grid container spacing={2} item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography color="#ee1d36" variant="h6">
                  Our Story
                </Typography>

                <Typography gutterBottom variant="h5">
                  About The Stunners Cricket Club
                </Typography>

                <p>
                  Once upon a coffee-filled encounter, a remarkable journey
                  began. Welcome to Stunners Cricket Club! It all started with
                  Karthik Pugazhendi planting the seed, and Dheeraj Chaitanya
                  Damarla giving it the perfect name. Over the course of 8
                  years, 95 players came together, forging a bond that would
                  last a lifetime, culminating in 333 unforgettable matches.
                </p>
                <p>
                  At the heart of Stunners lies an unwavering passion and
                  unwavering commitment to the game. With each victory, we
                  discovered the art of resilience, learning from our defeats
                  and rising stronger each time. Both on and off the field, we
                  embody the spirit of Stunners, constantly striving for
                  excellence.
                </p>
                <p>
                  Join us as we continue to embrace the thrill of the red
                  cricket ball and celebrate the camaraderie that defines our
                  club. Stunners Cricket Club is not just about cricket;
                  it&apos;s a journey of friendship, growth, and unwavering
                  dedication.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} item xs={12} sx={{ bgcolor: '#F2F2F2' }}>
            <Grid
              item
              xs={10}
              margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
            >
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList>
                  <Tab>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ color: tabIndex === 0 ? '#ee1d36' : 'inherit' }}
                    >
                      <CalendarMonthOutlinedIcon />
                      Our History
                    </Typography>
                  </Tab>
                  <Tab>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ color: tabIndex === 1 ? '#ee1d36' : 'inherit' }}
                    >
                      <SportsScoreOutlinedIcon />
                      Our Mission
                    </Typography>
                  </Tab>
                  <Tab>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{ color: tabIndex === 2 ? '#ee1d36' : 'inherit' }}
                    >
                      <VisibilityOutlinedIcon />
                      Our Vision
                    </Typography>
                  </Tab>
                </TabList>

                <TabPanel>
                  <Grid
                    container
                    item
                    marginTop={5}
                    marginBottom={1}
                    columnSpacing={3}
                  >
                    <Grid item>
                      {activeTab === 0 ? (
                        <PrimaryButton onClick={() => handleHistory(0)}>
                          <CalendarMonthOutlinedIcon /> 2014
                        </PrimaryButton>
                      ) : (
                        <TextButton
                          onClick={() => handleHistory(0)}
                          isPrimary={false}
                        >
                          <Typography gutterBottom variant="h5">
                            <CalendarMonthOutlinedIcon /> 2014
                          </Typography>
                        </TextButton>
                      )}
                    </Grid>
                    <Grid item>
                      {activeTab === 1 ? (
                        <PrimaryButton onClick={() => handleHistory(1)}>
                          <CalendarMonthOutlinedIcon /> 2015
                        </PrimaryButton>
                      ) : (
                        <TextButton
                          onClick={() => handleHistory(1)}
                          isPrimary={false}
                        >
                          <Typography gutterBottom variant="h5">
                            <CalendarMonthOutlinedIcon /> 2015
                          </Typography>
                        </TextButton>
                      )}
                    </Grid>
                    <Grid item>
                      {activeTab === 2 ? (
                        <PrimaryButton onClick={() => handleHistory(2)}>
                          <CalendarMonthOutlinedIcon /> 2017
                        </PrimaryButton>
                      ) : (
                        <TextButton
                          onClick={() => handleHistory(2)}
                          isPrimary={false}
                        >
                          <Typography gutterBottom variant="h5">
                            <CalendarMonthOutlinedIcon /> 2017
                          </Typography>
                        </TextButton>
                      )}
                    </Grid>
                  </Grid>
                  <Grid container item spacing={2}>
                    <Grid item xs={12} md={6}>
                      <div>
                        <figure className={classes.bigImg}>
                          <img src={stunnersFirstImage} alt="pic" />
                        </figure>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {activeTab === 0 ? (
                        <Grid>
                          <Typography gutterBottom variant="h5">
                            Forged in 2014, A Legacy of Friendship and Sporting
                            Triumphs
                          </Typography>
                          <p>
                            In the annals of cricket history, one name stands
                            out as a testament to camaraderie and sporting
                            excellence: Stunners Cricket Club. Founded in the
                            year 2014 by Karthik Pugazhendi and christened by
                            Dheeraj Chaitanya Damarla, this club has left an
                            indelible mark on the cricketing landscape. With a
                            remarkable journey spanning 333 matches and a roster
                            of 95 players, Stunners has become a symbol of
                            passion, resilience, and lifelong friendships.
                          </p>
                          <p>
                            From its humble beginnings in 2014, Stunners Cricket
                            Club has cultivated an unwavering commitment to the
                            game. Each victory served as a lesson in the art of
                            triumph, teaching the players how not to lose.
                            Equally significant, every defeat fueled their
                            determination to bounce back stronger, instilling
                            within them the invaluable knowledge of how to
                            secure victory in the future.
                          </p>
                          <p>
                            Beyond the boundaries of the cricket field, the
                            members of Stunners epitomize the true spirit of
                            sportsmanship and unity. They have formed a
                            tight-knit community, bound together by their shared
                            love for the game and their unwavering support for
                            one another. Through countless cups of coffee and
                            spirited conversations, the foundation of Stunners
                            Cricket Club was laid, birthing a lifelong journey
                            of friendship, personal growth, and mutual respect.
                          </p>
                          <p>
                            As time marches on, Stunners Cricket Club continues
                            to etch its name in the annals of cricketing
                            history. Their passion for the sport remains
                            unyielding, their commitment unwavering. The red
                            cricket ball, once a mere symbol of competition, now
                            signifies the unbreakable bond that unites this
                            extraordinary group of individuals.
                          </p>
                          <p>
                            Stunners Cricket Club: forged in 2014, a testament
                            to the enduring power of friendship, a legacy of
                            sporting triumphs, and an embodiment of the very
                            essence of the game.
                          </p>
                        </Grid>
                      ) : activeTab === 1 ? (
                        <Grid>
                          <Typography gutterBottom variant="h5">
                            All Rounders
                          </Typography>
                        </Grid>
                      ) : (
                        <Grid>
                          <Typography gutterBottom variant="h5">
                            All Rounders
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </TabPanel>

                <TabPanel>
                  <div className="container">
                    {/* Tab content for Our Mission */}
                    {/* Add your content here */}
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="container">
                    {/* Tab content for Our Vision */}
                    {/* Add your content here */}
                  </div>
                </TabPanel>
              </Tabs>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  );
};
export default About;

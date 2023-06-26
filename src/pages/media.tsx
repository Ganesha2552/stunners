import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import CardView from '../components/CardView/CardView'; // Assuming you have a CardView component
import PlayerCategory from '../enums/PlayerCategory';
import SubBanner from '../layouts/SubBanner';
import type { IPlayer } from '../model/Player';

const Players = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [playersData, setPlayersData] = useState<IPlayer[]>([]);

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        const response = await axios.get('/api/player');
        setPlayersData(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching players data:', error);
      }
    };

    fetchPlayersData();
  }, []);
  // Filter players based on category
  const filteredPlayers = (category: PlayerCategory) =>
    playersData.filter((player) => player.category === category);

  return (
    <Main
      meta={
        <Meta title="Stunners Media Gallery" description="Stunners Gallery" />
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SubBanner breadCrumbPage="Players" />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
          >
            <Typography gutterBottom variant="h5">
              WicketKeeper
            </Typography>
            <Grid item xs={12}>
              {/* Render the CardView component for Wicketkeepers */}
              <CardView
                players={filteredPlayers(PlayerCategory.WicketKeeper)}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Repeat the above Grid item for other categories (Batsman, Bowler, All-Rounder) */}

        <Grid item xs={12} sx={{ bgcolor: '#F2F2F2' }}>
          <Grid
            container
            spacing={2}
            margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
          >
            <Typography gutterBottom variant="h5">
              Batsman
            </Typography>
            <Grid item xs={12}>
              <CardView players={filteredPlayers(PlayerCategory.Batsman)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
          >
            <Typography gutterBottom variant="h5">
              Bowler
            </Typography>
            <Grid item xs={10}>
              <CardView players={filteredPlayers(PlayerCategory.Bowler)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: '#F2F2F2' }}>
          <Grid
            container
            spacing={2}
            margin={isSmallScreen ? '0 0 0 3%' : '0 0 0 10%'}
          >
            <Typography gutterBottom variant="h5">
              All Rounders
            </Typography>
            <Grid item xs={12}>
              <CardView players={filteredPlayers(PlayerCategory.AllRounder)} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  );
};

export default Players;

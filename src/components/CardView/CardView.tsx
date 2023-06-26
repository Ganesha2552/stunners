import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface CardViewProps {
  players: any[];
}
const CardView: React.FC<CardViewProps> = ({ players }) => (
  <Grid container spacing={2}>
    {players.map((player) => (
      <Grid item xs={12} sm={6} md={3} key={player.name}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={player.user.avatar}
            alt={player.name}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {player.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jersey No: {player.jerseyNo}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default CardView;

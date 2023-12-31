import { Link, Typography } from '@mui/material';
import React from 'react';

export default function Copyright() {
  return (
    <Typography variant="body2" color="#8C95A1" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://stunnerscc.com/">
        Stunners Cricket Clubs, All Rights Reserved
      </Link>{' '}
      {new Date().getFullYear()}. Developed and Maintained by
      <Link color="inherit" href="https://github.com/Ganesha2552">
        Ganesha Moorthy
      </Link>
    </Typography>
  );
}

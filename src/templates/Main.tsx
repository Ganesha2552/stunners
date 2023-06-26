import 'bootstrap/dist/css/bootstrap.min.css';

import { Grid } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import type { ReactNode } from 'react';

import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <StylesProvider injectFirst>
    {props.meta}
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </StylesProvider>
);

export { Main };

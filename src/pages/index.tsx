import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Carousel from '../components/Carousel/Carousel';

const Index = () => {
  const router = useRouter();
  const imageBasepath = `${router.basePath}/assets/images/`;
  const images = [
    `${imageBasepath}caro-1.jpeg`,
    `${imageBasepath}caro-2.jpeg`,
    `${imageBasepath}caro-3.jpeg`,
    `${imageBasepath}caro-4.jpeg`,
    `${imageBasepath}caro-5.jpeg`,
    `${imageBasepath}caro-6.jpeg`,
    `${imageBasepath}caro-7.jpeg`,
    `${imageBasepath}caro-8.jpeg`,
  ];

  return (
    <Main
      meta={
        <Meta
          title="Stunners | Cricket Team | Chennai"
          description="Cricket is in our blood. Feel the same?
Come and see us in action. Or try out and play with us!"
        />
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Carousel images={images} />
        </Grid>
        <Grid item xs={12}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            fuga recusandae quidem. Quaerat molestiae blanditiis doloremque
            possimus labore voluptatibus distinctio recusandae autem esse
            explicabo molestias officia placeat, accusamus aut saepe.
          </p>
        </Grid>
      </Grid>
    </Main>
  );
};

export default Index;

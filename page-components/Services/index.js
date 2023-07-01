import React from 'react';
import { Container, Title, TitleContainer, GridContainer } from './styles';
import Grid from '@mui/material/Grid';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { useRouter } from 'next/router';
import { SERVICE_CONSTANTS, CONTENT } from './constant';
import Page404 from '../Page404';

const Services = () => {
  const router = useRouter();
  const { query } = router;
  const { type = 'laser-cutting' } = query;

  if (SERVICE_CONSTANTS.includes(type)) {
    return (
      <Container>
        <TitleContainer>
          <Title>{CONTENT[type]['heading']}</Title>
        </TitleContainer>
        <GridContainer>
          <Grid container spacing={10}>
            <Grid item md={7}>
              <LeftContainer type={type} />
            </Grid>
            <Grid item md={5}>
              <RightContainer type={type} />
            </Grid>
          </Grid>
        </GridContainer>
      </Container>
    );
  }

  return <Page404 />;
};

export default Services;

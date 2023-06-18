import React from 'react';
import { CardContainer, Container, Image, Title, SubTitle } from './styles';
import Grid from '@mui/material/Grid';
import CONTENT from '../constant';
import { useRouter } from 'next/router';

const Card = () => {
  const { push } = useRouter();
  return (
    <Container>
      <Grid container spacing={1}>
        {CONTENT.map((val, index) => (
          <Grid item md={4} key={index}>
            <CardContainer onClick={() => push(`/service/${val.key}`)}>
              <Image src={val.img} alt="laser" />
              <Title className="title">{val.title}</Title>
              <SubTitle>{val.subtitle}</SubTitle>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Card;

import React from 'react';
import { Container, Image } from './styles';
import { CONTENT } from '../constant';

const RightContainer = ({ type }) => {
  return (
    <Container>
      <Image src={CONTENT[type]['img']} alt="service-img" />
    </Container>
  );
};

export default RightContainer;

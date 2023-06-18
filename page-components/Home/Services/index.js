import React from 'react';
import { Container, Title, Flex, Subtitle } from './styles';
import Card from './Card';

const Services = () => {
  return (
    <Container id="services">
      <Flex>
        <Title>Services</Title>
        <Subtitle>
          Unleashing the potential of our latest investment: high-speed,
          high-powered lasers that deliver rapid and precise cutting of mild
          steel, stainless steel, galvanized steel, and aluminum.
        </Subtitle>
      </Flex>
      <Card />
    </Container>
  );
};

export default Services;

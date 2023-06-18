import React from 'react';
import { Container } from './styles';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainContainer = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default MainContainer;

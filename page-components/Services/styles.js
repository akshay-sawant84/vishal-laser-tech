import styled from 'styled-components';

export const Container = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background: radial-gradient(
      circle at 10% 20%,
      rgba(87, 108, 117, 0.8) 0%,
      rgba(37, 50, 55, 0.8) 100.2%
    ),
    url('/cutting.jpg');
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
    padding: 0 16px;
  }
`;

export const GridContainer = styled.div`
  padding: 80px 50px;

  @media (max-width: 767px) {
    padding: 50px 16px;
  }
`;

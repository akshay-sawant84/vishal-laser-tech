import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 14rem 0;
  position: relative;
`;

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.8;
  overflow: hidden;

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
`;

export const StyledVideo = styled.video`
  height: 600px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 767px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translateX(5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
    padding: 0 16px;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  animation: moveInBottom ease-out 0.75s;
  animation-fill-mode: backwards;

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  animation: pulse 1.5s infinite;
  background-color: #ff5203;
  padding: 12px 25px;
  font-size: 16px;

  &:hover {
    background-color: #ff5203;
  }

  & span svg {
    transform: rotate(270deg);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 2px rgba(255, 82, 3, 0.7);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }
`;

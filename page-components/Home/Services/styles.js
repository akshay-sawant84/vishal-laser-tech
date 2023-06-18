import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 3.125rem;

  @media (max-width: 767px) {
    padding: 2rem 1rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  letter-spacing: 1px;
  display: inline-block;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 10px 20px 30px rgb(177, 172, 172);
  }
`;

export const Subtitle = styled.div`
  width: 800px;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

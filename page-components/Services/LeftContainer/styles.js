import styled from 'styled-components';

export const Container = styled.div`
  .pl-16 {
    padding-left: 16px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.div`
  font-size: 15px;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: ${({ mb }) => mb};
`;

export const Text1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 12px 16px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  .mr-4 {
    margin-right: 12px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 40px;
  cursor: pointer;

  & :hover {
    color: #f79327;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

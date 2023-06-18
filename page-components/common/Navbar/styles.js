import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 50px;
  background-color: #f0f0f0;
  position: sticky;
  top: 0;
  background-color: #ffffff; /* Specify the background color */
  z-index: 100; /* Set the z-index to ensure it appears above other elements */

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  color: #ff5203;
  font-weight: 700;
  font-family: 'Playfair Display SC', sans-serif;

  .span-title {
    color: #000;
    margin-left: 0px;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;
  margin-top: -6px;
  margin-left: 4px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  & .MuiTypography-root {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    height: auto;
  }
`;

export const MenuContainer = styled.div`
  width: 400px;
  height: auto;
`;

export const MobileContainer = styled.div`
  padding: 12px 8px;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const MobileTitle = styled.div`
  font-size: 20px;
  color: #ff5203;
  font-weight: 700;
  font-family: 'Playfair Display SC', sans-serif;

  .span-title {
    color: #000;
    margin-left: 0px;
  }
`;

export const MobileNavContainer = styled.div`
  padding: 20px;
`;

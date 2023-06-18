import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

  .content-box {
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mt-30 {
    margin-top: 30px;
  }
`;

export const BgGif = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  width: 500px;
  background-position: center;
`;

export const StyledH1 = styled.h1`
  font-size: 80px;
`;

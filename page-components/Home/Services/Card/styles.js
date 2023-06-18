import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
  border-radius: 4px;

  & .MuiGrid-container {
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  position: relative;
  background-color: #ffefde;
  border-radius: 4px;
  z-index: 0;
  overflow: hidden;
  height: 100%;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -40px;
    right: -40px;
    background: #ff5203;
    /* background: #fd871f; */
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(35);
  }

  .title {
    color: #000;
  }

  &:hover {
    color: #fff;

    .title {
      color: #fff;
    }
  }
`;

export const Image = styled.img`
  width: 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

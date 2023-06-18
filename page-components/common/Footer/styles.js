import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 50px;
  position: relative;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 767px) {
    padding: 20px 16px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.div`
  font-size: 14px;
  padding: 2px;
  margin-bottom: 8px;
  position: relative;
  display: inline-block;
  position: relative;
  z-index: 1;
  cursor: ${({ cursor }) => cursor || 'auto'};

  &:hover {
    color: #fc4a13de;
    padding-left: 25px;
    transition-duration: 200ms;
  }

  &:hover::after {
    width: 15px;
    transition-duration: 500ms;
    position: absolute;
    top: 50%;
    left: 0;
    height: 3px;
    background-color: red;
    content: '';
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  & .icon {
    margin-right: 8px;
  }
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-bottom: 16px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

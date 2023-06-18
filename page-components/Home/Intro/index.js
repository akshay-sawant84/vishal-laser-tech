import React from 'react';
import {
  Container,
  BgVideo,
  StyledVideo,
  Content,
  Title,
  StyledButton,
  ButtonContainer,
} from './styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

const Intro = () => {
  return (
    <Container>
      <BgVideo>
        <StyledVideo autoPlay muted loop>
          <source src="/laser.mp4" type="video/mp4" />
        </StyledVideo>
        <div className="gradient-overlay"></div>
      </BgVideo>

      <Content>
        <Title>
          Experience flawless Laser Cutting and personalization services with
          us.
        </Title>
        <ButtonContainer>
          <Link href="#services" scroll={false}>
            <StyledButton
              className="btn-white"
              variant="contained"
              endIcon={<ArrowBackIosNewIcon />}
            >
              Explore More
            </StyledButton>
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Intro;

import React from 'react';
import { BgGif, Container, StyledH1 } from './styles';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Page404 = () => {
  const { push } = useRouter();
  return (
    <Container>
      <StyledH1>404</StyledH1>
      <BgGif />
      <div className="content-box">
        <h1>Look like you&apos;re lost</h1>
        <p>The page you are looking for not available!</p>
        <Button className="mt-30" variant="contained" onClick={() => push('/')}>
          Go to Home
        </Button>
      </div>
    </Container>
  );
};

export default Page404;

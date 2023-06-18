import React from 'react';
import { Container, IconContainer, TextContainer, Flex } from './styles';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const handlePhoneClick = () => {
    const phoneNumber = '1234567890';
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, '_blank');
  };

  const handleWhatsAppClick = () => {
    const name = 'Vishal Laser Tech';
    const description = 'Hey, I want to know more about you!';
    const phoneNumber = '7303053069';

    const encodedMessage = encodeURIComponent(`${name}\n${description}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const emailAddress = 'example@example.com';
    const emailLink = `mailto:${emailAddress}`;
    window.open(emailLink, '_blank');
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Flex>
            <IconContainer>
              <LocalPhoneIcon
                onClick={handlePhoneClick}
                className="mr-4"
                style={{ color: '#fff' }}
              />
              <EmailIcon
                onClick={handleEmailClick}
                className="mr-4"
                style={{ color: '#fff' }}
              />
              <WhatsAppIcon
                onClick={handleWhatsAppClick}
                style={{ color: '#fff' }}
              />
            </IconContainer>

            <TextContainer onClick={handlePhoneClick}>
              <LocalPhoneIcon className="mr-4" style={{ color: '#fff' }} />
              <Typography variant="subtitle1" ml={1} color="#fff">
                +91 - 7303053069
              </Typography>
            </TextContainer>

            <TextContainer onClick={handleEmailClick}>
              <EmailIcon className="mr-4" style={{ color: '#fff' }} />
              <Typography variant="subtitle1" ml={1} color="#fff">
                vishallasertech@gmail.com
              </Typography>
            </TextContainer>
          </Flex>
        </Grid>
        <Grid item md={4}>
          <TextContainer>
            <LocationOnIcon className="mr-4" style={{ color: '#fff' }} />
            <Typography variant="subtitle1" ml={1} color="#fff">
              Nalasopara East
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

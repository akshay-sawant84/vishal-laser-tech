import React from 'react';
import {
  Container,
  ListContainer,
  ListItem,
  ContactContainer,
  Name,
  Flex,
  PersonDetails,
  Text,
  GoogleMap,
} from './styles';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { INDUSTRIES, SERVICES } from './constant';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <GoogleMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.6208041034!2d72.8716401!3d19.4380891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a90fda56913b%3A0xc91f7ca7baa847fb!2sVishal%20Laser%20Tech!5e0!3m2!1sen!2sin!4v1687124591062!5m2!1sen!2sin"
          width="600"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </GoogleMap>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <ListContainer>
            {SERVICES.map((val, index) => (
              <ListItem
                cursor="pointer"
                onClick={() => router.push(`/service/${val.key}`)}
                className="list-item"
                key={index}
              >
                {val.label}
              </ListItem>
            ))}
          </ListContainer>
        </Grid>
        <Grid item md={4}>
          <Name>Industries Served</Name>
          <ListContainer>
            {INDUSTRIES.map((val, index) => (
              <ListItem key={index}>{val}</ListItem>
            ))}
          </ListContainer>
        </Grid>
        <Grid item md={4}>
          <ContactContainer>
            <div>
              <PersonDetails>
                <Name>Mr. Vishal D. Burbadkar</Name>
                <Text>Founder</Text>
                <Flex>
                  <LocalPhoneIcon className="icon" /> 7021635854
                </Flex>
                <Flex>
                  <LocalPhoneIcon className="icon" /> 8691861095
                </Flex>
              </PersonDetails>
              <PersonDetails>
                <Name>Mr. Ganesh H. Kadam</Name>
                <Text>Founder</Text>
                <Flex>
                  <LocalPhoneIcon className="icon" /> 7303053069
                </Flex>
              </PersonDetails>
              <PersonDetails>
                <Flex>
                  <EmailIcon className="icon" /> info@vishallasertech.com
                </Flex>
              </PersonDetails>
            </div>
          </ContactContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

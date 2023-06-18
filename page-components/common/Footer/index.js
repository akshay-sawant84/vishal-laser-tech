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
                  <EmailIcon className="icon" /> vishallasertech@gmail.com
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

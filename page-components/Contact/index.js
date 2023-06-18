import React from 'react';
import {
  GridContainer,
  Title,
  TitleContainer,
  Text,
  Name,
  PersonDetails,
  Flex,
} from './styles';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
  return (
    <>
      <TitleContainer>
        <Title>Contact Us</Title>
      </TitleContainer>
      <GridContainer>
        <Grid container spacing={10}>
          <Grid item md={7}>
            <Text>
              At Vishal Laser Tech, we are experts in precision high-speed
              custom metal laser cutting services, catering to diverse
              applications and industries. Our commitment to excellence is
              supported by cutting-edge equipment, optimized processes, and a
              highly skilled workforce. With our comprehensive capabilities, we
              strive to deliver exceptional quality parts with utmost efficiency
              and cost-effectiveness. Trust Vishal Laser Tech for all your metal
              cutting needs, and experience the difference that expertise,
              advanced technology, and streamlined operations can make.
            </Text>
            <PersonDetails>
              <Name>Mr. Vishal D. Burbadkar</Name>
              <Flex>
                <LocalPhoneIcon className="icon" /> 7021635854
              </Flex>
              <Flex>
                <LocalPhoneIcon className="icon" /> 8691861095
              </Flex>
            </PersonDetails>
            <PersonDetails>
              <Name>Mr. Ganesh H. Kadam</Name>
              <Flex>
                <LocalPhoneIcon className="icon" /> 7303053069
              </Flex>
            </PersonDetails>
            <PersonDetails>
              <Flex mb="24px">
                <EmailIcon className="icon" /> vishallasertech@gmail.com
              </Flex>
              <Flex>
                <PlaceIcon color="red" className="icon" /> Gala no B/37, Raza ul
                Raza compound, pelhar nalasopara phata, near avdut ashram
                nalasopara east, vasai-virar city, Nalasopara, Maharashtra
                401208
              </Flex>
            </PersonDetails>
          </Grid>
          <Grid item md={5}>
            <img src="/contact.jpg" alt="contact" />
          </Grid>
        </Grid>
      </GridContainer>
    </>
  );
};

export default Contact;

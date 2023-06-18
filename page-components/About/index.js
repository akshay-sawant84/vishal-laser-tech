import React from 'react';
import { GridContainer, Title, TitleContainer, Text } from './styles';
import Grid from '@mui/material/Grid';

const About = () => {
  return (
    <>
      <TitleContainer>
        <Title>About Us</Title>
      </TitleContainer>
      <GridContainer>
        <Grid container spacing={10}>
          <Grid item md={7}>
            <Text>
              Vishal Laser Tech specializes in comprehensive sheet metal
              fabrication and manufacturing services. With our extensive range
              of capabilities, we offer a complete suite of manufacturing
              solutions, including contract manufacturing. This enables us to
              handle the entire production process, from raw materials to
              finished assembly, ensuring seamless integration and delivering
              top-quality products.
            </Text>
            <Text>
              With unwavering commitment to staying at the forefront of
              technological advancements, Vishal Laser Tech ensures that your
              product is manufactured to the utmost standards of quality. Our
              state-of-the-art facilities and cutting-edge technology enable us
              to deliver products with precision, timeliness, and affordability.
              We prioritize meeting your expectations by investing in the latest
              technology, resulting in products that exceed industry standards,
              punctual delivery, and competitive pricing.
            </Text>
            <Text>
              Vishal Laser Tech is your ultimate destination for comprehensive
              sheet metal manufacturing services. Whether you require a
              straightforward laser cut plate or a fully fabricated assembly,
              complete with painting, powder coating, finishing, and rigorous
              testing, we have you covered. Our ability to deliver end-to-end
              solutions positions us perfectly to establish mutually beneficial
              manufacturing partnerships. Trust Vishal Laser Tech to seamlessly
              fulfill your requirements and deliver top-notch products directly
              to your customers.
            </Text>
            <Text>
              Experience true partnership in your supply chain with Vishal Laser
              Tech Engineering. With our commitment to comprehensive
              collaboration and cutting-edge technology, we strive to deliver
              optimal results for your business. Our expert team will assist you
              in selecting the most suitable fabrication methods to efficiently
              produce your parts, ensuring excellence at every stage. Trust
              Vishal Laser Tech to be your trusted partner, empowering your
              success with our expertise and advanced solutions.
            </Text>
            <Text>
              Discover the power of Vishal Laser Tech&apos;s advanced laser
              cutting machines, delivering unparalleled precision, exceptional
              quality, and unmatched value across a wide range of metal cutting
              applications. Take the first step towards unlocking new
              possibilities by contacting us today to learn more about our
              cutting-edge solutions. Our team is ready to provide you with the
              expertise and information you need to make informed decisions for
              your projects.
            </Text>
          </Grid>
          <Grid item md={5}>
            <img src="/about.jpg" alt="about" />
          </Grid>
        </Grid>
      </GridContainer>
    </>
  );
};

export default About;

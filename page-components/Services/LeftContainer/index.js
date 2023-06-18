import React from 'react';
import { Container, Heading, Text, Text1 } from './styles';
import { CONTENT } from '../constant';

const LeftContainer = ({ type }) => {
  if (type === 'laser-cutting') {
    return (
      <>
        <Container>
          <Text>
            Vishal Laser Tech is a leading provider of precision high-speed
            custom metal laser cutting services, catering to a diverse range of
            applications and industries. Backed by cutting-edge equipment,
            optimized workflows, and a highly skilled team, we are dedicated to
            delivering superior quality parts with utmost efficiency and
            cost-effectiveness.
          </Text>
          <Text>
            At Vishal Laser Tech, we have made substantial investments in
            state-of-the-art, high-speed, and high-powered lasers, enabling us
            to swiftly and precisely cut a wide range of materials including
            mild steel, stainless steel, galvanized steel, and aluminum. Our
            advanced laser technology ensures exceptional speed and accuracy,
            allowing us to meet the most demanding requirements of our clients
            with unmatched efficiency.
          </Text>
          <Heading>Laser Cutting Capabilities by Material :</Heading>
          <Text>
            Our fabrication services harness the versatility of laser cutting
            technology to handle both thick and thin metal sheets, meeting
            precise dimensional requirements with utmost efficiency.
          </Text>
          <ul className="pl-16">
            <li>
              <Text1>Mild Steel - upto 8 mm Thick</Text1>
            </li>
            <li>
              <Text1>Galvanized Steel - upto 8 mm Thick</Text1>
            </li>
            <li>
              <Text1>Stainless - upto 3 mm Thick</Text1>
            </li>
            <li>
              <Text1>Aluminum - upto 3 mm Thick</Text1>
            </li>
            <li>
              <Text1>Sheet size - 3000 x 1500 mm</Text1>
            </li>
            <li>
              <Text1>Cutting accuracy: +/- 0.005 mm/mtr</Text1>
            </li>
          </ul>
          <Heading>
            Some of the advantages laser cutting provides include:
          </Heading>
          <Text>
            Experience flawlessly precise laser cutting processes offered by
            Vijay Laser Tech, ensuring smooth cutting areas, minimal burrs, heat
            distortion, and material warping. Our commitment to excellence
            eliminates imperfections, reducing the necessity for additional
            secondary operations on the parts.
          </Text>
          <Text>
            Embrace the advantages of laser cutting at Vijay Laser Tech, where
            high-precision cutting with a tolerance of +/- .005 is the norm.
            This exceptional precision significantly minimizes the need for
            secondary operations and part scrapping. Moreover, our streamlined
            process and minimal tooling requirements ensure quick turnaround
            times, providing efficient solutions for a wide range of projects.
          </Text>
          <Text>
            Unlock a world of possibilities with Vijay Laser Tech&apos;s custom
            laser cutting services, offering an extensive range of material
            capabilities. From steel, aluminum, and stainless steel to
            non-ferrous metals like copper, brass, and bronze, our commercial
            laser cutting services excel in producing nearly any two-dimensional
            shape, expanding the horizons of production. Experience the
            versatility and precision that propel your projects to new heights.
          </Text>
          <Heading>Industries We Serve</Heading>
          <Text>
            Leverage the versatility of laser cutting, an invaluable resource
            for numerous industries, catering to a diverse range of
            applications. Explore the myriad possibilities offered by laser
            cutting metal services, empowering industries to achieve precision
            and efficiency in their projects.
          </Text>
          <ul className="pl-16">
            <li>
              <Text1>Manufacturing</Text1>
            </li>
            <li>
              <Text1>Nuclear</Text1>
            </li>
            <li>
              <Text1>Chemical mixing</Text1>
            </li>
            <li>
              <Text1>Wireless communications</Text1>
            </li>
            <li>
              <Text1>Industrial rack manufacturing</Text1>
            </li>
            <li>
              <Text1>Industrial baking</Text1>
            </li>
            <li>
              <Text1>Power</Text1>
            </li>
            <li>
              <Text1>Architectural</Text1>
            </li>
            <li>
              <Text1>Agriculture</Text1>
            </li>
            <li>
              <Text1>Medical</Text1>
            </li>
          </ul>
        </Container>
      </>
    );
  }

  return (
    <Container>
      <Heading mb="1rem">{CONTENT[type]['heading']}</Heading>
      <Text>{CONTENT[type]['desc']}</Text>
    </Container>
  );
};

export default LeftContainer;

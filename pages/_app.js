import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/hind'; // Import the Hind font package
import '@fontsource/hind/300.css';
import '@fontsource/hind/400.css';
import '@fontsource/hind/500.css';
import '@fontsource/hind/700.css';
import MainContainer from '@/page-components/common/MainContainer';
import Head from 'next/head';

const theme = createTheme({
  typography: {
    fontFamily: 'Hind, sans-serif', // Specify the Hind font family
  },
  palette: {
    primary: {
      main: '#ff5203', // Your custom button color
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Vishal Laser Tech - Cutting-Edge Laser Solutions for Precision
          Manufacturing
        </title>
        <meta
          name="description"
          content="Vishal Laser Tech - Your Trusted Laser Technology Partner | Specializing in cutting-edge laser solutions, Vishal Laser Tech offers a wide range of high-quality laser products and services. From laser cutting and engraving to marking and welding, we deliver precision and innovation to industries worldwide. Explore our website for the latest advancements in laser technology and discover how we can elevate your manufacturing processes. Contact us today for personalized laser solutions tailored to your specific needs."
        />
        <meta
          name="keywords"
          content="Laser cutting, Sheet metal box design, Sheet metal fabrication, Engineering services, Assembly and finishing, Sheet metal bending, Laser technology solutions, Precision manufacturing, Laser cutting services, Sheet metal fabrication company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vishallasertech.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

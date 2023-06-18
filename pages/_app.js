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
        <title>Vishal Laser Tech</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

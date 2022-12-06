import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange, purple } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: {
      main: purple['A700'],
    },
  },
  typography: {
    "fontFamily": `"Nunito", sans-serif`,
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

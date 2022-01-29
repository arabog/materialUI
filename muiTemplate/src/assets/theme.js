import { createTheme } from '@mui/material/styles'
import { purple, orange, red} from '@mui/material/colors';


const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];


const theme = createTheme(
          {
                    palette: {
                              primary: {
                                        light: '#757ce8',
                                        main: primaryColor,
                                        dark: '#002884',
                                        contrastText: '#fff',
                              },

                              secondary: {
                                        light: '#ff7961',
                                        main: secondaryColor,
                                        dark: '#ba000d',
                                        contrastText: '#000',
                              },

                              error: {
                                        dark: dangerColor,
                              }
                    },
          }
) ;


export default theme;
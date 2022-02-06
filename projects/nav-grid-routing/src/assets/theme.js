import { createTheme } from '@mui/material/styles';
import { green, orange, red } from '@mui/material/colors';



const primaryColor = green[600];
const secondaryColor = orange[500];
const dangerColor = red[900];


const theme = createTheme({
          palette: {
                    primary: {
                              main: primaryColor,
                              light: '#757ce8',
                              dark: '#002884',
                              contrastText: '#fff',
                    },

                    secondary: {
                              main: secondaryColor,
                              light: '#ff7961',
                              dark: '#ba000d',
                              contrastText: '#000',
                    },

                    error: {
                              main: dangerColor,
                    }
          },

          components: {
                    // name of d compoent
                    MuiFab: {
                              styleOverrides: {
                                        // Name of the slot
                                        root: {
                                                  // Some CSS
                                                  fontSize: '1rem',
                                        },

                                        secondary: {
                                                  color: 'purple',

                                                  '&:hover': {
                                                            color: 'white'
                                                  }
                                        }
                              },
                    },  
                    
                    MuiAppBar: {
                              styleOverrides: {
                                        // Name of the slot
                                        root: {
                                                  // Some CSS
                                                  background: dangerColor,

                                                  marginBottom: 15,
                                        },

                              },
                    },  

                    MuiCard: {
                              styleOverrides: {
                                        // Name of the slot
                                        root: {
                                                  // Some CSS
                                                  margin: 20,
                                        },

                              },
                    },  
          },
}) ;


export default theme;





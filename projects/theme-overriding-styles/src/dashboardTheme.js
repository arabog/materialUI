import { createTheme } from '@mui/material/styles';


export const dashboardTheme = createTheme(
          {
                    components: {
                              MuiButton: {
                                        styleOverrides: {
                                                  contained: {
                                                            fontSize: '0.875rem'
                                                  },
                                        },
                              },
                    },

                    palette: {
                              primary: {
                                        main: '#bada55'
                              },
                    },

                    typography: {
                              fontFamily: [
                                        'Roboto',
                                        '"Helvetica Neue"'
                              ].join(', ')
                    },
          }
)
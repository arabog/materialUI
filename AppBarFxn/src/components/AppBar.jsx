import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material


function ScrollTop(props) {
          const { children } = props;

          const trigger = useScrollTrigger({
                    disableHysteresis: true,
                    threshold: 100,
          });

          const handleClick = (event) => {
                    const anchor = (event.target.ownerDocument || document).querySelector(
                              `#back-to-top-anchor`
                    );

                    if (anchor) {
                              anchor.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                              });
                    }
          };

          return (
                    <Zoom in={trigger}>
                              <Box
                                        onClick={handleClick}
                                        role="presentation"
                                        sx={{ position: 'fixed', bottom: 16, right: 16 }}
                              >
                                        {children}
                              </Box>
                    </Zoom>
          );
}


ScrollTop.propTypes = {
          children: PropTypes.element.isRequired,
};

export default function BackToTop(props) {
          return (
                    <>
                              <CssBaseline />

                              <AppBar>
                                        <ToolBar>
                                                  <Typography variant="h6" component="div">
                                                            Scroll to see button
                                                  </Typography>
                                        </ToolBar>
                              </AppBar>

                              <ToolBar id="back-to-top-anchor" />

                              <Container>
                                        <Box sx={{ my: 2 }}>
                                                  {[...new Array(12)]
                                                  .map( () => `Cras mattis consectetur purus sit amet fermentum.
                                                                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                                                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                                  ).join('/n')}
                                        </Box>
                              </Container>

                              <ScrollTop {...props}>
                                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                                                  <KeyboardArrowUpIcon />
                                        </Fab>
                              </ScrollTop>
                    </>
          );
}

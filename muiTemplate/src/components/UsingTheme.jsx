import { 
          AppBar, 
          Box, 
          Toolbar,
          Typography, 
          Button, 
          IconButton
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {


          return (
                    <Box sx={{ flexGrow: 1 }}>
                              <AppBar position="static">
                                        <Toolbar>
                                                  <IconButton
                                                            size="large"
                                                            edge="start"
                                                            color="secondary"
                                                            aria-label="menu"
                                                            sx={{ mr: 2 }}
                                                  >
                                                            <MenuIcon />
                                                  </IconButton>

                                                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                            News
                                                  </Typography>

                                                  <Button color="error">Login</Button>
                                        </Toolbar>
                              </AppBar>
                    </Box>
          );
}
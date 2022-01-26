import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// https://mui.com/components/app-bar/

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  flex: {
    flex: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  toolbarMargin: theme.mixins.toolbar,
});

const FixedPosition = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        />

        <MenuIcon />

        <Typography variant="title" color="inherit" className={classes.flex}>
          HUGB
        </Typography>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

    {/* prevent d begining of d content from hidding */}
    <div className={classes.toolbarMargin}></div>

    <ul>
      {new Array(500).fill(null).map((v, i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
));

export default FixedPosition;

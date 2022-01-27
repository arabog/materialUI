import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';

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

const ScrolledAppBar = withStyles(styles)(
	class extends Component {

		state = {
			scrolling: false,
			scrollTop: 2000,
		};

		onScroll = (e) => {
			this.setState((state) => ({
				scrollTop: e.target.documentElement.scrollTop,
				scrolling: e.target.documentElement.scrollTop > state.scrollTop,
			}));
		};

		shouldComponentUpdate(props, state) {
			return this.state.scrolling !== state.scrolling;
		}

		componentDidMount() {
			window.addEventListener('scroll', this.onScroll);
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.onScroll);
		}

		render() {
			const { classes } = this.props;
			return (
				<Fade in={!this.state.scrolling}>

					<AppBar>

						<Toolbar>
							<IconButton
								className={classes.menuButton}
								color="inherit"
								aria-label="Menu"
							>
								<MenuIcon />
							</IconButton>

							<Typography variant="h6" color="inherit" className={classes.flex}>
								My Title
							</Typography>

							<Button color="inherit">Login</Button>
						</Toolbar>
					</AppBar>

				</Fade>
			);
		}
	}
);

const AppBarWithButtons = withStyles(styles)(
  ({ classes, title, buttonText }) => (
    <div className={classes.root}>
      <ScrolledAppBar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
);
export default AppBarWithButtons;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import ToolBar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Zoom from '@mui/material/Zoom';

// function ScrollTop(props) {
//   const { children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       `#back-to-top-anchor`
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
// };

// export default function BackToTop(props) {
//   return (
//     <>
//       <CssBaseline />

//       <AppBar>
//         <ToolBar>
//           <Typography variant="h6" component="div">
//             Scroll to see button
//           </Typography>
//         </ToolBar>
//       </AppBar>

//       <ToolBar id="back-to-top-anchor" />

//       <Container>
//         <Box sx={{ my: 2 }}>
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
//                                                                       Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//                                                                       Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//                                                                       Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//             )
//             .join('/n')}
//         </Box>
//       </Container>

//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </>
//   );
// }

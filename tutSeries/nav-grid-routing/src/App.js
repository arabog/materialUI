import './App.css';

import Navbar from './components/Navbar';
import Grid from '@mui/material/Grid';

import { Outlet } from "react-router-dom";

// https://reactrouter.com/docs/en/v6/getting-started/tutorial

function App() {
	return (
		<Grid container className="App">
			<Navbar />

			Home Page

			<Outlet />
		</Grid>
	);
}

export default App;

/*
MuiButtonBase-root 
MuiFab-root 
MuiFab-extended 
MuiFab-sizeSmall 
MuiFab-secondary 
*/

import './App.css';

import theme from './assets/theme'
import { ThemeProvider } from '@mui/material/styles';


import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar'
import UsingTheme from './components/UsingTheme'



function App() {


	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<UsingTheme />

				<ImageCard />

				<Navbar />

			</div>
		</ThemeProvider>
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

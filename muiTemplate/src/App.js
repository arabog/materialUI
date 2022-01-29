import './App.css';

import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'


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

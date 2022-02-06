import './App.css';

// https://reactrouter.com/docs/en/v6/getting-started/tutorial
import Navbar from './components/Navbar';

import { Outlet } from "react-router-dom";



function App() {

	
	return (
		<div className="App">

			<Navbar />
			
			<Outlet />

		</div>
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

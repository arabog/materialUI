import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Authentication from './components/pages/Authentication';
import Storage from './components/pages/Storage';
import Database from './components/pages/Database';
import Function from './components/pages/Functions';
import Hosting from './components/pages/Hosting';
import Machine from './components/pages/Machine';

import { ThemeProvider } from '@mui/material/styles'

import { dashboardTheme } from './dashboardTheme';



ReactDOM.render(



	<ThemeProvider theme={dashboardTheme}>
		<Router>
			<Routes>
				<Route path="/" exact element={<App />} >
					<Route path="authentication" element={<Authentication />} />
					<Route path="storage" element={<Storage />} />

					<Route path="database" element={<Database />} />
					<Route path="functions" element={<Function />} />

					<Route path="hosting" element={<Hosting />} />
					<Route path="machine-learning" element={<Machine />} />
				</Route>
			</Routes>
		</Router>
	</ThemeProvider>,
	
	document.getElementById('root')
);
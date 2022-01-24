// import './App.css';
import UndesrstndingBrkpts from './components/Grid'
import FillingSpace from './components/Grid2'

import AbsConAndItem from './components/Grid3'
import FixedColumnLayout from './components/Grid4'

import HeaderFooter from './components/Grid5'
import ColumnDirection from './components/Grid6'


function App() {


	return (
		<div>
			<UndesrstndingBrkpts />
			<hr style={{marginBottom: '50px'}}/>

			<FillingSpace />
			<hr style={{marginBottom: '50px'}}  />

			<AbsConAndItem />
			<hr style={{marginBottom: '50px'}}  />

			<FixedColumnLayout />
			<hr style={{marginBottom: '50px'}}  />

			<HeaderFooter />
			<hr style={{marginBottom: '50px'}}  />

			<ColumnDirection />
			<hr style={{marginBottom: '50px'}}  />
		</div>
	);
}


export default App;

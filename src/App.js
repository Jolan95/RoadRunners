import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './routes/accueil';
import Area from './routes/area';
import Devis from './routes/devis';
import Demenagement from './routes/demenagement';
import Transport from './routes/transport';

function App() {  return (
		<BrowserRouter>
		<Routes>
		  	<Route index element={<Accueil></Accueil>} />
		  	<Route path='/zone-intervention' element={<Area></Area>} />
		  	<Route path='/devis' element={<Devis></Devis>} />
		  	<Route path='/demenagement' element={<Demenagement></Demenagement>} />
		  	<Route path='/transport' element={<Transport></Transport>} />
		</Routes>
	  	</BrowserRouter>
  );
}

export default App;

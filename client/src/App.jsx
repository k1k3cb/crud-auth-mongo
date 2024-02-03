import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './providers/FIlter.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<FilterProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</FilterProvider>
		</>
	);
};

export default App;

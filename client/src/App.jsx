import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './providers/FIlter.provider';
import { UsersProvider } from './providers/Users.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<UsersProvider>
				<FilterProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</FilterProvider>
			</UsersProvider>
		</>
	);
};

export default App;

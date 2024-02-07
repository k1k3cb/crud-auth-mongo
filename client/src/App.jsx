import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/Auth.provider';
import { FilterProvider } from './providers/FIlter.provider';
import { UsersProvider } from './providers/Users.provider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<UsersProvider>
				<AuthProvider>
					<FilterProvider>
						<BrowserRouter>
							<Router />
						</BrowserRouter>
					</FilterProvider>
				</AuthProvider>
			</UsersProvider>
		</>
	);
};

export default App;

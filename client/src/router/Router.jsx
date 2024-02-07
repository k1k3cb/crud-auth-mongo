import { Route, Routes } from 'react-router-dom';
import FormCreateUser from '../components/form-create-user/FormCreateUser';

import FormEditUser from '../components/form-edit-user/FormEditUser';
import LogIn from '../components/log-in/LogIn';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import UserDetails from '../pages/user-details/UserDetails';
import UserProfile from '../pages/user-profile/UserProfile';
import ProtectedRoute from './ProtectedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/login' element={<LogIn />} />
				<Route path='/register-user' element={<FormCreateUser />} />
				<Route path='/edit-user/:id' element={<FormEditUser />} />
				<Route path='/user/:id' element={<UserDetails />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/profile' element={<UserProfile />} />

					{/* Ruta protegida */}
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;

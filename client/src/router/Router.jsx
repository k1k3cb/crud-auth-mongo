import { Route, Routes } from 'react-router-dom';
import FormCreateUser from '../components/form-create-user/FormCreateUser';
import FormEditUser from '../form-edit-user/FormEditUser';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import UserDetails from '../pages/user-details/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/register-user' element={<FormCreateUser />} />
				<Route path='/edit-user/:id' element={<FormEditUser />} />
				<Route path='/user/:id' element={<UserDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;

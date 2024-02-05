import { useEffect, useState } from 'react';
import { URLS } from '../constants/urls';
import { UsersContext } from '../context/UsersContext';
import { getData } from '../utils/api/api';

export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllUsers(setUsers, setLoading);
	}, []);

	return (
		<UsersContext.Provider value={{ users, setUsers, loading, setLoading }}>
			{children}
		</UsersContext.Provider>
	);
};

const getAllUsers = async (setUsers, setLoading) => {
	try {
		const allUsers = await getData(URLS.API_USERS);
		setUsers(allUsers);
		setLoading(false);
	} catch (err) {
		console.error('Error fetching data:', err);
		setLoading(false);
	}
};

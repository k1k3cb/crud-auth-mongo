import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loginRequest } from '../../utils/api/auth.api';

const LogIn = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (!userData) return;
		navigate('/');
	}, [userData]);

	if (loading) return;
	return (
		<form
			onSubmit={event => handleSubmit(event, loginData, navigate, setUserData)}
		>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					value={loginData.email}
					onInput={ev => setLoginData({ ...loginData, email: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					value={loginData.password}
					onInput={ev =>
						setLoginData({ ...loginData, password: ev.target.value })
					}
				/>
			</div>
			<button>LOGIN</button>
		</form>
	);
};

const handleSubmit = async (event, loginData, navigate, setUserData) => {
	event.preventDefault();
	try {
		await loginRequest(loginData, setUserData);
		navigate('/');
	} catch (error) {
		console.error('Error de inicio de sesión:', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default LogIn;

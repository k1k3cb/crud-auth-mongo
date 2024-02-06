import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { UsersContext } from '../../context/UsersContext';
import { postData } from '../../utils/api/api';
import { generateRandomImage } from '../../utils/generateRandomImage';

const FormCreateUser = () => {
	const [userImage, setUserImage] = useState('/assets/images/profile.png');
	const { setUsers } = useContext(UsersContext);
	const {
		handleSubmit,
		register

		// formState: { errors }
	} = useForm();
	const navigate = useNavigate();

	return (
		<div>
			<h2>Create User Form</h2>
			<Link to={'/'}>
				<button type='button'>Home</button>
			</Link>

			<form
				onSubmit={handleSubmit(data =>
					formSubmit(data, userImage, navigate, setUsers)
				)}
			>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						{...register('name', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						{...register('email', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
						type='text'
						name='text'
						id='password'
						{...register('password', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username:</label>
					<input
						type='text'
						name='username'
						id='username'
						{...register('username', { required: true })}
					/>
				</div>
				<label>
					<input
						type='radio'
						value='men'
						{...register('gender', { required: true })}
						onClick={() => handleGenerateImage('men', setUserImage)}
					/>
					Hombre
				</label>
				<label>
					<input
						type='radio'
						value='women'
						{...register('gender', { required: true })}
						onClick={() => handleGenerateImage('women', setUserImage)}
					/>
					Mujer
				</label>

				<img src={userImage} alt='user img' />
				<div>
					<label>
						Active:
						<input
							type='checkbox'
							name='isActive'
							defaultChecked={false}
							{...register('isActive')}
						/>
					</label>
				</div>
				<button type='submit'>Create User</button>
			</form>
		</div>
	);
};

const createUser = async (data, userImage) => {
	console.log('data', data);
	const newUser = {
		password: data.password,
		name: data.name,
		email: data.email,
		username: data.username,
		active: data.isActive,
		image: userImage
	};
	console.log('userData', newUser);
	try {
		const newUsers = await postData(URLS.API_USERS, newUser);
		return newUsers;
	} catch (error) {
		console.error('Error al crear el usuario:', error);
	}
};

//* genero imagen aleatoria del usuario a partir de su género
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};

const formSubmit = async (data, userImage, navigate, setUsers) => {
	const user = await createUser(data, userImage);

	setUsers(user);
	navigate('/');
};

export default FormCreateUser;

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { generateRandomImage } from '../../utils/generateRandomImage';

const FormCreateUser = () => {
	const [userImage, setUserImage] = useState('/assets/images/profile.png');
	const {
		handleSubmit,
		register,
		getValues,
		reset,
		formState: { errors }
	} = useForm();

	return (
		<div>
			<h2>Create User Form</h2>
			<Link to={'/'}>
				<button type='button'>Home</button>
			</Link>

			<form
				onSubmit={handleSubmit(() =>
					formSubmit(getValues, userImage, reset, setUserImage)
				)}
			>
				<div>
					<label>Name:</label>
					<input
						type='text'
						name='name'
						{...register('name', { required: true })}
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type='email'
						name='email'
						{...register('email', { required: true })}
					/>
				</div>
				<div>
					<label>Username:</label>
					<input
						type='text'
						name='username'
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

const createUser = (getValues, userImage) => {
	const id = v4();
	const { name, email, username, isActive } = getValues();

	const newUser = { id, name, email, username, isActive, userImage };

	console.log('newUser', newUser);
	console.log('Usuario creado exitosamente');
};

//* genero imagen aleatoria del usuario a partir de su género
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};

const formSubmit = (getValues, userImage, reset, setUserImage) => {
	createUser(getValues, userImage);
	reset();
	setUserImage('/assets/images/profile.png');
};

export default FormCreateUser;

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { UsersContext } from '../../context/UsersContext';
import { patchData } from '../../utils/api/api';
import { generateRandomImage } from '../../utils/generateRandomImage';

const FormEditUser = () => {
	const { id } = useParams();
	const { users } = useContext(UsersContext);
	const [userImage, setUserImage] = useState('');
	const currentUser = users.find(user => user._id === id);

	const {
		handleSubmit,
		register

		// formState: { errors }
	} = useForm();

	return (
		<div>
			<h2>Edit User Form</h2>

			<form onSubmit={handleSubmit(data => formSubmit(data, userImage, id))}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						{...register('name', { required: true })}
						defaultValue={currentUser.name}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						{...register('email', { required: true })}
						defaultValue={currentUser.email}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username:</label>
					<input
						type='text'
						name='username'
						id='username'
						{...register('username', { required: true })}
						defaultValue={currentUser.username}
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
							checked={currentUser.active}
							//! danger
						/>
					</label>
				</div>
				<button type='submit'>Update User</button>
			</form>
		</div>
	);
};

const updateUser = async (data, userImage, id) => {
	const updatedUser = {
		id,
		name: data.name,
		email: data.email,
		username: data.username,
		active: data.isActive,
		image: userImage
	};

	try {
		const updatedUsers = await patchData(
			`${URLS.API_USERS}/${id}`,
			updatedUser
		);
		return updatedUsers;
	} catch (error) {
		console.error('Error al crear el usuario:', error);
	}
};

//* genero imagen aleatoria del usuario a partir de su género
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};

const formSubmit = (data, userImage, id) => {
	updateUser(data, userImage, id);
};

export default FormEditUser;

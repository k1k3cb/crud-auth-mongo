import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../../context/UsersContext';
import { registerRequest } from '../../utils/api/auth.api';
import InputFile from '../input-file/InputFile';

const FormCreateUser = () => {
	const [userImage, setUserImage] = useState();
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
				<InputFile setUserImage={setUserImage} />

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

const formSubmit = async (data, userImage, navigate, setUsers) => {
	const userData = { ...data, userImage };
	const users = await registerRequest({ ...userData });

	setUsers(users);
	navigate('/');
};

export default FormCreateUser;

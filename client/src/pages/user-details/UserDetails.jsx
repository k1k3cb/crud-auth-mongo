import { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteConfirmation from '../../components/delete-confirmation/DeleteConfirmation';
import FormEditUser from '../../components/form-edit-user/FormEditUser';
import Modal from '../../components/modal/Modal';
import { URLS } from '../../constants/urls';
import { UsersContext } from '../../context/UsersContext';
import { deleteData } from '../../utils/api/api';

const UserDetails = () => {
	const { id } = useParams(); // Buscar el usuario por id
	const { users, setUsers } = useContext(UsersContext);
	const currentUser = users.find(user => user._id === id);
	const navigate = useNavigate();
	const [content, setContent] = useState();

	if (!currentUser) {
		return (
			<div>
				<div>Usuario no encontrado</div>
				<Link to='/'>
					<button type='button'>Home</button>
				</Link>
			</div>
		);
	}

	const { name, username, email, active, image } = currentUser;
	return (
		<div>
			<Link to={'/'}>
				<button type='button'>Home</button>
			</Link>
			<img src={image} alt={`${name} image`} />
			<div>
				<h3>Nombre: {name}</h3>
				<h4>UserName: {username}</h4>
				<p>Email: {email}</p>
				<p>Usuario {active ? 'activo' : 'inactivo'}</p>
			</div>

			<button type='button' onClick={() => setContent(<FormEditUser />)}>
				Editar
			</button>

			{/* <button onClick={() => deleteUser(id, navigate, setUsers)}>Borrar</button> */}

			<button
				onClick={() =>
					setContent(
						<DeleteConfirmation
							confirmDeleteUser={() => deleteUser(id, navigate, setUsers)}
							closeModal={() => setContent()}
						/>
					)
				}
			>
				Borrar desde modal
			</button>
			<Modal closeModal={() => setContent()}>{content}</Modal>
		</div>
	);
};

const deleteUser = async (id, navigate, setUsers) => {
	try {
		const usersUpdated = await deleteData(`${URLS.API_USERS}/${id}`);

		setUsers(usersUpdated);
		navigate('/');
	} catch (error) {
		console.log('error al eliminar el usuario', error);
	}
};

export default UserDetails;

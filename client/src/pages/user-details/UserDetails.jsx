import { Link, useParams } from 'react-router-dom';
import { USERS } from '../../constants/users';

const UserDetails = () => {
	const { id } = useParams(); // Buscar el usuario por id
	const currentUser = USERS.find(user => user.id === id);

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
	const { name, nickname, email, active, image } = currentUser;
	return (
		<div>
			<Link to={'/'}>
				<button type='button'>Home</button>
			</Link>
			<img src={image} alt={`${name} image`} />
			<div>
				<h3>Nombre: {name}</h3>
				<h4>NickName: {nickname}</h4>
				<p>Email: {email}</p>
				<p>Usuario {active ? 'activo' : 'inactivo'}</p>
			</div>
            <Link to={`/edit-user/${id}`}>
				<button type='button'>Editar</button>
			</Link>
            <button>Borrar</button>
		</div>
	);
};

export default UserDetails;

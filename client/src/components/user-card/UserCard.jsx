import { Link } from 'react-router-dom';
import { StyledCard } from './styles';

const UserCard = ({ id, image, name, username, email, estatus }) => {
	return (
		<StyledCard>
			<img src={image} alt={`${name} image`} />
			<div>
				<h3>Nombre: {name}</h3>
				<h4>UserName: {username}</h4>
				<p>Email: {email}</p>
				<p>Usuario {estatus ? 'activo' : 'inactivo'}</p>
			</div>
			<Link to={`/user/${id}`}>
				{' '}
				<button> Ver perfil</button>{' '}
			</Link>
		</StyledCard>
	);
};

export default UserCard;

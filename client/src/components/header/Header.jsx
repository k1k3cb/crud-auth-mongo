import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<p>User:Current User</p>
			<Link to='/register-user'>
				{' '}
				<button type='button'> Crear Usuario</button>{' '}
			</Link>
		</StyledHeader>
	);
};

export default Header;

import { Link } from 'react-router-dom';
import UserFilterAside from '../user-filter-aside/UserFilterAside';
import { StyledAside, StyledButtons, StyledFilters } from './styles';

const SideBar = () => {
	return (
		<StyledAside>
			<StyledFilters>
				<UserFilterAside />
			</StyledFilters>
			<StyledButtons>
				<Link to={'/login'}>
					<button>LOGIN</button>
				</Link>
				<button>LOGOUT</button>
			</StyledButtons>
		</StyledAside>
	);
};

export default SideBar;

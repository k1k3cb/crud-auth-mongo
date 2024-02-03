import UserFilterAside from '../user-filter-aside/UserFilterAside';
import { StyledAside, StyledButtons, StyledFilters } from './styles';

const SideBar = () => {
	return (
		<StyledAside>
			<StyledFilters>
				<UserFilterAside  />
			</StyledFilters>
			<StyledButtons>
				<button>LOGIN</button>
				<button>LOGOUT</button>
			</StyledButtons>
		</StyledAside>
	);
};

export default SideBar;

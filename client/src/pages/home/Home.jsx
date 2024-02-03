import UserCard from '../../components/user-card/UserCard';
import { USERS } from '../../constants/users';
import { USER_FILTERS } from '../../constants/users-filter';
import { useFilter } from '../../providers/FIlter.provider';
import { StyledContainer } from './styles';

const Home = () => {
	const { filter } = useFilter();
	const currentUsers = filterUsers(USERS, filter);
	console.log('filter', filter);

	return (
		<StyledContainer>
			{currentUsers.map(user => {
				return (
					<UserCard
						key={user.id}
						id={user.id}
						image={user.image}
						name={user.name}
						nickname={user.nickname}
						email={user.email}
						estatus={user.active}
					/>
				);
			})}
		</StyledContainer>
	);
};

const filterUsers = (users, filter) => {
	switch (filter) {
		case USER_FILTERS.ALL:
			return users;
		case USER_FILTERS.ACTIVE:
			return users.filter(user => user.active);
		case USER_FILTERS.INACTIVE:
			return users.filter(user => !user.active);
		default:
			return users;
	}
};

export default Home;

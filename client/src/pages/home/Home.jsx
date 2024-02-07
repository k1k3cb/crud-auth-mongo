import { useContext } from 'react';
import UserCard from '../../components/user-card/UserCard';
import { USER_FILTERS } from '../../constants/users-filter';
import { UsersContext } from '../../context/UsersContext';
import { FilterContext } from '../../context/filterContext';
import { StyledContainer } from './styles';

const Home = () => {
	const { filter } = useContext(FilterContext);
	const { users, loading } = useContext(UsersContext);

	if (loading && !users) return <h2>LOADING...</h2>;

	const currentUsers = filterUsers(users, filter);

	return (
		<StyledContainer>
			{currentUsers &&
				currentUsers.map(user => {
					return (
						<UserCard
							key={user._id}
							id={user._id}
							image={user.image}
							name={user.name}
							username={user.username}
							email={user.email}
							estatus={user.active}
						/>
					);
				})}
		</StyledContainer>
	);
};

const filterUsers = (users, filter) => {
	const filteredUsers = [...users];
	switch (filter) {
		case USER_FILTERS.ALL:
			return filteredUsers;
		case USER_FILTERS.ACTIVE:
			return filteredUsers.filter(user => user.active);
		case USER_FILTERS.INACTIVE:
			return filteredUsers.filter(user => !user.active);
	}
};

export default Home;

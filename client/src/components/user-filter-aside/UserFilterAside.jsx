import { useContext } from 'react';
import { USER_FILTERS } from '../../constants/users-filter';
import { FilterContext } from '../../context/filterContext';
import { StyledDiv } from './styles';

const UserFilterAside = () => {
	const { setFilter } = useContext(FilterContext);
	return (
		<StyledDiv>
			<label>
				<input
					type='radio'
					name='user-filter'
					value={USER_FILTERS.ALL}
					onChange={event => handleByOption(event, setFilter)}
					defaultChecked
				/>
				All Users
			</label>
			<label>
				<input
					type='radio'
					name='user-filter'
					value={USER_FILTERS.ACTIVE}
					onChange={event => handleByOption(event, setFilter)}
				/>
				User Active
			</label>
			<label>
				<input
					type='radio'
					name='user-filter'
					value={USER_FILTERS.INACTIVE}
					onChange={event => handleByOption(event, setFilter)}
				/>
				User Inactive
			</label>
		</StyledDiv>
	);
};

const handleByOption = (event, setFilter) => {
	const selectedValue = Number(event.target.value);
	setFilter(selectedValue);

	// console.log(selectedValue)
};

export default UserFilterAside;

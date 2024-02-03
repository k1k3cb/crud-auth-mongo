import { USER_FILTERS } from '../../constants/users-filter';
import { useFilter } from '../../providers/FIlter.provider';
import { StyledDiv } from './styles';
import { useState } from 'react';

const UserFilterAside = () => {
	const { filter, setFilter } = useFilter();

	return (
		<StyledDiv>
			<label>
				<input
					type='radio'
					name='user-filter'
					value={USER_FILTERS.ALL}
					onChange={event => handleByOption(event, setFilter)}
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
	const selectedValue = event.target.value;
	setFilter(selectedValue);

	// console.log(selectedValue)
};

export default UserFilterAside;

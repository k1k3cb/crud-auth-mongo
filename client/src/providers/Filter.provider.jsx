import { useContext, useState } from 'react';
import { USER_FILTERS } from '../constants/users-filter';
import { FilterContext } from '../context/filterContext';

export const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState(USER_FILTERS.ALL);

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => useContext(FilterContext);

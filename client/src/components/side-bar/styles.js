import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledAside = styled.aside`
	width: 20%;
	height: 100vh;
	background-color: ${COLORS.primaryColor};
	padding-block: 50px;
`;

export const StyledFilters = styled.div`
	padding-left: 10px;
    height: 90%;
`;

export const StyledButtons = styled.div`
	display: flex;
    justify-content: center;
    gap: 5px;
`;

import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledHeader = styled.header`
	background-color: ${COLORS.primaryColor};
	width: 100%;
	height: 50px;
	padding-inline: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

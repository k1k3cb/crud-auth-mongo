import styled from 'styled-components';

const StyledBox = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	border: 2px dashed aliceblue;
`;

const StyledInputFile = styled.input`
	display: none;
`;

export { StyledBox, StyledInputFile };

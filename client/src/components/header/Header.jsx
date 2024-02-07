import { useState } from 'react';
import FormCreateUser from '../form-create-user/FormCreateUser';
import Modal from '../modal/Modal';
import { StyledHeader } from './styles';

const Header = () => {
	const [content, setContent] = useState();

	return (
		<StyledHeader>
			<p>User:Current User</p>
			<button onClick={() => setContent(<FormCreateUser />)}>
				{' '}
				Crear usuario desde modal
			</button>{' '}
			<Modal closeModal={() => setContent()}>{content}</Modal>
		</StyledHeader>
	);
};

export default Header;

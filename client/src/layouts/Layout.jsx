import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/side-bar/SideBar';
import { StyledContainer, StyledMainContainer } from './styles';

const Layout = () => {
	return (
		<StyledContainer>
			<SideBar />
			<StyledMainContainer>
				<Header />
				<Outlet />
			</StyledMainContainer>
		</StyledContainer>
	);
};

export default Layout;

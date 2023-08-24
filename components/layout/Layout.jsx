import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children, title, description }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;


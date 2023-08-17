import Meta from '@components/seo/Meta';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			{children}
			<Footer />
		</Meta>
	);
};

export default Layout;


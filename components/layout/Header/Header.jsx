import Nav from '@components/Nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<div className={styles.infoBar}>
				<i></i>
			</div>
			<Nav />
		</header>
	);
};

export default Header;


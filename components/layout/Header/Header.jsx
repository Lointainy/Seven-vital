import Nav from '@components/Nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<ul className={styles.infoBar}>
				<li>
					<i></i>
					Hotline: <span className={styles.bold}>001 385-456-654</span>
				</li>
				<li>Free shipping worldwide for orders over $50</li>
				<li>30 days return period</li>
			</ul>
			<Nav />
		</header>
	);
};

export default Header;


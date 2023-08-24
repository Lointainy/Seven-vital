import SubscribeForm from '@components/Forms/Subscribe/Subscribe';
import Container from '@components/fields/Container/Container';
import { font } from '@utils/font';
import { navLinks, socialLinks } from '@utils/links';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.headline}>
						<div className={styles.logo}>
							<img src="assets/logo-white.svg" alt="seven-vital-logo" height="50" width="auto" />
						</div>
						<ul className={styles.social}>
							{socialLinks.map((social, i) => {
								return (
									<li className={styles.socialItem} key={`${i}${social.name}`}>
										<Link href={social.link}>
											<i className={styles.socialItemIcon}>
												<img src={`assets/icons/${social.name}.svg`} alt={`social-${social.name}`} height="20" width="auto" />
											</i>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.navWrapper}>
						<nav className={styles.nav}>
							<div className={`${styles.navHeadline} ${font.alegreya.className}`}>Information</div>
							<ul className={styles.navLinks}>
								{navLinks.map((link, i) => {
									return (
										<li key={`${i}${link.title}`} className={styles.navLink}>
											<Link href={`/${link.path}`}>{link.title}</Link>
										</li>
									);
								})}
							</ul>
						</nav>
						<SubscribeForm />
					</div>
					<div className={styles.copyright}>
						<span>&copy;</span> Copyright {currentYear} Seven-vital. All rights reserved.
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;


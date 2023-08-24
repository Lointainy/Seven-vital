import Link from 'next/link';
import styles from './Hero.module.scss';

import Container from '@components/fields/Container/Container';
import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const Hero = () => {
	return (
		<section
			className={styles.section}
			style={{
				backgroundImage: `url('')`
			}}
		>
			<Container>
				<div className={styles.content}>
					<div className={`${styles.headline} ${font.className}`}>
						<h1>Seven Vital</h1>
						<h2>Premium CBD Products</h2>
					</div>

					<Link className={`btn-primary ${styles.button}`} href="/shop">
						View popular products
					</Link>
					<ul className={styles.services}>
						<li className={styles.servicesItem}>
							<i className={styles.itemIcon}>
								<img src="/assets/icons/term.svg" alt="term-icon" height="28" width="auto" />
							</i>
							<span>Gentle extraction</span>
						</li>
						<li className={styles.servicesItem}>
							<i className={styles.itemIcon}>
								<img src="/assets/icons/leaf.svg" alt="leaf-icon" height="28" width="auto" />
							</i>
							<span>100% organic farming</span>
						</li>
						<li className={styles.servicesItem}>
							<i className={styles.itemIcon}>
								<img src="/assets/icons/chem.svg" alt="chem-icon" height="28" width="auto" />
							</i>
							<span>Carefully tested</span>
						</li>
						<li className={styles.servicesItem}>
							<i className={styles.itemIcon}>
								<img src="/assets/icons/shield.svg" alt="shield-icon" height="28" width="auto" />
							</i>
							<span>Certified quality</span>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Hero;


import Container from '@components/fields/Container/Container';
import styles from './AboutUs.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const AboutUs = () => {
	const services = [
		{
			title: 'Sustainable organic production'
		},
		{
			title: '100% vegan product'
		},
		{
			title: 'Premium quality CBD products'
		},
		{
			title: 'Free shipping for orders over $50'
		},
		{
			title: '30 days free return period'
		},
		{
			title: '24/7 online customer support'
		}
	];

	return (
		<section
			className={styles.section}
			style={{
				backgroundImage: `url('')`
			}}
		>
			<Container>
				<div className={`${styles.headline} ${font.className}`}>
					<img src="assets/images/leaf.svg" alt="leaf-img" className={styles.headlineImg} width="100" height="45" />
					<h2>What is Seven Vital CBD?</h2>
				</div>
				<div className={styles.contentWrapper}>
					<div className={styles.imgWrapper}>
						<img
							src="assets/images/aboutUs-first.webp"
							alt="aboutus-first-img"
							className={styles.imgFirst}
							width="400"
							height="400"
							aspect-ratio="1 / 1"
						/>
						<img
							src="assets/images/aboutUs-second.webp"
							alt="aboutus-second-img"
							className={styles.imgSecond}
							width="250"
							height="250"
							aspect-ratio="1 / 1"
						/>
					</div>
					<div className={styles.content}>
						<p className={styles.desc}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum amet itaque, consequuntur vitae numquam eligendi, repellat earum
							assumenda sint beatae repudiandae incidunt aperiam voluptatem accusantium, quas omnis quis ex porro?
						</p>
						<ul className={styles.list}>
							{services.map((service, i) => {
								return (
									<li className={styles.item} key={`${i} ${service.title}`}>
										<i className={styles.itemIcon}>
											<img src="/assets/icons/check.svg" alt="check-icon" width="22" height="22" />
										</i>
										<span className={styles.itemTitle}>{service.title}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AboutUs;


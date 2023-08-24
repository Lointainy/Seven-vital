import React from 'react';

import Container from '@components/fields/Container/Container';
import Link from 'next/link';

import styles from './OwnerInfo.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const OwnerInfo = () => {
	const socials = [
		{
			link: 'instagram.com',
			name: 'instagram'
		},
		{
			link: 'twitter.com',
			name: 'twitter'
		},
		{
			link: 'linkedin.com',
			name: 'linkedin'
		},
		{
			link: 'telegram.com',
			name: 'telegram'
		}
	];
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<div className={styles.headline}>
							<h2 className={font.className}>Salma Seven</h2>
							<h3 className={font.className}>Business Owner / Botanic / CBD Lover</h3>
						</div>
						<p className={styles.desc}>
							Vestibulum posuere felis vestibulum pharetra dapibus. Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras
							et diam ac – nunc urna magna, porttitor eu laoreet aliquam, pellentesque eu velit. Suspendisse potenti! Ut elit tellus ipsum
							dolor sit amet, consectetur adipiscing elit.
						</p>
						<ul className={styles.socials}>
							{socials.map((social, i) => {
								return (
									<li className={styles.item} key={`${i}${social.name}`}>
										<Link href={social.link} area-label={`view owner ${social.name} account`}>
											<i className={styles.itemIcon}>
												<img src={`assets/icons/${social.name}.svg`} alt={`social-${social.name}`} height="20" width="20" />
											</i>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.imgWrapper}>
						<img src="" alt="owner Salma Seven" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default OwnerInfo;


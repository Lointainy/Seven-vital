import Container from '@components/fields/Container/Container';
import Link from 'next/link';
import styles from './OurAdvantages.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const OurAdvantages = () => {
	const advantages = [
		{
			imgName: 'chemistry',
			title: '100% Natural Ingredients',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		{
			imgName: 'recycle',
			title: 'Recyclable Materials',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		{
			imgName: 'cheсked',
			title: 'FDA Approved',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		{
			imgName: 'dots',
			title: 'Unique Technology',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		{
			imgName: 'leaf',
			title: 'Organic Production',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		{
			imgName: 'tube',
			title: 'Multiple Level Control',
			desc: 'Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		}
	];
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.contentWrapper}>
					<div className={styles.headline}>
						<img src="assets/images/leaf.svg" alt="leaf-img" className={styles.headlineImg} width="100" height="auto" />
						<h2 className={`${font.className}`}>Why Choose Our CBD Products?</h2>
						<p className={`${styles.desc} ${styles.headlineDesc}`}>
							Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet
							aliquam velit. Suspendisse potenti!
						</p>
					</div>
					<ul className={styles.list}>
						{advantages.map((advantage, i) => {
							return (
								<li className={styles.item} key={`${i} ${advantage.title}`}>
									<i className={styles.itemIcon}>
										<img src={`assets/icons/advantage-${advantage.imgName}.svg`} alt="" />
									</i>
									<h3 className={`${font.className} ${styles.itemTitle}`}>{advantage.title}</h3>
									<p className={styles.desc}>{advantage.desc}</p>
								</li>
							);
						})}
					</ul>
					<Link className={`btn-secondary ${styles.button}`} href="/shop">
						Browse popular products
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default OurAdvantages;


import React from 'react';

import Slider from '@components/Slider/Slider';
import Container from '@components/fields/Container/Container';
import styles from './OurReviews.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const OurReviews = () => {
	const reviews = [
		{
			imgPath: '',
			name: 'Alexa Blackwod',
			desc: 'I am impressed! Cras at ornare ex, quis fringilla tortor quam et tortor euismod, vel maximus metus tristique. Highly recommend!'
		},
		{
			imgPath: '',
			name: 'Miriam J. Anderson',
			desc: 'Pellentesque condimentum velit tortor. Cras at ornare ex, quis fringilla tortor. Ut tempus metus dui, non tristique turpis euismod sed. Nunc fermentum quam et tortor euismod, vel maximus metus tristique.'
		},
		{
			imgPath: '',
			name: 'Boris Brown',
			desc: 'Super fun quam et tortor euismod, vel ligula, sit amet lacinia justo cursus ac. Nulla sed elit faucibus, auctor mauris ac, fermentum velit. Quisque eget odio felis. Thanx!'
		}
	];
	return (
		<section className={styles.section}>
			<Container>
				<Slider
					options={{
						current: 0,
						perRow: {
							mobile: 1,
							tablet: 2,
							desktop: 3
						},
						height: 350
					}}
				>
					{reviews.map((review, i) => {
						return (
							<div className={styles.review} key={`${i}${review.name}`}>
								<img src={review.imgPath} alt={`${review.name}`} className={styles.img} height="150" width="150" />
								<h3 className={font.className}>{review.name}</h3>
								<p className={styles.desc}>{review.desc}</p>
							</div>
						);
					})}
				</Slider>
			</Container>
		</section>
	);
};

export default OurReviews;


import React from 'react';

import Link from 'next/link';

import Container from '@components/fields/Container/Container';
import { Alegreya } from 'next/font/google';
import styles from './QuestionUs.module.scss';

const font = Alegreya({
	subsets: ['latin']
});

const QuestionUs = () => {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<h2 className={`${font.className}`}>Questions? We are here to help!</h2>
					<div className={styles.contentWrapper}>
						<div className={styles.content}>
							<i>
								<img src="assets/icons/headphones.svg" alt="headphones-icon" height="32" width="32" />
							</i>
							<p className={styles.desc}>
								Hotline:
								<span className={styles.descBold}> 001 340-688-233</span>
							</p>
						</div>
						<Link href="/contact" className={`${styles.button} btn-secondary`}>
							<span>Contact us online</span>
							<i alt="arrow-right-icon">
								<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										id="Arrow 5 (Stroke)"
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7.34315 0.929124L13.7071 7.29308C14.0976 7.68361 14.0976 8.31677 13.7071 8.7073L7.34315 15.0713C6.95262 15.4618 6.31946 15.4618 5.92893 15.0713C5.53841 14.6807 5.53841 14.0476 5.92893 13.657L10.5858 9.00019H0V7.00019H10.5858L5.92893 2.34334C5.53841 1.95281 5.53841 1.31965 5.92893 0.929124C6.31946 0.538599 6.95262 0.538599 7.34315 0.929124Z"
										fill="white"
									/>
								</svg>
							</i>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default QuestionUs;


import React from 'react';

import styles from './Faq.module.scss';

import { Accordion, AccordionSlide } from '@components/Accordion/Accordion';
import Container from '@components/fields/Container/Container';
import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const Faq = () => {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.headline}>
						<img src="assets/images/leaf.svg" alt="leaf-img" className={styles.headlineImg} />
						<h2 className={`${font.className}`}>Frequent Questions About CBD</h2>
					</div>
					<Accordion>
						<AccordionSlide title="Slide 1">Content of slide 1</AccordionSlide>
						<AccordionSlide title="Slide 2">Content of slide 2</AccordionSlide>
						<AccordionSlide title="Slide 2">Content of slide 2</AccordionSlide>
					</Accordion>
				</div>
			</Container>
		</section>
	);
};

export default Faq;


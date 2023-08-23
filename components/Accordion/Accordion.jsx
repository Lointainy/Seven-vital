'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const Accordion = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleSlide = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className={styles.accordion}>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					isActive: activeIndex === index,
					toggleSlide: () => toggleSlide(index)
				})
			)}
		</div>
	);
};

const AccordionSlide = ({ isActive, toggleSlide, title, children }) => {
	return (
		<div className={`${styles.slide} ${isActive ? styles.activeSlide : ''}`}>
			<div className={styles.slideHeader} onClick={toggleSlide}>
				<span className={`${styles.slideTitle}  ${font.className}`}>{title}</span>
				<i>{isActive ? <img src="assets/icons/chevron-up.svg" /> : <img src="assets/icons/chevron-down.svg" />}</i>
			</div>
			{isActive && <p className={styles.slideDesc}>{children}</p>}
		</div>
	);
};

export { Accordion, AccordionSlide };


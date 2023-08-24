'use client';
import React, { useEffect, useRef, useState } from 'react';

import styles from './Slider.module.scss';

const Slider = ({ children, options }) => {
	const [current, setCurrent] = useState(options.current || 0);
	const [perRow, setPerRow] = useState(options.perRow.desktop || 3);

	const slideCount = React.Children.count(children);
	const pageCount = (row) => Math.ceil(slideCount / perRow);

	const containerRef = useRef(null);
	const [containerWidth, setContainerWidth] = useState(0);

	const PosX = { start: 0, end: 0 };

	const updateContainerWidth = () => {
		if (containerRef.current) {
			const windowWidth = containerRef.current.clientWidth;

			if (windowWidth < 576) {
				setPerRow(options.perRow.mobile);
			} else if (windowWidth < 992) {
				setPerRow(options.perRow.tablet);
			} else {
				setPerRow(options.perRow.desktop);
			}

			setContainerWidth(windowWidth);
		}
	};

	useEffect(() => {
		updateContainerWidth();
		window.addEventListener('resize', updateContainerWidth);
		return () => {
			window.removeEventListener('resize', updateContainerWidth);
		};
	}, []);

	const moveSlides = (direction) => {
		let page = pageCount(perRow);

		if (current + direction < 0) {
			page - 1 == 0 ? setCurrent(0) : setCurrent(page - 1);
		} else if (current + direction > page - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + direction);
		}
	};

	useEffect(() => {
		const translateValue = containerRef.current.clientWidth * -current;

		containerRef.current.style.transform = `translateX(${translateValue}px)`;
		containerRef.current.style.transition = 'transform 0.3s ease-in-out';
	}, [current]);

	const handleTouchStart = (e) => {
		PosX.start = e.changedTouches[0].clientX;
	};

	const handleTouchMove = (e) => {
		PosX.end = e.changedTouches[0].clientX;
	};

	const handleTouchEnd = () => {
		const diffX = PosX.start - PosX.end;
		if (diffX > 50) {
			moveSlides(1);
		} else if (diffX < -50) {
			moveSlides(-1);
		}
	};

	let perRowStyle = {
		flex: `0 0 calc(100% / ${perRow} - 32px)`
	};

	let sliderHeight = {
		height: `${options.height}px`
	};

	return (
		<div className={styles.slider}>
			<button className={styles.button} onClick={() => moveSlides(-1)}>
				<img src="assets/icons/chevron-left.svg" alt="slide-left-icon" height="22" width="22" />
			</button>
			<div className={styles.wrapper} style={sliderHeight}>
				<div
					className={styles.slides}
					ref={containerRef}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{React.Children.map(children, (child, index) => (
						<div className={styles.slide} style={perRowStyle}>
							{child}
						</div>
					))}
				</div>
			</div>
			<button className={styles.button} onClick={() => moveSlides(1)}>
				<img src="assets/icons/chevron-right.svg" alt="slide-right-icon" height="22" width="22" />
			</button>
		</div>
	);
};

export default Slider;


'use client';
import { useState } from 'react';
import styles from './Subscribe.module.scss';

import { font } from '@utils/font';

const SubscribeForm = () => {
	const [email, setEmail] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
			<h3 className={`${font.alegreya.className} ${styles.headline}`}>Get our newslater</h3>
			<label htmlFor="email" className={styles.inputField}>
				<span>Email:</span>
				<input type="email" id="email" name="email" className={styles.input} />
			</label>
			<button type="submit" className={`btn-primary ${styles.button}`}>
				Sign up!
			</button>
			<p className={styles.desc}>Enjoy all the latest stories, tips, news & useful advice!</p>
		</form>
	);
};

export default SubscribeForm;


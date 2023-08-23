import styles from './Subscribe.module.scss';

const SubscribeForm = () => {
	return (
		<form className={styles.form}>
			<input type="text" />
			<button type="submit" className={`btn-primary`}>
				Sign up!
			</button>
			<p>Enjoy all the latest stories, tips, news & useful advice!</p>
		</form>
	);
};

export default SubscribeForm;


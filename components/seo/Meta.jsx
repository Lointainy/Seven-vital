import Head from 'next/head';

const getTitle = (title) => {
	`${title} | Seven Vital`;
};

const Meta = ({ title, description, keywords, children }) => {
	const webPath = 'https://seven-vital.vercel.app';
	return (
		<>
			<Head>
				<title>{title}</title>
				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />
					</>
				) : (
					<>
						<meta name="robots" content="noindex, nofollow" />
					</>
				)}
				<meta property="og:image" content="assets/logo.svg" />
				<meta name="keywords" content={keywords} />
				<meta property="og:url" content={`${webPath}/shop`} />
			</Head>
			{children}
		</>
	);
};

export default Meta;


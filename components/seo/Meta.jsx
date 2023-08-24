import Head from 'next/head';

const getTitle = (title) => {
	`${title} | Seven Vital`;
};

const Meta = ({ title, description, keywords, children }) => {
	const webPath = 'https://seven-vital.vercel.app';
	const currentYear = new Date().getFullYear();

	return (
		<>
			<Head>
				<title>{title}</title>
				{description ? (
					<>
						{/* Base */}
						<meta name="description" content={description} />
						<meta name="keywords" content={keywords} />
						<meta name="author" content="Seven Vital Shop" />
						<link rel="canonical" href={`${webPath}`}></link>

						{/* OpenGraph */}
						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />
						<meta property="og:image" content="assets/logo.svg" />
						<meta property="og:url" content={`${webPath}/shop`} />
						<meta property="og:type" content="cosmetics" />

						{/* robots */}
						<meta name="googlebot" content="index, follow" />
						<meta name="robots" content="index, follow" />

						{/* view */}
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />

						{/* lang */}
						<meta name="language" content="en" />

						{/* copy */}
						<meta name="copyright" content={`Copyright © ${currentYear} by Seven-vital. All rights reserved.`} />

						{/* social */}

						<meta name="twitter:card" content="seven-vital card" />
						<meta name="twitter:site" content="@seven-vital" />
						<meta name="twitter:title" content="cosmetics seven vital" />
						<meta name="twitter:description" content={`${description}`} />
						<meta name="twitter:image" content="assets/logo.svg" />
					</>
				) : (
					<>
						<meta name="robots" content="noindex, nofollow" />
						<meta name="googlebot" content="noindex, nofollow"></meta>
					</>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;


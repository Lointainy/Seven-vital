import Layout from '@components/layout/Layout';
import HomePage from '@pages/HomePage/HomePage';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preload" href={'assets/images/hero-background.webp'} as="image" />
			</Head>
			<HomePage />
		</>
	);
}


import Layout from '@components/layout/Layout';
import Hero from '@components/sections/Hero/Hero';
import React from 'react';

const HomePage = () => {
	return (
		<Layout title={'Home'} description={''}>
			<Hero />
		</Layout>
	);
};

export default HomePage;


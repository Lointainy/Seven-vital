import Layout from '@components/layout/Layout';
import AboutUs from '@components/sections/AboutUs/AboutUs';
import Hero from '@components/sections/Hero/Hero';
import OurAdvantages from '@components/sections/OurAdvantages/OurAdvantages';
import React from 'react';

const HomePage = () => {
	return (
		<Layout title={'Home'} description={''}>
			<main>
				<Hero />
				<AboutUs />
				<OurAdvantages />
			</main>
		</Layout>
	);
};

export default HomePage;


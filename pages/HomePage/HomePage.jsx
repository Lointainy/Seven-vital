import Layout from '@components/layout/Layout';
import AboutUs from '@components/sections/AboutUs/AboutUs';
import Hero from '@components/sections/Hero/Hero';
import OurAdvantages from '@components/sections/OurAdvantages/OurAdvantages';
import OurReviews from '@components/sections/OurReviews/OurReviews';
import OwnerInfo from '@components/sections/OwnerInfo/OwnerInfo';
import Products from '@components/sections/Products/Products';
import React from 'react';

const HomePage = () => {
	return (
		<Layout title={'Home'} description={''}>
			<main>
				<Hero />
				<AboutUs />
				<OurAdvantages />
				<OurReviews />
				<Products />
				<OwnerInfo />
			</main>
		</Layout>
	);
};

export default HomePage;


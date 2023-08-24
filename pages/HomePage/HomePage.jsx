import Layout from '@components/layout/Layout';
import AboutUs from '@components/sections/AboutUs/AboutUs';
import Faq from '@components/sections/Faq/Faq';
import Hero from '@components/sections/Hero/Hero';
import OurAdvantages from '@components/sections/OurAdvantages/OurAdvantages';
import OurReviews from '@components/sections/OurReviews/OurReviews';
import OwnerInfo from '@components/sections/OwnerInfo/OwnerInfo';
import Products from '@components/sections/Products/Products';
import QuestionUs from '@components/sections/QuestionUs/QuestionUs';
import React from 'react';

const HomePage = () => {
	return (
		<Layout
			title={'Home'}
			description={
				'Discover radiant beauty with our premium facial care products. Elevate your skincare routine with our exquisite range of cosmetics for facial rejuvenation. Shop now for healthier, glowing skin!'
			}
			keywords={'facial care cosmetics, skincare products, facial rejuvenation, healthy skin, beauty products'}
		>
			<main>
				<Hero />
				<AboutUs />
				<OurAdvantages />
				<OurReviews />
				<Products />
				<OwnerInfo />
				<Faq />
				<QuestionUs />
			</main>
		</Layout>
	);
};

export default HomePage;


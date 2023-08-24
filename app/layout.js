import '@styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

import '@styles/main.scss';

const webPath = 'https://seven-vital.vercel.app';
const currentYear = new Date().getFullYear();

export const metadata = {
	title: {
		default: 'Seven Vital',
		template: `%s | Seven vital`
	},
	description:
		'Discover radiant beauty with our premium facial care products. Elevate your skincare routine with our exquisite range of cosmetics for facial rejuvenation. Shop now for healthier, glowing skin!',
	keywords: ['facial care cosmetics', 'skincare products', 'facial rejuvenation', 'healthy skin', 'beauty products'],
	authors: [{ name: 'Eugene' }],
	creator: 'Eugene',
	publisher: 'Eugene',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	metadataBase: new URL(`${webPath}`),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	openGraph: {
		title: 'Seven vital',
		description:
			'Discover radiant beauty with our premium facial care products. Elevate your skincare routine with our exquisite range of cosmetics for facial rejuvenation. Shop now for healthier, glowing skin!',
		url: `${webPath}`,
		siteName: 'Seven vital',
		images: 'assets/logo.svg',
		locale: 'en_US',
		type: 'website'
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true
		}
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5
	},
	verification: {
		google: 'google',
		yahoo: 'yahoo'
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}


import '@styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

import '@styles/main.scss';

export const metadata = {
	title: 'Seven Vital',
	description: ''
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}


'use client';
import Link from 'next/link';

import DropdownField from '@components/fields/Dropdown/Dropdown';
import { useToggle } from '@hooks/useToggle';
import styles from './Nav.module.scss';

import { navLinks } from '@utils/links';

const Nav = () => {
	const { toggle: dropdown, handleToggle, setToggle } = useToggle(false);

	return (
		<nav className={styles.nav}>
			<ul className={styles.links}>
				{navLinks.map((link, i) => {
					return (
						<li key={`${i}${link.title}`} className={styles.link}>
							<Link href={`/${link.path}`} area-label={`open ${link.title} page`}>
								{link.title}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className={styles.mobile}>
				<div className={styles.bars} onClick={handleToggle}>
					<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
						<path
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
							fill="#6C7863"
						/>
					</svg>
				</div>
				{dropdown && (
					<DropdownField position={'left'}>
						<ul className={styles.dropdownLinks}>
							{navLinks.map((link, i) => {
								return (
									<li key={`${i}${link.title}`} className={styles.dropdownLink}>
										<Link href={`/${link.path}`} area-label={`open ${link.title} page`}>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</DropdownField>
				)}
			</div>
			<div className={styles.logo}>
				<img src="/assets/logo.svg" alt="seven-vital-logo" height="50" width="220" />
			</div>
			<ul className={styles.buttons}>
				<li>
					<Link href={'/cart'} aria-label="open cart page">
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
								<path
									d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
									fill="#6C7863"
								/>
							</svg>
						</i>
					</Link>
				</li>
				<li>
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
							<path
								d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
								fill="#6C7863"
							/>
						</svg>
					</i>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;


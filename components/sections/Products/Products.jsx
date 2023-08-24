import Container from '@components/fields/Container/Container';
import Link from 'next/link';
import styles from './Products.module.scss';

import { Alegreya } from 'next/font/google';

const font = Alegreya({
	subsets: ['latin']
});

const Products = () => {
	const products = [
		{
			imgPath: '',
			title: 'CBD Products Full Set',
			slug: 'CBD-pfs',
			sale: false,
			price: {
				current: 260,
				sale: 149.9
			}
		},
		{
			imgPath: '',
			title: 'CBD Products Starter Set',
			slug: 'CBD-pss',
			sale: true,
			price: {
				current: 200,
				sale: 149.9
			}
		},
		{
			imgPath: '',
			title: 'CBD Pain Relief Set',
			slug: 'CBD-prs',
			sale: true,
			price: {
				current: 90,
				sale: 149.9
			}
		},
		{
			imgPath: '',
			title: 'CBD Acne Treatment Cream',
			slug: 'CBD-atc',
			sale: false,
			price: {
				current: 40,
				sale: 149.9
			}
		}
	];
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.contentWrapper}>
					<div className={styles.headline}>
						<img src="assets/images/leaf.svg" alt="leaf-img" className={styles.headlineImg} width="100" height="45" />
						<h2 className={`${font.className}`}>Most Popular CBD Products</h2>
						<p className={`${styles.desc} ${styles.headlineDesc}`}>
							Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet
							aliquam velit. Suspendisse potenti!
						</p>
					</div>
					<ul className={styles.list}>
						{products.map((product, i) => {
							return (
								<li className={styles.card} key={`${i}${product.title}`}>
									<div className={styles.imgWrapper}>
										<img src={product.img} alt={product.title} className={styles.img} width="280" height="380" />
										{product.sale && <span>sale</span>}
									</div>
									<div className={styles.cardTitle}>{product.title}</div>
									<div className={styles.price}>
										<span>${product.price.current}</span>
										{product.sale && <span className={styles.priceSale}>{product.price.sale}</span>}
									</div>
									<Link href={`/products/${product.slug}`} className={`btn-primary ${styles.button}`} area-label={`add to cart`}>
										<i className={styles.buttonIcon}>
											<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
												<path
													d="M1.08333 4.66667H3.52083V2.85185C3.52083 2.09549 3.83471 1.37011 4.39341 0.835288C4.95211 0.300462 5.70988 0 6.5 0C7.29012 0 8.04789 0.300462 8.60659 0.835288C9.16529 1.37011 9.47917 2.09549 9.47917 2.85185V4.66667H11.9167C12.204 4.66667 12.4795 4.77593 12.6827 4.97041C12.8859 5.16489 13 5.42866 13 5.7037V12.963C13 13.238 12.8859 13.5018 12.6827 13.6963C12.4795 13.8907 12.204 14 11.9167 14H1.08333C0.796015 14 0.520465 13.8907 0.317301 13.6963C0.114137 13.5018 0 13.238 0 12.963V5.7037C0 5.42866 0.114137 5.16489 0.317301 4.97041C0.520465 4.77593 0.796015 4.66667 1.08333 4.66667ZM8.39583 2.85185C8.39583 2.37053 8.19609 1.90893 7.84056 1.56858C7.48502 1.22824 7.00281 1.03704 6.5 1.03704C5.99719 1.03704 5.51498 1.22824 5.15944 1.56858C4.8039 1.90893 4.60417 2.37053 4.60417 2.85185V4.66667H8.39583V2.85185ZM1.08333 12.963H11.9167V5.7037H1.08333V12.963Z"
													fill="white"
												/>
											</svg>
										</i>
										Add to cart
									</Link>
								</li>
							);
						})}
					</ul>
					<Link className={`btn-secondary ${styles.button}`} href="/shop" area-label="show all our products">
						View all products
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Products;


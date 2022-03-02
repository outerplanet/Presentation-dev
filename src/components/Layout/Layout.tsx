import { Header } from 'components';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className={styles.main}>
				{children}
			</main>
		</>
	);
}

import { ReactNode } from 'react';
import styles from './PageWidth.module.scss';

interface PageWidthProps {
	children: ReactNode;
}

export default function PageWidth({ children }: PageWidthProps) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}

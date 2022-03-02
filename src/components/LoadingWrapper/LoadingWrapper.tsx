import clsx from 'clsx';
import { Loading } from 'components';
import { ReactNode } from 'react';
import styles from './LoadingWrapper.module.scss';

interface LoadingWrapperProps {
	children: ReactNode;
	className?: string;
	loading: boolean;
	overlay?: boolean;
}

export default function LoadingWrapper({ children, className, loading, overlay }: LoadingWrapperProps) {
	return (
		<div className={clsx(styles.container, className)}>
			{children}
			{loading && (
				<div className={clsx(styles.animationContainer, overlay && styles.animationContainer_overlay)}>
					<Loading className={styles.loading} />
				</div>
			)}
		</div>
	);
}

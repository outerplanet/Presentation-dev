import clsx from 'clsx';
import styles from './Loading.module.scss';

export default function Loading({ className }: { className?: string; }) {
	return (
		<div className={clsx(styles.container, className)}>
			<div />
			<div />
			<div />
		</div>
	);
}

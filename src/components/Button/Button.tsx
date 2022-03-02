import clsx from 'clsx';
import { Loading } from 'components';
import { IconType } from 'react-icons';
import styles from './Button.module.scss';

interface ButtonProps {
	background?: boolean;
	children?: string;
	className?: string;
	icon?: IconType;
	loading?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit';
}

export default function Button({ background, children, className, icon, loading, onClick, type }: ButtonProps) {
	const Icon = icon;

	return (
		<button
			className={clsx(
				styles.button,
				background && styles.button_background,
				loading && styles.button_loading,
				className
			)}
			onClick={onClick}
			type={type || 'button'}
		>
			{children && <p className={styles.text}>{children}</p>}
			{loading && <Loading className={styles.loading} />}
			{Icon && <Icon />}
		</button>
	);
}

import { PageWidth } from 'components';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<PageWidth>
				<div className={styles.wrapper}>
					<Link className={styles.logo} to="/">Presentation</Link>
				</div>
			</PageWidth>
		</header>
	);
}

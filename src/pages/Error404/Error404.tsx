import { Section } from 'components';
import styles from './Error404.module.scss';

export default function Error404() {
	return (
		<Section title="404 Not Found">
			<div className={styles.wrapper}>
				<h1 className={styles.number}>404</h1>
				<p className={styles.text}>Not Found</p>
				<p className={styles.description}>The requested page was not found on our server.</p>
			</div>
		</Section>
	);
}

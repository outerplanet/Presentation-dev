import { Button } from 'components';
import { FaRegTrashAlt, FaRegUserCircle } from 'react-icons/fa';
import { Post as PostModel } from 'shared/types';
import { formatTime } from 'shared/util';
import { useDeletePostMutation } from 'store';
import styles from './Post.module.scss';

export default function Post({ content, id, time }: PostModel) {
	const [removePost] = useDeletePostMutation();

	return (
		<article className={styles.container}>
			<div className={styles.info}>
				<FaRegUserCircle className={styles.info_avatar} />
				<p className={styles.info_time}>{formatTime(time)}</p>
				<Button className={styles.info_delete} icon={FaRegTrashAlt} onClick={() => removePost(id)} />
			</div>
			<p className={styles.content}>{content}</p>
		</article>
	);
}

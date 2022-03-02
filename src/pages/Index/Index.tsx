import { LoadingWrapper, Post, PostForm, Section } from 'components';
import { useForm } from 'react-hook-form';
import { useCreatePostMutation, useGetPostsQuery } from 'store';
import styles from './Index.module.scss';

export default function Index() {
	const form = useForm<{ content: string; }>();

	const { data, isFetching } = useGetPostsQuery();
	const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

	const handleCreate = async (content: string) => {
		await createPost(content).unwrap();
		form.reset();
	};

	return (
		<Section title="Posts">
			<PostForm formProps={form} loading={isCreating} onSubmit={handleCreate} />
			<LoadingWrapper
				className={styles.loadingWrapper}
				loading={isFetching}
				overlay={!!data?.length}
			>
				{data?.map(v => <Post {...v} key={v.id} />)}
			</LoadingWrapper>
		</Section>
	);
}

import { Button } from 'components';
import { KeyboardEvent, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './PostForm.module.scss';

interface PostFormProps {
	formProps: UseFormReturn<{ content: string; }>;
	loading?: boolean;
	onSubmit: (content: string) => void;
}

export default function PostForm({ formProps, loading, onSubmit }: PostFormProps) {
	const { formState: { errors }, handleSubmit, register, setValue, watch } = formProps;
	const [valueLength, setValueLength] = useState(0);

	useEffect(() => watch(values => {
		setValueLength(values.content?.length || 0);
	}).unsubscribe, [watch]);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			setValue('content', (e.target as HTMLTextAreaElement).value);
			handleSubmit(handleFormSubmit)();
		}
	};

	const handleFormSubmit = ({ content }: { content: string; }) => {
		content = content.trim();

		if (!content || loading) return;

		onSubmit(content);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
			<textarea
				{...register('content', {
					maxLength: {
						message: 'This field cannot contain more than 5000 characters',
						value: 5000
					}
				})}
				className={styles.input}
				onKeyPress={handleKeyPress}
				placeholder="Your message..."
			/>
			{errors.content && (
				<p className={styles.error}>{errors.content.message}</p>)}
			<div className={styles.footer}>
				<p className={styles.count}>{valueLength + ' / 5000'}</p>
				<Button background className={styles.button} loading={loading} type="submit">
					Submit
				</Button>
			</div>
		</form>
	);
}

import { PageWidth } from 'components';
import { ReactNode, useEffect } from 'react';

interface SectionProps {
	children: ReactNode;
	title: string;
}

export default function Section({ children, title }: SectionProps) {
	useEffect(() => {
		document.title = title + ' | Presentation';
	}, [title]);

	return (
		<section>
			<PageWidth>
				{children}
			</PageWidth>
		</section>
	);
}

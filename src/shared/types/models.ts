import { IsoDateString } from '.';

export interface Post {
	content: string;
	id: number;
	time: IsoDateString;
}

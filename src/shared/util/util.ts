import { IsoDateString } from 'shared/types';

export const formatTime = (time: IsoDateString) => new Date(time).toLocaleString();

export const mockRequest = <T>(data?: T) => new Promise<{ data: T; }>(res => {
	const delay = Math.random() * 400 + 100;
	setTimeout(() => res({ data: data as T }), delay);
});

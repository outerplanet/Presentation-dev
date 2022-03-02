import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
	baseQuery: fetchBaseQuery({}),
	endpoints: () => ({}),
	reducerPath: 'api',
	tagTypes: ['Post']
});

export default api;

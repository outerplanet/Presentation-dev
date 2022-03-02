import posts from 'mocks/posts.json';
import { Post } from 'shared/types';
import { mockRequest } from 'shared/util';
import api from '../api';

const postApi = api.injectEndpoints({
	endpoints: build => ({
		createPost: build.mutation({
			invalidatesTags: ['Post'],
			queryFn: (content: string) => {
				const newPost: Post = {
					content,
					id: Date.now(),
					time: new Date().toISOString()
				};

				posts.push(newPost);

				return mockRequest();
			}
		}),
		deletePost: build.mutation({
			invalidatesTags: ['Post'],
			queryFn: (id: number) => {
				const post = posts.find(v => v.id === id);

				if (!post) {
					throw new Error('The post wat not found');
				}

				posts.splice(posts.indexOf(post), 1);

				return mockRequest();
			}
		}),
		getPosts: build.query<Post[], void>({
			providesTags: ['Post'],
			queryFn: () => mockRequest(
				[...posts].sort((a, b) => b.id - a.id)
			)
		})
	})
});

export const { useCreatePostMutation, useDeletePostMutation, useGetPostsQuery } = postApi;

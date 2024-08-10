import React from 'react';
import { fetchPostData, Post } from './api/fetchPost';
import { useSuspenseCache } from './hooks/useSuspenseCache';

const Async = () => {
	const data: Post = useSuspenseCache(['post'], fetchPostData);
	return <p>{data.title}</p>;
};

export default Async;

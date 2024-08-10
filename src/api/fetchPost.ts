export type Post = {
	userId: number;
	title: string;
	id: number;
	body: string;
};

export const fetchPostData = async (): Promise<Post> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	if (!response.ok) {
		throw new Error('Network Error!');
	}
	return await response.json();
};

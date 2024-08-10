export const fetchData = (): Promise<string> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('data fetching completed');
		}, 2000);
	});

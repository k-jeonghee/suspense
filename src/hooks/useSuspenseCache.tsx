const cache = new Map();

export const useSuspenseCache = (key: Array<string>, fn: () => Promise<unknown>) => {
	const keyString = JSON.stringify(key);

	const cachedValue = cache.get(keyString);

	if (cachedValue !== undefined) {
		if (cachedValue instanceof Error) {
			throw cachedValue;
		}
		return cachedValue;
	}

	throw fn().then(
		(data) => {
			cache.set(keyString, data);
		},
		(error) => {
			cache.set(keyString, error);
			throw error;
		}
	);
};

import { PropsWithChildren, useEffect, useState } from 'react';

type Props = {
	fallback: JSX.Element;
} & PropsWithChildren;

const Suspense = ({ fallback, children }: Props) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			setLoading(false);
		} catch (promise) {
			if (promise instanceof Promise) {
				promise.then(() => setLoading(false));
			}
		}
	}, [children]);

	if (loading) {
		return fallback;
	}

	return children;
};

export default Suspense;

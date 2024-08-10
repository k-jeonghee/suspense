import React from 'react';
import { fetchData } from './api/fetchData';
import wrapPromise from './api/wrapPromise';

const resource = wrapPromise(fetchData());

const Async = () => {
	const data = resource.read();
	return <p>{data}</p>;
};

export default Async;

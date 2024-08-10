import React from 'react';
import Async from './Async';
import Suspense from './Suspense';

const App = () => (
	<Suspense fallback={<h3>로딩중...</h3>}>
		<Async />
	</Suspense>
);

export default App;

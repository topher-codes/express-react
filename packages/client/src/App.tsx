import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.scss';
import { trpc } from './trpc';

const client = new QueryClient();

const AppContent = () => {
	const hello = trpc.useQuery(['hello']);
	return (
		<div className="mt-10 text-3xl mx-auto max-w-6xl">
			<div>{JSON.stringify(hello.data)}</div>
		</div>
	);
};

const App = () => {
	const [trpcClient] = useState(() =>
		trpc.createClient({
			url: 'http://localhost:8080/trpc',
		})
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={client}>
			<QueryClientProvider client={client}>
				<AppContent />
			</QueryClientProvider>
		</trpc.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));

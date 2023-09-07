import {
	RouterProvider,
	RouterProviderProps,
	createBrowserRouter,
} from 'react-router-dom';

import { ROUTES } from 'navigators';
import React from 'react';
import ReactDOM from 'react-dom/client';

const BrowserRouterProvider: React.FC<RouterProviderProps> = (props) => (
	<RouterProvider {...props} />
);

const router = createBrowserRouter(ROUTES);
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouterProvider router={router} />
	</React.StrictMode>
);

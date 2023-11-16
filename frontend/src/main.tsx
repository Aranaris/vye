import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './components/RouteSwitch.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouteSwitch />
	</React.StrictMode>,
);

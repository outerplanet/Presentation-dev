/* eslint-disable react/jsx-no-constructed-context-values */
import { Layout } from 'components';
import Error404 from 'pages/Error404/Error404';
import Index from 'pages/Index/Index';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { store } from 'store';
import './styles/style.scss';

export default function App() {
	return (
		<Provider store={store}>
			<IconContext.Provider value={{ style: { flexShrink: 0 } }}>
				<HashRouter>
					<Layout>
						<Routes>
							<Route element={<Error404 />} path="*" />
							<Route element={<Index />} index />
						</Routes>
					</Layout>
				</HashRouter>
			</IconContext.Provider>
		</Provider>
	);
}

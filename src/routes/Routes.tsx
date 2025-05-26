import Main from '@/layout/Main';
import IndividualProduct from '@/pages/IndividualProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
    return (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />}>
				<Route index element={ <IndividualProduct />} />
			</Route>
		</Routes>
	</BrowserRouter>
    );
}
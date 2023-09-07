import { AppLayout } from 'components/layouts';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<AppLayout>
			<Outlet />
		</AppLayout>
	);
}

export default App;

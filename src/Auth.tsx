import { Outlet } from 'react-router-dom';
function Auth() {
	return (
		<div>
			Hello auth
			<Outlet />
		</div>
	);
}

export default Auth;

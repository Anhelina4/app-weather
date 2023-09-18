import { Dashboard, Login, Profile, SignUp } from 'pages'

import { APP_PATHS } from 'navigators'
import App from '../App'
import Auth from '../Auth'

const { DASHBOARD, PROFILE } = APP_PATHS.app
const { LOGIN, SIGN_UP } = APP_PATHS.auth

export const ROUTES = [
  {
    key: '/auth/*',
    path: '/auth/*',
    element: <Auth />,
    children: [
      { key: LOGIN, path: LOGIN, element: <Login /> },
      { key: SIGN_UP, path: SIGN_UP, element: <SignUp /> }
    ]
  },
  {
    key: '/',
    path: '/*',
    element: <App />,
    children: [
      { key: DASHBOARD, path: DASHBOARD, element: <Dashboard /> },
      { key: PROFILE, path: PROFILE, element: <Profile /> }
    ]
  }
]

export default ROUTES

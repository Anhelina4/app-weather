import { Outlet, redirect } from 'react-router-dom'

import { APP_PATHS } from 'navigators'
import { AppLayout } from 'components/layouts'

function App() {
  redirect(`${APP_PATHS.app.DASHBOARD}/`)
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default App

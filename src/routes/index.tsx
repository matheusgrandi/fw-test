import { useRoutes } from 'react-router-dom'
import ROUTE_PATHS from './paths'
import BaseTemplate from 'src/components/templates/BaseTemplate'
import SignUpPage from 'src/pages/SignUpPage'
import PrivateRoute from './PrivateRoute'
import HomePage from 'src/pages/HomePage'
import OnboardPage from 'src/pages/OnboardingPage'

const Router = (): React.ReactElement | null => {
  return useRoutes([
    {
      path: '*',
      element: (
        <>
          <p>404 - Page don't exist</p>
        </>
      ),
    },
    {
      path: ROUTE_PATHS.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTE_PATHS.ONBOARDING,
      element: (
        <PrivateRoute>
          <BaseTemplate hasHeader />
        </PrivateRoute>
      ),
      children: [
        {
          path: '',
          element: <OnboardPage />,
        },
      ],
    },
    {
      path: ROUTE_PATHS.SIGNIN,
      element: (
        <>
          <p>SIGNIN</p>
        </>
      ),
    },
    {
      path: ROUTE_PATHS.SIGNUP,
      element: <BaseTemplate />,
      children: [
        {
          path: '',
          element: <SignUpPage />,
        },
      ],
    },
  ])
}

export default Router

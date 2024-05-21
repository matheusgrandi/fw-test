import { useRoutes } from 'react-router-dom'
import ROUTE_PATHS from './paths'
import BaseTemplate from '../components/templates/BaseTemplate'
import SignUpPage from '../pages/SignUpPage'

const Router = (): React.ReactElement | null => {
  return useRoutes([
    {
      path: '*',
      element: (
        <>
          <p>ESSA MONGONGA NAO EXISTE</p>{' '}
        </>
      ),
    },
    {
      path: ROUTE_PATHS.HOME,
      element: (
        <>
          <p>HOME</p>
        </>
      ),
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

import { useRoutes } from 'react-router-dom'
import ROUTE_PATHS from './paths'
import SignUp from '../pages/SignUp'
import BaseTemplate from '../components/templates/BaseTemplate'

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
          element: <SignUp />,
        },
      ],
    },
  ])
}

export default Router

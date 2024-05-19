import { useRoutes } from 'react-router-dom'
import ROUTE_PATHS from './paths'

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
      element: (
        <>
          <p>SIGNUP</p>
        </>
      ),
    },
  ])
}

export default Router

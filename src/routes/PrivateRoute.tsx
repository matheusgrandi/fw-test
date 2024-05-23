import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import ROUTE_PATHS from './paths'
import { getCurrentUser } from 'aws-amplify/auth'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  getCurrentUser().then((user) => {
    if (!user) {
      return <Navigate to={ROUTE_PATHS.SIGNIN} />
    }
  })

  return <>{children}</>
}

export default PrivateRoute

import { useUser } from '../hooks/useUser'
import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import ROUTE_PATHS from './paths'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  const { user } = useUser()

  if (!user) return <Navigate to={ROUTE_PATHS.SIGNUP} replace />

  return <>{children}</>
}

export default PrivateRoute

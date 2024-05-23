import React from 'react'
import { useUser } from 'src/hooks/useUser'

const HomePage: React.FC = () => {
  const { user } = useUser()

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>

      {user && user.organizationId}
    </div>
  )
}

export default HomePage

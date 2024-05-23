import React, { useEffect } from 'react'
import { useUser } from 'src/hooks/useUser'

const HomePage: React.FC = () => {
  const { user, signIn } = useUser()

  useEffect(() => {
    signIn('matheus+fw-test5@matheusgrandi.com.br', 'Test1234!')
  }, [])

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>

      {user && user.organizationId}
    </div>
  )
}

export default HomePage

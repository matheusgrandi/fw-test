import { useContext } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'

export const useUser = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

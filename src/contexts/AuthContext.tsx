import { ReactNode, createContext, useEffect, useState } from 'react'
import {
  GetCurrentUserOutput,
  getCurrentUser,
  signIn,
  signOut,
} from 'aws-amplify/auth'

interface AuthContextProps {
  user: GetCurrentUserOutput | undefined
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GetCurrentUserOutput | undefined>(undefined)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser()
        setUser(user)
      } catch {
        setUser(undefined)
      }
    }

    checkUser()
  }, [])

  const signInUser = async (username: string, password: string) => {
    await signIn({
      username,
      password,
      options: {
        authFlowType: 'USER_PASSWORD_AUTH',
      },
    })
  }

  const signOutUser = async () => {
    await signOut()
    setUser(undefined)
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn: signInUser, signOut: signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

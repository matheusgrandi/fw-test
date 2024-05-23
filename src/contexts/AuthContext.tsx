import { ReactNode, createContext, useEffect, useReducer } from 'react'
import {
  fetchAuthSession,
  getCurrentUser,
  signIn,
  signOut,
} from 'aws-amplify/auth'
import { userReducer } from './reducers/user.reducer'

interface AuthContextProps {
  user: any
  idToken: string | null
  accessToken: string | null
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    idToken: null,
    accessToken: null,
  })

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser()
        const session = await fetchAuthSession()
        console.log('eita', session.tokens?.idToken?.toString())
        dispatch({
          type: 'SET_USER',
          payload: user,
          tokens: {
            idToken: session.tokens?.idToken?.toString() || '',
            accessToken: session.tokens?.accessToken.toString() || '',
          },
        })
      } catch {
        dispatch({ type: 'SIGN_OUT' })
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
    const user = await getCurrentUser()
    const session = await fetchAuthSession()
    dispatch({
      type: 'SIGN_IN',
      payload: user,
      tokens: {
        idToken: session.tokens?.idToken?.toString() || '',
        accessToken: session.tokens?.accessToken?.toString() || '',
      },
    })
  }

  const signOutUser = async () => {
    await signOut()
    dispatch({ type: 'SIGN_OUT' })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        idToken: state.idToken,
        accessToken: state.accessToken,
        signIn: signInUser,
        signOut: signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

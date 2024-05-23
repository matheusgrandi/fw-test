import React, { createContext, useEffect, useReducer } from 'react'
import { fetchAuthSession, signIn, signOut } from 'aws-amplify/auth'
import { userReducer } from './reducers/user.reducer'
import axios from 'axios'

interface AuthContextProps {
  user: {
    userRole: string
    organizationId: string
    userId: string
    updatedAt: string
    status: string
    createdAt: string
    email: string
    authChallenge: string
  } | null
  idToken: string | null
  accessToken: string | null
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const fetchUserData = async (token: string) => {
  if (!token) return
  try {
    const response = await axios.get(`${API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log('User data:', response.data)
    if (!response.data) {
      return
    }
    return response.data
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}

const cacheUserData = (
  user: AuthContextProps['user'],
  idToken: string,
  accessToken: string
) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('idToken', idToken)
  localStorage.setItem('accessToken', accessToken)
}

const getCachedUserData = () => {
  const user = localStorage.getItem('user')
  const idToken = localStorage.getItem('idToken')
  const accessToken = localStorage.getItem('accessToken')
  return {
    user: JSON.parse(user!),
    idToken,
    accessToken,
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    idToken: null,
    accessToken: null,
  })

  useEffect(() => {
    const checkUser = async () => {
      const cachedData = getCachedUserData()
      if (cachedData.user && cachedData.idToken && cachedData.accessToken) {
        dispatch({
          type: 'SET_USER',
          payload: cachedData.user,
          tokens: {
            idToken: cachedData.idToken,
            accessToken: cachedData.accessToken,
          },
        })
        return
      }
      try {
        const session = await fetchAuthSession()
        const user = await fetchUserData(
          session.tokens?.idToken?.toString() || ''
        )

        if (!user) {
          return
        }

        dispatch({
          type: 'SET_USER',
          payload: user,
          tokens: {
            idToken: session.tokens?.idToken?.toString() || '',
            accessToken: session.tokens?.accessToken.toString() || '',
          },
        })

        cacheUserData(
          user,
          session.tokens?.idToken?.toString() || '',
          session.tokens?.accessToken.toString() || ''
        )
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
    const session = await fetchAuthSession()
    const user = await fetchUserData(session.tokens?.idToken?.toString() || '')

    dispatch({
      type: 'SIGN_IN',
      payload: user,
      tokens: {
        idToken: session.tokens?.idToken?.toString() || '',
        accessToken: session.tokens?.accessToken?.toString() || '',
      },
    })

    cacheUserData(
      user,
      session.tokens?.idToken?.toString() || '',
      session.tokens?.accessToken?.toString() || ''
    )
  }

  const signOutUser = async () => {
    await signOut()
    localStorage.removeItem('user')
    localStorage.removeItem('idToken')
    localStorage.removeItem('accessToken')
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

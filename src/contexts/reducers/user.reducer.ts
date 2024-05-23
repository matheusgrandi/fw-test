interface UserState {
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
}

interface UserAction {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'SET_USER'
  payload?: UserState['user'] | null
  tokens?: {
    idToken: string
    accessToken: string
  }
}

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        user: action?.payload || null,
        idToken: action.tokens?.idToken || null,
        accessToken: action.tokens?.accessToken || null,
      }
    case 'SIGN_OUT':
      return {
        user: null,
        idToken: null,
        accessToken: null,
      }
    case 'SET_USER':
      return { ...state, user: action.payload ?? null }
    default:
      return state
  }
}

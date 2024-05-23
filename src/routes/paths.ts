const ROUTE_PATHS = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  ONBOARDING: '/onboarding',
  onboardingStep: (step: string) => `/onboarding?step=${step}`,
}

export default ROUTE_PATHS

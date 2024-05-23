import { Grid } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Welcome from 'src/components/organisms/onboarding/OnboardingWelcome'

// import CompanyDetails from '../components/onboarding/CompanyDetails'
// import PersonalDetails from '../components/onboarding/PersonalDetails'
// import InviteTeam from '../components/onboarding/InviteTeam'

const OnboardPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const step = searchParams.get('step') || 'welcome'

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return <Welcome />
      // case 'company-details':
      //   return <CompanyDetails />
      // case 'personal-details':
      //   return <PersonalDetails />
      // case 'invite-team':
      //   return <InviteTeam />
      default:
        return <Welcome />
    }
  }

  return (
    <Grid container className='h-full w-full'>
      {renderStep()}
    </Grid>
  )
}

export default OnboardPage

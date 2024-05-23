import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import ROUTE_PATHS from 'src/routes/paths'
import { useUser } from 'src/hooks/useUser'
import OnboardingWrapper from 'src/components/molecules/onboarding/OnboardingWrapper'
import OnboardingStepsList from 'src/components/molecules/onboarding/OnboardingStepsList'

const Welcome: React.FC = () => {
  const navigate = useNavigate()

  const onBeginSetupClick = () => {
    navigate(ROUTE_PATHS.onboardingStep('company-details'))
  }

  const onExitClick = () => {
    navigate('/')
  }

  return (
    <OnboardingWrapper onSaveClick={onExitClick} buttonLabel='Exit setup'>
      <div className='flex flex-col max-w-[25rem] items-center justify-center gap-[1.5rem]'>
        <Typography variant='h1'>{`Welcome to Fieldwork!`}</Typography>
        <div className='flex flex-col gap-[1.5rem]'>
          <Typography variant='h4'>
            Begin by setting up your account. It will take about 10 minutes to
            complete.
          </Typography>
          <OnboardingStepsList />
        </div>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={onBeginSetupClick}
          className='mt-4'
        >
          Begin Setup
        </Button>
      </div>
    </OnboardingWrapper>
  )
}

export default Welcome

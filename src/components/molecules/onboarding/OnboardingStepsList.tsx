import { Badge } from '@mui/material'

const OnboardingStepsList = ({ currentStep }: { currentStep?: number }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Badge
          badgeContent='1'
          color={
            currentStep
              ? currentStep === 1
                ? 'primary'
                : 'warning'
              : 'secondary'
          }
          className='pl-2'
        />
        <span
          className={`pl-5 ${
            currentStep ? (currentStep !== 1 ? 'text-gray400' : '') : ''
          }`}
        >
          Company details
        </span>
      </div>
      <div>
        <Badge
          badgeContent='2'
          className='pl-2'
          color={
            currentStep
              ? currentStep === 2
                ? 'primary'
                : 'warning'
              : 'secondary'
          }
        />
        <span
          className={`pl-5 ${
            currentStep ? (currentStep !== 2 ? 'text-gray400' : '') : ''
          }`}
        >
          Personal details
        </span>
      </div>
      <div>
        <Badge
          badgeContent='3'
          color={
            currentStep
              ? currentStep === 3
                ? 'primary'
                : 'warning'
              : 'secondary'
          }
          className='pl-2'
        />
        <span
          className={`pl-5 ${
            currentStep ? (currentStep !== 3 ? 'text-gray400' : '') : ''
          }`}
        >
          Invite team
        </span>
      </div>
    </div>
  )
}

export default OnboardingStepsList

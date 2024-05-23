import { PropsWithChildren } from 'react'
import OnboardingStepsList from './OnboardingStepsList'

type OnboardingWrapper = PropsWithChildren & {
  onSaveClick: () => void
  buttonLabel?: string
  currentStep?: number
}

const OnboardingWrapper = ({
  onSaveClick,
  children,
  buttonLabel = 'Save & exit setup',
  currentStep,
}: OnboardingWrapper) => (
  <div className='relative p-6 bg-white shadow-md flex flex-col items-center justify-center w-full'>
    {currentStep && (
      <div className='absolute top-6 left-6'>
        <OnboardingStepsList currentStep={currentStep} />
      </div>
    )}
    <button
      onClick={onSaveClick}
      className='px-[1rem] py-[0.813rem] self-end rounded-md w-48 h-26 bg-gray100 absolute top-6 right-6 text-sm'
    >
      {buttonLabel}
    </button>
    {children}
  </div>
)

export default OnboardingWrapper

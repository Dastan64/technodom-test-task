import { useState } from 'react'
import { PasswordRecoveryForm } from '../PasswordRecoveryForm'
import { SignUpForm } from '../SignUpForm'
import { PhoneCheckForm } from '../PhoneCheckForm'

export const AccessControl = () => {
  const [currentStep, setCurrentStep] = useState('phoneCheck')

  const changeCurrentStep = (step: string) => {
    if (step) {
      setCurrentStep(step)
    }
  }

  return (
    <>
      {currentStep === 'phoneCheck' && <PhoneCheckForm onFormChange={changeCurrentStep} />}
      {currentStep === 'registration' && <SignUpForm onFormChange={changeCurrentStep} />}
      {currentStep === 'passwordRecovery' && <PasswordRecoveryForm onFormChange={changeCurrentStep} />}
    </>
  )
}

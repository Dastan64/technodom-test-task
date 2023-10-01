import { PasswordRecoveryForm } from '../PasswordRecoveryForm'
import { SignUpForm } from '../SignUpForm'
import { PhoneCheckForm } from '../PhoneCheckForm'

export const AccessControl = () => {
  return (
    <>
      <SignUpForm />
      <PhoneCheckForm />
      <PasswordRecoveryForm />
    </>
  )
}

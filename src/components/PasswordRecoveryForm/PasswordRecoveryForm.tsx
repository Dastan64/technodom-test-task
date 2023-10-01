import styles from './PasswordRecoveryForm.module.scss'
import { ChangeEvent, ReactElement, useState } from 'react'
import { Button } from '../ui/Button'
import { PhoneInput } from '../PhoneInput'

export const PasswordRecoveryForm = (): ReactElement => {
  const [phone, setPhone] = useState('')

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setPhone(value)
  }

  const isButtonEnabled: boolean = phone.length === 16

  return (
    <section>
      <h2 className={styles.title}>Восстановить пароль</h2>
      <form className={styles.form}>
        <PhoneInput
          name="phone"
          mask="+7 999 999-99-99"
          maskChar=""
          onChange={handleChange}
          value={phone}
          alwaysShowMask
        />
        <Button text="Восстановить пароль" type="submit" variant="solid" isDisabled={!isButtonEnabled} />
      </form>
    </section>
  )
}

import styles from './PhoneCheckForm.module.scss'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import InputMask from 'react-input-mask'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

// Data and typings
import { data } from '../../mocks/data.ts'
import { User } from '../../types/user.ts'

export const PhoneCheckForm = (): ReactElement => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setPhone(value)
  }

  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setPassword(value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    alert('Вы вошли в систему')
    setPhone('')
    setPassword('')
  }

  const filtered = data.filter((user: User) => user.phone === phone.replace(/[^+\d]/g, ''))

  const isPhonePresentInDatabase: boolean = filtered.length !== 0
  const isPhoneNumberValid: boolean = phone.length === 16
  const isButtonEnabled: boolean = isPhoneNumberValid && isPhonePresentInDatabase && password.length > 0

  return (
    <>
      <h2 className={styles.title}>Добро пожаловать!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputMask
          className={styles.input}
          type="tel"
          mask="+7 999 999-99-99"
          maskChar=""
          onChange={handleChange}
          value={phone}
          alwaysShowMask
        />
        {isPhonePresentInDatabase && (
          <Input
            label="Введите пароль"
            name="password"
            placeholder="Введите пароль..."
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        )}
        <Button text="Войти" type="submit" isDisabled={!isButtonEnabled} />
      </form>
    </>
  )
}

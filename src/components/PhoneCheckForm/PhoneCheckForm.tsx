import styles from './PhoneCheckForm.module.scss'
import { ChangeEvent, FocusEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { PhoneInput } from '../PhoneInput'

// Data and typings
import { User } from '../../types/user.ts'
import { useAppDispatch } from '../../hooks/hooks.ts'
import { users } from '../../mocks/data.ts'

import { write } from '../../features/phone-check/phone-check-slice.ts'
import { variants } from '../../animationData/formAnimation.ts'

interface PhoneCheckFormProps {
  onFormChange: (step: string) => void
}

export const PhoneCheckForm = ({ onFormChange }: PhoneCheckFormProps): ReactElement => {
  const dispatch = useAppDispatch()

  const [data, setData] = useState({
    phone: '',
    password: '',
  })

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setData({
      ...data,
      [target.name]: value,
    })
  }

  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    dispatch(
      write({
        field: target.name,
        value: data[target.name as keyof typeof data],
      })
    )
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    alert('Вы вошли в систему')
    setData({
      phone: '',
      password: '',
    })
  }

  const handleClick = () => {
    onFormChange('passwordRecovery')
  }

  const filtered = users.filter((user: User) => user.phone === data.phone.replace(/[^+\d]/g, ''))
  const isPhonePresentInDatabase: boolean = filtered.length !== 0

  const isPhoneNumberValid: boolean = data.phone.length === 16
  const isButtonEnabled: boolean = isPhoneNumberValid && isPhonePresentInDatabase && data.password.length > 0

  useEffect(() => {
    if (isPhoneNumberValid && !isPhonePresentInDatabase) {
      onFormChange('registration')
    }
  }, [isPhoneNumberValid, isPhonePresentInDatabase, onFormChange])

  return (
    <motion.section variants={variants} initial="from" animate="to">
      <h2 className={styles.title}>Добро пожаловать!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PhoneInput
          name="phone"
          mask="+7 999 999-99-99"
          maskChar=""
          onChange={handleChange}
          value={data.phone}
          alwaysShowMask
        />
        {isPhonePresentInDatabase && (
          <Input
            label="Введите пароль"
            name="password"
            placeholder="Введите пароль..."
            type="password"
            value={data.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        )}
        <Button text="Войти" type="submit" isDisabled={!isButtonEnabled} />
        <Button text="Забыли пароль?" type="button" variant="transparent" onClick={handleClick} />
      </form>
    </motion.section>
  )
}

import styles from './SignUpForm.module.scss'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { motion } from 'framer-motion'

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Checkbox } from '../ui/Checkbox'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts'
import { update } from '../../features/registration/registration-slice.ts'
import { PhoneInput } from '../PhoneInput'
import { variants } from '../../animationData/formAnimation.ts'

interface SignUpFormProps {
  onFormChange: (step: string) => void
}

export const SignUpForm = ({ onFormChange }: SignUpFormProps): ReactElement => {
  const userData = useAppSelector((state) => state.registration)
  const dispatch = useAppDispatch()

  const [data, setData] = useState({
    phone: '',
    name: '',
    email: '',
    hasAgreed: false,
  })

  const [errors, setErrors] = useState({
    phone: '',
    name: '',
    email: '',
    hasAgreed: '',
  })

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { checked, name, type, value } = target
    let error = ''
    const fieldValue: string | boolean = type === 'checkbox' ? checked : value
    setData({
      ...data,
      [name]: fieldValue,
    })

    if (name === 'email') {
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
        error = 'Некорректный адрес электронной почты'
      }
    }
    setErrors({
      ...errors,
      [name]: error,
    })
  }

  const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    let error = ''

    if (name === 'name') {
      if (value.length < 3) {
        error = 'Имя должно состоять более чем из 2 букв'
      }
      if (/\d/.test(value)) {
        error = 'Имя не может содержать цифры'
      }
    }

    setErrors({
      ...errors,
      [name]: error,
    })

    dispatch(
      update({
        field: name,
        value: data[name as keyof typeof data],
      })
    )
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    alert('Вы успешно зарегистрированы!')
    setData({
      phone: '',
      name: '',
      email: '',
      hasAgreed: false,
    })
    onFormChange('phoneCheck')
  }

  const isButtonEnabled: boolean = Object.keys(userData).every((key) => userData[key as keyof typeof userData])

  return (
    <motion.section variants={variants} initial="from" animate="to">
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PhoneInput
          name="phone"
          mask="+7 999 999-99-99"
          maskChar=""
          onChange={handleChange}
          onBlur={handleBlur}
          value={data.phone}
          alwaysShowMask
        />
        <div className={styles.container}>
          <Input
            label="Введите имя"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Имя"
            type="text"
            value={data.name}
            required
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.container}>
          <Input
            label="Введите e-mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="E-mail"
            type="email"
            value={data.email}
            required
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <Checkbox
          name="hasAgreed"
          label="Согласен с обработкой персональных данны"
          checked={data.hasAgreed}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <Button text="Зарегистрироваться" type="submit" variant="solid" isDisabled={!isButtonEnabled} />
      </form>
    </motion.section>
  )
}

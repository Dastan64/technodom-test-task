import styles from './SignUpForm.module.scss'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Checkbox } from '../ui/Checkbox'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts'
import { update } from '../../features/registration/registration-slice.ts'
import { PhoneInput } from '../PhoneInput'

export const SignUpForm = (): ReactElement => {
  const userData = useAppSelector((state) => state.registration)

  const [data, setData] = useState({
    phone: '',
    name: '',
    email: '',
    hasAgreed: false,
  })

  const dispatch = useAppDispatch()

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value
    setData({
      ...data,
      [target.name]: value,
    })
  }

  const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      update({
        field: target.name,
        value: data[target.name as keyof typeof data],
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
  }

  const isButtonEnabled: boolean = Object.keys(userData).every((key) => userData[key as keyof typeof data])

  return (
    <section>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PhoneInput
          name="phone"
          mask="+7 999 999-99-99"
          maskChar=""
          onChange={handleChange}
          value={data.phone}
          alwaysShowMask
        />
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
    </section>
  )
}

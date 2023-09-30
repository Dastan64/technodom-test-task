import styles from './SignUpForm.module.scss'
import InputMask from 'react-input-mask'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Checkbox } from '../ui/Checkbox'

export const SignUpForm = (): ReactElement => {
  const [data, setData] = useState({
    phone: '',
    name: '',
    email: '',
    hasAgreed: false,
  })

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value
    setData({
      ...data,
      [target.name]: value,
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const isButtonEnabled: boolean = Object.keys(data).every((key) => key)

  return (
    <>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputMask
          className={styles.input}
          type="tel"
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
          placeholder="Имя"
          type="text"
          value={data.name}
          required
        />
        <Input
          label="Введите e-mail"
          name="email"
          onChange={handleChange}
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
          required
        />
        <Button text="Зарегистрироваться" type="submit" variant="solid" isDisabled={!isButtonEnabled} />
      </form>
    </>
  )
}

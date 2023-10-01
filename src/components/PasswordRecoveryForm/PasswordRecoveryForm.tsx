import styles from './PasswordRecoveryForm.module.scss'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '../ui/Button'
import { PhoneInput } from '../PhoneInput'

import { variants } from '../../animationData/formAnimation.ts'

export const PasswordRecoveryForm = (): ReactElement => {
  const [phone, setPhone] = useState('')

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setPhone(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('SMS с временным паролем было отправлено на указанный номер телефона')
    setPhone('')
  }

  const isButtonEnabled: boolean = phone.length === 16

  return (
    <motion.section variants={variants} initial="from" animate="to">
      <h2 className={styles.title}>Восстановить пароль</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
    </motion.section>
  )
}

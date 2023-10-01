import styles from './PhoneInput.module.scss'
import InputMask from 'react-input-mask'
import { ChangeEvent, FocusEvent, ReactElement } from 'react'

interface PhoneInputProps {
  alwaysShowMask?: boolean
  mask: string
  maskChar?: string
  name: string
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  value: string
}

export const PhoneInput = ({
  alwaysShowMask,
  mask,
  maskChar,
  name,
  onBlur,
  onChange,
  required,
  value,
}: PhoneInputProps): ReactElement => {
  return (
    <InputMask
      className={styles.input}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      type="tel"
      required={required}
      mask={mask}
      maskChar={maskChar}
      alwaysShowMask={alwaysShowMask}
    />
  )
}

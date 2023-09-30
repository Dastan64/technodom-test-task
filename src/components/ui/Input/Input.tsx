import styles from './Input.module.scss'
import { ChangeEvent, FocusEvent, ReactElement } from 'react'

interface InputProps {
  label: string
  name: string
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
  type: 'tel' | 'password' | 'email' | 'text'
  value: string
}

export const Input = ({
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  required = true,
  type,
  value,
}: InputProps): ReactElement => {
  return (
    <input
      className={styles.input}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={label}
      onBlur={onBlur}
      onChange={onChange}
      required={required}
    />
  )
}

import styles from './Checkbox.module.scss'
import { ChangeEvent, FocusEvent, ReactElement } from 'react'

interface CheckboxProps {
  checked: boolean
  label: string
  name: string
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  required: boolean
}

export const Checkbox = ({ checked, label, name, onBlur, onChange, required }: CheckboxProps): ReactElement => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        name={name}
        className={styles.input}
        checked={checked}
        aria-label={label}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles.box}></span>
      <span className={styles.caption}>Согласен с обработкой персональных данных</span>
    </label>
  )
}

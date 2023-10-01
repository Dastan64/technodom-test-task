import styles from './Button.module.scss'
import { ReactElement } from 'react'
import { clsx } from 'clsx'

interface ButtonProps {
  isDisabled?: boolean
  onClick?: () => void,
  text: string,
  type?: 'button' | 'submit',
  variant?: 'solid' | 'transparent'
}

export const Button = ({
  isDisabled = false,
  onClick,
  text,
  type = 'button',
  variant = 'solid',
}: ButtonProps): ReactElement => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.solid]: variant === 'solid',
        [styles.transparent]: variant === 'transparent',
      })}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

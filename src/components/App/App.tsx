import styles from './App.module.scss'
import { AccessControl } from '../AccessControl'

export const App = () => {
  return (
    <div className={styles.app}>
      <AccessControl />
    </div>
  )
}

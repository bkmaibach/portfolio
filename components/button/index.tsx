import styles from './button.module.scss'
import utilStyles from 'styles/utils.module.scss'

export default function Button({ className, onClick, children, ...props }: {
  className?: string,
  onClick?: (any) => any,
  children?: React.ReactNode,
  props?: string[]
}) {
  return <button className={`${styles.button} ${className ? className : ''}`} {...props}>
    {children}
  </button>
}

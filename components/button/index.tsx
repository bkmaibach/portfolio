import styles from './button.module.scss'

export default function Button({ className, onClick, children }: {
  className?: string,
  onClick?: (any) => any,
  children?: React.ReactNode
}) {
  return <a className={`${styles.button} ${className}`}>
    {children}
  </a>
}

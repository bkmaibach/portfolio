import styles from './wrapper.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/cn'

export default function Wrapper({ id, style, fadeStyle, children }: {id: string, style: string, fadeStyle: string, children: React.ReactNode }) {
  return (
    <section id={id} className={cn(styles.wrapper, utilStyles.centered, style, fadeStyle)}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

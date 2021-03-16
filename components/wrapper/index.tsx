import Button from 'components/button'
import styles from './wrapper.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/util'

export default function Wrapper({ id, children }: {id: string, children: React.ReactNode }) {
  return (
    <section id={id} className={cn(styles.wrapper, styles.style1, utilStyles.centered, utilStyles.fadeUp)}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

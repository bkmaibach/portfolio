import styles from './icon-section.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/util'
export default function IconSection({ title, text, faIcon }: {
  title: string,
  text: string,
  faIcon: string
}) {
  return <section className="col-4 col-6-medium col-12-xsmall">
    <span className={cn(utilStyles.icon, utilStyles.solid, utilStyles.alt, utilStyles.major, faIcon)}></span>
    <h3>{title}</h3>
    <p>{text}</p>
  </section>
}

import Image from 'next/image'
import styles from './spotlight.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/util'

export default function Spotlight({edgeStyle, id, nextId, imgSrc, children}:
  {edgeStyle: string, id: string, nextId: string, imgSrc: string, children: React.ReactNode}) {
  return (
    <section id={id} className={cn(styles.spotlight, edgeStyle)}>
    <span className={cn(utilStyles.image, styles.image, utilStyles.fit, styles.main)}>
      <Image
        src={imgSrc}
        alt=""
        width={1600}
        height={1050}
      />
    </span>
    <div className={styles.content}>
      {children}
    </div>
    <a href={`#${nextId}`} className={cn(styles.gotoNext, utilStyles.gotoNext)}>Next</a>
  </section>
  )
}

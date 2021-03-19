import Image from 'next/image'
import styles from './spotlight.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/cn'

export default function Spotlight({edgeStyle, id, nextId, imgSrc, children}:
  {edgeStyle: string, id: string, nextId: string, imgSrc: string, children: React.ReactNode}) {
  return (
    <section id={id} className={cn(styles.spotlight, edgeStyle)}>
    {/* <h1>PLEASE</h1> */}
    <span className={cn(styles.image, utilStyles.image, utilStyles.fit, styles.main)}>
    {/* <span className={styles.content}> */}
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

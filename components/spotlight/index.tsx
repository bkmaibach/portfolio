import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax';
import styles from './spotlight.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/cn'

export default function Spotlight({edgeStyle, accentStyle, id, nextId, imgSrc, children}:
  {edgeStyle: string, accentStyle: string, id: string, nextId: string, imgSrc: string, children: React.ReactNode}) {
  return (
    <section id={id} className={cn(styles.spotlight, edgeStyle, accentStyle)}>
    <Parallax className={cn(utilStyles.image, utilStyles.fit, styles.main)} y={[-75, 75]} tagOuter="span">
      <div className={utilStyles.overlay}>
        <Image
          src={imgSrc}
          alt=""
          layout='fill'
          objectFit="cover"
        />
      </div>
    </Parallax>
    <div className={styles.content}>
      {children}
    </div>
    <a href={`#${nextId}`} className={cn(styles.gotoNext, utilStyles.gotoNext)}>Next</a>
  </section>
  )
}

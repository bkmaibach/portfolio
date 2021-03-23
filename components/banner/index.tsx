import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import styles from './banner.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/cn'

export default function Banner() {
  return (
    <section id={styles.banner}>
      <Fade>
        <div className={styles.content}>
          <header>
            <h2>The future has landed</h2>
            <p>And there are no hoverboards or flying cars.<br />
            Just apps. Lots of mother flipping apps.</p>
          </header>
          <span className={cn(utilStyles.image, styles.image)}>
            <Image
              src="/images/profile.jpg"
              alt="Picture of the author"
              priority
              width={360}
              height={360}
            />
          </span>
        </div>
      </Fade>
      <a href="#one" className={cn(styles.gotoNext, utilStyles.gotoNext)}>Next</a>
    </section>
  )
}

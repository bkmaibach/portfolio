import Image from 'next/image'
import styles from './banner.module.scss'
import { cn } from '../../lib/util'

export default function Banner() {
  return (
    <section id={styles.banner}>
      <div className={styles.content}>
        <header>
          <h2>The future has landed</h2>
          <p>And there are no hoverboards or flying cars.<br />
          Just apps. Lots of mother flipping apps.</p>
        </header>
        <span className={styles.image}>
          <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            width={312}
            height={312}
          />
        </span>
      </div>
      <a href="#one" className="goto-next scrolly">Next</a>
    </section>
  )
}

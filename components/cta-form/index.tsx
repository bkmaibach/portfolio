import Button from 'components/button'
import buttonStyles from 'components/button/button.module.scss'
import styles from './cta-form.module.scss'
import utilStyles from 'styles/utils.module.scss'
import { cn } from 'lib/cn'

export default function CTAForm() {
  return (
    <form method="post" action="#" className={styles.cta}>
      <div className={cn("row", utilStyles.gtrUniform, "gtr-50")}>
        <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
        <div className="col-4 col-12-xsmall"><Button className={cn(buttonStyles.fit, buttonStyles.primary, styles.submit)}>Get Started</Button></div>
      </div>
    </form>
  )
}

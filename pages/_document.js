import Document, { Html, Head, Main, NextScript } from 'next/document'
import styles from './layout.module.scss'
import { cn } from '../lib/util'

class LandingDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html >
        <Head />
        <body className={cn(styles.landing, styles.isPreload)}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LandingDocument
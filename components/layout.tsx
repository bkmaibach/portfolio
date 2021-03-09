import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Button from './button'
import buttonStyles from './button/button.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { cn } from '../lib/util'

const name = 'Keith Maibach'
export const siteTitle = 'Keith Maibach Portfolio'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div id={styles.layout} className={cn(styles.landing, styles.isPreload)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio website of Keith Maibach made using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        <title>{siteTitle}</title>
      </Head>
      <header id={styles.header}>
        <h1 id="logo"><Link href="/">Keith Maibach's App Portfolio</Link></h1>
        <nav id="nav">
          <ul>
            <li><Link href="/">Projects</Link></li>
            <li><Link href="/work"><a>Work</a></Link></li>
            <li><Link href="/skills"><a>Skills</a></Link></li>
            <li><Link href="/education"><a>Education</a></Link></li>
            <li><Button className={cn(buttonStyles.nav, buttonStyles.primary)}>Get in Touch</Button></li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}

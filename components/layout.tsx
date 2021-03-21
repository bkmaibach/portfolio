import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './layout.module.scss'
import Button from 'components/button'
import buttonStyles from './button/button.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { cn } from 'lib/cn'

const name = 'Keith Maibach'
export const siteTitle = 'Keith Maibach Portfolio'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const [navVisible, setNavVisible] = useState(false)
  return (
    <ParallaxProvider>
      <div id={styles.layout} className={cn(styles.landing, navVisible ? styles.navPanelVisible : '')}>
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
          <div id={styles.titleBar}>
            <a className={styles.toggle} onClick={() => setNavVisible(!navVisible)}></a>
            <span className={styles.title}>
              <a href="/">Keithernet Portfolio</a>
            </span>
          </div>
          <div id={styles.navPanel}>
            <nav>
              <a className={cn(styles.link, styles.depth0)}>Project</a>
              <a className={cn(styles.link, styles.depth0)}>Work</a>
              <a className={cn(styles.link, styles.depth0)}>Skills</a>
              <a className={cn(styles.link, styles.depth0)}>Education</a>
            </nav>
          </div>
        <header id={styles.header}>
          <h1 id="logo"><Link href="/">Keithernet Portfolio</Link></h1>
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
        <footer id={styles.footer}>
          <ul className={cn(utilStyles.icons, styles.icons)}>
            <li><a href="#" className={cn(utilStyles.icon, styles.icon, utilStyles.brands, styles.alt, "fa-linkedin-in")}><span className={utilStyles.label}>LinkedIn</span></a></li>
            <li><a href="#" className={cn(utilStyles.icon, styles.icon, utilStyles.brands, styles.alt, "fa-instagram")}><span className={utilStyles.label}>Instagram</span></a></li>
            <li><a href="#" className={cn(utilStyles.icon, styles.icon, utilStyles.brands, styles.alt, "fa-github")}><span className={utilStyles.label}>GitHub</span></a></li>
            <li><a href="#" className={cn(utilStyles.icon, styles.icon, utilStyles.brands, styles.alt, "fa-envelope")}><span className={utilStyles.label}>Email</span></a></li>
          </ul>
          <ul className={styles.copyright}>
            <li>&copy; Keithernet Portfolio. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

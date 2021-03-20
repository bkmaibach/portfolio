import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.scss'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Button from 'components/button'
import Wrapper from 'components/wrapper'
import IconSection from 'components/icon-section'
import CTAForm from 'components/cta-form'
import Spotlight from 'components/spotlight'
import spotlightStyles from 'components/spotlight/spotlight.module.scss'
import wrapperStyles from 'components/wrapper/wrapper.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from 'lib/posts'
import { cn } from 'lib/cn'
import { useIsMediumOrSmallerDevice } from 'lib/use-is-small-device'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const isMediumOrSmallerDevice = useIsMediumOrSmallerDevice()

  return (
    <Layout>
      <Banner />
      <Spotlight edgeStyle={spotlightStyles.bottom} accentStyle={spotlightStyles.accent1} id='one' nextId='two' imgSrc='/images/pic02.webp'>
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Odio faucibus ipsum integer consequat</h2>
                <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
              Blandit orci porttitor semper. Arcu phasellus tortor enim mi
              nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
              augue varius tempus lobortis porttitor accumsan consequat
              adipiscing lorem dolor.</p>
            </div>
            <div className="col-4 col-12-medium">
              <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
              adipiscing adipiscing metus massa. Blandit orci porttitor semper.
              Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
              mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
              ipsum dolor nullam.</p>
            </div>
          </div>
        </div>
      </Spotlight>
      <Spotlight edgeStyle={!isMediumOrSmallerDevice ? spotlightStyles.right : spotlightStyles.bottom} accentStyle={spotlightStyles.accent3} id='two' nextId='three' imgSrc='/images/pic03.webp'>
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul className={cn(utilStyles.actions, spotlightStyles.actions)}>
          <li><Button>Learn More</Button></li>
        </ul>
      </Spotlight>
      <Spotlight edgeStyle={!isMediumOrSmallerDevice ? spotlightStyles.left : spotlightStyles.bottom} accentStyle={spotlightStyles.accent4} id='three' nextId='four' imgSrc='/images/pic04.webp'>
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>AAA Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul className={cn(utilStyles.actions, spotlightStyles.actions)}>
          <li><Button>Learn More</Button></li>
        </ul>
      </Spotlight>
      <Wrapper style={wrapperStyles.style1} fadeStyle={wrapperStyles.fadeDown} id='four'>
        <header className={cn(utilStyles.major)}>
            <h2>Accumsan sed tempus adipiscing blandit</h2>
            <p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
          </header>
          <div className={cn(utilStyles.box, utilStyles.alt)}>
            <div className={cn('row', styles.gtrUniform)}>
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
              <IconSection
                title='Some title'
                text='Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.'
                faIcon='fa-chart-area'
              />
            </div>
          </div>
          <footer className={utilStyles.major}>
            <ul className={cn(utilStyles.actions, utilStyles.centered)}>
              <li><Button>Button text here</Button></li>
            </ul>
          </footer>
      </Wrapper>
      <Wrapper id='five' style={wrapperStyles.style2} fadeStyle={wrapperStyles.fadeUp}>
        <header>
          <h2>Magna faucibus lorem diam</h2>
          <p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
        </header>
        <CTAForm/>
      </Wrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

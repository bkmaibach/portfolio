import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.scss'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Button from 'components/button'
import Wrapper from 'components/wrapper'
import IconSection from 'components/icon-section'
import Spotlight from 'components/spotlight'
import spotlightStyles from 'components/spotlight/spotlight.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import { cn } from 'lib/util'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Banner />
      <Spotlight edgeStyle={spotlightStyles.bottom} id='one' nextId='two' imgSrc='images/pic02.jpg'>
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
      <Spotlight edgeStyle={spotlightStyles.right} id='two' nextId='three' imgSrc='images/pic03.jpg'>
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul className={utilStyles.actions}>
          <li><Button>Learn More</Button></li>
        </ul>
      </Spotlight>
      <Spotlight edgeStyle={spotlightStyles.left} id='three' nextId='four' imgSrc='images/pic04.jpg'>
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul className={utilStyles.actions}>
          <li><Button>Learn More</Button></li>
        </ul>
      </Spotlight>
      <Wrapper id='four'>
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

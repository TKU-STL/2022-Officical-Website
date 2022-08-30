import Head from 'next/head'
import Footer from '../components/Footer'
import SiteNavbar from '../components/SiteNavbar'

import Hero from '../components/Hero'
import About from '../components/About'
import Descriptions from '../components/Descriptions'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TKU - STL || Taiwan's Rocket Maker</title>
        <meta name="description" content="Official Website of Space Technology Laboratory, Tamkang University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNavbar />
      <Hero />
      <section id='about'>
        <About />
      </section>
      <section id='descriptions'>
        <Descriptions />
      </section>
      <section id='teams'>
        <Team />
      </section>

      <Footer />
    </div>
  )
}

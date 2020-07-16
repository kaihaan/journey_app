import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import { Section, ContainerLg, Item, Slider, Map } from '../components'

export default function Home() {

  const handleSlider = (val) => {
    console.log(val)
  }

  return (
    <>
      <Head>
        <title>Journey-Next</title>
      </Head>

      <header>
        <nav>
          <div >
            <h1>The Revelation of Baha'u'llah</h1>
          </div>
        </nav>
      </header>


      <Section>
        <ContainerLg>
          <Item>
            <Slider getValue={handleSlider} />
          </Item>
        </ContainerLg>
      </Section>

      <Section>
        <Map />
      </Section>

      <Section>
        <div>
          <div>
            <div>Tablet</div>
            <div>Link</div>
            <div>First Tablet Here</div>
            <div>To someone here</div>
            <div>And a link here</div>
            <div>Second Tablet Here</div>
            <div>To someone here</div>
            <div>And a link here</div>
            <div>Third Tablet Here</div>
            <div>To someone here</div>
            <div>And a link here</div>
          </div>
          <hr />
        </div>
      </Section>
    </>
  )
}

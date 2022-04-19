import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import cosmos from './assets/cosmos.jpeg'
import bamboo from './assets/bamboo.jpg'
import pandaGif from './assets/pandaGif.gif'
import pandaStatic from './assets/pandaStatic.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          factor={2}
          speed={0.2}
          style={{
            backgroundImage: `url(${cosmos})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>Hey... I'm falling</h2>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          style={{ top: '8rem', textAlign: 'center' }}
        >
          <img width="200" src={pandaGif} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${bamboo})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>Okay I'm done</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App

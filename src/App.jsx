import { Fragment, useState } from 'react'

import Header from './components/Header'
import Me from './components/Me'
import ParticleBackground from './particle/ParticleBackground'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'


function App() {
  const [isLoading, setIsLoading] = useState(true)
 
  return (
    <Fragment>
      {isLoading ? <div className='negra'></div> : null }
     <Header/>
     <main className='container'>
      <Me setIsLoading={setIsLoading}/>
      <AboutMe/>
      <Projects/>
      
     </main>
     <ParticleBackground/>
    </Fragment>

  )
}

export default App

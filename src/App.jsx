import { Fragment, useState } from 'react'

import Header from './components/Header'
import Me from './components/Me'
import ParticleBackground from './particle/ParticleBackground'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'


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
     <Footer/>
     <div style={{backgroundColor: "black", height: "500vh", position: "absolute", width: "500px", top: "0px", zIndex: "1",}}>
    <ParticleBackground/>
     </div>
    </Fragment>

  )
}

export default App

import { Fragment, useState } from 'react'
import ParticleBackgrounf from './particle/particleBackgrounf'
import Header from './components/Header'
import Me from './components/Me'


function App() {
  const [isLoading, setIsLoading] = useState(true)
 
  return (
    <Fragment>
      {isLoading ? <div className='negra'></div> : null }
     <Header/>
     <main className='container'>
      <Me setIsLoading={setIsLoading}/>
     </main>

     <ParticleBackgrounf/>
    </Fragment>

  )
}

export default App

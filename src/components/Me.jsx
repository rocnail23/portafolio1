import React, { Fragment, useEffect, useState } from 'react'

import {motion} from "framer-motion"
import Greeting from './Greeting'
import Technologies from './Technologies'
import Photo from './Photo'
const Me = ({setIsLoading}) => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  })
  

  return (
    <div className='section home'>
    <section className='section first'>
        <Photo/>
        </section>

        <section className='section me_main'>
          <Greeting/>
          </section>

          <section className='section tech'>
          <Technologies/>
          </section>
        
        </div>
  )
}

export default Me
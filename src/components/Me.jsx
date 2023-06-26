import React, { useEffect, useState } from 'react'

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
    <section className='section first'>
        <Photo/>
        <section className='me_main'>
          <Greeting/>
          <Technologies/>
        </section>
        
    </section>
  )
}

export default Me
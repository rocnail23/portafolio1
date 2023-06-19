import React, { useEffect, useState } from 'react'
import yo from "../assets/yo3.0.webp"
import {motion} from "framer-motion"
import Greeting from './Greeting'
import Technologies from './Technologies'
const Me = ({setIsLoading}) => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  })
  

  return (
    <article className='me'>
        <div className='photo'>
        <img src={yo} alt=""  onLoad={() => setIsLoading(false)}/>
        </div>
        <main className='me_main'>
          <Greeting/>
          <Technologies/>
        </main>
        
    </article>
  )
}

export default Me
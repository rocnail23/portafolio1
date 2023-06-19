import React, { useEffect, useState } from 'react'
import yo from "../assets/yo3.0.webp"
import {motion} from "framer-motion"
const Me = ({setIsLoading}) => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  })
  

  return (
    <article className='me nunito'>
        <header className='photo'>
        <img src={yo} alt=""  onLoad={() => setIsLoading(false)}/>
        </header>
        <main className='me_main'>
        <h1 className='title'>Desarrollador</h1>
        <button className='calendly' onClick={() =>  Calendly.initPopupWidget({
      url: 'https://calendly.com/jdanielrojas16/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ff0004'
    })}>agenda una reunion conmigo</button>
        <motion.p 
          initial={{y:100, opacity: 0}}
          animate={{y:0, opacity:1}}
          transition={{duration: 1}}
        >¡Bienvenido a mi rincón en la web! <br /> como desarrollador web, me encanta transformar conceptos en sitios web interactivos y atractivos <br /> <span className='keys'>¡</span>adelante y descubre mi trabajo<span className='keys'>!</span>
        </motion.p>

         
        </main>
    </article>
  )
}

export default Me
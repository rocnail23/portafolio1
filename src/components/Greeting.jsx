import React from 'react'
import {motion}  from "framer-motion"
const Greeting = () => {
  return (
    <article className='greeting'>
            <h1 className='title'>DESARROLLADOR</h1>
        <motion.button
        initial={{scale:1}}
        animate={{scale:1.05}}
        transition={{duration:1,repeat:Infinity }} className='calendly' onClick={() =>  Calendly.initPopupWidget({url: 'https://calendly.com/jdanielrojas16/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ff0004'
    })}>agenda una reunion conmigo</motion.button>
        <motion.p 
          initial={{y:100, opacity: 0}}
          animate={{y:0, opacity:1}}
          transition={{duration: 1}}
        >¡Bienvenido a mi rincón en la web! <br /> como desarrollador web, me encanta transformar conceptos en sitios web interactivos y atractivos <br /> <span className='keys'>¡</span>adelante y descubre mi trabajo<span className='keys'>!</span>
        </motion.p> </article>
  )
}

export default Greeting
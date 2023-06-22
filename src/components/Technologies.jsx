import React from 'react'
import {motion} from "framer-motion"
import icons from "../utils/icons"
import Technology from './technology'


const Technologies = () => {
  console.log(icons)
  return (
    <motion.article
    initial={{y:100, opacity:0}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
    className='technologies'>
        <h3
        >Tecnologias <span><i class='bx bx-code-block bx-sm'></i></span></h3>
        <main>
        <ul className='technologies_list'>
         {icons.map(icon => {
          return <Technology icon={icon}/>
         })}
          <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>ExpressJs</h4><span className='icons'><i className={`bx bx-tada-hover `}  >Ex</i></span></motion.li>  
        </ul>
        </main>
    </motion.article
    >
  )
}

export default Technologies
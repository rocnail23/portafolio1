import React from 'react'
import {motion} from "framer-motion"
const Technologies = () => {
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
           <li><h4>Html</h4></li>  
           <li><h4>Css</h4></li>  
           <li><h4>JavaScript</h4></li>
           <li><h4>React</h4></li> 
           <li><h4>NodeJs</h4></li> 
           <li><h4>Express</h4></li>
           <li><h4>Git</h4></li>    
        </ul>
        </main>
    </motion.article
    >
  )
}

export default Technologies
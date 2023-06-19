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
           <li><h4>Html</h4><span className='icons'><i class='bx bxl-html5 bx-sm'></i></span></li>  
           <li><h4>Css</h4><span className='icons'></span><i class='bx bxl-css3 bx-sm' ></i></li>  
           <li><h4>JavaScript</h4><span><i class='bx bxl-javascript' ></i></span></li>
           <li><h4>React</h4><span className='icons'><i class='bx bxl-react bx-sm' ></i></span></li> 
           <li><h4>Redux</h4><span className='icons'><i class='bx bxl-redux bx-sm' ></i></span></li> 
           <li><h4>NodeJs</h4><span className='icons'><i class='bx bxl-nodejs bx-sm' ></i></span></li> 
           <li><h4>Express</h4><span className='nunito'>ex</span></li>
           <li><h4>Github</h4><span className='icons'><i class='bx bxl-github bx-sm'></i></span></li>    
        </ul>
        </main>
    </motion.article
    >
  )
}

export default Technologies
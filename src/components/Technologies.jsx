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
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Html</h4><span className='icons'><i className='bx bxl-html5 bx-md'></i></span></motion.li>  
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Css</h4><span className='icons'><i className='bx bxl-css3 bx-md' ></i></span></motion.li> 
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Bootstrap</h4><span><i class='bx bxl-bootstrap bx-md' ></i></span></motion.li> 
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin:"-50px"}}><h4>JavaScript</h4><span><i class='bx bxl-javascript bx-md' ></i></span></motion.li>
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>React</h4><span className='icons'><i className='bx bxl-react bx-md' ></i></span></motion.li> 
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Redux</h4><span className='icons'><i className='bx bxl-redux bx-md' ></i></span></motion.li> 
           <motion.li
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>NodeJs</h4><span className='icons'><i className='bx bxl-nodejs bx-md' ></i></span></motion.li> 
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Express</h4><span className='nunito'><i className='bx bx-md' style={{position: 'relative', top: "-6px"}}>ex</i></span></motion.li>
           <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px"}}><h4>Github</h4><span className='icons'><i className='bx bxl-github bx-md'></i></span></motion.li>    
        </ul>
        </main>
    </motion.article
    >
  )
}

export default Technologies
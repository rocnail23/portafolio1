import React from 'react'
import {motion} from "framer-motion"


const TechnologyIcon = ({icon}) => {
  return (
   
        <motion.li
           initial={{opacity: 0}}
           transition={{duration: 1}}
           whileInView={{opacity: 1}}
           viewport={{margin: "-50px",once:true}}><h4>{icon.name}</h4><span className='icons'><i className={`bx ${icon?.icon} bx-tada-hover`}>{icon?.word}</i></span></motion.li>  
   
  )
}

export default TechnologyIcon
import React from 'react'
import {motion} from 'framer-motion'


const Projects = () => {
  return (
    <motion.section 
    initial={{y:100, opacity:0}}
    whileInView={{opacity: 1, y:40}}
    transition={{duration: .5}}
    className='section'>
        <section className='point'>
    <h3>Projects <span><i className='bx bx-briefcase-alt-2 bx-sm' ></i></span></h3>
    <main>
        <ul>

        

        </ul>
    </main>
        </section>
        </motion.section>
  )
}

export default Projects
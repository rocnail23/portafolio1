import React from 'react'
import {motion} from 'framer-motion'
import CardProject from './CardProject'
import projects from '../utils/projects'

const Projects = () => {

    console.log(projects)
  return (
    <motion.section 
    initial={{y:100, opacity:0}}
    whileInView={{opacity: 1, y:40}}
    transition={{duration: .5}}
    viewport={{once:true}}
    className='section'>
        <section className='point'>
    <h3>Projects <span><i className='bx bx-briefcase-alt-2 bx-sm' ></i></span></h3>
    <main>
        <ul className='ProjectGrid'>
       {projects.map(project => (

        <li  key={project.name}>
            <CardProject project={project}/>
        </li>
       ))}
        </ul>
    </main>
        </section>
        </motion.section>
  )
}

export default Projects
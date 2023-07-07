import React from 'react'
import {motion} from "framer-motion"
import laptop from "../assets/laptop.webp"
const AboutMe = () => {
  return (
    <motion.section 
    initial={{y:100, opacity:0}}
    whileInView={{opacity: 1, y:20}}
    transition={{duration: .5}}
    viewport={{once: true}}
    className='section'>
        <article className='point'>
        <h3>about me <span><i className='bx bx-user bx-sm'></i></span></h3>
        <div className='point-flex'>
        <div> 
        <p>"¡Hola! Soy jose, he tenido el privilegio de trabajar en una variedad de proyectos emocionantes que han fortalecido mi conjunto de habilidades y conocimientos.
        Soy un apasionado del aprendizaje continuo y siempre estoy buscando mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo web.
        <br/>
        <br/>
        Estoy emocionado por las oportunidades de colaboración y estoy abierto a nuevos proyectos desafiantes. Si estás buscando un desarrollador web comprometido y entusiasta para tu próximo proyecto, ¡no dudes en contactarme!
        
        </p>
        </div>
        <div>
          <img className='laptop' src={laptop} />
        </div>
        </div>
        </article>
    </motion.section>
  )
}

export default AboutMe
import React, { useEffect, useState } from 'react'
import yo from "../assets/yo3.0.webp"
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
        
        <p className={animation ? `appear` : ""}>¡Bienvenido a mi rincón en la web! <br /> como desarrollador web, me encanta transformar conceptos en sitios web interactivos y atractivos <br /> <span className='keys'>¡</span>adelante y descubre mi trabajo<span className='keys'>!</span>
        </p>

         
        </main>
    </article>
  )
}

export default Me
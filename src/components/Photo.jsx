import React from 'react'
import yo from "../assets/1.webp"
import yoDesktop from "../assets/yoDesktop.webp"
const Photo = () => {
  return (
    <div className='container_photo'>
        <div className='photo'>

            <img className='desktop' src={yoDesktop} alt="" />
        <img className='mobile' src={yo} alt=""/>
        </div>
    </div>
  )
}

export default Photo
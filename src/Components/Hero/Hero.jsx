import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h2>Welcome to VSE&T Placement Cell</h2>
        <p>Most happening things occur in placement cell.</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' />
        </div>
        <div className='about-right'>
            <h3>About VSE&T</h3>
            <h2>Nurturting Tommorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum auctor ex, quis tempor justo dignissim sit amet. Nullam eget ultricies mauris. Integer id ipsum nec nulla consequat mollis. Vivamus at nisi nec justo mollis feugiat. Fusce malesuada ligula at lacus tempor, eu vestibulum justo fermentum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum auctor ex, quis tempor justo dignissim sit amet. Nullam eget ultricies mauris. Integer id ipsum nec nulla consequat mollis. Vivamus at nisi nec justo mollis feugiat. Fusce malesuada ligula at lacus tempor, eu vestibulum justo fermentum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum auctor ex, quis tempor justo dignissim sit amet. Nullam eget ultricies mauris. Integer id ipsum nec nulla consequat mollis. Vivamus at nisi nec justo mollis feugiat. Fusce malesuada ligula at lacus tempor, eu vestibulum justo fermentum.</p>
        </div>
    </div>
  )
}

export default About

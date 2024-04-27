import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn'/>
        <img src={back_icon} alt='' className='back-btn'/>
        <div className='slider'>
            <ul>
                <li>
                    <div className='slide'>
                        <img src={user_1} alt="" />
                        <div className='company-info'>
                            <h3>Microsoft</h3>
                            <span>New York, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <img src={user_2} alt="" />
                        <div className='company-info'>
                            <h3>Microsoft</h3>
                            <span>New York, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <img src={user_3} alt="" />
                        <div className='company-info'>
                            <h3>Microsoft</h3>
                            <span>New York, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <img src={user_4} alt="" />
                        <div className='company-info'>
                            <h3>Microsoft</h3>
                            <span>New York, USA</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial

import React from 'react'
import './Hero.css'
import {images} from '../../constants/images'
import img from "../../assest/images/hero_img.png";
import path from "../../assest/images/hero_path.png";

const Hero = () => {
  return (
    <div className='Hero_wrapper'>
      <img className='path' src={path}/>
      <div className='Hero_container'>
        <div className='Hero_text'>
          <h1>Start Your coding from ByteBlast</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          <div className='Hero_button'>
          <div className='Hero_button_fill'>Courses</div>
          <div className='Hero_button_outline'>Contact Us</div>
          </div>
         
        </div>
       
        <div className='Hero_image'>
          <img src={img}/>

        </div>
      </div>
      
    </div>
  )
}

export default Hero

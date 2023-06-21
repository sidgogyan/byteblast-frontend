import React from 'react'
import "./About.css"
import img from '../../assest/images/about.png'

const About = () => {
  return (
    <div className='About_wrapper'>

        <div className='About_container'>
         <div className='About_text'>

         <h1>Start Your coding from ByteBlast</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>


         </div>

         <div className='About_image'>
            
            <img src={img}></img>
         </div>
        </div>
       
        
        
      
    </div>
  )
}

export default About

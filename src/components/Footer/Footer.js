import React from 'react'
import './Footer.css'
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='Footer_wrapper'>
         
     <p>@copyright reserved</p>
     <BsFacebook style={{marginRight:"10px"}}/>
     <BsInstagram style={{marginRight:"10px"}}/>
     <BsLinkedin style={{marginRight:"10px"}}/>
     <BsTwitter style={{marginRight:"10px"}}/>
     <BsYoutube style={{marginRight:"10px"}}/>
     
      
    </div>
  )
}

export default Footer

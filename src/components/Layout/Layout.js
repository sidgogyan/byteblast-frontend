import React from 'react'
import './Layout.css'

const Layout = ({heading,desc,img,btn}) => {
  return (
    <div className='Layout_container'>

        
<div className='Layout_image'>
  
         <img src={img}/>
        </div>

        <div className='Layout_text'>
            <h1>{heading}</h1>
            <p>{desc}</p>

        </div>


      
    </div>
  )
}

export default Layout

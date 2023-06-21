import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar_wrapper'>

        <div className='Navbar_container'>
            <div className='Navbar_logo'>Landie</div>

            <ul className='Navbar_Links'>
             <li>Home</li>
             <li>About</li>
             <li>Courses</li>
             <li>Testmonials</li>
            </ul>
        
            <div className='Navbar_button'>Login</div>

        </div>
      
    </div>
  )
}

export default Navbar

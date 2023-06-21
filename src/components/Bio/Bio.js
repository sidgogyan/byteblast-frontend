import React from 'react'
import './Bio.css'
import rect from '../../assest/images/Rectangle.png'

const Bio = () => {
  return (
    <div className='Bio_wrapper' style={{backgroundImage:"url(" + rect + ")"}}>
      <div className='Bio_container'>
        <h1>A Price To Suit Everyone</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h1>10$</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        </div>
    </div>
  )
}

export default Bio

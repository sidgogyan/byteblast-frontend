import React from 'react'
import "./CourseCard.css"
import {BsCheck2All} from "react-icons/bs"

const CourseCard = () => {
  return (
    <div className='card_wrapper'>
    <div className='card_container'>
       
       <div className='card_img'>
       <img src="	https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg"></img>
       
       </div>
      
        <div className='card_text'>
              <h4 >Complete Web development tutorial</h4>
              <p>he value attribute specifies the value of an he value attribute specifies the value of anhe value attribute specifies the value of an</p>
              <p className='dark_text'><BsCheck2All style={{marginRight:"5px"}}/> 50 Hour content</p>
              <p className='dark_text'> <BsCheck2All style={{marginRight:"5px"}}/> Live pratice</p>
              <p className='dark_text'> <BsCheck2All style={{marginRight:"5px"}}/> Industry like project</p>
        </div>
    </div>
    </div>
  )
}

export default CourseCard

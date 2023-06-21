import React from 'react'
import "./CourseBottom.css"
import CourseCard from '../CourseCard/CourseCard'
import bg2 from "../../assest/images/bg2.png"


const CourseBottom = () => {
  return (
    <div className='CourseBottom_wrapper'>
        <div className='category' style={{backgroundImage:`url(${bg2})`}}>

            <div className='cat'>
        
       <h4>Web development</h4>
        </div>

        <div className='cat'>
        
        <h4>Web development</h4>
         </div>

         <div className='cat'>
        
        <h4>Web development</h4>
         </div>

         <div className='cat'>
        
        <h4>Web development</h4>
         </div>

        </div>

        <div className='courses'>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>

        </div>
    </div>
  )
}

export default CourseBottom

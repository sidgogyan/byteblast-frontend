import React from 'react'
import './SearchHeader.css'
import background from '../../assest/images/bg1.png'
import {BsSearch} from 'react-icons/bs'

const SearchHeader = () => {
  return (
    <div className="SearchHeader_wrapper" style={{backgroundImage:`url(${background})`}}>
      
     <BsSearch className='searchicon' />
      <input className='input_field' name="searchinput" placeholder="cook your cookies here">
       
       

      </input>
      

    </div>
  )
}

export default SearchHeader

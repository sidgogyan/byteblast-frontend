import React from 'react'
import './Table.css'
import {BsFileEarmarkCheckFill} from 'react-icons/bs'
import {MdError} from 'react-icons/md';
import {CgSpaceBetweenV} from 'react-icons/cg'
import {SiMicrodotblog} from 'react-icons/si'
import {AiOutlineSolution} from 'react-icons/ai'
const Table = () => {
  return (
    <div className='Table_wrapper'>
        <table rules='none' id="table">
  <tr>
    <th>Status</th>
    <th>Title</th>
    <th>Solution</th>
    <th>Difficulty</th>
  </tr>
  <tr>
    <td ><BsFileEarmarkCheckFill className='success_icon' size={20}/></td>
    <td><a href="#">Maria Anders</a></td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='wrong_icon'>Hard</td>
  </tr>
  <tr>
    <td> <MdError className="wrong_icon" size={20}/></td>
    <td>Christina Berglund</td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='attempt_icon'>Medium</td>
  </tr>
  <tr>
    <td ><CgSpaceBetweenV className="attempt_icon" size={20}/></td>
    
    <td>Francisco Chang</td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='success_icon'>Easy</td>
  </tr>
  <tr>
    <td ><CgSpaceBetweenV className="attempt_icon" size={20}/></td>
    
    <td>Francisco Chang</td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='success_icon'>Easy</td>
  </tr>
  <tr>
    <td ><CgSpaceBetweenV className="attempt_icon" size={20}/></td>
    
    <td>Francisco Chang</td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='success_icon'>Easy</td>
  </tr>
  <tr>
    <td ><CgSpaceBetweenV className="attempt_icon" size={20}/></td>
    
    <td>Francisco Chang</td>
    <td><AiOutlineSolution className='solution_icon' size={20}/></td>
    <td className='success_icon'>Easy</td>
  </tr>
 
</table>
      
    </div>
  )
}

export default Table

import React, { useState } from 'react'
import './Drawer.css'
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'

const Drawer = () => {
   const [isOpen,setisOpen] =useState(true);

 
  return (
    <div className={!isOpen?"Drawer_close":"Drawer_open"}>

    
    {!isOpen ? <AiFillCaretRight onClick={()=>setisOpen(!isOpen)} className='Drawer_icon_close' size={20}/>:<AiFillCaretLeft className='Drawer_icon_open' onClick={(prev)=>setisOpen(!isOpen)} size={20}/>}
    
    {isOpen &&
    <div className='Drawer_Content'>
        <h4>Best Time to Buy and Sell Stock with Transaction Fee</h4>
        <p>You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.
           </p>

<p>
Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
</p>

<p>
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>




    </div>

}
       
      
    </div>
  )
}

export default Drawer

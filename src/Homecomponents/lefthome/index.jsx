import React from 'react'
import Leftprofile from './Leftprofile'
import Lefthomedata from './Lefthomedata'
import { LeftData } from './Data'

const Lefthome = () => {
  return (
    <>
    <div>
    <Leftprofile/>
    </div> 
    <div className='mt-10 w-3/4 mx-auto'>
      {
        LeftData.map((data,index)=>(
          <Lefthomedata key={index} data={data}/>
        ))
      }
  
    </div>
    </>
  )
}

export default Lefthome;

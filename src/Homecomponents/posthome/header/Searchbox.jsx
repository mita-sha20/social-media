import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../svg/SearchIcon'

const Searchbox = () => {
    const [iconVisible, seticonVisible] = useState(true);
    const inputbox = useRef(null);

    useEffect(()=>{
      inputbox.current.focus();
    })

  return (
    <>
      <div className='w-[260px] p-8 bg-white shadow-md rounded-md min-h-[300px] max-h-[60vh] box-border'>
      <div className='flex items-center gap-x-2 border-secondary_color border py-[8px] px-3 rounded-full'>
        {
            iconVisible &&  <div className='text-secondary_color cursor-pointer' onClick={()=>inputbox.current.focus()}><SearchIcon/>
         </div>
        }
       
         <div>
            <input ref={inputbox} type="text" placeholder='search' className='focus:outline-none font-gilroyNormal text-base w-full' onFocus={()=>seticonVisible(false)}  onBlur={()=>seticonVisible(true)}/>
         </div>
        </div>
        <div className='mt-4'>
          <p className='font-gilroySemiBold text-sm text-black'>Recent Searches</p>
        </div>
      </div>
    </>
  )
}

export default Searchbox

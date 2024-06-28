import React from 'react'
import Header from './header'
import { LiveIcon } from '../../../src/svg/LiveIcon'
import { Media } from '../../svg/Media'

const Posthome = () => {
  return (
    <>
      <div className='mt-10 py-10 px-6 bg-white_100 rounded-md'>
        <div className='flex items-center gap-x-3 w-full py-2 bg-white rounded-full mb-6'>
          <div className='w-12 h-12 rounded-full bg-white_100 '>
          </div>
           <input type="text" placeholder="what's up say something" className=' focus:outline-none w-[90%]'/>
        </div>
        <div className='border-t-2 border-line_color '>
        <div className='mt-7 flex gap-x-7 items-center justify-around'> 
        <div className='flex w-[33%%] items-center gap-x-3'>
            <LiveIcon/>
          <span className='font-gilroyMedium text-black'>Live Video</span>
          </div>
          <div className='flex w-[33%%] items-center gap-x-3'>
            <Media/>
          <span className='font-gilroyMedium text-black'>Image/Gallery</span>
          </div>
          <div className='flex w-[33%%] items-center gap-x-3'>
            <LiveIcon/>
          <span className='font-gilroyMedium text-black'>Activities</span>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Posthome

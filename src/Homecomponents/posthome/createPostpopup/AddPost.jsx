import React from 'react'
import { Media } from '../../../svg/Media'
import { LiveIcon } from '../../../svg/LiveIcon'
import { CircleCloseIcon } from '../../../svg/CircleCloseIcon'
import { CircleProfileIcon } from '../../../svg/CircleProfileIcon'

const AddPost = ({ setShow , show }) => {
  return (
    <>
      <div className='p-2 border border-line_color rounded-md flex justify-between items-center'>
        <span className='font-gilroyMedium text-black text-base'>Add to your post</span>
        <div className='flex items-center gap-x-3'>
            <div className={`w-10 h-10 rounded-full cursor-pointer transition-all ease-linear duration-100 hover:bg-white_100 flex items-center justify-center ${show && "w-10 h-10 bg-white_100"}`} onClick={()=>setShow(true)}>
                <Media/>
            </div>
            <div className='w-10 h-10 rounded-full cursor-pointer transition-all ease-linear duration-100 hover:bg-white_100 flex items-center justify-center'>
                <LiveIcon/>
            </div>
            <div className='w-10 h-10 rounded-full cursor-pointer transition-all ease-linear duration-100 hover:bg-white_100 flex items-center justify-center'>
                <CircleProfileIcon/>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddPost

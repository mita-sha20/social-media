import React, { useRef, useState } from 'react'
import { Camera } from '../../svg/Camera'
import { Media } from '../../svg/Media'
import { Upload } from '../../svg/Upload'
import OutsideClick from '../../function/click'

const CoverPhoto = ({coverImage}) => {
    const [showCover, setShowcover] = useState(false);
    const showOptions = useRef(null);

    OutsideClick(showOptions, ()=>setShowcover(false))

  return (
    <>
    {
        coverImage && <img src={coverImage} className='w-full object-cover overflow-hidden' alt="cover"/>
    }
       <div className='absolute top-5 right-5'>
          <div className='flex items-center gap-x-2 px-5 py-3 bg-white rounded-md w-36 justify-center cursor-pointer' onClick={()=>setShowcover(true)}>
           <div className='text-black'>
           <Camera />
           </div>
            <span className='font-gilroyNormal text-sm text-black'>Edit photo</span>
           </div>
        <div ref={showOptions}>
        {
            showCover &&  <div className='w-[230px] bg-white shadow-md rounded-md absolute top-13 right-0 box-border'>
            <div className='flex items-center gap-x-3 cursor-pointer group hover:bg-black py-2 px-5 transition-all duration-100 ease-linear'>
            <div className='text-black group-hover:text-white transition-all duration-100 ease-linear'>
          <Media />
          </div>
           <span className='font-gilroyNormal text-sm text-black group-hover:text-white transition-all duration-100 ease-linear'>Select Files</span>
            </div>

            <div className='flex items-center gap-x-3 cursor-pointer group hover:bg-black py-2 px-5 transition-all duration-100 ease-linear'>
            <div className='text-black group-hover:text-white transition-all duration-100 ease-linear'>
          <Upload />
          </div>
           <span className='font-gilroyNormal text-sm text-black group-hover:text-white transition-all duration-100 ease-linear'>Upload photo</span>
            </div>
          </div>
          }
        </div>
          </div>
    </>
  )
}

export default CoverPhoto

import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import SettingOption from './settingOption';
import OutsideClick from '../../function/click';

const Lefthomedata = ({ data }) => {
  const [show,setShow] = useState(false);
  const Clickoutside = useRef(null);
  const Itemicon = data.icon;

   OutsideClick(Clickoutside,()=>{
    setShow(false)
   })

  const SettingsSeparation = data.title === "Settings" && (
    <>
    <div className='relative'>
    <div to = {data.to} className={`flex xl:w-auto xl:h-auto w-10 h-10 items-center justify-center xl:justify-normal xl:gap-x-4 xl:mb-5 hover:bg-black xl:px-6 xl:py-3 rounded-full cursor-pointer group transition-all ease-linear duration-100 ${show && 'bg-black'}`} onClick={()=>setShow(true)}>
       <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
        <Itemicon />
       </div>
       <div className='hidden xl:block'>
        <p className={`font-gilroyMedium text-lg text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>{data.title}</p>
       </div>
      </div>
      <div className='absolute xl:top-16 top-12 -left-2/3 lg:left-36 -translate-x-2/4' ref={Clickoutside}>
      {
        show && <SettingOption/>
      }
      </div>
    </div>
    
    </>
  )
  return (
    <>
    {SettingsSeparation ? SettingsSeparation : 
    
      <NavLink to = {data.to} className='flex xl:w-auto xl:h-auto w-10 h-10 items-center justify-center xl:justify-normal xl:gap-x-4 xl:mb-6 hover:bg-black xl:px-6 xl:py-3 rounded-full cursor-pointer group transition-all ease-linear duration-100 lg:mb-5'>
       <div className='group-hover:text-white transition-all ease-linear duration-100'>
        <Itemicon />
       </div>
       <div className='hidden xl:block'>
        <p className='font-gilroyMedium text-lg text-black group-hover:text-white transition-all ease-linear duration-100'>{data.title}</p>
       </div>
      </NavLink>
}
    </>
  )
}

export default Lefthomedata

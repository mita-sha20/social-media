import React, { useRef, useState } from 'react'
import { SearchIcon } from '../../../svg/SearchIcon';
import Searchbox from './Searchbox';
import OutsideClick from '../../../function/click';
import { LeftData } from '../../lefthome/Data';
import { Link, useParams } from 'react-router-dom';
import Lefthomedata from '../../lefthome/Lefthomedata';

const Header = ({location}) => {
    const [show , setShow] = useState(false);
    const clickoutSide = useRef(null);
    const {username} = useParams()

    const getTitle =()=>{
      if(location.pathname === "/"){
        return "News Feed"
      }else if(location.pathname === "/friends"){
        return "Friends"
      }else if(location.pathname === "/profile"){
        return "Profile"
      }else if(location.pathname.startsWith('/profile/') && username){
        return "Profile"
      }else{
        return "Social Media"
      }
    }
    OutsideClick(clickoutSide,()=>{
      setShow(false);
    })

  return (
    <>
      <div className='flex items-center justify-between pb-10 bg-white py-3'>
        <div className=''>
            <h4 className='font-gilroyBold text-2xl text-black hidden lg:block'>{getTitle()}</h4>
            <div className='lg:hidden w-16 h-16 rounded-full bg-cyan_100 mx-auto'></div>
        </div>
        <div className='lg:hidden flex items-center justify-center'>
         {
          LeftData.map((data,index)=>(
            <Lefthomedata key={index} data={data}/>
          ))
         }
        </div>
       <div className='w-10 lg:w-[30%] relative'>
       <div className='flex w-12 h-12 lg:w-[200px] lg:h-auto justify-center items-center gap-x-3 border-secondary_color border lg:py-[10px] lg:px-4 rounded-full' onClick={()=>{setShow(true)}}>
         <div className='text-secondary_color cursor-pointer'><SearchIcon/>
         </div>
         <div className='hidden lg:block'>
            <input type="text" placeholder='search' className='focus:outline-none font-gilroyNormal text-base w-full bg-transparent' />
         </div>
        </div> 
        <div className='z-10 absolute -top-6 -right-5 lg:left-[-40px]' ref={clickoutSide}>
        {show &&
        <Searchbox/>}
        </div>
       </div> 
      </div>
    </>
  )
}

export default Header;

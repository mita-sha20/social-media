import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Leftprofile = () => {
  const {userInfo} = useSelector((state)=>
    state.registration
 );
  return (
    <>
    <div className='w-16 h-16 xl:w-28 xl:h-28 rounded-full bg-cyan_100 mx-auto'>
      
      </div>
      <div className='text-center mt-3 hidden xl:block'>
          <Link to="/profile" className='font-gilroyMedium text-lg text-black'>{userInfo.username}</Link>
          <h4 className='font-gilroyNormal text-secondary_color text-base'>{userInfo.email}</h4>
      </div>
    </>
  )
}

export default Leftprofile

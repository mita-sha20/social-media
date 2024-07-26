import React, { useState } from 'react'
import { Moon } from '../../../svg/Moon'
import { Logout } from '../../../svg/Logout'
import DisplayMode from './DisplayMode'
import { useDispatch } from 'react-redux'
import { loggedOutUsers } from '../../../features/users/authSlice'
import { useNavigate } from 'react-router-dom'

const SettingOption = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(visible){
     return <DisplayMode setVisible={setVisible}/>
    }

    const handleLogout=()=>{
      localStorage.removeItem('user');
      dispatch(loggedOutUsers());
      navigate('/login')
    }

  return (
    <>
      <div className='bg-white w-[300px] shadow-md rounded-md p-4'>
        <ul>
          <li className='flex items-center gap-x-2 group cursor-pointer mb-5' onClick={()=>setVisible(true)}>
            <div className='w-10 h-10 rounded-full bg-white_100 flex items-center justify-center'>
              <Moon/>
            </div>
            <div>
              <p className='font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75'>Display and accessability</p>
            </div>
          </li>
          <li onClick={handleLogout} className='flex items-center gap-x-2 group cursor-pointer'>
          <div className='w-10 h-10 rounded-full bg-white_100 flex items-center justify-center'>
              <Logout/>
            </div>
            <div>
            <p className='font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75'>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SettingOption

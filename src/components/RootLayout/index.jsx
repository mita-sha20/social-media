import React from 'react';
import { Outlet, useLocation } from "react-router-dom"
import Lefthome from '../../Homecomponents/lefthome';
import Righthome from '../../Homecomponents/righthome/righthome';
import Header from '../../Homecomponents/posthome/header';

const RootLayout = () => {
  const location = useLocation()

  return (
    <>
         <div className={`xl:mx-16 mx-5 grid grid-cols-1 lg:grid-cols-[90px,1fr] xl:grid-cols-[1fr,3fr,1fr] lg:mt-6 mt-3  ${location.pathname === "/" ? "gap-x-24" : "gap-x-16" }`}>
        <div className='hidden lg:block sticky top-4 left-0 h-[calc(100vh-60px)]'>
          <Lefthome/>
        </div>
        <div>
          <div className='sticky top-0 left-0 z-10'>
            <Header location={location}/>
          </div>
          <Outlet />
        </div>
        <div className='hidden xl:block sticky top-4 left-0 h-[calc(100vh-60px)]'>
          <Righthome/>
        </div>
      </div>
    </>
  )
}

export default RootLayout

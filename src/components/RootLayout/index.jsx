import React from 'react';
import { Outlet } from "react-router-dom"
import Lefthome from '../../Homecomponents/lefthome';
import Righthome from '../../Homecomponents/righthome/righthome';
import Header from '../../Homecomponents/posthome/header';

const RootLayout = () => {
  return (
    <>
         <div className='xl:mx-16 mx-5 grid grid-cols-1 lg:grid-cols-[90px,1fr] xl:grid-cols-[1fr,3fr,1fr] lg:mt-6 mt-3 gap-x-6'>
        <div className='hidden lg:block'>
          <Lefthome/>
        </div>
        <div>
          <div>
            <Header/>
          </div>
          <Outlet />
        </div>
        <div className='hidden xl:block'>
          <Righthome/>
        </div>
      </div>
    </>
  )
}

export default RootLayout

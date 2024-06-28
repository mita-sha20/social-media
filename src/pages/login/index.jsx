import React from 'react'
import { Helmet } from 'react-helmet-async';
import { ToastContainer , toast } from 'react-toastify'
import Loginform from '../../components/authentication/Loginform';
import { Loginicon } from '../../svg/Loginicon';
import Leftauth from '../../components/authentication/Leftauth';


const Login = () => {
  return (
    <>
     <ToastContainer />
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className='relative z-[1]'>
      <div className='hidden lg:block w-[400px] h-[400px] bg-purple_100 rounded-full absolute -top-[180px] -left-[150px] z-[-1]'></div>
    <div className="container flex gap-x-6 justify-center items-center h-screen">
      <div className='xl:w-[45%] lg:w-[35%] hidden lg:block'>
     <Leftauth icon={<Loginicon/>} title="Login For Access" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "/>
      </div>
      <div className='lg:w-[45%] w-full xl:w-[35%]'>
      <Loginform
      toast={toast}
      />
      </div>
     </div>
    </div>
    </>
  )
}

export default Login

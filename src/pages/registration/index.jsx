import React from 'react'
import Leftauth from "../../components/authentication/Leftauth"
import { Registartionicon } from '../../svg/Registrationicon';
import Registrationform from '../../components/authentication/Registrationform';
import { Helmet } from 'react-helmet-async';
import { ToastContainer , toast } from 'react-toastify'

const Registration = () => {
  return (
    <>
    <ToastContainer />
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <div className='relative z-[1]'>
      <div className='hidden lg:block w-[400px] h-[400px] bg-purple_100 rounded-full absolute -top-[180px] -left-[150px] z-[-1]'></div>
    <div className="container flex gap-x-6 justify-center items-center h-screen">
      <div className='xl:w-[45%] lg:w-[35%] hidden lg:block'>
     <Leftauth icon={<Registartionicon/>} title="Start Your Journey" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium accusantium natus laboriosam iure nobis, soluta itaque doloremque qui odio aliquam, nihil quos vero facere perferendis fugit quia, ipsam saepe ullam nisi sint earum officia? Excepturi quos nesciunt id sunt nisi incidunt, repudiandae quia cumque illo blanditiis exercitationem voluptatum, ut placeat ad doloremque soluta accusantium repellat. "/>
      </div>
      <div className='lg:w-[45%] w-full xl:w-[35%]'>
      <Registrationform 
      toast={toast}
      />
      </div>
     </div>
    </div>
    </>
  )
}

export default Registration;

import React from 'react'
import { PuffLoader } from 'react-spinners'


const Activate = ({type, text , head , loading}) => {
  
  return (
    <>
     <div className='fixed top-0 left-0 w-full bg-blur h-screen z-10 flex justify-center items-center'>
        <div className='w-[400px] bg-white p-4 text-center shadow-lg'>
        <h3 className={`${type === "success" ? "text-green" : "text-red"} font-gilroyMedium text-lg`}>{head}</h3>
        <h5 className='font-gilroyNormal text-lg mt-5'>
            {text}
        </h5>
        <PuffLoader className='m-auto mt-2'  color="#21D997" loading={loading} size={40}/>
        </div>
     </div>
        
    </>
  )
}

export default Activate
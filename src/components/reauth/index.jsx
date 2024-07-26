import React, { useState } from 'react';
import { useReVerificationMutation } from '../../features/api/authApi';

const Reauth = ({userInfo}) => {

    const [reVerification] = useReVerificationMutation()
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const resendCode = async ()=>{
        try{
            let result = await reVerification(userInfo.token).unwrap();
            console.log(result)
        }catch(error){
            console.log(error.data.message)
        }
    }
  return (
    <>
    
    <div className='w-full p-4 shadow-md rounded-md bg-white mt-5'>
          <h4 className='text-black font-gilroyNormal text-base'>Your account is not verified. Please verify your account before it gets delete after an hour of creating.</h4>
          <button onClick = {resendCode}className='font-gilroyNormal text-blue text-sm cursor-pointer hover:underline'>Click here to re-send verification link</button>
    </div>
    </>
  )
}

export default Reauth


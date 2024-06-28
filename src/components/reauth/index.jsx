import React, { useState } from 'react';
import { useReverificationMutation } from '../../features/api/authApi';

const Reauth = ({userInfo}) => {

    const [reverification] = useReverificationMutation()
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const resendCode = async ()=>{
        try{
            result = await reverification({token : userInfo.token}).unwrap();
        }catch(error){
            console.log(error.data.message)
        }
    }
  return (
    <>
    
    <div className='w-full p-4 shadow-md rounded-md bg-white mt-5'>
          <h4 className='text-black font-gilroyNormal text-base'>Your account is verified. Please verify your account before it gets delete after an hour of creating.</h4>
          <button onClick = {resendCode}className='font-gilroyNormal text-blue text-sm cursor-pointer hover:underline'>Click here to re-send verification link</button>
    </div>
    </>
  )
}

export default Reauth


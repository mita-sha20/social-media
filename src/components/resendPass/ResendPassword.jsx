import React from 'react'
import { Link } from 'react-router-dom'
import { useSendCodeMutation } from '../../features/api/authApi'

const ResendPassword = ({user , setSuccess , success , setLoading , setError , error , setVisible}) => {

  const [sendCode] = useSendCodeMutation()
  const handleSendCode = async()=>{
    try{
     setLoading(false)
     let result = await sendCode(user.email).unwrap()
     setSuccess(result.message);
     setError("")
     setTimeout(() => {
      setVisible(2)
      setSuccess("")
     }, 3000);
    }catch(error){
      setError(error.data.message)
    }
  }

  return (
    <>
    <div className='bg-white min-w-[120px] w-[520px] px-8 py-4 rounded-md'>
     <h2 className='font-gilroyNormalItalic text-xl text-black border-b border-line_color pb-3'>
      Reset Password
     </h2>
     <p className='font-gilroyMedium text-base text-title_color mt-2'>
     How do you want to recieve the code to reset your password
     </p>

     <div className='mt-5 mx-auto w-16 h-16 bg-secondary_bg rounded-full overflow-hidden'>
      <img src={user.picture} className='w-full h-full object-cover'/>
     </div>

     <div className='flex justify-center items-center gap-x-3 mt-3'>
        <input type="radio" defaultChecked={true}/>
        <span className='font-gilroyNormal text-sm text-black'>
          {user.email}</span>
     </div>
     {
      success && <p className='font-gilroyNormal text-base text-green text-center mt-3'>{success}</p>
     }
     {
      error && <p className='font-gilroyNormal text-base text-red text-center mt-3'>{error}</p>
     }
     <div className='text-center'>
        <Link to="/login">
        <button className='bg-[#f0f2f5] p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-title_color mr-3'>Not You?</button>
        </Link>
     <button onClick={handleSendCode}className='bg-primary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-white mr-3'>Continue</button>
     </div>
     </div>
    </>
  )
}

export default ResendPassword

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { newPassword } from '../../validation'
import { useChangePasswordMutation } from '../../features/api/authApi'


const ChangePassword = ({user , setSuccess , success , setLoading , setError , error }) => {

    const [changePassword] = useChangePasswordMutation();
    const navigate = useNavigate()
    const initialState = {
        password:"",
    }
    const formik = useFormik({
    initialValues: initialState,
    validationSchema: newPassword,
    onSubmit : ()=>{
    changePreviouspassword()
    }      
    })
     
  const changePreviouspassword = async()=>{
      try{
        setLoading(true)
       let result = await changePassword({
        email: user.email,
        password: formik.values.password
       }).unwrap()
        setSuccess(result.message)
        setError("")
        setTimeout(() => {
          navigate("/login")
        }, 3000);
       }catch(error){
        setError(error.data.message)
       }
    }
    let {errors, touched} = formik

    console.log(formik)
  return (
    <>
      <div>
      <div className='bg-white min-w-[120px] w-[520px] px-8 py-4 rounded-md'>
     <h2 className='font-gilroyNormalItalic text-xl text-black border-b border-line_color pb-3'>
      Change password
     </h2>
     <p className='font-gilroyMedium text-base text-title_color mt-2'>
     Pick a strong password
     </p>
     <form onSubmit={formik.handleSubmit}>
        <input type='password' name='password' autoComplete='off' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder='enter your new password' className='w-full p-3 mt-5 rounded-md border-solid border-line_color font-gilroyNormal text-sm focus:outline-none mb-5'/>
       {
        errors.password && touched.password && <p className='text-red text-base font-gilroyNormal'>{errors.password}</p>
       }
       {
      success && <p className='font-gilroyNormal text-base text-green text-center mt-3'>{success}</p>
     }
     {
      error && <p className='font-gilroyNormal text-base text-red text-center mt-3'>{error}</p>
     }
        <div className='w-full h-[1px] bg-line_color mt-2'></div>
        <Link to="/login" className=''>
        <button className='bg-[#f0f2f5] p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-title_color mr-3'>
            Cancel
        </button>
        </Link>
        <button type='submit' className='bg-primary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-white mr-3'>
            Continue
        </button>
     </form>
     </div>
      </div>
    </>
  )
}

export default ChangePassword

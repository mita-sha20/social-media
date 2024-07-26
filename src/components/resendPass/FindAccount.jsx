import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { findUser } from '../../validation'
import { useMatchUserMutation } from '../../features/api/authApi';


const FindAccount = ({setLoading , setError , setUser , error , setVisible}) => {

    const [matchUser] = useMatchUserMutation();

    const initialState ={
        email:"",
    }
   
    const formik = useFormik({
    initialValues: initialState,
    validationSchema: findUser,
    onSubmit : ()=>{
      findUserResult()
    } 
    })

    const findUserResult = async()=>{
      try{
        setLoading(true)
        let result = await matchUser(formik.values.email).unwrap()
        setUser(result)
        setError("")
        setVisible(1)
      }catch(error){
        setError(error.data.message)
      }
    }

    let {errors, touched} = formik

   
  
  return (
    <>
    <div>
    <div className='bg-white min-w-[120px] w-[520px] px-8 py-4 rounded-md'>
     <h2 className='font-gilroyNormalItalic text-xl text-black border-b border-line_color pb-3'>
      Find Your Account
     </h2>
     <p className='font-gilroyMedium text-base text-title_color mt-2'>
      Please enter your email address or mobile number to find your account
     </p>
     <form onSubmit={formik.handleSubmit}>
        <input type='email' name='email' autoComplete='off' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='email address or mobile number' className='w-full p-3 mt-5 rounded-md border-solid border-line_color font-gilroyNormal text-sm focus:outline-none mb-5'/>
       {
        errors.email && touched.email && <p className='text-red text-base font-gilroyNormal'>{errors.email}</p>
       }
       {
        error && <p className='text-red text-base font-gilroyNormal'>{error}</p>
       }
        <div className='w-full h-[1px] bg-line_color mt-2'></div>
        <Link to="/login" className=''>
        <button className='bg-[#f0f2f5] p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-title_color mr-3'>
            Cancel
        </button>
        </Link>
        <button type='submit' className='bg-primary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyNormal text-sm md:text-base text-white mr-3'>
            Search
        </button>
     </form>
     </div>
    </div>
    </>
  )
}

export default FindAccount




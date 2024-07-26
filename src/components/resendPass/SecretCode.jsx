import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { userCode } from '../../validation'
import { useVerifyCodeMutation } from '../../features/api/authApi'


const SecretCode = ({user , setSuccess , success , setLoading , setError , error , setVisible}) => {

    const [verifyCode] = useVerifyCodeMutation()

    const initialState ={
        code:"",
    }
    const formik = useFormik({
    initialValues: initialState,
    validationSchema: userCode,
    onSubmit : ()=>{
    verifySecretCode();
    } 
    })
    const verifySecretCode = async()=>{
     try{
      setLoading(true);
      let result = await verifyCode({email: user.email ,code: formik.values.code}).unwrap();
      setSuccess(result.message);
      setError("");
      setTimeout(() => {
        setVisible(3);
        setSuccess("");
       }, 3000);
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
       Code Verification
     </h2>
     <p className='font-gilroyMedium text-base text-title_color mt-2'>
       Please enter code that been sent to your email
     </p>
     <form onSubmit={formik.handleSubmit}>
        <input type='text' name='code' autoComplete='off' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.code} placeholder='enter verification code' className='w-full p-3 mt-5 rounded-md border-solid border-line_color font-gilroyNormal text-sm focus:outline-none mb-5'/>
       {
        errors.code && touched.code && <p className='text-red text-base font-gilroyNormal'>{errors.code}</p>
       }
       {
        success && <p className='text-green text-base font-gilroyNormal'>{success}</p>
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
            Continue
        </button>
     </form>
     </div>
      </div>
    </>
  )
}

export default SecretCode

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signIn } from '../../validation';
import { useLoggedInUserMutation } from '../../features/api/authApi';
import { useDispatch } from 'react-redux';
import { loggedInUsers } from '../../features/users/authSlice';


const initialState = {

  email:"",
  password:"",

}

const Loginform = ({ toast }) => {

  const [loggedInUser, {isLoading}] = useLoggedInUserMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginUser = async()=>{
    const loginMutation = await loggedInUser({
      email: formik.values.email,
      password: formik.values.password,
    }); 
   
      if(loginMutation?.error){
       toast.error(loginMutation?.error?.data?.message,{
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: true,
         pauseOnHover: false,
         theme: "light"
        }
        )
        return;
     } 
     const {message, ...rest} = loginMutation.data;
     localStorage.setItem("user",JSON.stringify(rest))
     dispatch(loggedInUsers(rest))
     navigate("/");
  }

  const formik = useFormik({
    initialValues:initialState,
    validationSchema: signIn,
    onSubmit: ()=>{
       loginUser();
       formik.resetForm();
    }
})
const { errors , touched } = formik;

  return (
    <>
       <form onSubmit={formik.handleSubmit}>
          

            <input type='email' className={
              errors.email && touched.email ? 'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none' : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            }placeholder='example@gmail.com' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='email' value={formik.values.email}/>
            {
              errors.email && touched.email && <p className='font-gilroyNormal text-red text-sm my 2'>{errors.email}</p>
            }
            <input type='password' className={
              errors.password && touched.password ? 'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none' : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            } placeholder='Password'  onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='password' value={formik.values.password}/>
            {
              errors.password && touched.password && <p className='font-gilroyNormal text-red text-sm my 2'>{errors.password}</p>
            }
           

            <div className='sm:flex mt-5 sm:mt-0 justify-between items-center'>
            <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-gilroyNormal text-white'>Login</button>
            <p className='font-gilroyMedium xl:text-sm text-base 2xl:text-base'>Don't have an account?<Link to="/registration" className='text-primary_color underline'>Sign Up</Link></p>
            </div>
        </form>
    </>
  )
}

export default Loginform

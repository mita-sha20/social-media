import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUp } from '../../validation';
import DateofBirth from './DateofBirth';
import Gender from './Gender';
import { useAddUserMutation } from '../../features/api/authApi';


const initialState = {
    fName:"",
    lName:"",
    email:"",
    password:"",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDay(),
    gender:"",
}


const Registrationform = ({ toast }) => {
  const [ageError , setAgeerror] = useState("");
  const [addUser , {isLoading} ] = useAddUserMutation()
  const navigate = useNavigate();

  const registration = async()=>{
   const signUpMutation = await addUser({
    fName: formik.values.fName,
    lName: formik.values.lName,
    email: formik.values.email,
    password: formik.values.password,
    bYear: formik.values.bYear,
    bMonth: formik.values.bMonth,
    bDay: formik.values.bDay,
    gender: formik.values.gender,
  })

  if(signUpMutation?.data){
   toast.success(signUpMutation?.data?.message,{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    pauseOnHover: false,
    theme: "light"
   }
   )
   setTimeout(()=>{
    navigate("/login")
  },2000)
  }else if(signUpMutation?.error){
    toast.error(signUpMutation?.error?.data?.message,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false,
      theme: "light"
     }
     )
  }
}

  const formik = useFormik({
    initialValues:initialState,
    validationSchema: signUp,
    onSubmit: ()=>{
        const currentDate = new Date();
        const pickedDate = new Date(
          formik.values.bYear,
          formik.values.bMonth - 1,
          formik.values.bDay,
        );
        const adult = new Date(1970 + 18, 0 , 1 )
        const tooOld = new Date(1970 + 70 , 0 , 1 ) 
        if(currentDate - pickedDate < adult){
          return setAgeerror("Underage , you are not 18");
        }else if(currentDate - pickedDate > tooOld){
          return setAgeerror("more than 70")
        }
        registration();
        formik.resetForm();
        setAgeerror("");
       
    }
})

const tempYears = new Date().getFullYear();

const years = Array.from(new Array(105),(val,index) => tempYears - index)

const months = Array.from(new Array(12),(val,index) => 1 + index);

const day =()=>{
  return new Date(formik.values.bYear,formik.values.bMonth,0).getDate()
}

const getdates = Array.from(new Array(day()),(val,index) => 1 + index);

const { errors , touched } = formik;


  return (
    <div className='w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none'>
      <div>
        <form onSubmit={formik.handleSubmit}>
            <input type='text' className={
              errors.fName && touched.fName ? 'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none' : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            } placeholder='First Name' 
            onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='fName' value={formik.values.fName}/>
            {
              errors.fName && touched.fName && <p className='font-gilroyNormal text-red text-sm my 2'>{errors.fName}</p>
            }

            <input type='text' className={
              errors.lName && touched.lName ? 'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none' : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'
            } placeholder='Last Name' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='lName' value={formik.values.lName}/>
             {
              errors.lName && touched.lName && <p className='font-gilroyNormal text-red text-sm my 2'>{errors.lName}</p>
            }

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
           
            <DateofBirth formik={formik} years={years} months={months} getdates={getdates} ageError={ageError}/>

            <Gender formik={formik} errors={errors} touched={touched}/>

            <div className='sm:flex mt-5 sm:mt-0 justify-between items-center'>
            <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full font-gilroyNormal text-white'>Submit</button>
            <p className='font-gilroyMedium xl:text-sm text-base 2xl:text-base'>Already have an account?<Link to="/login" className='text-primary_color underline'>Sign In</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Registrationform;

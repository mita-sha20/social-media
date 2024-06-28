import React from 'react'

const Gender = ({formik,errors,touched}) => {
  return (
    <div>
        <div className='mt-5'>
            <input type='radio' value='male' name='gender'
            onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} 
            id='male'
            />
            <label htmlFor='male' className='font-gilroyNormal ml-2'>Male</label>
            <input type='radio' value='female' name='gender' className='ml-5' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} id='female'/>
            <label htmlFor='female' className='font-gilroyNormal ml-2'>Female</label>
            </div>
            {
              errors.gender && touched.gender && <p className='font-gilroyNormal text-red text-sm my 2'>{errors.gender}</p>
            }
    </div>
  )
}

export default Gender;

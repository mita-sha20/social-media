import React from 'react'

const DateofBirth = ({formik, years, months, getdates, ageError}) => {
  return (
    <div>
       <div className='flex gap-x-1 lg:gap-x-7'>
                <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bYear' value={formik.values.bYear}> 
                    <option>Year</option>
                    {
                      years.map((year,index)=>(
                        <option key={index}>{year}</option>
                      ))
                    }
                  
                </select>
                <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bMonth' value={formik.values.bMonth}> 
                    <option>Month</option>
                    {
                      months.map((month,index)=>(
                        <option key={index}>{month}</option>
                      ))
                    }
                </select>
                <select className='border border-line_color w-[33%] font-gilroyNormal p-2' onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} name='bDay' value={formik.values.bDay}> 
                    <option>Day</option>
                    {
                      getdates.map((date,index)=>(
                        <option key={index}>{date}</option>
                      ))
                    }
                </select>
            </div>
            {
              ageError && <p className='font-gilroyNormal text-red text-sm my 2'>{ageError}</p>
            }
    </div>
  )
}

export default DateofBirth

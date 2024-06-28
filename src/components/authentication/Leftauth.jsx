import React from 'react'

const Leftauth = ({title, description,icon}) => {
  return (
    <div>
      <div>
        {icon}
      </div>
      <h1 className='font-gilroyBold 2xl:text-4xl text-2xl 3xl:text-5xl text-primary_color'>
        {title}
      </h1>
      <p className='font-gilroyNormal text-base xl:text-lg text-text_color mt-3'>
        {description}
      </p>
    </div>
  )
}

export default Leftauth;

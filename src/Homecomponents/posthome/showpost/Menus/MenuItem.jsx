import React from 'react'

const MenuItem = ({icon , title}) => {
    const Icon = icon;
  return (
    <>
      <div>
        <div className='flex items-center gap-x-2 cursor-pointer mb-4'>
        <Icon />
        <span className='font-gilroyNormal text-base'>{title}</span>
        </div>
      </div>
    </>
  )
}

export default MenuItem;

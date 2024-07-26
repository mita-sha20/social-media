import React from 'react'


const PostError = ({error , setError}) => {
  return (
    <>
      <div className='postError flex items-center justify-center h-full bg-blur absolute top-0 left-0 z-10'>
<div className='text-center'>
    <p className='mx-auto w-[80%] font-gilroyNormal text-lg text-red'>
    {error}
    </p>
    <button className='px-4 py-2 bg-blue rounded-md font-gilroyNormal text-base text-white mt-3' onClick={()=>setError("")}>
        Try Again</button>
</div>
      </div>
    </>
  )
}

export default PostError

import React from 'react'
import RightFriends from './rightFriends'
import Stories from './stories'

const Righthome = () => {
  return (
    <>
      <div>
        <RightFriends/>
      </div>
      <div className='mt-10'>
        <Stories/>
      </div>
    </>
  )
}

export default Righthome

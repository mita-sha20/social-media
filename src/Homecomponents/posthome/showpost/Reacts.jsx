import React from 'react'
import { reactEmoji } from './reactEmoji'

const Reacts = ({ setVisible }) => {
  return (
    <>
      <div className='flex items-center gap-x-1' onMouseOver={()=>{
              setTimeout(() => {
                setVisible(true)
              }, 1000);
              }} 
              onMouseLeave={()=>{
                setTimeout(() => {
                  setVisible(false)
                }, 1000);
              }}>
        {
            reactEmoji.map((react,i)=>(
                <img key={i} src={react.image} alt="image" className='w-12 h-11 cursor-pointer scale-[1.5] hover:scale-[1.9] transition-all ease-linear duration-100'/>
            ))
        }
      </div>
    </>
  )
}

export default Reacts

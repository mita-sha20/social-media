import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useState } from 'react'
import Feeling from '../../../svg/Feeling';

const EmojiPickers = ({ text, setText , textRef , changePart }) => {
    const [picker, setpicker] = useState(false);
    const [cursorPosition, setCursorposition] = useState();

    const handlemoji =({emoji},e)=>{
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0,ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end
        setText(newText);
        setCursorposition(start.length + emoji.length)
      };
  
      useEffect(()=>{
          textRef.current.selectionEnd = cursorPosition
      },[cursorPosition])

  return (
    <>
     <div className={`${changePart ? "flex justify-between mt-5" : "mt-5"}`}>
                <textarea ref={textRef} 
                value={text}
                maxLength={100}
                onChange={(e)=>setText(e.target.value)} placeholder="what's up say something" className={`${changePart ? "w-[90%] min-h-24 outline-none p-2 font-gilroyMedium text-base resize-none" : "w-full min-h-24 outline-none p-2 font-gilroyMedium text-base resize-none"}`} />
                {
                  changePart &&   <div className='cursor-pointer relative'>
                  <div onClick={()=> setpicker((prev)=> !prev)}>
                  <Feeling />
                  </div>
               {picker && <div className='absolute top-0 right-8 z-10'><EmojiPicker onEmojiClick={handlemoji}/>
               </div>}
              </div>
                }
             </div>
           {
            !changePart &&   <div className='flex items-center justify-between mb-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-cyan_100 to-purple_100 rounded-md cursor-pointer'>
            </div>
         
            <div className='cursor-pointer relative'>
<div onClick={()=> setpicker((prev)=> !prev)}>
<Feeling />
</div>
{picker && <div className='absolute -top-[465px] -left-[315px]'><EmojiPicker onEmojiClick={handlemoji}/>
</div>}
</div>
         </div>
           }
    </>
    
  )
}

export default EmojiPickers;

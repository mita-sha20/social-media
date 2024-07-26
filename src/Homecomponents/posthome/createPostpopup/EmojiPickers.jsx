import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react'
import Feeling from '../../../svg/Feeling';
import { postBackgroud } from './postBackgroud';

const EmojiPickers = ({ text, setText , textRef , background , setBackground, changePart }) => {
    const [picker, setpicker] = useState(false);
    const [cursorPosition, setCursorposition] = useState();
    const [showbg, setShowbg] = useState(false)
    const bgRef = useRef(null);

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

      const handleBackground = (index)=>{
        bgRef.current.style.backgroundImage = `url(${postBackgroud[index]})`
        setBackground(postBackgroud[index])
        bgRef.current.classList.add("bgPost");
        textRef.current.focus();
      };

      const removeBackground = ()=>{
        bgRef.current.style.backgroundImage = "";
        setBackground("")
        bgRef.current.classList.remove("bgPost");
        textRef.current.focus();
      }

  return (
    <>
     <div className={`${changePart ? "flex justify-between mt-5" : "mt-5"}`}>
               <div className={`${changePart ? "min-h-24 mb-4 w-4/5" : "min-h-24 mb-4"}`} ref={bgRef}>
               <textarea ref={textRef} 
                value={text}
                maxLength={100}
                onChange={(e)=>setText(e.target.value)} placeholder="what's up say something" className={`${changePart ? "w-[90%] outline-none p-2 font-gilroyMedium text-base resize-none" : "w-full outline-none p-2 font-gilroyMedium text-base resize-none bg-transparent"}`} 
                style={{
                  paddingTop: `${background ? 
                    Math.abs(textRef.current.value.length * 0.1 - 25) : "0"}%`,
                }}
                />
                
               </div>
                {
                  changePart &&  <div className='cursor-pointer relative'>
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
              <div className='flex items-center gap-x-1'>
              <div className='w-8 h-8 bg-gradient-to-r from-cyan_100 to-purple_100 rounded-md cursor-pointer' onClick={()=>setShowbg((prev)=> !prev)}>
              </div>
              {
              showbg && 
              <>
              <div className='w-8 h-8 bg-white rounded-md cursor-pointer border border-line_color' onClick={()=>removeBackground()}>
              </div>
              {postBackgroud.map((item, index)=>(
                <img src={item} key={index} alt='img' className='w-8 h-8 object-cover rounded-md cursor-pointer' onClick={()=>handleBackground(index)}/>
             ))}
             </>
              }
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

import React, { useEffect, useRef, useState } from 'react'
import avatarImage from '../../../../src/assets/defaultImage/avatar.png'
import Feeling from '../../../svg/Feeling'
import { Media } from '../../../svg/Media'
import EmojiPicker from 'emoji-picker-react'
import { CircleCloseIcon } from '../../../svg/CircleCloseIcon'


const CreateComment = ({ userInfo ,
    text, setText, commentimg, setcommentimg, error, setError , textRef
}) => {

  const [picker, setPicker] = useState(false)
  const [cursorPosition, setCursorposition] = useState();
  const choosefile = useRef(null)

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

  const handleImageUpload =(e)=>{
   const files = e.target.files[0]
   if(files.type !== "image/jpeg" && files.type !== "image/png" && files.type !== "image/webp" && files.type !== "image/gif" )
   {
    setError(`${files.name} unsupported files!`);
    return;
   }
   else if(files.size > 1024 * 1024 *5){
    setError(`${files.name} unsupported files!`);
    return;
   }
   const readFile = new FileReader()
   readFile.readAsDataURL(files)
   readFile.onload = (finishedRead)=>{
     setcommentimg(finishedRead.target.result)
   }
  }
 console.log(commentimg);
  return (
    <div className='relative'>
      <div className='flex items-center gap-x-3'>
        <div className='w-9 h-9 overflow-hidden rounded-full'>
           <img src={userInfo.picture || avatarImage} alt="picture" className='w-full h-full object-cover'/>
        </div>
        <div className='w-[92%] bg-white_100 rounded-full py-3 px-4 box-border flex justify-between items-center'>
           <input type='file' ref={choosefile} onChange={handleImageUpload}  accept='image/jpeg,image/png,image/webp,image/gif' hidden/>
           <input ref={textRef} placeholder={`comment as ${userInfo.username}`} className='w-[87%] focus:outline-none bg-transparent font-gilroyNormal' onChange={(e)=> setText(e.target.value)} value={text} type='text'/>

           <div className='flex items-center gap-x-4 relative'>
            <div className='cursor-pointer' onClick={()=>setPicker((prev)=>!prev)}>
            <Feeling />
            </div>
            {picker && <div className='absolute -top-[465px] -left-[315px]'><EmojiPicker onEmojiClick={handlemoji}/>
            </div>}
           <div className='cursor-pointer' onClick={()=> choosefile.current.click()}>
           <Media />
           </div>
           </div>
        </div>
      </div>
      <div>
        {
          commentimg && (
            <div className='w-48 overflow-hidden rounded-md mt-5 relative'>
              <img src={commentimg} className='w-full h-full object-cover '/>
              <div className='absolute top-1 right-1 cursor-pointer' onClick={()=>setcommentimg("")}>
              <CircleCloseIcon />
              </div>
            </div>
          )
        }
      </div>
      {error && <div className='postError absolute flex items-center justify-between h-full bg-blur top-0 left-0 z-10 gap-x-3'>
       <p className='text-red font-gilroyMedium text-lg w-[85%]'>{error}</p>
       <button className='px-4 py-2 bg-blue rounded-md font-gilroyNormal text-base text-white' onClick={()=>setError("")}>
       Try Again</button>
       </div>}
    </div>
  )
}

export default CreateComment

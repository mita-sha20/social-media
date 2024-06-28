import React, { useEffect, useRef, useState } from 'react'
import { CircleCloseIcon } from '../../../svg/CircleCloseIcon'
import AddPost from './AddPost';
import EmojiPickers from './EmojiPickers';
import ImageViewer from './ImageViewer';


const CreatePostPopUp = () => {
   
    const [text,setText] = useState("");
    const [show,setShow] = useState(false);
    const [image,setImage] = useState([])
    const textRef = useRef(null);

   
  return (
    <>
      <div className='absolute top-0 left-0 w-full bg-blur h-screen z-10 flex justify-center items-center '>
        <div className='w-[30%] bg-white shadow-md'>
           <div className='border-b border-white_100 p-2 relative'>
             <h3 className='font-gilroyBoldtext-lg text-black text-center'>Create Post</h3>
             <div className='absolute top-1 right-2 text-secondary_color cursor-pointer'>
                <CircleCloseIcon />
             </div>
           </div>
           <div className='px-3 py-4'>
             <div className='flex items-center gap-x-3'>
             <div className='w-12 h-12 rounded-full bg-white_100 '>
             </div>
             <h4 className='font-gilroyMedium text-base text-black'>Our new project</h4>
             </div>
             {
              !show ?  
              <>
               <EmojiPickers text={text} setText={setText} textRef={textRef}/>
               <div>
                <AddPost setShow={setShow} show={show}/>
               </div>
              </>
              : 
              <>
              <ImageViewer text={text} setText={setText} textRef={textRef} image={image} setImage={setImage} setShow={setShow}/>
              <div>
                <AddPost setShow={setShow} show={show}/>
               </div>
              </>
             }
          
             <div className='mt-3'>
                <button className='w-full bg-white_100 text-black p-2 font-gilroyMedium text-base rounded-md hover:text-white hover:bg-black transition-all ease-linear duration-100'>Post</button>
             </div>
           </div>
        </div> 
      </div>
    </>
  )
}

export default CreatePostPopUp;

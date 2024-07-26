import React, { useEffect, useRef, useState } from 'react'
import { CircleCloseIcon } from '../../../svg/CircleCloseIcon'
import AddPost from './AddPost';
import EmojiPickers from './EmojiPickers';
import ImageViewer from './ImageViewer';
import OutsideClick from '../../../function/click';
import { useCreatePostMutation, useUploadImageMutation } from '../../../features/api/authApi';
import { useSelector } from 'react-redux';
import PostError from './PostError';
import { PulseLoader } from 'react-spinners'
import dataURItoBlob from '../../../helpers/dataURItoBlob';

const CreatePostPopUp = ({setVisible}) => {
    const [background, setBackground] = useState("");
    const [text,setText] = useState("");
    const [show,setShow] = useState(false);
    const [image,setImage] = useState([]);
    const [createPost] = useCreatePostMutation();
    const [uploadImage] = useUploadImageMutation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {userInfo} = useSelector((state)=>
      state.registration
   );
    const textRef = useRef(null);
    const postPopup = useRef(null);

    OutsideClick(postPopup, ()=>{
      setVisible(false)
    })

    const handlePostSubmission = async()=>{
     try{
      let response;
      setLoading(true)
      if(background){
        response = await createPost({
          type: null,
          images: null,
          text,
          background,
          user: userInfo.id,
          token: userInfo.token
                }).unwrap();
      }
      else if(image && image.length){
        const postImages = image.map((item)=> dataURItoBlob(item));
        const path = `${userInfo.username.replace(/\s+/g, "_")}/post_images`
        let formData = new FormData()
        formData.append("path",path)
        postImages.forEach((img)=>{
          formData.append("file",img)
        })
        const responseImage = await uploadImage({
          formData,
          path,
          token: userInfo.token
        }).unwrap();
        response = await createPost({
          type: null,
          images: responseImage,
          text,
          background: null,
          user: userInfo.id,
          token: userInfo.token
                }).unwrap();
      }
      else if(text){
        response = await createPost({
          type: null,
          images: null,
          text,
          background: null,
          user: userInfo.id,
          token: userInfo.token
                }).unwrap();
      }else{
        setError("Please choose a file")
        setLoading("");
        return
      }
      if(response.status === "done"){
        setLoading("")
        setText("")
        setBackground("")
        setVisible(false)
      }
     }catch(error){
      setError(error.message)
     }
    }
   
  return (
    <>
      <div className='absolute top-0 left-0 w-full bg-blur h-screen z-10 flex justify-center items-center '>
       
        <div className='w-[30%] bg-white shadow-md relative' ref={postPopup}>
        {
          error && <PostError error={error} setError={setError}/>
        }
           <div className='border-b border-white_100 p-2 relative'>
             <h3 className='font-gilroyBoldtext-lg text-black text-center'>Create Post</h3>
             <div className='absolute top-1 right-2 text-secondary_color cursor-pointer' onClick={()=>setVisible(false)}>
                <CircleCloseIcon />
             </div>
           </div>
           <div className='px-3 py-4'>
             <div className='flex items-center gap-x-3'>
             <div className='w-12 h-12 rounded-full bg-white_100 '>
             </div>
             <h4 className='font-gilroyMedium text-base text-black'>{userInfo.username}</h4>
             </div>
             {
              !show ?  
              <>
               <EmojiPickers text={text} setText={setText} textRef={textRef} background={background} setBackground={setBackground}/>
               <div>
                <AddPost setShow={setShow} show={show}/>
               </div>
              </>
              : 
              <>
              <ImageViewer text={text} setText={setText} textRef={textRef} image={image} setImage={setImage} setShow={setShow}
              setError={setError}/>
              <div>
                <AddPost setShow={setShow} show={show}/>
               </div>
              </>
             }
          
             <div className='mt-3'>
               {
                text == "" && image.length == 0 ? 
                <button disabled
                className='w-full bg-white_100 text-black p-2 font-gilroyMedium text-base rounded-md'>Post</button>
                : loading ? 
                (
                  <button onClick={handlePostSubmission} disabled={loading} className='w-full bg-white_100 text-black p-2 font-gilroyMedium text-base rounded-md hover:text-white hover:bg-black transition-all ease-linear duration-100'><PulseLoader color="white" size={5}/></button>
                )
                :
                <button onClick={handlePostSubmission} className='w-full bg-white_100 text-black p-2 font-gilroyMedium text-base rounded-md hover:text-white hover:bg-black transition-all ease-linear duration-100'>Post</button>
               }
             </div>
           </div>
        </div> 
      </div>
    </>
  )
}

export default CreatePostPopUp;

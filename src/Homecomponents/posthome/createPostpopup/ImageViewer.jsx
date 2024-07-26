import React, { useRef } from 'react'
import EmojiPickers from './EmojiPickers'
import { CircleCloseIcon } from '../../../svg/CircleCloseIcon';
import { Media } from '../../../svg/Media';

const ImageViewer = ({ text, setText , textRef , image , setImage , setShow , setError }) => {
    const chooseFile = useRef(null);
    const handleImageUpload=(e)=>{
      let file = Array.from(e.target.files);
      file.forEach((img)=>{
        if(img.type !== "image/jpeg" && img.type !== "image/png" && img.type !== "image/webp" && img.type !== "image/gif"){
          file = file.filter((item)=> item.name !== img.name);
          setError(`${img.name} unsupported files!`);
          return
        }
        else if(img.size > 1024 * 1024 *5){
          file = file.filter((item)=> item.name !== img.name);
          setError(`${img.name} unsupported files!`);
          return
        }
        const renderFiles = new FileReader()
        renderFiles.readAsDataURL(img)
        renderFiles.onload = (renderImage)=>{
            setImage((images)=>[...images, renderImage.target.result])
        }
      })
    }
  return (
    <>
      <EmojiPickers text={text} setText={setText} textRef={textRef} changePart/>
      <div className='p-2 border border-line_color rounded-md mb-5'>
        <div className='w-full h-[350px] bg-white_100 rounded-md'>
          <input type="file" multiple 
          accept='image/jpeg,image/png,image/webp,image/gif' 
          className='hidden' ref={chooseFile} onChange={handleImageUpload}/>
          {
            image && image.length ? 
            <div className='relative h-full'>
              <div className='absolute top-3 left-3'>
              <div className='flex items-center gap-x-3 bg-white rounded-md p-2 cursor-pointer' onClick={()=>chooseFile.current.click()}>
                <Media />
                <span className='font-gilroyNormal text-base text-black'>Add photoes/videos</span>.
              </div>
              </div>
              <div className='absolute top-3 right-3 z-10 w-8 h-8 flex justify-center items-center bg-white rounded-full cursor-pointer' onClick={()=> setImage([])}>
                <CircleCloseIcon />
              </div>
            <div className={`${image.length === 1 ? "overflow-hidden w-full h-full" 
            : image.length === 2 
            ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2" 
            : image.length === 3 
            ?  "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
            : image.length === 4
            ?
            "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
            : image.length >= 5
            ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
            : "overflow-hidden"}`}>
            
                {image.slice(0, 4).map((img, index)=>
                    <img src={img} key={index} className={`object-cover w-full h-full ${image.length === 3 ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3" 
                      : image.length === 4 &&  "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"}`} alt="img"/>
                    )
            }
            {
              image.length >= 5 &&  <div className='absolute bottom-[85px] right-[50px] -translate-x-[50%] -translate-y-[50%] w-10 h-10 bg-white rounded-full flex justify-center items-center'>
              <span className='font-gilroyMedium text-base text-black'>+{image.length - 4}</span>
            </div>
            }
            </div>
            </div>
            : <>
            <div className='relative flex justify-center items-center h-full '>
                <div className='absolute top-2 right-2 text-secondary_color cursor-pointer' onClick={()=> setShow(false)}>
                   <CircleCloseIcon />
                </div>
                <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-white bg-black' onClick={()=>chooseFile.current.click()}>
                <Media/>
                </div>
                <div className='mt-3'>
                    <p className='font-gilroyMedium text-lg text-center'>Add photoes/videos</p>
                    <p className='font-gilroyMedium text-lg text-center '>or drag and drop</p>
                </div>
            </div>
            </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default ImageViewer

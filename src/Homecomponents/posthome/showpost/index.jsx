import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import avatarImage from '../../../../src/assets/defaultImage/avatar.png'
import { formatDistance } from 'date-fns'
import { Dot } from '../../../svg/Dot'
import { Like } from '../../../svg/Like'
import { Comment } from '../../../svg/Comment'
import { Share } from '../../../svg/Share'
import Reacts from "./Reacts"
import CreateComment from './CreateComment'
import PostMenu from './Menus/PostMenu'

const ShowPost = ({ post , userInfo }) => {

  const [visible, setVisible] = useState(false)
  const [menuvisible, setmenuVisible] = useState(false)
  const [text, setText] = useState("")
  const [commentimg, setcommentimg] = useState("")
  const [error, setError] = useState("")
  const textRef = useRef(null)

  return (
    <>
      <div className='w-full shadow-md rounded-md p-3 mb-5'>
        <div className='flex items-center justify-between mb-5'>
          <div className='w-2/4 flex items-center gap-x-4'>
          <div  className='w-12 h-12 overflow-hidden rounded-full'>
            <Link to=
            {`/profile/${post?.user?.username}`}
            >
            <img className='w-full h-full object-cover' 
            src={post?.user?.picture || avatarImage} 
            alt="profile picture"/>
            </Link>
          </div>
          <div>
            <Link to=
            {`/profile/${post?.user?.username}`} 
            className='font-gilroyMedium text-base text-black'>
            {post?.user?.username} 
            </Link>
            <span className='font-gilroyNormal text-sm text-secondary_color block'>
                {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
            </span>
          </div>
          </div>
          <div className='relative'>
            <div className='text-blue cursor-pointer w-10 h-10 rounded-full hover:bg-white_100 transition-all ease-linear duration-100 flex justify-center items-center' onClick={()=> setmenuVisible(true)}>
            <Dot />
            </div>
            {
              menuvisible && <PostMenu setmenuVisible={setmenuVisible} postUserId={post.user._id} userInfo={userInfo} postImages={post?.images}/>
            }
          </div>
        </div>
        {
          post.background ? 
          <div className='h-[350px] flex justify-center items-center' style={
            {backgroundImage : `url(${post.background})`,
             backgroundRepeat : "no-repeat",
             backgroundSize : "cover",
             backgroundPosition: "center",
          }
          }>
          <h4 className='font-gilroyNormal text-xl text-white'>{post.text}</h4>
          </div> : 
          <>
          <div>
          <h4 className='font-gilroyNormal text-lg text-black mb-5'>{post.text}</h4>
          </div>
          {
            post.images && post.images.length && 
            (
              <div className={`relative ${post.images === 1 ? "overflow-hidden w-full h-full" 
                : post.images.length === 2 
                ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2" 
                : post.images.length === 3 
                ?  "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : post.images.length === 4
                ?
                "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : post.images.length >= 5
                ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : "overflow-hidden"}`}>
                
                    {post.images.slice(0, 4).map((img, index)=>
                        <img src={img.url} key={index} className={`object-cover w-full h-full ${post.images.length === 3 ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3" 
                          : post.images.length === 4 &&  "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"}`} alt="img"/>
                        )
                }
                {
                  post.images.length >= 5 &&  <div className='absolute bottom-[145px] right-[150px] -translate-x-[50%] -translate-y-[50%] w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                  <span className='font-gilroyMedium text-base text-black'>+{post.images.length - 4}</span>
                </div>
                }
                </div>
            )
          }
          </>
        }
        <div className='mt-3 relative'>
          <div className='flex items-center pb-2'>
            <div className='w-2/4 '></div>
            <div className='w-2/4 text-right'>
              <span className='font-gilroyNormal text-base text-black'>13 </span>
            </div>
          </div>
         {
          visible &&  <div className='bg-white shadow-md rounded-full px-3 py-2 w-[320px] absolute top-[-30px] left-0 box-border'>
          <Reacts setVisible={setVisible}/>
          </div>
         }
          <div className='border-t border-b border-line_color flex items-center justify-between py-2'>
            <div className='flex items-center gap-x-1 text-secondary_color cursor-pointer w-[30%] justify-center' onMouseOver={()=>{
              setTimeout(() => {
                setVisible(true)
              }, 1000);
              }} 
              onMouseLeave={()=>{
                setTimeout(() => {
                  setVisible(false)
                }, 1000);
              }}
                >
              <Like />
              <span className='font-gilroyNormal text-base '>Like</span>
            </div>
            <div className='flex items-center gap-x-1 text-secondary_color cursor-pointer w-[30%] justify-center' onClick={()=> textRef.current.focus()}>
              <Comment />
              <span className='font-gilroyNormal text-base'>Comment</span>
            </div>
            <div className='flex items-center gap-x-1 text-secondary_color cursor-pointer w-[30%] justify-center'>
              <Share />
              <span className='font-gilroyNormal text-base '>Share</span>
            </div>
          </div>
          <div className='mt-3'>
            <CreateComment userInfo={userInfo}
            text={text} setText={setText} commentimg={commentimg} setcommentimg={setcommentimg} error={error} setError={setError} textRef={textRef}/>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default ShowPost


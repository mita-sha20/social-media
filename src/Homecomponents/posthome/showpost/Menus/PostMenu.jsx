import React, { useRef, useState } from 'react'
import OutsideClick from '../../../../function/click'
import MenuItem from './MenuItem'
import { PinPost } from '../../../../svg/PinPost'
import { SavePost } from '../../../../svg/SavePost'
import { EditPost } from '../../../../svg/EditPost'
import { Download } from '../../../../svg/Download'
import { EnterFullScreen } from '../../../../svg/EnterFullScreen'
import { Trash } from '../../../../svg/Trash'


const PostMenu = ({setmenuVisible,userInfo,postUserId,postImages}) => {
    const postMenuRef = useRef(null);
    const [test, setTest] = useState(postUserId === userInfo.id ? true : false);

    OutsideClick(postMenuRef,()=>{
        setmenuVisible(false)
    })
  return (
    <>
      <div className='absolute top-10 right-0 w-[300px] z-10 px-3 py-4 bg-white shadow-md' ref={postMenuRef}>
        {
          test &&  <MenuItem icon={PinPost} title="Pin Post"/>
        }
         <MenuItem icon={SavePost} title="Save Post"/>
         {
          test &&  <MenuItem icon={EditPost} title="Edit Post"/>
         }
         {
          postImages && postImages.length &&  <MenuItem icon={Download} title="Download"/>
         }
         {
          postImages && postImages.length &&   <MenuItem icon={EnterFullScreen} title="Enter  Full Screen"/>
         }
         {
          test &&  <MenuItem icon={Trash} title="Remove Post"/> 
        }
        
      </div>
    </>
  )
}

export default PostMenu

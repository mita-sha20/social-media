import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUsersProfileQuery } from '../../features/api/authApi';
import { Helmet } from 'react-helmet-async';
import CoverPhoto from '../../components/ProfileComponents/CoverPhoto';

const Profile = () => {
    const {username} = useParams();
    const navigate = useNavigate()
    const {userInfo} = useSelector((state)=>
        state.registration
     );
    let userName = username === undefined ? userInfo.username : username;
    const {data:profile} = useGetUsersProfileQuery(userName)
    useEffect(()=>{
      if(profile && profile.ok === false){
 navigate("/")
      }
    },[profile])
    console.log(profile)
  return (
    <>
     <Helmet>
        <title>Profile</title>
      </Helmet>
      <div>
        <div className='w-full bg-white_100 h-96 rounded-md relative'>
         <CoverPhoto coverImage={profile?.cover}/>
        </div>
      </div>
    </>
  )
}

export default Profile

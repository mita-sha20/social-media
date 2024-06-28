import React from 'react'
import { Helmet } from 'react-helmet-async'
import Posthome from '../../Homecomponents/posthome/posthome'
import Reauth from '../../components/reauth'
import { useSelector } from 'react-redux'


const Home = () => {
  const {userInfo} = useSelector((state)=>
    state.registration);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {
        userInfo.verified === false && <Reauth userInfo={userInfo}/>
      }
        
          <Posthome/>
        
    </>
  )
}

export default Home

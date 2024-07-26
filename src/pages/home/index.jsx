import React from 'react'
import Posthome from '../../Homecomponents/posthome/posthome'
import Reauth from '../../components/reauth'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

const Home = ({setVisible,posts}) => {
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
        
          <Posthome setVisible={setVisible} posts={posts}/>
        
    </>
  )
}

export default Home

import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import FindAccount from '../../components/resendPass/FindAccount'
import ResendPassword from '../../components/resendPass/ResendPassword'
import SecretCode from '../../components/resendPass/SecretCode'
import ChangePassword from '../../components/resendPass/ChangePassword'


const ResetPassword = () => { 
  const [visible, setVisible] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [user, setUser] = useState("")

  const renderComponent =()=>{
   switch(visible){
      case 0: 
      return <FindAccount setLoading={setLoading} setError={setError} setUser={setUser} error={error}
      setVisible={setVisible}/>;
      case 1: 
      if(user){
        return <ResendPassword user={user} setSuccess={setSuccess} success={success} setLoading={setLoading} setError={setError} error={error}
        setVisible={setVisible}/>;
      }
      setVisible(0)
      return null
      case 2:
        if(user){
          return <SecretCode user={user} setSuccess={setSuccess} success={success} setLoading={setLoading} setError={setError} error={error} setVisible={setVisible}/>;
        }
        setVisible(0)
        return null
      case 3:
        if(user){
          return <ChangePassword user={user} setSuccess={setSuccess} success={success} setLoading={setLoading} setError={setError} error={error}
          />;
        }
        setVisible(0)
        return null
      default: 
      return null;
   }
  }
 
  return (
    <>
     <Helmet>
        <title>Reset Password</title>
      </Helmet>
    <div className='h-screen bg-gradient-to-br from-purple_100 to bg-pink_100 via via-cyan_100 flex justify-center items-center'>
   {renderComponent()}
    </div>
    </>
  )
}

export default ResetPassword

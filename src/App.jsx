
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';
import './App.css'
import Registration from './pages/registration';
import Login from './pages/login';
import Home from './pages/home';
import Notloggedin from './privateRouter/Notloggedin';
import Loggedin from './privateRouter/Loggedinuser';
import RootLayout from './components/RootLayout';
import 'swiper/css';
import CreatePostPopUp from './Homecomponents/posthome/createPostpopup';
import ActivatePage from './pages/home/Activatepage';
import ResetPassword from './pages/resetPassword';
import { useState } from 'react';
import { useGetAllPostsQuery } from './features/api/authApi';
import Profile from './pages/profile';


function App() {

  const [visible, setVisible] = useState(false)
  const {data:posts} = useGetAllPostsQuery()
  console.log(posts)

  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
 
       <Route element={<Loggedin/>}>
       <Route element={<RootLayout/>}>
       <Route path="/" element={<Home setVisible={setVisible} posts={posts}/>}></Route>
       <Route path="/activate/:token" element={<ActivatePage/>}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
       <Route path="/profile/:username" element={<Profile/>}></Route>
       </Route>
       </Route>
       <Route element={<Notloggedin/>}>
       <Route path="/registration" element={<Registration/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       </Route>
       <Route path="/forget" element={<ResetPassword />}/>
     </Route>
    )
 )

  return (
    <>
     {
      visible && <CreatePostPopUp setVisible={setVisible}/>
     } 
    <RouterProvider router={router}/>
    </>
  )
}

export default App

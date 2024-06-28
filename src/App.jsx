
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

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route>

      <Route element={<Loggedin/>}>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/activate/:token" element={<ActivatePage/>}></Route>
      </Route>
      </Route>
    
      
      <Route element={<Notloggedin/>}>
      <Route path="/registration" element={<Registration/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Route>
    </Route>
   )
)

function App() {

  return (
    <>
     {/* <CreatePostPopUp/>  */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App

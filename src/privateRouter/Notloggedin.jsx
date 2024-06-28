
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Notloggedin(){
    const {userInfo} = useSelector((state)=>
       state.registration
    );
    return userInfo ? <Navigate to="/"/> : <Outlet/>;
}
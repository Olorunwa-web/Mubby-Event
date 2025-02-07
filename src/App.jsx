import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword'
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import CreateEvent from "./Pages/CreateEvent";
import Navbar from './layout/Navbar';
import Resetpass from './Auth/RESETpass';
import SubHome from './Pages/SubHome';
import  { AnimatePresence } from 'framer-motion';



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route element = {<Navbar/>}>
            <Route path = '/'  element = {<Home/>}>
                <Route  path = '/dashboard/subhome' element = {<SubHome/>}/>
            </Route>
            <Route path = "/dashboard/event" element = {<Event/>}/>
            <Route path = "/dashboard/createevent" element = {<CreateEvent/>}/>
          </Route>
          <Route path = "/auth/signup" element = {<SignUp/>}/>
          <Route path = "/auth/signin" element = {<SignIn/>}/>
          <Route path = "/auth/forgotpassword" element = {<ForgotPassword/>}/>
          <Route path = "/auth/resetpassword" element = {<ResetPassword/>}/>
          <Route path = "/auth/resetpass" element = {<Resetpass/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

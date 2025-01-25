import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuimg from '../assets/menu_35dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg';
import {Link, NavLink} from "react-router-dom"
import {navbarlink} from '../data';


const OffCanvas = ({ name, ...props }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <main>
                <div onClick={handleShow}>
                    <img src= {menuimg} alt="menu-icon" className = 'menu-icon'/>
                </div>
                <Offcanvas show={show} onHide={handleClose}  {...props} className = 'w-75'>
                   <Offcanvas.Body>
                       <div className = 'd-flex flex-column gap-5 px-2 mt-4'>
                           <div className = 'pt-4'>
                            <div className = 'd-flex flex-column gap-3 navbar-Active '>
                              {navbarlink.map((navs) =>{
                               const {id, name, path} = navs
                               return(
                                 <NavLink  key={id} to={path} className = 'text-decoration-none  nav-link-tag'
                                    end>
                                 {({ isActive, isPending }) =>(
                                   <span
                                    className={` text-decoration-none isPending ? "pending": ${isActive ? "Active" : "" 
      
                                  }`}
                                 > 
                                  {name}
                                   </span>
                                    )}
                                 </NavLink>
                                 )
                               })}
                            </div>
                           </div>
                            <div className = 'd-flex  flex-column mt-4 gap-3'>
                                 <Link to = '/auth/signup'><button className = "signup-btn">Sign Up</button></Link>
                                 <Link to = '/auth/signin'><button className = "signin-btn">Sign In</button></Link> 
                             </div>
                       </div>
                   </Offcanvas.Body>
                </Offcanvas>
            </main>
        </>
    )
}

export default OffCanvas

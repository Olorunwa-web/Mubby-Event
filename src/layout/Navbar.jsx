import React , {useState} from 'react'
import {Link, Outlet, NavLink} from "react-router-dom"
import {navbarlink} from '../data';
import '../Style/navbar.css'
import Offcanvas from '../lib/OffCanvas'
import Footer from '../Pages/Footer'

const Navbar = () => {

    const [showSecond, setShowSecond]  = useState (false)



    return (
        <>
        <section className = 'position-sticky top-0 w-100 h-100  background-nav'>
          <section className = "container spaces  ">
              <section className = "d-flex justify-content-between align-items-center py-3 nav-top-space ">
                  <div className = "mb-button  d-flex align-items-center justify-content-center"  onClick={() => setShowSecond(true)} >
                      <h3 className = 'mb-tag'>MB</h3>
                      <span className = 'event-spantag'>Events</span>
                  </div>
                  <div className = 'd-none d-md-flex gap-3 display-screen '>
                      {navbarlink.map((navs) =>{
                          const {id, name, path} = navs
                          return(
                            <NavLink  key={id} to={path} className = 'text-decoration-none  nav-link-tag'
                            end>
                            {({ isActive, isPending }) =>(
                              <span
                                className={`  isPending ? "pending": ${isActive ? "active" : "" 
      
                                }`}
                              > 
                              {name}
                              </span>
                             
                            )}
                          </NavLink>
                          )
                      })}
                  </div>
                  <div className = 'd-none d-md-flex gap-3 align-items-center display-screen'>
                      {!showSecond ? (
                      <div className = 'd-flex gap-3'>
                         <Link to = '/auth/signup'><button className = "signup-btn">Sign Up</button></Link>
                         <Link to = '/auth/signin'><button className = "signin-btn" >Sign In</button></Link> 
                      </div>
                      ) : (
                      <div className = 'details-sign-in'>
                          <h3>JD</h3>
                      </div>
                      )}

                  </div>
                  <div className = 'd-md-none d-flex gap-2 align-items-center'>
                      <div className = ''>
                          {['end'].map((placement, idx) => (
                           <Offcanvas key={idx} placement={placement} name={placement} />
                          ))}
                      </div>
                  </div>
              </section>
          </section>
        </section>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Navbar

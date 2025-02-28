import React , {useState} from 'react'
import {Link, Outlet, NavLink} from "react-router-dom"
import {navbarlink} from '../data';
import '../Style/navbar.css'
import Offcanvas from '../lib/OffCanvas'
import Footer from '../Pages/Footer'
import { motion } from 'framer-motion';

const Navbar = () => {

    const [showSecond, setShowSecond]  = useState (false)



    return (
        <>
        <section className = ' background-nav'>
          <section className = "container spaces  ">
              <section className = "d-flex justify-content-between align-items-center py-3 nav-top-space ">
                  <motion.div className = "mb-button  d-flex align-items-center justify-content-center"  onClick={() => setShowSecond(true)}
                    initial = {{ y: -100}}
                    animate = {{ y: 0}}
                    transition = {{ delay: 0.2, type: 'spring', stiffness: '400'}}
                  >
                      <h3 className = 'mb-tag'>MB</h3>
                      <span className = 'event-spantag'>Events</span>
                  </motion.div>
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
                      <motion.div className = 'd-flex gap-3'
                        initial = {{ opacity: 0}}
                        animate = {{ opacity: 1 }}
                        transition = {{ delay: 1, duration: 1}}
                      >
                         <Link to = '/auth/signup'><button className = "signup-btn">Sign Up</button></Link>
                         <Link to = '/auth/signin'><button className = "signin-btn" >Sign In</button></Link> 
                      </motion.div>
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

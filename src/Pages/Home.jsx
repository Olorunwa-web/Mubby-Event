import React, {useEffect, useRef, useState} from 'react';
import { Link, Outlet, useMatch, useNavigate } from "react-router-dom"
import { UpcomingEvent } from '../data';
import { Event } from '../data';
import { EventNear} from '../data';
import  '../Style/home.css';
import SubHome  from './SubHome'
import { motion, useScroll, useTransform } from 'framer-motion';



const constantvariant  = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.4,
            staggerChildren: 0.3,
        }
    },
}


const Home = () => {


    const Match = useMatch ('/')

    const [selectedItem, setSelectedItem] = useState(null);

    const navigate = useNavigate();

   
    const handleClick = (events) => {
        setSelectedItem(events);
        localStorage.setItem("selectedItem", JSON.stringify(events)); 
        navigate("/dashboard/subhome"); 
      };

   
 
    return (
        <>
          {Match ? (
           <main className = '' >
               
                <section className = 'background-images'  >
                   <div className = 'container space-home'> 
                     <motion.div className = 'wrapper'
                       initial= {{ opacity: 0, y: 50 }}
                       whileInView = {{opacity: 1, y: 0 }}
                       viewport = {{ once: true ,  amount: 0.5 }}
                       transition = {{ delay: 0.2, duration: 0.5, ease: 'easeInOut'}}
                     >
                       <motion.div className = 'home-page'>
                          <h1>Discover Unforgettable Experiences with Ease</h1>
                          <p>"Find, book, and manage tickets for concerts, workshops, and social gatherings with ease. Create events, connects with your audience, and start making lasting memories today!"</p>
                        </motion.div>
                       <div className = 'mt-4 pt-2'>
                           <Link to = '/auth/signup'><button className = 'sign-btn'>Sign Up</button></Link>
                       </div>
                     </motion.div>
                     </div>
                 </section>

                 {/*  */}

                 <motion.section className = 'pt-4 mt-3'> 
                     <section className = 'container'> 
                         <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                             <h3>Upcoming Events</h3>
                             <p className = 'mt-2'>See All</p>
                         </div>
                         <div className = 'lp pb-4 mb-4'>
                             <div className = 'd-md-flex flex-md-wrap justify-content-between align-items-cente outside-event-width' >
                                 {UpcomingEvent.map((events) =>{
                                     const {id, title,host,Category,Images,icon,calender,ticket,venue,date,tick, word} = events
                                     return (
                                         <motion.section key = {id} className = 'insider-event-width' 
                                         initial= {{ opacity: 0, y: 50 }}
                                         whileInView = {{opacity: 1, y: 0 }}
                                         viewport = {{ once: true ,  amount: 0.2 }}
                                         transition = {{ delay: 0.2, duration: 0.4, ease: 'easeInOut'}}
                                         onClick={() => handleClick(events)}
                                          >
                                             <div className = ''>
                                                 <img src= {Images} alt="" className = 'w-100'/>
                                             </div>
                                             <div className = 'title '>
                                                 <h2>{title}</h2>
                                             </div>
                                             <div>
                                                 <div className = 'd-flex flex-column mt-2'>
                                                      <p className = 'host'>Host: <span className = 'host-span'>{host}</span></p>
                                                      <p className = 'host cate'>Category: <span className = 'host-span'>{Category}</span></p>
                                                 </div>
                                                 <div className = 'd-flex flex-column gap-1 pt-1'>
                                                  <div className = 'd-flex gapss align-items-center'>
                                                      <img src= {icon} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{venue}</span>
                                                  </div>
                                                  <div className = 'd-flex gapss align-items-center'>
                                                      <img src= {calender} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{date}</span>
                                                  </div>
                                                  <div className = 'd-flex gapss  align-items-center'>
                                                      <img src= {ticket} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{tick}</span>
                                                  </div>
                                                 </div>
                                             </div>
                                         </motion.section>
                                     )
                                 })}
                             </div>
                         </div>

                         {/*  */}

                         <motion.section className = 'py-4 pb-5'>
                           <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                               <h3>Event Categories</h3>
                                <p className = 'mt-2'>See All</p>
                           </div>
                           <div>
                               <motion.div className = ' d-md-flex flex-md-wrap justify-content-between outside-event-width '>
                                   {Event.map((allevent) =>{
                                       const {id, eventpic} = allevent
                                       return (
                                           <motion.div key = {id} className = 'insider-event-width' 
                                           initial= {{ opacity: 0, y: 50 }}
                                           whileInView = {{opacity: 1, y: 0 }}
                                           viewport = {{ once: true ,  amount: 0.4 }}
                                           transition = {{ delay: 0.2, duration: 0.7, ease: 'easeInOut'}}
                                           >
                                               <img src= {eventpic} alt="" className = 'w-100'/>
                                           </motion.div>
                                       )
                                   })}
                               </motion.div>
                           </div>
                           </motion.section>

                           {/*  */}

                           <section className = 'my-4'>
                               <h3 className = 'event-h2 text-center mb-3'>How it Works</h3>
                               <div className = 'd-md-flex justify-content-between flex-content'> 
                                   <motion.div className = 'join-width'
                                     initial= {{ opacity: 0, y: 50 }}
                                     whileInView = {{opacity: 1, y: 0 }}
                                     viewport = {{ once: true ,  amount: 0.4 }}
                                     transition = {{ delay: 0.2, duration: 0.7, ease: 'easeInOut'}}
                                   >
                                       <div className = 'd-flex justify-content-center align-items-center'>
                                       <div className = 'join'>
                                           <h1>Join An Event</h1>
                                           <p>Discover exciting events that match your interests and join with just a few clicks. Whether it's a concert, workshop, or social gathering, our platform makes it simple to find and book tickets. Stay updated with event details and enjoy seamless entry with digital tickets. Join the fun and make memories!</p>
                                           <div>
                                             <button className = 'signss-btn'>Join Event</button> 
                                           </div>
                                       </div>
                                       </div>
                                   </motion.div>
                                   <motion.div className = 'event-width'
                                      initial= {{ opacity: 0, y: 50 }}
                                      whileInView = {{opacity: 1, y: 0 }}
                                      viewport = {{ once: true ,  amount: 0.4 }}
                                      transition = {{ delay: 0.2, duration: 0.7, ease: 'easeInOut'}}
                                    >
                                       <div className = 'd-flex justify-content-center align-items-center'>
                                          <div className = 'join'>
                                            <h1>Create An Event</h1>
                                             <p>Bring your vision to life by creating and hosting your own event. From inimate meetups to large-scale gatherings, our easy-to-use platform helps you manage everything from ticketing to promotion. Engage with your audience, track your attendees, and make your event a success in just a few steps.</p>
                                            <div>
                                               <Link to = '/dashboard/createevent'><button className = 'signs-btn'>Create Event</button></Link>
                                             </div>
                                       </div>
                                       </div>
                                   </motion.div>
                               </div>
                           </section>

                           {/*  */}

                           <section className = 'mt-5 pt-3'>
                              <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                                  <h3>Event Near You</h3>
                                  <p>See All</p>
                              </div>
                              <div className = 'lp pb-4 mb-4'>
                             <div className = 'd-md-flex flex-md-wrap  justify-content-between align-items-cente outside-event-width'>
                                 {EventNear.map((events) =>{
                                     const {id, title,host,Category,Images,icon,calender,ticket,venue,date,tick} = events
                                     return (
                                         <motion.section key = {id} className = 'insider-event-width'
                                         initial= {{ opacity: 0, y: 50 }}
                                         whileInView = {{opacity: 1, y: 0 }}
                                         viewport = {{ once: true ,  amount: 0.2 }}
                                         transition = {{ delay: 0.2, duration: 0.4, ease: 'easeInOut'}}
                                         >
                                             <div className = ''>
                                                 <img src= {Images} alt="" className = 'w-100'/>
                                             </div>
                                             <div className = 'title '>
                                                 <h2>{title}</h2>
                                             </div>
                                             <div>
                                                 <div className = 'd-flex flex-column mt-3'>
                                                      <p className = 'host'>Host: <span className = 'host-span'>{host}</span></p>
                                                      <p className = 'host cate'>Category: <span className = 'host-span'>{Category}</span></p>
                                                 </div>
                                                 <div className = 'd-flex flex-column gap-1 pt-1'>
                                                  <div className = 'd-flex gapss align-items-center'>
                                                      <img src= {icon} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{venue}</span>
                                                  </div>
                                                  <div className = 'd-flex gapss align-items-center'>
                                                      <img src= {calender} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{date}</span>
                                                  </div>
                                                  <div className = 'd-flex gapss  align-items-center'>
                                                      <img src= {ticket} alt="" className = 'src-img'/>
                                                      <span className = 'venue'>{tick}</span>
                                                  </div>
                                                 </div>
                                             </div>
                                         </motion.section>
                                     )
                                 })}
                             </div>
                         </div>
                           </section>
                         
                     </section>
                 </motion.section>
                
           </main>
          ) : (
              <Outlet/>
          )
        }
        </>
    )
}

export default Home

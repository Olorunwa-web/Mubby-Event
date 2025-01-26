import React from 'react';
import {Link, Outlet} from "react-router-dom"
import { UpcomingEvent } from '../data';
import { Event } from '../data';
import { EventNear} from '../data';
import  '../Style/home.css';

const Home = () => {
    return (
        <>
           <main className = ''>
                 <section className = 'background-images'>
                   <div className = 'container space-home'> 
                     <div className = ' wrapper'>
                       <div className = 'home-page'>
                          <h1>Discover Unforgettable Experiences with Ease</h1>
                          <p>"Find, book, and manage tickets for concerts, workshops, and social gatherings with ease. Create events, connects with your audience, and start making lasting memories today!"</p>
                        </div>
                       <div className = 'mt-4 pt-2'>
                           <Link  to = '/auth/signup'><button className = 'sign-btn'>Sign Up</button></Link>
                       </div>
                     </div>
                     </div>
                 </section>

                 {/*  */}


                 <section className = 'pt-4 mt-3'>
                     <section className = 'container'>
                         <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                             <h3>Upcoming Events</h3>
                             <p>See All</p>
                         </div>
                         <div className = 'lp pb-4 mb-4'>
                             <div className = 'd-md-flex flex-md-wrap  justify-content-between align-items-cente outside-event-width'>
                                 {UpcomingEvent.map((events) =>{
                                     const {id, title,host,Category,Images,icon,calender,ticket,venue,date,tick} = events
                                     return (
                                         <section key = {id} className = 'insider-event-width'>
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
                                         </section>
                                     )
                                 })}
                             </div>
                         </div>

                         {/*  */}

                         <section className = 'py-4 pb-5'>
                           <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                               <h3>Event Categories</h3>
                                <p>See All</p>
                           </div>
                           <div>
                               <div className = ' d-md-flex flex-md-wrap justify-content-between outside-event-width '>
                                   {Event.map((allevent) =>{
                                       const {id, eventpic} = allevent
                                       return (
                                           <div key = {id} className = 'insider-event-width' >
                                               <img src= {eventpic} alt="" className = 'w-100'/>
                                           </div>
                                       )
                                   })}
                               </div>
                           </div>
                           </section>

                           {/*  */}

                           <section className = 'my-4'>
                               <h3 className = 'event-h2 text-center mb-3'>How it Works</h3>
                               <div className = 'd-md-flex justify-content-between flex-content'> 
                                   <div className = 'join-width'>
                                       <div className = 'd-flex justify-content-center align-items-center'>
                                       <div className = 'join'>
                                           <h1>Join An Event</h1>
                                           <p>Discover exciting events that match your interests and join with just a few clicks. Whether it's a concert, workshop, or social gathering, our platform makes it simple to find and book tickets. Stay updated with event details and enjoy seamless entry with digital tickets. Join the fun and make memories!</p>
                                           <div>
                                               <button className = 'signss-btn'>Join Event</button>
                                           </div>
                                       </div>
                                       </div>
                                   </div>
                                   <div className = 'event-width'>
                                       <div className = 'd-flex justify-content-center align-items-center'>
                                          <div className = 'join'>
                                             <h1>Create An Event</h1>
                                             <p>Bring your vision to life by creating and hosting your own event. From inimate meetups to large-scale gatherings, our easy-to-use platform helps you manage everything from ticketing to promotion. Engage with your audience, track your attendees, and make your event a success in just a few steps.</p>
                                            <div>
                                                <button className = 'signs-btn'>Create Event</button>
                                             </div>
                                       </div>
                                       </div>
                                   </div>
                               </div>
                           </section>

                           {/*  */}

                           <section>
                              <div className = 'd-flex justify-content-between align-items-center upcoming-event pb-2'>
                                  <h3>Event Near You</h3>
                                  <p>See All</p>
                              </div>
                              <div className = 'lp pb-4 mb-4'>
                             <div className = 'd-md-flex flex-md-wrap  justify-content-between align-items-cente outside-event-width'>
                                 {EventNear.map((events) =>{
                                     const {id, title,host,Category,Images,icon,calender,ticket,venue,date,tick} = events
                                     return (
                                         <section key = {id} className = 'insider-event-width'>
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
                                         </section>
                                     )
                                 })}
                             </div>
                         </div>
                           </section>
                           <div className = 'my-5'>
                           </div>
                     </section>
                 </section>
           </main>
        </>
    )
}

export default Home

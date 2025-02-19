import React, { useState } from 'react'
import '../Style/event.css';
import drop from '../assets/Vector.svg';
import serach from '../assets/search.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EventsTag } from '../data'


const Event = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isTag, setIsTag] = useState(false);
    const [isPrice, setIsPrice] = useState(false);
    const [selected, setSelected] = useState("Category");
    const [select, setSelect] = useState("Tags");
    const [set, setSet] = useState("Price");
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const toggleDrop = () => {
      setIsTag(!isTag);
    };

    const toggleDown = () => {
      setIsPrice(!isPrice);
    };
  
    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
    };

    const handleSet = (option) => {
      setSelected(option);
      setIsOpen(false);
    };

    const handleSett = (option) => {
      setSelected(option);
      setIsOpen(false);
    };


    const [isFocused, setIsFocused] = useState(false);

    const [date, setDate] = useState("");
   

   
    return (
        <>
            <main>
                <section className = 'event-background py-3  '>
                    <section className = 'container space-home'>
                        <div className = 'text-center py-2 position-relative'>
                            <input type="search" name="" id="" className = 'search-input'placeholder = 'Search events' />
                            <img src= {serach} alt="" className = 'search-image'/>
                        </div>
                        <div className = 'd-flex flex-wrap justify-content-between gap-3 align-items-center event-tag-width pt-3 pb-2'>
                            <div>
                                <button className = 'location-btn'>Location <img src= {drop} alt="" className = 'drop-image'/></button>
                            </div>
                            <div className = ''>
                                <input type="date" name="" id="" className = 'date-input' placeholder = "Date" value = {date} onChange={(e) => setDate(e.target.value)} onFocus={(e) => (e.target.type = "date")}  onBlur={(e) => (e.target.type = "text")} />
                            </div>
                            <div>
                                <div className = 'position-relative'>
                                    <button className = 'category-btn' onClick = {toggleDropdown}>{selected} <img src={drop}alt=""  className = 'drop-image' /></button>
                                    {isOpen && (
                                        <div className = 'category-inside px-3' >
                                            <div className ='d-flex gap-2 select-input align-items-center '> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Select All</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Sports</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center'> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Party</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center'> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Education</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center'> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Tech</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center'> 
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">Religion</label>
                                            </div>
                                           
                                        </div>
                                               
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className = 'position-relative'>
                                    <button className = 'tag-btns' onClick = {toggleDrop}>{select} <img src={drop}alt=""  className ='drop-image' /></button>
                                    {isTag && (
                                        <div className = 'tag-inside px-3'>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Select All</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Sports</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Party</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Education</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Tech</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Concert</label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center '>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Religion</label>
                                            </div>
                                           
                                        </div>
                                           
                                           
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className = 'position-relative'>
                                    <button className = 'price-btns' onClick = {toggleDown}>{set} <img src={drop}alt=""  className ='drop-image' /></button>
                                    {isPrice && (
                                        <div className = 'price-inside px-3'>
                                            <div className ='d-flex gap-2 select-input align-items-center'>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Free </label>
                                            </div>
                                            <div className ='d-flex gap-2 select-input align-items-center'>
                                                <input type="checkbox" name="" id=""/>
                                                <label htmlFor="">Paid </label>
                                            </div>
                                        </div>
                                           
                                           
                                    )}
                                </div>
                            </div>
                            <div>
                                <button className = 'apply-btns'>Apply</button>
                            </div>
                            <div>
                                <h4 className = 'reset-filter'>Reset Filter</h4>
                            </div>
                            
                        </div>
                    </section>
                </section>
                <section className = 'container my-3'>
                    <h3 className = 'events-h3-tag'>All Events</h3> 
                    <div className = 'lp pb-2 mb-4'>
                             <div className = 'd-md-flex flex-md-wrap  justify-content-between align-items-cente outside-event-widths' >
                                 {EventsTag.map((events) =>{
                                     const {id, title,host,Category,Images,icon,calender,ticket,venue,date,tick} = events
                                     return (
                                         <motion.section key = {id} className = 'insider-event-widths my-4' 
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
                         <div className = 'd-flex justify-content-between align-items-center py-4'>
                            <button className = 'prev-btn'>Previous</button>
                            <span className = 'page-num'>Page 1 of 10</span>
                            <button className = 'next-btn'>Next</button>
                        </div>   
                </section>
            </main>
        </>
    )
}

export default Event

import React, {useEffect, useState} from 'react';
import leftarrow from '../assets/left-chevron-svgrepo-com (1) 1.svg'
import { useLocation, NavLink, Link } from "react-router-dom";
import '../Style/subhome.css'



const SubHome = () => {

    // const location = useLocation();
    // const { events } = location.state || {};
  
    // if (!events) return <p>No item selected</p>;

    const [selectedItem, setSelectedItem] = useState(null);

    const [modalShow, setModalShow] = React.useState(false);


    useEffect(() => {
      const storedItem = localStorage.getItem("selectedItem");
      if (storedItem) {
        setSelectedItem(JSON.parse(storedItem));
      }
    }, []);
  
    if (!selectedItem) {
      return <h2>No item selected</h2>;
    }

    return (
        <>
             <>
             <main className = 'container mt-3'>
                 <div className = 'd-flex align-items-center gap-1'>
                  <NavLink
                        to = "/"
                        className = "home-p"
                      end>
                      {({ isActive}) =>(
                        <span
                          className={`  ${isActive ? "Active" : "" 
                          }`}
                        > 
                        Home
                        </span>
                      )}
                    </NavLink>

                    <div>
                        <img src={leftarrow}  alt="" className = 'left-img'/>
                    </div>
                    <NavLink
                        to = "/dashboard/event"
                        className = "home-p"
                      end>
                      {({ isActive}) =>(
                        <span
                          className={` home-p  ${isActive ? "Active" : "" 
                          }`}
                        > 
                        Events
                        </span>
                      )}
                    </NavLink>
                    <div>
                      <img src={leftarrow}  alt="" className = 'left-img'/>
                    </div>
                    <NavLink
                        to = "/dashboard/subhome"
                        className = "home-p"
                      end>
                      {({ isActive}) =>(
                        <span
                          className={`  ${isActive ? "Active" : "" 
                          }`}
                        > 
                         Event Details
                        </span>
                      )}
                    </NavLink>
                  </div>

                  <section className = 'mt-3'> 
                      <div className = ''>
                         <img src= {selectedItem.Images} alt="" className ='w-100 select-image'/>  
                      </div>
                      <div className = 'my-4 d-flex justify-content-between flex-subhome '>
                          <div className = 'sub-width'>
                            <div className = 'd-flex flex-column gap-3'>
                              <div className = 'sub-section d-flex gap-2 align-items-center'>
                                  <img src= {selectedItem.calender} alt=""/>
                                  <span>{selectedItem.date} 7:00pm</span>
                              </div>
                              <div className = 'sub-section d-flex gap-2 align-items-center '>
                                  <img src= {selectedItem.icon} alt=""/>
                                  <span>{selectedItem.venue}</span>
                              </div>
                            </div>
                            <div className = 'c my-4'>
                                <button className = 'category-p'>{selectedItem.Category}</button>
                            </div>
                            <div className = 'sub-title'>
                                <h1>{selectedItem.title}</h1>
                                <p>{selectedItem.word}</p>
                            </div>
                          </div>
                          <div className = 'sub-word-width'>
                              <div className = 'pricing-bord'>
                                  <h4 className = 'price-h4 text-center mb-3'>Pricing</h4>
                                  <div className = 'd-flex justify-content-between  align-items-center vip'>
                                      <p>VIP</p>
                                      <h4>NGN 10,000</h4>
                                  </div>
                                  <div className = 'd-flex justify-content-between align-items-center vip'>
                                      <p>Regular</p>
                                      <h4>NGN 5,000</h4>
                                  </div>
                                     <Link to = '/select/ticket'><button className = 'mt-3 select-tick' >Select Ticket</button></Link> 
                              </div>
                          </div>
                      </div>
                     
                  </section>

             </main>

    
             </>
     
        </>
    )
}

export default SubHome

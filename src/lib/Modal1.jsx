import React from 'react'


const Modal1 = (props) => {
    return ( 
        <>
        <main className = 'd-flex justify-content-center align-items-center modal-flex'>
                <div className = 'back' >
                <h4 className = 'text-center select-h4 mb-5'>Select Ticket</h4>
                <div className = 'd-flex flex-column gap-3 TICKET'> 
                   <div className = 'd-flex justify-content-between  align-items-center'>
                      <p className = 'vip-ptag'>VIP</p>
                    <div className = 'd-flex gap-4 width-vip'>
                    <div className = 'dec-btn'>
                       <p className = ''>-</p>
                     </div>
                       <p className = 'num'>1</p>
                       <div className = 'inc-btn'>
                          <p className = ''>+</p>
                       </div>
                   </div>
                    <h4 className = 'regular-h4'>NGN 10,000</h4>
                   </div>
                   <div className = 'd-flex justify-content-between align-items-center'>
                      <p className = 'vip-ptag'>Regular</p>
                    <div className = 'd-flex gap-4 width-vip'>
                    <div className = 'dec-btn'>
                       <p className = ''>-</p>
                     </div>
                       <p className = 'num'>1</p>
                       <div className = 'inc-btn'>
                          <p className = ''>+</p>
                       </div>
                   </div>
                    <h4 className = 'regular-h4'>NGN 10,000</h4>
                   </div>
               </div>
                <div className = 'd-flex justify-content-between my-3'>
                    <p className = 'total-p'>Total</p>
                    <h3 className = 'zero-price'>0</h3>
                </div>
                <button className = 'proceed-btn'>Proceed To Payment</button>
                </div>
            <section className = ' sub-parent'>
            </section>
        </main>
        </>
    )
}

export default Modal1

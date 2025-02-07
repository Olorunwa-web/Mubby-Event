import React from 'react'
import Modal from 'react-bootstrap/Modal';
const SubHome = (param) => {
    const newTask = param.newTask;
    return (
        <>
             <div>

      {newTask  && (
                    <div>
                        <img src= {newTask.Images} alt=""/>
                    </div>
                )}
                <div>
                    omooo 
                </div>
             </div>
     
        </>
    )
}

export default SubHome

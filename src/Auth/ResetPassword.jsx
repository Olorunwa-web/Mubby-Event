import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetpasswordSchema } from '../lib/SchemaValidation';
import { Link } from 'react-router-dom';
import eyeshow from '../assets/eye.svg'
import eyehide from '../assets/visibility_off_24dp_00000066_FILL0_wght400_GRAD0_opsz24.svg';


const ForgoPassword = () => {

    const [conceal, setConceal] = useState(false)

    const [close, setClose] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(resetpasswordSchema),
      })
      const onSubmit = (data) => console.log(data)


      function handleConceal(){
        conceal ? setConceal(false) : setConceal(true)
    }


      function handleClose(){
        close ? setClose(false) : setClose(true)
    }


    return (
        <>
            <main className = 'd-flex justify-content-center align-items-center reset-flex '> 
                <section className = 'reset-wrapper'>
                    <div className = "mb-sign-button  d-flex align-items-center justify-content-center mb-4">
                         <h3 className = 'mb-tags'>MB</h3>
                         <span className = 'event-spantags'>Events</span>
                    </div>
                    <div className = 'mt-4 pb-2 create-tags'>
                        <h2>Reset Password</h2>
                        <p>Enter Your New Password</p>
                    </div>
                    <form action="" className = 'd-flex flex-column gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className = 'position-relative'>
                            <img src= {conceal ? eyehide  : eyeshow  }  onClick = {handleConceal} className = 'position-absolute end-0 pt-2 pe-1 mt-1 reveal-image' />
                            <input type={conceal ? "text" : "password"} name="" id="" placeholder = 'Password'  className = 'w-100 reset-input' {...register("password")}/>
                            <span className = 'spans'>{errors.password?.message}</span>
                        </div>
                        <div className = 'position-relative'>
                            <img src= {close ? eyehide  : eyeshow  }  onClick = {handleClose} className = ' position-absolute end-0 pt-2 pe-1 mt-1 reveal-image' />
                            <input type={close ? "text" : "password"} name="" id="" placeholder = 'Confirm Password' className = 'w-100 reset-input' {...register("confirmPassword")}/>
                            <span className = 'spans'>{errors.confirmPassword?.message}</span>
                        </div>
                        <div>
                           <Link to = '/auth/resetpass'><button className = ' sign-up-btn' type = 'submit' disabled = {isSubmitting}>Reset Password</button></Link> 
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ForgoPassword

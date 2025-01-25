import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from '../lib/SchemaValidation';
import signinImg from "../assets/image 3.jpg";
import eyeshow from '../assets/eye.svg'
import eyehide from '../assets/visibility_off_24dp_00000066_FILL0_wght400_GRAD0_opsz24.svg';




const SignIn = () => {


    const [see, setSee] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(signinSchema),
      })
      const onSubmit = (data) => console.log(data)



      function handleSee(){
        see ? setSee(false) : setSee(true)
    }



    return (
        <>
            <main className = 'px-3 py-4 sign-up-spaces'> 
                <section className = "d-md-flex justify-content-between align-items-center sign-up-flex">
                    <section className = 'image-wrapper-width'>
                        <img src= {signinImg} alt="" className = 'image-signup'/>
                    </section>
                    <section className = 'form-wrapper-width d-flex align-items-center justify-content-center'>
                        <div className = 'inside-wrapper'>
                           <div className = "mb-sign-button  d-flex align-items-center justify-content-center mb-4">
                               <h3 className = 'mb-tags'>MB</h3>
                               <span className = 'event-spantags'>Events</span>
                           </div>
                           <div className = 'mt-4 pb-2 create-tags'>
                             <h2>Welcome Back</h2>
                             <p>Sign In To Your Account</p>
                          </div>
                          <form action="" className = 'd-flex flex-column gap-4 my-3 form-gap ' onSubmit={handleSubmit(onSubmit)}>
                             <div>
                                 <input type="email" name="" id="email" placeholder = "Email" className = 'inputs' {...register("email")}/>
                                 <span className = 'spans'>{errors.email?.message}</span>
                             </div>
                             <div className = 'position-relative'>
                                 <img src= {see ? eyehide  : eyeshow  }  onClick = {handleSee} className = 'position-absolute end-0 pt-2 pe-1 mt-1 reveal-image' />
                                 <input type={see ? "text" : "password"} name="password" id="password" placeholder = 'Password' className = 'inputs' {...register("password")}/>
                                 <span className = 'spans'>{errors.password?.message}</span>
                             </div>
                             <div className = 'd-flex flex-column gap-3'>
                                 <Link to =  '/auth/forgotpassword'><p className = 'forgot-pass'>Forgot Password?</p></Link> 
                                 <div className = 'mt-3'>
                                    <button className = 'sign-up-btn' type = "submit" disabled = {isSubmitting}>Sign In</button>
                                </div>
                             </div>
                          </form>
                          <p className = 'account-click'>Don't have an account? <span className = 'navigate-sign-in'><Link to = '/auth/signup' className = 'navigate-sign-in'>Sign Up </Link></span></p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default SignIn

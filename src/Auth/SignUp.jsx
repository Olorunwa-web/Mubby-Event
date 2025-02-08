import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchema } from '../lib/SchemaValidation'
import '../Style/sign-up.css';
import SignupImg from '../assets/Frame 1171276802@2x.jpg';
import eyeshow from '../assets/eye.svg'
import eyehide from '../assets/visibility_off_24dp_00000066_FILL0_wght400_GRAD0_opsz24.svg';
import { motion } from 'framer-motion'



const SignUp = () => {

    const [reveal,setReveal] = useState(false)

    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(signupSchema),
      })
      const onSubmit = (data) => console.log(data)


      function handleReveal(){
        reveal ? setReveal(false) : setReveal(true)
    }

      function handleOpen(){
        open ? setOpen(false) : setOpen(true)
    }


    
    
    return (
        <>
            <main className = 'sign-up-space px-3 py-4 d-md-fle justify-content-cente align-items-cente'>
                <section className = "d-md-flex justify-content-between align-items-center sign-up-flex">
                    <motion.section className = 'image-wrapper-width'
                      initial = {{ x: '-100vw', opacity: 0,}}
                      animate = {{ x: 0, opacity: 1}}
                    //   transition = {{delay: 0.1 , duration: 0.7}}
                    >
                         <img src= {SignupImg} alt="" className = 'image-signup'/>
                    </motion.section>
                    <motion.section className = 'form-wrapper-width'
                      initial = {{ x: '100vw', opacity: 0}}
                      animate = {{ x: 0, opacity: 1}}
                    //   transition = {{delay: 0.1 , duration: 0.7}}
                    >
                        <div className = 'inside-wrapper'>
                         <div className = "mb-sign-button  d-flex align-items-center justify-content-center mb-4">
                            <h3 className = 'mb-tags'>MB</h3>
                            <span className = 'event-spantags'>Events</span>
                         </div>
                         <div className = 'mt-4 pb-1 create-tags'>
                             <h2>Create Account</h2>
                             <p>Let's get you started so you can start joining and creating events</p>
                         </div>
                         <form action="" className = 'd-flex flex-column gap-3 my-3 form-gap ' onSubmit={handleSubmit(onSubmit)}>
                             <div>
                                 <input type="email" name="" id="email" placeholder = "Email" className = 'inputs' {...register("email")}/>
                                 <span className = 'spans'>{errors.email?.message}</span>
                             </div>
                             <div>
                                 <input type="text" placeholder = "Full Name" className = 'inputs' {...register("fullName")}/>
                                 <span className = 'spans'>{errors.fullName?.message}</span>
                             </div>
                             <div className = 'position-relative'>
                                 <img src= {reveal ? eyehide  : eyeshow  }  onClick = {handleReveal} className = 'position-absolute end-0 pt-2 pe-1 mt-1 reveal-image ' />
                                 <input type={reveal ? "text" : "password"}  name="password" id="password" placeholder = 'Password' className = 'inputs position-relativ' {...register("password")}/>
                                 <span className = 'spans'>{errors.password?.message}</span>
                             </div>
                             <div className = 'position-relative'>
                                 <img src= {open ? eyehide  : eyeshow  }  onClick = {handleOpen} className = 'position-absolute end-0 pt-2 pe-1 mt-1 reveal-image' />
                                 <input type={open ? "text" : "password"} name="confirm-password" id="confirm-passowrd" placeholder = 'Confirm Password' className = 'inputs' {...register("confirmPassword")}/>
                                 <span className = 'spans'>{errors.confirmPassword?.message}</span>
                             </div>
                             <div className = 'd-flex gap-2 term'>
                                 <input type="checkbox" name="" id="" className = ''/>
                                 <span>I agree to the <span className = 'terms'>terms</span> & <span className = 'terms'>condition</span></span>
                             </div>
                             <div className = 'mt-3'>
                                 <button className = 'sign-up-btn' type = "submit" disabled = {isSubmitting}>Sign Up</button>
                             </div>
                          </form>
                         <p className = 'account-click'>Already have an account? <span className = 'navigate-sign-in'><Link to = '/auth/signin' className = 'navigate-sign-in'>Sign In</Link></span></p>
                        </div>
                    </motion.section>
                </section>
            </main>
        </>
    )
}

export default SignUp

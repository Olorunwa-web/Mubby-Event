import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotpasswordSchema } from '../lib/SchemaValidation';
import { Link } from 'react-router-dom';



const ResetPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(forgotpasswordSchema),
      })
      const onSubmit = (data) => console.log(data)


    return (
        <>
            <main className = 'd-flex justify-content-center align-items-center reset-flex '>
                <section className = 'reset-wrapper'>
                    <div className = "mb-sign-button  d-flex align-items-center justify-content-center mb-4">
                         <h3 className = 'mb-tags'>MB</h3>
                         <span className = 'event-spantags'>Events</span>
                    </div>
                    <div className = 'mt-4 pb-2 create-tags'>
                        <h2>Forgot Password?</h2>
                        <p>No worries, we'll send you instruction to help</p>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className = 'd-flex flex-column gap-3'>
                        <div>
                             <input type="email" name="" id="email" placeholder = "Email" className = 'inputs' {...register("email")}/>
                             <span className = 'spans'>{errors.email?.message}</span>
                        </div>
                        <div>
                           <Link to = '/auth/resetpassword'><button className = ' sign-up-btn' type = 'submit' disabled = {isSubmitting}>Reset Password</button></Link> 
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ResetPassword

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'







const RESETpass = () => {

   
    const fadeinAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * 20 ,
            }, 
        }),
    
    }
    


    return (
        <>
            <motion.section className = 'd-flex justify-content-center align-items-center reset-flexx'
              initial = {{ opacity: 0}}
              animate = {{ opacity: 1}}
              transition = {{ delay: 1, duration: 1}}
            >
                <section className = 'd-flex flex-column gap-4 reset-width'>
                    <div className = 'interest-tag'>
                        <h1>Your Interests</h1>
                        <p>To enhance your feed and tailor it to your preferences, select at least <span className = 'five-span'>5</span> areas of Interest that resonated with you.</p>
                    </div>
                    <motion.div className = 'd-flex flex-wrap gap-3 interest-ptag'
                       variants = {fadeinAnimationVariants}
                       initial = 'initial'
                       whileInView = 'animate'
                       viewport = {{
                           once: true,
                       }}
                    >
                        <button>Professional</button>
                        <button>Sports</button>
                        <button>Party</button>
                        <button>Concerts</button>
                        <button>Education</button>
                        <button>Religion</button>
                        <button>Games</button>
                        <button>Dance</button>
                        <button>Cultural Activities</button>
                        <button>Professional</button>
                        <button>Career</button>
                        <button>Picknic</button>
                        <button>Excursions</button>
                        <button>food & Drinks</button>
                        <button>Exposition</button>
                        <button>Beach</button>
                        <button>Night</button>
                        <button>Costume</button>
                        <button>Anime</button>
                    </motion.div>
                    <div className = 'mt-4'>
                        <div className = 'pt-4 pb-4'>
                           <Link to = '/'><button className = 'continue-btn'>Continue</button></Link> 
                        </div>
                    </div>
                </section>
            </motion.section>
        </>
    )
}

export default RESETpass

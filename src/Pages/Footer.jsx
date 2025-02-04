import React from 'react';
import facebooklogo from '../assets/facebook.svg';
import instagramlogo from '../assets/instagram.svg';
import twitterlogo from '../assets/twitter.svg';
import youtubelogo from '../assets/youtube.svg';
import '../Style/Footer.css';




const Footer = () => {
    return (
        <>
            <main className = 'footer-background py-5'>
                <section className = 'container'>
                       <div className = "footer-mb-button d-flex align-items-center justify-content-center">
                            <h3 className = 'footer-mb-tag'>MB</h3>
                            <span className = 'footer-span-tag'>Events</span>
                        </div>
                    <section className = 'd-md-flex justify-content-between pt-2 align-items-cente footer-flexx'>
                    <section className = 'footer-1'>
                        <p className = 'footer-p'>Stay connected and informed with our updates Subscribe to our newsletter for the latest updates on mental health tips, app features, and exclusive offers. Join our community to receive valuable insights and support right in your inbox</p>
                        <div className = 'position-relative'>
                            <input type="email" name="" id="" placeholder = 'Email' className = 'footer-input'/>
                            <button className = 'footer-btn'>Subscribe</button>
                        </div>
                    </section>
                    <section>
                        <h3 className = 'footer-h3'>Quick Links</h3>
                        <div className = 'd-flex flex-column  footer'>
                            <p>Home</p>
                            <p>Events</p>
                            <p>About</p>
                            <p>Contact</p>
                        </div>
                    </section>
                    <section className = 'footmat '>
                        <h3 className = 'footer-h3'>Socials</h3>
                        <div className = 'd-flex gap-2 footer-logo'>
                            <img src= {facebooklogo} alt=""/>
                            <img src= {instagramlogo} alt=""/>
                            <img src= {twitterlogo} alt=""/>
                            <img src= {youtubelogo} alt=""/>
                        </div>
                    </section>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Footer

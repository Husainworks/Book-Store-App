import React from 'react';
import footerLogo from "../assets/footer-logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-10 px-4'>
            {/* top section */}
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* left side - logo and nav */}
                <div className='md:w-1/2 w-full'>
                    <img src={footerLogo} alt="FooterLogo" className="mb-5 w-36" />
                    <ul className='flex flex-col md:flex-row gap-4'>
                        <li><a href='#home' className='hover:text-primary'>Home</a></li>
                        <li><a href='#services' className='hover:text-primary'>Services</a></li>
                        <li><a href='#about' className='hover:text-primary'>About Us</a></li>
                        <li><a href='#contact' className='hover:text-primary'>Contact</a></li>
                    </ul>
                </div>

                {/* right side - newsletter */}
                <div className='md:w-1/2 w-full'>
                    <p className='mb-4'>
                        Subscribe to our newsletter to receive the latest updates, news and offers!
                    </p>
                    <div className='flex'>
                        <input type='email' placeholder='Enter your Email' className='w-full px-4 py-2 text-black' />
                        <button className='bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark'>Subscribe</button>
                    </div>
                </div>
            </div>

            {/* bottom section */}
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6'>
                {/* left side - privacy links */}
                <ul className='flex gap-6 mb-4 md:mb-0'>
                    <li><a href='#privacy' className='hover:bg-primary'>Privacy Policy</a></li>
                    <li><a href='#terms' className='hover:bg-primary'>Terms of Service</a></li>
                </ul>

                {/* right side -social icons */}
                <div className='flex gap-6'>
                    <a href="https://github.com/Husainworks" target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
                        <FaGithub size={24}/>
                    </a>
                    <a href='https://www.linkedin.com/in/husain-zaveri-84059b216' target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
                        <FaLinkedin size={24}/>
                    </a>
                    <a href="mailto:husain53zaveri30@gmail.com" target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
                        <MdOutlineMail size={24}/>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
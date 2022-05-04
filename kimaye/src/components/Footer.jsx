import React from 'react'
import styles from './styles/footer.css';
import {Link, Route, Routes } from 'react-router-dom'

const Footer = () => {

    <Routes>
        <Route path='facebook' element='https://www.facebook.com/' />
    </Routes>


  return (
    <div className='footer'>
        <div className='left'>
            <div>FAQ's</div>
            <div>Contact Us</div>
            <div>Shipping & Return Policy</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
        </div>

        <div className='right'>
            <div>Follow Us On</div>
            <div className='icon'>
                <a href='https://www.facebook.com/' target='_blank'><i class="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/?hl=en' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href='https://twitter.com/login' target='_blank'><i class="fa-brands fa-twitter"></i></a>
            </div>  
        </div>
        
    </div>
  )
}

export default Footer
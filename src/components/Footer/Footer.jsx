import React from 'react';
import img from '../../assets/logo/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div>
              <div className='bg-black text-center text-light p-5 mt-5'>
            <div className='p-5 mt-5'>
                <img src={img} alt="" />
                <h1 className='footer-title mt-3'>SellME Laptop.com</h1>
            </div>
            <div className='text-light mt-2'><hr /></div>
            <div className='text-light '>
                <p>Office 41 , Shehbaz Building </p>
                <p>Sultanate of Oman</p>
            </div>
            <div className='d-lg-flex justify-content-between'>
                  <p className='text-start fs-5'>&copy; Copyright 2022. All rights Reserved</p>  
            </div>
        </div>
        </div>
    );
};

export default Footer;
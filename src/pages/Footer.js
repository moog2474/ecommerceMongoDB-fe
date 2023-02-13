import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='container border-top'>
            <div className='d-flex justify-content-between text-start mt-5'>
                <div className='col-3'>
                    <img src={require('../images/logo.png')} />
                    <p>Lalasia is digital agency that help you make better experience iaculis cras in.</p>
                </div>
                <div className='d-flex col-5 gap-5 justify-content-end'>
                    <div className='d-flex flex-column text-start'>
                        <h3>Product</h3>
                        <p>New Arrivals</p>
                        <p>Best selling</p>
                        <p>Home Decor</p>
                        <p>Kitchen Set</p>
                    </div>
                    <div className='d-flex flex-column text-start'>
                        <h3>Services</h3>
                        <p>Catalog</p>
                        <p>Blog</p>
                        <p>FaQ</p>
                        <p>Pricing</p>
                    </div>
                    <div className='d-flex flex-column text-start foot'>
                        <h3>Follow Us</h3>
                        <a href='https://www.facebook.com/'>Facebook</a>
                        <a href='https://www.instagram.com/'>Instagram</a>
                        <a href='https://www.twitter.com/'>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

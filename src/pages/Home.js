import React from 'react'
import { CiSearch } from 'react-icons/ci'
import '../style/home.css'
import ProductCard from './ProductCard'


export default function Home() {
    return (
        <div>
            <div className='container mt-5 mb-5'>
                <section className='one '>
                    <h1>Discover Furniture With High Quality Wood</h1>
                    <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</p>
                    <div className='input'>
                        <input type='text' placeholder='Search property'></input>
                        <button>Search</button>
                    </div>
                </section>
                <img src={require("../images/home1st.jpg")}></img>
            </div>

            <div className='container mt-5 mb-5'>
                <section className='two'>
                    <p className='text-start orange'>Benefits</p>
                    <div className='flex'>
                        <h2 className='col-3'>Benefits when using our services</h2>
                        <p className='col-4'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
                    </div>
                </section>

                <section className='three'>
                    <div className='col-4'>
                        <img src={require('../images/icon1.png')} alt='' />
                        <h4>Many Choices</h4>
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    </div>
                    <div className='col-4'>
                        <img src={require('../images/icon2.png')} alt='' />
                        <h4>Fast and On Time</h4>
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    </div>
                    <div className='col-4'>
                        <img src={require('../images/icon3.png')} alt='' />
                        <h4>Affordable Price</h4>
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
                    </div>
                </section>
            </div>

            <div className='container center'>
                <p className='orange'>Product</p>
                <h2>Our popular product</h2>
                <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
            </div>

            <div>
                <ProductCard />
            </div>

        </div>
    )
}

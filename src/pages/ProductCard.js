import React, { useState, useEffect } from 'react'
import "../style/productcard.css"
export default function ProductCard() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/be/products")
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setProducts(data.result)
            })
    }, [])
    return (
        <div className='d-flex gap-2'>
            {
                products.map(({ thumbimage, productName, description, category, price }) => {
                    return (
                        <div className="card" width={"18rem"}>
                            <img src={thumbimage} className="card-img-top" alt="" />
                            <div className="card-body text-start d-flex flex-column gap-2">
                                <p className='pcolor'>{category}</p>
                                <h5 className="card-title">{productName}</h5>
                                <p className="pcolor one card-text">{description.slice(0, 20)}</p>
                                <p>${price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

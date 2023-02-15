import React, { useState, useEffect } from 'react'

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
                products.map(({ thumbnail, productName, description }) => {
                    return (
                        <div class="card" style="width: 18rem;">
                            <img src={thumbnail} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{productName}</h5>
                                <p class="card-text">{description.slice(0, 20)}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

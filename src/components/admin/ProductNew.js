import React, { useState } from 'react'



export default function ProductNew() {
    const axios = require('axios')
    const init = {
        productName: '',
        categoryId: 0,
        price: 0,
        thumbImage: '',
        Images: [],
        salePercentage: 0,
        quantity: 0,
        description: ''
    }

    const [productItem, setProductItem] = useState(init)
    return (
        <div className="container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className='d-flex flex-column text-start'>
                        <label>Product Name</label>
                        <input type='text'></input>
                        <label>Price</label>
                        <input type='number'></input>
                        <label>Product picture</label>
                        <input type='file'
                            onChange={(e) => {
                                console.log(e.target.files)

                                const url = "https://api.cloudinary.com/v1_1/dnpeugfk4/upload";
                                const file = e.target.files[0];
                                const formData = new FormData()
                                formData.append("file", file);
                                formData.append("api_key", 433374323371145);
                                formData.append("folder", "productImages");
                                formData.append("upload_preset", "trivymv8");

                                axios
                                    .post(url, formData)
                                    .then((res) => {
                                        console.log(res);

                                        setProductItem({
                                            ...productItem,
                                            thumbImage: res.data.secure_url,
                                        });
                                    })
                                    .catch((err) => console.log(err))
                            }}
                        ></input>
                        <button className='btn btn-primary'>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

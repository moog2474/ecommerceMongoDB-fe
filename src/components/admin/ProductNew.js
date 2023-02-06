import React, { useState } from 'react'



export default function ProductNew({ modalProduct, setModalProduct }) {
    const dn = modalProduct ? "block" : "none"
    const axios = require('axios')
    const init = {
        productName: '',
        categoryId: 0,
        price: 0,
        thumbImage: '',
        Images: [],
        createdUser: '',
        salePercentage: 0,
        quantity: 0,
        description: ''
    }
    const [obj, setObj] = useState([])
    const [err, setErr] = useState(init)

    const addTask = () => {
        fetch("http://localhost:8000/api/products", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setObj(init)
            })
            .catch((err) => setErr(console.log(err)))
    }

    const [productItem, setProductItem] = useState(init)
    return (
        <div className="modal" style={{ displa: dn }} onClick={setModalProduct}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-warning mb-5 border-bottom" id="staticBackdropLabel">Add product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className='d-flex flex-column col-4 text-start'>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Product Name</label>
                            <input className='' type='text'></input>
                        </div>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Sales Percentage</label>
                            <input type="number"></input>
                        </div>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Price</label>
                            <input type='number'></input>
                        </div>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Quantity</label>
                            <input type='number'></input>
                        </div>

                        <div className='col d-flex gap-5 mb-2 justify-content-between'>
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
                        </div>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Created user</label>
                            <select>
                                <option value='0'>select</option>
                                <option value='1'>bat</option>
                                <option value='2'>bold</option>
                                <option value='3'>sugar</option>
                            </select>
                        </div>
                        <div className='col d-flex gap-3 mb-2 justify-content-between'>
                            <label>Description</label>
                            <input type='text'></input>
                        </div>
                        <button onClick={addTask} className='btn btn-primary'>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

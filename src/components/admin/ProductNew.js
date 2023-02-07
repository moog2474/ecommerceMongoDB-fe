import React, { useState, useEffect } from 'react'


export default function ProductNew({ modalProduct, setModalProduct, getId, isEdited, setIsEdited, setProduct }) {

    function getData() {
        fetch('http://localhost:8000/api/products')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data.result)
            })
    }

    function getDataId() {
        console.log('hi')
        fetch(`http://localhost:8000/api/products/${getId}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setObj(data.result[0])
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        if (isEdited === true) {
            getDataId()
        } else {
            setObj(init)
        }
    }, [isEdited])

    const axios = require('axios')
    const init = {
        productName: '',
        categoryId: 0,
        price: 0,
        thumbimage: '',
        images: [],
        createdUser: '',
        discount: 0,
        quantity: 0,
        description: ''
    }
    const [obj, setObj] = useState(init)
    const [err, setErr] = useState('')
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUser(dt.result);
            })
            .catch((err) => setErr(console.log(err)))
    }, [])


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
        <div className="modal" style={{ display: modalProduct ? "block" : "none" }}>
            <div className="body">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-warning mb-5 border-bottom" id="staticBackdropLabel">Add product</h1>
                    <button type="button" className="btn-close" onClick={() => { setModalProduct(!modalProduct) }} aria-label="Close"></button>
                </div>
                <div className='d-flex flex-column col text-start'>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Product Name</label>
                        <input className='w-75' value={obj.productName} type='text'
                            onChange={(e) => setObj({ ...obj, productName: e.target.value })}></input>
                    </div>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Discount</label>
                        <input className='w-75' value={obj.discount} type="number"
                            onChange={(e) => setObj({ ...obj, discount: e.target.value })}></input>
                    </div>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Price</label>
                        <input className='w-75' value={obj.price} type='number'
                            onChange={(e) => setObj({ ...obj, price: e.target.value })}></input>
                    </div>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Quantity</label>
                        <input className='w-75' value={obj.quantity} type='number'
                            onChange={(e) => setObj({ ...obj, quantity: e.target.value })}></input>
                    </div>

                    <div className='col d-flex gap-5 mb-2 justify-content-between'>
                        <div className='d-flex justify-content-between col-5'>
                            <label>Thumbnail</label>
                            <input className='w-50' value={obj.thumbimage} type='file'
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
                        {/* <div className='d-flex justify-content-between col-5'>
                            <label>Images</label>
                            <input className='w-50' value={obj.images} type='file'
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
                        </div> */}
                    </div>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Created user</label>
                        <select className='w-75' value={obj.createdUser}
                            onChange={(e) => setObj({ ...obj, createdUser: e.target.value })}>
                            <option value='0'>select</option>
                            {user?.map((e, index) => {
                                if (e.userType == "admin") {
                                    return (
                                        <option value={index + 1}>
                                            {e.userName}
                                        </option>
                                    )
                                }
                            })
                            }
                        </select>
                    </div>
                    <div className='col d-flex gap-3 mb-2 justify-content-between'>
                        <label>Description</label>
                        <textarea className='w-75' value={obj.description}
                            onChange={(e) => setObj({ ...obj, description: e.target.value })}></textarea>
                    </div>
                    <button onClick={addTask} className='btn btn-primary'>save</button>
                </div>
            </div>
        </div>

    )
}

import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ProductNew from './ProductNew'

export default function ProductList() {
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
    const [product, setProduct] = useState([])
    const [err, setErr] = useState("")
    const [modalProduct, setModalProduct] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const [getId, setGetId] = useState('')


    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setProduct(dt.result);
            })
            .catch((err) => setErr(console.log(err)))
    }, [])

    const editTask = (id) => {
        setModalProduct(!modalProduct)
        setIsEdited(!isEdited)
        setGetId(id)
    }

    const deleteTask = (id) => {
        fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setProduct(data.result)
            })
            .catch((err) => setErr(console.log(err)))

    };

    return (
        <div>
            <h2 className='col-2 d-flex m-2'>
                <button onClick={() => setModalProduct(!modalProduct)} className="btn btn-primary mt-2">Add products</button>
            </h2>
            <div className="row my-4">
                <div className="row w-100">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className='border-bottom '>
                                <th className='col-1'># </th>
                                <th className='col-2'>Product name</th>
                                <th className='col-2'>Category</th>
                                <th className='col-1'>Price</th>
                                <th className='col-2'>Created user</th>
                                <th className='col-1'>Quantity</th>
                                <th className='col-1'>Discount</th>
                                <th className='col-1'>Description</th>
                                <th className='col-1'>Edit/Delete</th>
                            </thead>
                            <tbody>
                                {
                                    product.map(({ id, productName, categoryId, price, createdUser, quantity, discount, description }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='col-1'>{index + 1}</td>
                                                <td className='col-2'>{productName}</td>
                                                <td className='col-2'>{categoryId}</td>
                                                <td className='col-1'>{price}$</td>
                                                <td className='col-2'>{createdUser}</td>
                                                <td className='col-1'>{quantity}</td>
                                                <td className='col-1'>{discount}%</td>
                                                <td className='col-1'>{description}</td>
                                                <td className="col-1 d-flex w-100 justify-content-center gap-2">
                                                    <span
                                                    ><AiFillEdit
                                                            onClick={() => { editTask(id) }} /></span>
                                                    <span
                                                        onClick={() => deleteTask(id)}
                                                    ><AiFillDelete /></span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ProductNew
                modalProduct={modalProduct}
                setModalProduct={setModalProduct}
                isEdited={isEdited}
                setIsEdited={setIsEdited}
                getId={getId}
                setProduct={setProduct}
            />
        </div>
    )
}

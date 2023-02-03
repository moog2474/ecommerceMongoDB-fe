import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
export default function Users() {
    const [user, setUser] = useState([])
    const [err, setError] = useState("")



    useEffect(() => {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUser(dt.result);
            })
            .catch((err) => setError(console.log(err)))
    }, [])

    return (
        <div>
            <h2 className='col-2 d-flex m-2'>
                <button className="btn btn-primary mt-2"><Link to="/adduser">add user</Link></button>
            </h2>
            <div className="row my-4">
                <div className="row w-100">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className='border-bottom '>
                                <th className='col-2'># </th>
                                <th className='col-2'>Username</th>
                                <th className='col-2'>Firstname</th>
                                <th className='col-2'>Last image</th>
                                <th className='col-2'>Usertype</th>
                                <th className='col-2'>Edit/Del</th>
                            </thead>
                            <tbody>
                                {
                                    user.map(({ _id, userName, firstName, lastName, userType }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='col-2'>{index + 1}</td>
                                                <td className='col-2'>{userName}</td>
                                                <td className='col-2'>{firstName}</td>
                                                <td className='col-2'>{lastName}</td>
                                                <td className='col-2'>{userType}</td>
                                                <td className="col-2">
                                                    <button className="btn btn-warning">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
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
        </div>
    )
}

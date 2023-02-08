import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserNew from './UserNew'


export default function Users() {

    const [users, setUsers] = useState([])
    const [err, setError] = useState("")
    const [modal, setModal] = useState(false)
    const [isEdited, setIsedited] = useState(false)
    const [myId, setMyId] = useState('')

    useEffect(() => {
        fetch("http://localhost:8000/be/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUsers(dt.result);
            })
            .catch((err) => setError(console.log(err)))
    }, [])

    const deleteUser = (id) => {
        fetch(`http://localhost:8000/be/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setUsers(data.result)
            })
            .catch((err) => setError(console.log(err)))

    };
    const editUser = (id) => {
        setModal(!modal)
        setIsedited(!isEdited)
        setMyId(id)
    };
    return (
        <div>
            <h2 className='col-2 d-flex m-2'>
                <button
                    onClick={() => setModal(!modal)} className="btn btn-primary mt-2">Add users</button>
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
                                    users.map(({ id, userName, firstName, lastName, userType }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='col-2'>{index + 1}</td>
                                                <td className='col-2'>{userName}</td>
                                                <td className='col-2'>{firstName}</td>
                                                <td className='col-2'>{lastName}</td>
                                                <td className='col-2'>{userType}</td>
                                                <td className="col-2">
                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={() => editUser(id)}
                                                    >Edit</button>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => deleteUser(id)}
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <UserNew
                        setModal={setModal}
                        modal={modal}
                        isEdited={isEdited}
                        setIsedited={setIsedited}
                        myId={myId}
                        setUsers={setUsers}
                    />
                </div>


            </div>

        </div>
    )
}

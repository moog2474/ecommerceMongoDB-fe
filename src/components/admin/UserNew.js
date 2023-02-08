import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function UserNew({ modal, setModal, isEdited, setIsedited, myId, setUsers }) {

    const init = {
        id: '',
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        userType: ''
    }


    const [err, setError] = useState('')
    const [user, setUser] = useState([])

    function getData() {
        fetch('http://localhost:8000/be/users')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data.result)
            })
    }

    function getDataId() {
        fetch(`http://localhost:8000/be/users/${myId}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setUser(data.result[0]);
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        if (isEdited === true) {
            getDataId()
        } else {
            setUser(init)
        }
    }, [isEdited])


    const addUser = () => {
        isEdited ?
            fetch("http://localhost:8000/be/users", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data.result)
                    setUser(init)
                    getData()
                })
                .catch((err) => setError(console.log(err)))
            :
            fetch("http://localhost:8000/be/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data.result)
                    setUser(init)
                    getData()
                })
                .catch((err) => setError(console.log(err)))
    }
    return (
        <div className="modal" style={{ display: modal ? "block" : "none" }}>
            <div className='body'>

                <div className='modal-header'>
                    <h1 className='modal-title' >Add user</h1>
                    <button type="button" className="btn-close" onClick={() => {
                        setModal(!modal)
                        setIsedited(false)
                    }} aria-label="Close"></button>
                </div>
                <form className='d-flex flex-column gap-3 mb-3'>
                    <input type='text' className='w-100 form-contol bo' placeholder='Username' value={user?.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
                    <input type='text' className='w-100 form-contol bo' placeholder='Firstname' value={user?.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                    <input type='text' className='w-100 form-contol bo' placeholder='Lastname' value={user?.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}></input>
                    <input type='text' className='w-100 form-contol bo' placeholder='User type' value={user?.userType} onChange={(e) => setUser({ ...user, userType: e.target.value })}></input>
                    <input type='text' className='w-100 form-contol bo' placeholder='Password' value={user?.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                </form>
                <div className='modal-footer'>
                    <button onClick={() => {
                        addUser()
                        setModal(false)
                    }} type='button' className='btn btn-primary'>Add</button>
                </div>
            </div>
        </div >

    )
}

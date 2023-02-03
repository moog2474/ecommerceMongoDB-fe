import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'

export default function Modal() {
    const init = {
        id: '',
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        userType: ''
    }

    const [err, setError] = useState('')
    const [obj, setObj] = useState(init)


    const addTask = () => {
        fetch("http://localhost:8000/api/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result)
                setObj(init)
            })
            .catch((err) => setError(console.log(err)))
    }
    return (
        <div className="container-fluid d-flex flex-column col-8 m-0 text-start">
            <div className='header'>
                <h1>Add user</h1>
            </div>
            <form className='d-flex flex-column gap-3 mb-3'>
                <input type='text' className='w-100 form-contol bo' placeholder='Username' value={obj.userName} onChange={(e) => setObj({ ...obj, userName: e.target.value })}></input>
                <input type='text' className='w-100 form-contol bo' placeholder='Firstname' value={obj.firstName} onChange={(e) => setObj({ ...obj, firstName: e.target.value })}></input>
                <input type='text' className='w-100 form-contol bo' placeholder='Lastname' value={obj.lastName} onChange={(e) => setObj({ ...obj, lastName: e.target.value })}></input>
                <input type='text' className='w-100 form-contol bo' placeholder='User type' value={obj.userType} onChange={(e) => setObj({ ...obj, userType: e.target.value })}></input>
                <input type='text' className='w-100 form-contol bo' placeholder='Password' value={obj.password} onChange={(e) => setObj({ ...obj, password: e.target.value })}></input>
            </form>
            <div className='footer'>
                <button onClick={addTask} type='button' className='btn btn-primary'><Link to="/users">Add</Link></button>
            </div>
        </div >
    )
}

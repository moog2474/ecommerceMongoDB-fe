import React, { useState, useEffect } from 'react'

export default function SignUp({ signUp, setSignUp, setLogin }) {

    const init = {
        id: '',
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        userType: '',
        confirmPassword: '',
    }

    const [err, setErr] = useState('')
    const [user, setUser] = useState([])

    const newUser = () => {
        fetch("http://localhost:8000/be/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setUser(init)
            })
            .catch((err) => setErr(console.log(err)))
    }

    return (
        <div className="modal" style={{ display: signUp ? "block" : "none" }}>
            <div className='signUp body'>
                <div className='modal-header'>
                    <h1 className='modal-title' >Sign Up</h1>
                    <button type="button" className="btn-close" onClick={() => {
                        setSignUp(!signUp)
                    }} aria-label="Close"></button>
                </div>
                <form className='d-flex flex-column gap-3 mb-3'>
                    <div className='d-flex gap-3 justify-content-between'>
                        <input className='col-6' type="text" placeholder='Firstname' value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}></input>
                        <input className='col-6' type="text" placeholder='Lastname' value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}></input>
                    </div>
                    <input type="text" placeholder='Username' value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
                    <input type="text" placeholder='E-mail' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                    <input type="text" placeholder='Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                    <input type="text" placeholder='Confirm password' value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}></input>

                    <p>Том жижиг үсэг орсон байна.</p>
                    <p>Тоо орсон байна.</p>
                    <p>Тусгай тэмдэгт орсон байна.</p>
                    <p>8-с дээш оронтой байна.</p>

                </form>
                <div className='modal-footer'>
                    <button onClick={() => {
                        newUser()
                        setSignUp(false)
                        setLogin(false)
                    }} type='button' className='btn btn-primary'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

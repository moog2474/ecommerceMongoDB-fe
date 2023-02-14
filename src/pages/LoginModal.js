import React, { useState, useEffect } from 'react'
import "../style/login.css"
import SignUp from './SignUp'

export default function LoginModal({ login, setLogin }) {

    const [users, setUsers] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        fetch("http://localhost:8000/be/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setUsers(data.result)
            })
    })

    const [signUp, setSignUp] = useState(false)

    return (
        <div className="modal" style={{ display: login ? "block" : "none" }}>
            <div className='body'>
                <div className='modal-header'>
                    <h1 className='modal-title' >Login</h1>
                    <button type="button" className="btn-close" onClick={() => {
                        setLogin(!login)
                    }} aria-label="Close"></button>
                </div>
                <form className='d-flex flex-column gap-3 mb-3'>
                    <input type="text" placeholder='email or username'></input>
                    <input type="text" placeholder='password'></input>
                    <p>Doesn't have an account.
                        <a className='login'
                            href='#'
                            onClick={() => setSignUp(!signUp)}
                        >Sign Up</a></p>
                </form>
                <div className='modal-footer'>
                    <button onClick={() => {

                    }} type='button' className='btn btn-primary'>Login</button>
                </div>
                <SignUp
                    setLogin={setLogin}
                    signUp={signUp}
                    setSignUp={setSignUp}
                />
            </div>
        </div>
    )
}

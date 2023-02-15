import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../style/login.css"
import SignUp from './SignUp'

export default function LoginModal({ login, setLogin }) {

    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const onLogin = () => {
        axios
            .post("http://localhost:8000/be/users/login", user)
            .then(({ data: { status, result } }) => {
                if (status) {
                    localStorage.setItem("user", result.userName);
                    navigate("/home");
                    setLogin(false);
                }
                else {
                    alert("Login unsuccessful")
                }
            })
            .catch((err) => alert(err))
    }


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
                    <input
                        type="text"
                        placeholder='email'
                        value={user.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                    <p>Doesn't have an account.
                        <a className='login'
                            href='#'
                            onClick={() => setSignUp(!signUp)}
                        >Sign Up</a></p>
                </form>
                <div className='modal-footer'>
                    <button onClick={onLogin} type='button' className='btn btn-primary'>Login</button>
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

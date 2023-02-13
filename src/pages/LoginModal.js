import React from 'react'
import "../style/login.css"

export default function LoginModal({ login, setLogin }) {
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
                    <input type="text" placeholder='example@gmail.com'></input>
                    <input type="text" placeholder='password'></input>
                    <p>Doesn't have an account. <a className='login' href='#'>Sign Up</a></p>
                </form>
                <div className='modal-footer'>
                    <button onClick={() => {

                    }} type='button' className='btn btn-primary'>Login</button>
                </div>
            </div>
        </div >
    )
}

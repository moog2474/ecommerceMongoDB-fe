import React, { useState, useEffect } from 'react'

export default function SignUp({ signUp, setSignUp, setLogin }) {
    // const password = document.querySelector(".password")
    // const checkLetter = document.querySelector(".checkLetter")
    // const checkNumber = document.querySelector(".checkNumber")
    // const checkSpecial = document.querySelector(".checkSpecial")
    // const checkMark = document.querySelector(".checkMark")

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
    // const setColorLetter = (color) => {
    //     checkLetter.style.color = color;
    // }
    // const setColorNumber = (color) => {
    //     checkNumber.style.color = color;
    // }
    // const setColorSpecial = (color) => {
    //     checkSpecial.style.color = color;
    // }
    // const setColorMark = (color) => {
    //     checkMark.style.color = color;
    // }
    // password.addEventListener("keyup", checkPassword)
    // const checkPassword = () => {
    //     if (password.length < 7) {
    //         return false
    //     }
    //     if (password.length > 15) {
    //         return false
    //     }
    //     else {
    //         let lowerCase = password.value.match(/[a-z]/);
    //         let upperCase = password.value.match(/[A-Z]/);
    //         let number = password.value.match(/[0-9]/);
    //         let specialChar = password.value.match(/[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/);

    //         if (lowerCase && upperCase) {
    //             setColorLetter("green")
    //         }
    //         if (number) {
    //             setColorNumber("green")
    //         }
    //         if (specialChar) {
    //             setColorSpecial("green")
    //         }
    //         if (password.length > 7 && password.length < 15) {
    //             setColorMark("green")
    //         }
    //     }
    // }


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
                    <input className='password' type="text" placeholder='Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                    <input className='password' type="text" placeholder='Confirm password' value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}></input>

                    <p className='checkLetter'>Том жижиг үсэг орсон байна.</p>
                    <p className='checkNumber'>Тоо орсон байна.</p>
                    <p className='checkSpecial'>Тусгай тэмдэгт орсон байна.</p>
                    <p className='checkMark'>8-с дээш оронтой байна.</p>

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

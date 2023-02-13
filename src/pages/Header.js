import React, { useEffect, useState, useRef } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import '../style/header.css'
import LoginModal from './LoginModal'

export default function Header() {

  const [login, setLogin] = useState(false)
  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/be/menu")
      .then(res => res.json())
      .then((data) => {
        console.log(data.result);
        setMenu(data.result)
        setMenu(data.result.filter((a) => a.type === "front"))
      })
  }, [])
  return (
    <div>
      <div className='border-bottom'>
        <div className='container p-0'>
          <nav className='navi'>
            <ul className='d-flex justify-content-between align-items-center p-0 m-0'>
              <li className='col-2 justify-content-start'>
                <img src={require("../images/logo.png")} />
              </li>
              <li className='col-5 gap-2 d-flex align-items-center'>

                {menu.map(({ menuName }) => {
                  return (
                    <ul className='d-flex justify-content-between'>
                      <li><span>{menuName}</span></li>
                    </ul>
                  )
                })}
              </li>
              <li className='col-1 d-flex justify-content-center gap-3 align-items-center'>
                <FiShoppingBag size={25} />
                <AiOutlineUser
                  onClick={() => setLogin(!login)}
                  size={25} />
              </li>
            </ul>
          </nav>
        </div>
        <LoginModal
          login={login}
          setLogin={setLogin}
        />
      </div>
    </div>
  )
}

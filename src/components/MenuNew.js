import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function UserNew({ modal, setModal, isEdited, setIsEdited, setMenu, getMenuId }) {

  const init = {
    _id: '',
    menuName: '',
    link: '/',
    type: ''

  }


  const [err, setError] = useState('')
  const [menus, setMenus] = useState([])

  function getMenu() {
    fetch('http://localhost:8080/be/menu')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setMenu(data.result)
      })
  }

  function getId() {
    fetch(`http://localhost:8080/be/menu/${getMenuId}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.result);
        setMenus(data.result[0]);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (isEdited === true) {
      getId()
    } else {
      setMenus(init)
    }
  }, [isEdited])


  const addMenu = () => {
    isEdited ?
      fetch(`http://localhost:8080/be/menu/${getMenuId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menus)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data.result)
          setMenus(init)
          getMenu()
        })
        .catch((err) => setError(console.log(err)))
      :
      fetch("http://localhost:8080/be/menu", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menus)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data.result)
          setMenus(init)
          getMenu()
        })
        .catch((err) => setError(console.log(err)))
  }


  return (
    <div className="modal" style={{ display: modal ? "block" : "none" }}>
      <div className='body'>

        <div className='modal-header'>
          <h1 className='modal-title' >Add menus</h1>
          <button type="button" className="btn-close" onClick={() => {
            setModal(!modal)
            setIsEdited(false)
          }} aria-label="Close"></button>
        </div>
        <form className='d-flex flex-column gap-3 mb-3'>
          <input type='text' className='w-100 form-contol bo' placeholder='Menu name' value={menus?.menuName} onChange={(e) => setMenus({ ...menus, menuName: e.target.value })}></input>
          <input type='text' className='w-100 form-contol bo' placeholder='Menu type' value={menus?.type} onChange={(e) => setMenus({ ...menus, type: e.target.value })} />
          <input type='text' className='w-100 form-contol bo' placeholder='Link' value={menus?.link} onChange={(e) => setMenus({ ...menus, link: e.target.value })}></input>
        </form>
        <div className='modal-footer'>
          <button onClick={() => {
            addMenu()
            setModal(false)
          }} type='button' className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div >

  )
}

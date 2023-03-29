import React, { useEffect, useState } from 'react'

export default function CategoryNew({ modal, setModal, isEdited, setIsEdited, setCat, getCatId }) {
  const init = {
    id: '',
    categoryName: '',
    link: '/',
  }

  const [err, setError] = useState('')
  const [categories, setCategories] = useState([])

  function getCategory() {
    fetch('http://localhost:8000/be/category')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setCat(data.result)
      })
  }

  function getId() {
    fetch(`http://localhost:8000/be/category/${getCatId}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.result);
        setCategories(data.result[0]);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (isEdited === true) {
      getId()
    } else {
      setCategories(init)
    }
  }, [isEdited])


  const addCategory = () => {
    isEdited ?
      fetch(`http://localhost:8000/be/category/${getCatId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categories)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data.result)
          setCategories(init)
          getCategory()
        })
        .catch((err) => setError(console.log(err)))
      :
      fetch("http://localhost:8000/be/category", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categories)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data.result)
          setCategories(init)
          getCategory()
        })
        .catch((err) => setError(console.log(err)))
  }
  return (
    <div className="modal" style={{ display: modal ? "block" : "none" }}>
      <div className='body'>

        <div className='modal-header'>
          <h1 className='modal-title' >Add category</h1>
          <button type="button" className="btn-close" onClick={() => {
            setModal(!modal)
            setIsEdited(false)
          }} aria-label="Close"></button>
        </div>
        <form className='d-flex flex-column gap-3 mb-3'>
          <input type='text' className='w-100 form-contol bo' placeholder='Menu name' value={categories?.categoryName} onChange={(e) => setCategories({ ...categories, categoryName: e.target.value })}></input>
          <input type='text' className='w-100 form-contol bo' placeholder='Menu type' value={categories?.link} onChange={(e) => setCategories({ ...categories, link: e.target.value })} />
        </form>
        <div className='modal-footer'>
          <button onClick={() => {
            addCategory()
            setModal(false)
          }} type='button' className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div >
  )
}

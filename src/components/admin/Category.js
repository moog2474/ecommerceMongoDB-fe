import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import CategoryNew from './CategoryNew'

export default function Category() {

  const [cat, setCat] = useState([])
  const [err, setErr] = useState("")
  const [modal, setModal] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [getCatId, setGetCatId] = useState('')

  useEffect(() => {
    fetch("http://localhost:8000/be/category")
      .then(res => res.json())
      .then((data) => {
        console.log(data.result);
        setCat(data.result)
      })
      .catch((err) => setErr(console.log(err)))
  }, [])

  const deleteCat = (id) => {
    fetch(`http://localhost:8000/be/category/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data.result);
        setCat(data.result)
      })
      .catch((err) => console.log(err))
  }

  const editCat = (id) => {
    setModal(!modal)
    setIsEdited(!isEdited)
    setGetCatId(id)
  }

  return (
    <div><h2 className='col-2 m-2'>
      <button className='btn btn-primary'
        onClick={() => setModal(!modal)}>Add category</button>
    </h2>

      <div>
        <table className='w-25'>
          <thead>
            <tr className='border-bottom'>
              <td className='col-1'>#</td>
              <td className='col-2'>Category name</td>
              <td className='col-1'>Edit/Delete</td>
            </tr>
          </thead>
          <tbody>
            {cat.map(({ categoryName, id }, index) => {
              return (
                <tr className='border-bottom' key={index}>
                  <td className='col-1'>{index + 1}</td>
                  <td className='col-2'>{categoryName}</td>
                  <td className='col-1 d-flex w-100 justify-content-center gap-3'>
                    <AiFillEdit
                      onClick={() => editCat(id)}
                      size={20} />
                    <AiFillDelete
                      onClick={() => deleteCat(id)} size={20} />
                  </td>
                </tr>)


            })}
          </tbody>
        </table>

        <CategoryNew
          setModal={setModal}
          modal={modal}
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          getCatId={getCatId}
          setCat={setCat}
        />
      </div>
    </div>
  )
}

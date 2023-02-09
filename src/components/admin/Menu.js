import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import MenuNew from './MenuNew'


export default function Menu() {

    const [menu, setMenu] = useState([])
    const [modal, setModal] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const [getMenuId, setGetMenuId] = useState('')

    useEffect(() => {
        fetch("http://localhost:8000/be/menu")
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setMenu(data.result)
                setMenu(data.result.filter((a) => a.type === "adminMenu"))
            })
            .catch((err) => console.log(err))
    }, [])

    deleteMenu = (id) => {
        fetch(`http://localhost:8000/be/menu/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setMenu(data.result)
            })
            .catch((err) => console.log(err))
    }

    const editMenu = (id) => {
        setModal(!modal)
        setIsEdited(!isEdited)
        getMenuId(id)
    }



    return (
        <div>
            <h2 className='col-2 m-2'>
                <button className='btn btn-primary'>Add menu</button>
            </h2>

            <div>
                <table className='w-50'>
                    <thead>
                        <tr>
                            <td className='col-1'>#</td>
                            <td className='col-2'>Menu name</td>
                            <td className='col-1'>Position</td>
                            <td className='col-1'>Edit/Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(({ menuName, position, id }, index) => {
                            return (
                                <tr key={index}>
                                    <td className='col-1'>{index + 1}</td>
                                    <td className='col-2'>{menuName}</td>
                                    <td className='col-1'>{position}</td>
                                    <td className='col-1 d-flex w-100 justify-content-center gap-3'>
                                        <AiFillEdit
                                            onClick={() => editMenu(id)}
                                            size={20} />
                                        <AiFillDelete
                                            onClick={() => deleteMenu(id)} size={20} />
                                    </td>
                                </tr>)


                        })}
                    </tbody>
                </table>

                <MenuNew
                    modal={modal}
                    setModal={setModal}
                    setIsEdited={setIsEdited}
                    getMenuId={getMenuId}
                />
            </div>

        </div>
    )
}

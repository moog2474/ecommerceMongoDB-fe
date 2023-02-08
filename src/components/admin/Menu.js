import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

export default function Menu() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/menu")
            .then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setMenu(data.result)
            })
            .catch((err) => console.log(err))
    }, [])

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
                        {menu.map(({ menuName, position }, index) => {

                            return (
                                <tr key={index}>
                                    <td className='col-1'>{index + 1}</td>
                                    <td className='col-2'>{menuName}</td>
                                    <td className='col-1'>{position}</td>
                                    <td className='col-1'>
                                        <AiFillEdit />
                                        <AiFillDelete />
                                    </td>
                                </tr>)


                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

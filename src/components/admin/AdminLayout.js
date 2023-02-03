import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
export default function AdminLayout() {

    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/menu")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setData(dt.result)
            })
            .catch((err) => setErr(console.log(err)))
    }, []);


    return (

        <div className=''>
            <div className='d-flex row'>
                <div className='pop col-2 bg-primary'>
                        <span>OS Admin</span>
                        {data.map((e) => {
                            if (e.type === "adminMenu") {
                                return <div className='d-flex flex-column'>
                                    <Link to={`/${e.menuName.toLowerCase()}`}>{e.menuName}</Link>
                                </div>

                            }
                        })}
                    
                </div>
                <div className="col-10 p-0">
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-end p-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <label className='col-4'>Search</label>
                                <input type="text" className="w-100 form-control" />
                            </div>


                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><CgProfile />Profile</a></li>
                                    <li><a className="dropdown-item" href="#"><MdOutlineManageAccounts />Account setting</a></li>
                                    <li><a className="dropdown-item" href="#"><FiLogOut />Log out</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

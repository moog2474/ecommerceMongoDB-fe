import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
export default function AdminLayout() {

    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/be/menu")
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
                <div className='col-2 d-flex flex-column p-2 bg-primary'>
                    <div className='mb-5'>
                        <span >OS Admin</span>

                    </div>
                    {data.map((e) => {
                        if (e.type === "adminMenu") {
                            return <div className='d-flex flex-column text-start ms-2 p-3 border-bottom'>
                                <Link to={`/${e.menuName.toLowerCase()}`}>{e.menuName}</Link>
                            </div>

                        }
                    })}

                </div>
                <div className="col-10 p-0">
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-end p-3 gap-3'>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>


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

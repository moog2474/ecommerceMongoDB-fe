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
        <div>
            <div className="navbar bg-dark flex-nowrap">
                <a className="col-md3 navbar-brand text-light" href="#">E-commerce</a>
                <input type="text" className="w-25 form-control bg-dark text-light" />
                <div className="nav">
                    <div className="nav-item">

                    </div>
                    <div className="nav-item">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><CgProfile />Profile</a></li>
                                <li><a className="dropdown-item" href="#"><MdOutlineManageAccounts />Account setting</a></li>
                                <li><a className="dropdown-item" href="#"><FiLogOut />Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        {data.map((e) => {
                            if (e.type === "adminMenu") {
                                return <div className="nav bg-light flex-column">
                                    <div className='nav-item'>
                                        <Link to={`/${e.menuName}`}>{e.menuName}</Link>
                                    </div>
                                </div>
                            }
                        })}

                    </div>
                    <div className='col-md-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

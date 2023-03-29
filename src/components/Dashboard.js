import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    return (
        <div>
            <div className="row my-4">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h4 className="card-title text-warning">Users</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <i className="bi bi-people" style={{ fontSize: "40px" }}></i>
                            <h1>4500</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-3">
                        <h4 className="card-title text-warning">News</h4>
                        <div className="d-flex justify-content-between align-items-center">
                            <i className="bi bi-newspaper" style={{ fontSize: "40px" }}></i>
                            <h1>9000</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-3">
                        <div className="card-title">Category</div>
                        <div className="d-flex justify-content-between align-items-center">
                            <i className="bi bi-list-nested" style={{ fontSize: "40px" }}></i>
                            <h1>20</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?'primary':'dark'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                           
                        </ul>
                        <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toglr} />
                                    <label className="form-check-label" style={{color:props.mode==='light'?'black':'white'}} htmlFor="flexSwitchCheckDefault"onClick={props.toglr} > Toggle</label>
                            </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
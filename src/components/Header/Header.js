import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://g5.evitecdn.com/evite_logo_square.png" alt="Bootstrap" width="35" height="30" />
                </a>
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/storage" className="nav-link">Storage</Link>
                        </li>
                    </ul>
                    <Link to='/dashboard/' className="me-2">
                        <button className="btn btn-primary" type="submit">Dashboard</button>
                    </Link>
                    <Link to='/auth/register'>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </Link>
                    <Link to='/auth/login ' className="ms-2">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;

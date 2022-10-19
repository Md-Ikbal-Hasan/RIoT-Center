import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="data:image/png;base64,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" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    <span className='mx-2 fw-bold'>RIoT Center, IUB  <br /> <span className='tagline'> Tag Line</span> </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">

                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page" >Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About US
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                                <li><a className="dropdown-item" href="#">Experties</a></li>
                                <li><a className="dropdown-item" href="#">Lab and Facilities</a></li>
                                <li><a className="dropdown-item" href="#">Collaboration</a></li>
                                <li><a className="dropdown-item" href="#">Virtual Tour</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Research 
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                                <li><a className="dropdown-item" href="#">Publications</a></li>
                                <li><a className="dropdown-item" href="#">Research Projects</a></li>
                                <li><a className="dropdown-item" href="#">Development Projects</a></li>
                                <li><a className="dropdown-item" href="#">Products</a></li>
                                <li><a className="dropdown-item" href="#">Conferences</a></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                The People
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                            <li><a className="dropdown-item" href="#">Researchers</a></li>
                                <li><a className="dropdown-item" href="#">Research Assistants</a></li>
                                <li><a className="dropdown-item" href="#">Thesis Students</a></li>
                                <li><a className="dropdown-item" href="#">Extarnal Collaborators</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academic
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                                <li><a className="dropdown-item" href="#">Certification Courses</a></li>
                                <li><a className="dropdown-item" href="#">Summer School</a></li>
                                <li><a className="dropdown-item" href="#">Workshops</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Career
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                                <li><a className="dropdown-item" href="#">Job Circular</a></li>
                                <li><a className="dropdown-item" href="#">Apply</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Calender
                            </Link>
                            <ul className="dropdown-menu bg-success ">
                                <li><a className="dropdown-item" href="#">Events</a></li>
                                <li><a className="dropdown-item" href="#">Important Date</a></li>
                            </ul>
                        </li>


                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page" >Login</Link>
                        </li>


                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page" >Logout</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'
import riotLogo from '../assets/images/riot-logo.jpg'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={riotLogo}></img>
                    <span className='mx-2 fw-bold brand-name'>RIoT Center, IUB </span>
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
                            <ul className="dropdown-menu  ">
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
                            <ul className="dropdown-menu  ">
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
                            <ul className="dropdown-menu ">
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
                            <ul className="dropdown-menu ">
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
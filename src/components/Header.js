import React from "react";
import './Header.css';

function Header() {
    return (
        <>

            <div className="container-fluid bg-img img-fluid">
                <nav className="navbar  navbar-expand-xl  navbar-dark  bg-dark fixed-top ">
                    <div className="container-fluid mx-3 my-2 text-dark">
                        <a className="navbar-brand" href="#">RESTAURANTLY</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#menu">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#special">Specials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#chefs">Chefs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#gallary">Gallary</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#book"className="nav-link btn"><span>BOOK A TABLE</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header">
                    <h1>
                        Welcome to <span>Restaurantly</span>  </h1>
                    <p>Delivering great food for more than 18 years!</p>
                    <div className="btn-align ">
                        <button type="button" className=" btn ">OUR MENU</button>
                        <button type="button" className=" btn  mx-5">BOOK A TABLE</button>
                    </div>

                </div>
            </div>


        </>

    );
}
export default Header;


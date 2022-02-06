import React from "react";
import './Events.css';
import img7 from '../images/event-birthday.jpg';
import img8 from '../images/event-custom.jpg';
import img9 from '../images/event-private.jpg';

function Events() {
    return (
        <>
            <div id='events' className="container-fluid bg-events pb-5">
                <div className="menu mx-5">
                    <h3>EVENTS</h3>
                    <p>Check Our Events</p>
                </div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-6">
                                    <img src={img7} className="d-block img-slider" alt="..." />
                                </div>
                                <div className="col-12 col-md-12 col-lg-6  text-start text-slider">
                                    <h1 >Birthday Parties</h1>
                                    <h5 className="text-white">$187</h5>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-white">
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i class="far fa-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    </ul>
                                    <p className="text-white">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-6">
                                    <img src={img8} className="d-block img-slider" alt="..." />
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 text-start text-slider">
                                    <h1 >Custom Parties</h1>
                                    <h5 className="text-white">$99</h5>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-white">
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i class="far fa-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    </ul>
                                    <p className="text-white">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-6">
                                    <img src={img9} className="d-block img-slider" alt="..." />
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 text-start text-slider">
                                    <h1 >Private Parties</h1>
                                    <h5 className="text-white" >$290</h5>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-white">
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i class="far fa-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    </ul>
                                    <p className="text-white">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Events;




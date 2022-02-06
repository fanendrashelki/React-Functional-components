import React from "react";
import './About.css';
import img1 from '../images/1.jpg';

function About() {
    return (
        <>
            <div id="about" className="container-fluid ">
                <div className="row bg-about text-white about">
                    <div className="col-md-12 col-12 col-sm-12 col-lg-6 order-2 order-lg-1">
                        <div className="about-box">
                            <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
                            <ul>
                                <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>

                                <li><i class="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-sm-12 col-lg-6 order-1 order-lg-2">
                        <div className="about-box-1 ">
                            <img src={img1} />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
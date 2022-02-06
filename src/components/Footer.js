import React from "react";
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-footer">
                <div className="row  py-2">
                    <div className="col-12 col-md-6 d-flex justify-content-center text-white"> <p>&copy; Copyright <strong> <span> RESTAURANTLY</span></strong>. All Rights Reserved</p></div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <a href="#"><i class="fab fa-2x fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-2x fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-2x fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-2x fa-google-plus-g"></i></a>
                        <a href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Footer;
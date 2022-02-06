import React from "react";
import './Contact.css';

function Contact() {
    return (
        <>
            <div id="contact" className="container-fluid bg-contact pb-5">
                <div className="menu mx-5">
                    <h3>CONTACT</h3>
                    <p>Contact Us</p>
                </div>

                <div className="row ps-5 pe-5">
                    <div className="col-lg-4 col-12 ">
                        <div className="address text-white">
                            <h5><i class="fas fa-map-marker-alt"></i> Location:</h5>
                            <p>A108 Adam Street, New York, NY 535022</p>
                            <hr />
                            <h5> <i class="fas fa-envelope"></i> Email:</h5>
                            <p>info@example.com</p>
                            <hr />
                            <h5><i class="fas fa-mobile-alt"></i> Phone:</h5>
                            <p>+1 5589 55488 55s</p>
                            <hr />
                        </div>
                    </div>

                    <div className="col-lg-8 col-12 mt-4  ">
                        <div class="row">
                            <div class="col-12 col-md-6 form-group py-2">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col-12 col-md-6 form-group py-2">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>

                            <div class="col-12 form-group">
                                <label for="inputAddress" class="form-label"></label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Subject" />
                            </div>
                            <div class="mb-3 form-group">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="text-center pt-5"><button type="submit" className=" btn">Book a Table</button></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} export default Contact;
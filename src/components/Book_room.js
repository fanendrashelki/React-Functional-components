import React from "react";
import './Book_room.css';
function Book_room() {
    return (
        <>
            <div id='book' className="container-fluid bg-book  pb-5">
                <div className="menu mx-5">
                    <h3>RESERVATION</h3>
                    <p>Book a Table</p>
                </div>

                <form className="mx-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6  ">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />

                        </div>
                        <div className="col-lg-4 col-md-6   mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />

                        </div>
                        <div className="col-lg-4 col-md-6   mt-3 mt-md-0">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" />

                        </div>
                        <div className="col-lg-4 col-md-6   mt-3">
                            <input type="text" name="date" className="form-control" id="date" placeholder="Date" />

                        </div>
                        <div className="col-lg-4 col-md-6   mt-3">
                            <input type="text" className="form-control" name="time" id="time" placeholder="Time" />

                        </div>
                        <div className="col-lg-4 col-md-6   mt-3">
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" />

                        </div>
                    </div>
                    <div className=" mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>

                    </div>
                    
                    <div className="text-center pt-5"><button type="submit" className=" btn">Book a Table</button></div>
                </form>


            </div>

        </>
    );
}
export default Book_room;
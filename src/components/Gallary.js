import React from "react";
import './Gallary.css';
import img_g1 from '../images/gallery-1.jpg';
import img_g2 from '../images/gallery-2.jpg';
import img_g3 from '../images/gallery-3.jpg';
import img_g4 from '../images/gallery-4.jpg';
import img_g5 from '../images/gallery-5.jpg';
import img_g6 from '../images/gallery-6.jpg';
import img_g7 from '../images/gallery-7.jpg';
import img_g8 from '../images/gallery-8.jpg';


function Gallary() {
    return (
        <>
            <div id='gallary' className="container-fluid bg-gallary ">
                <div className="menu mx-5">
                    <h3>Gallary</h3>
                    <p>Some photos from Our Restaurant</p>
                </div>
                <div className="row justify-content-evenly">
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g1} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g2} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g3} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g4} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g5} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g6} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g7} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-10">
                        <div class="gallery-item">
                            <img src={img_g8} alt="" class="img-fluid" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
export default Gallary;